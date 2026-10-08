"use strict";

// Development-only checks; no dependency or build step is added to the website.
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const html = read("index.html");
const release = JSON.parse(read("site-version.json")).release;
const guard = html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];

test("release marker, asset versions, and sitemap stay aligned", () => {
  assert.match(release, /^\d{8}-\d{2}$/);
  assert.ok(guard.includes(`const embeddedRelease = "${release}"`));
  const date = `${release.slice(0, 4)}-${release.slice(4, 6)}-${release.slice(6, 8)}`;
  assert.ok(read("sitemap.xml").includes(`<lastmod>${date}</lastmod>`));
  assert.match(html, /href="styles\.css\?v=[a-z\d]+"/);
  assert.match(html, /src="script\.js\?v=[a-z\d]+" defer/);
  const metadata = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1];
  assert.equal(JSON.parse(metadata)["@type"], "Person");
});

test("local references, anchor targets, image attributes, and budgets", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, "Duplicate IDs");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  for (const [, reference] of html.matchAll(/\b(?:src|href|srcset)="([^"]+)"/g)) {
    if (reference.startsWith("#")) {
      assert.ok(ids.includes(reference.slice(1)), `Missing anchor: ${reference}`);
    } else if (!/^[a-z]+:/i.test(reference)) {
      assert.ok(fs.existsSync(path.join(root, reference.split("?")[0])), reference);
    }
  }
  const images = [...html.matchAll(/<img\b[^>]+>/g)].map((match) => match[0]);
  assert.equal(images.length, 9);
  for (const image of images) {
    assert.match(image, /\balt="[^"]*"/);
    assert.match(image, /\bwidth="\d+"/);
    assert.match(image, /\bheight="\d+"/);
    if (image.includes("assets/projects/")) assert.match(image, /loading="lazy"/);
  }
  for (const [file, maximum] of [["index.html", 80000], ["styles.css", 50000], ["script.js", 20000]]) {
    assert.ok(fs.statSync(path.join(root, file)).size <= maximum, `${file} exceeds its budget`);
  }
  const references = html + read("styles.css");
  for (const file of fs.readdirSync(path.join(root, "assets"), { recursive: true })) {
    const absolute = path.join(root, "assets", file);
    if (!fs.statSync(absolute).isFile()) continue;
    assert.ok(references.includes(`assets/${file.replaceAll("\\", "/")}`), `Orphan asset: ${file}`);
    assert.ok(fs.statSync(absolute).size <= 1000000, `${file} exceeds 1 MB`);
    if (file.startsWith(`projects${path.sep}`) || file.startsWith("projects/")) {
      assert.ok(fs.statSync(absolute).size <= 400000, `${file} exceeds project budget`);
    }
  }
});

async function checkRelease(marker, options = {}) {
  const url = new URL(options.url || "https://example.test/?ref=profile#projects");
  const replaced = [];
  const cleaned = [];
  const requests = [];
  const fetch = options.missingFetch ? undefined : async (...args) => {
    requests.push(args);
    if (options.failure) throw new Error("Offline");
    return { ok: options.ok !== false, json: async () => marker };
  };
  const window = {
    fetch, URL, URLSearchParams, location: {
      href: url.href, protocol: url.protocol, search: url.search,
      replace: (value) => replaced.push(value),
    },
    history: { replaceState: (...args) => cleaned.push(args[2]) },
  };
  vm.runInNewContext(guard, { window, fetch, URL, URLSearchParams, Date });
  await new Promise(setImmediate);
  return { replaced, cleaned, requests };
}

test("release guard refreshes newer HTML while preserving query and anchor", async () => {
  const latest = "20991231-99";
  const result = await checkRelease({ release: latest });
  assert.equal(result.replaced.length, 1);
  assert.equal(result.replaced[0].searchParams.get("release"), latest);
  assert.equal(result.replaced[0].searchParams.get("ref"), "profile");
  assert.equal(result.replaced[0].hash, "#projects");
  assert.equal(result.requests[0][1].cache, "no-store");
  assert.ok(result.requests[0][0].searchParams.has("check"));
});

test("release guard prevents stale-cache loops and deployment rollback", async () => {
  for (const [marker, options] of [
    [{ release: "20991231-99" }, { url: "https://example.test/?release=20991231-99" }],
    [{ release: "20200101-01" }, {}],
    [{ release: 123 }, {}],
    [{ release: "invalid" }, {}],
    [null, {}],
    [{ release }, { failure: true }],
    [{ release }, { ok: false }],
    [{ release }, { missingFetch: true }],
    [{ release }, { url: "file:///portfolio/index.html" }],
  ]) {
    assert.equal((await checkRelease(marker, options)).replaced.length, 0);
  }
  const result = await checkRelease({ release }, { url: `https://example.test/?ref=profile&release=${release}#skills` });
  assert.equal(result.cleaned.length, 1);
  assert.equal(result.cleaned[0].searchParams.has("release"), false);
  assert.equal(result.cleaned[0].searchParams.get("ref"), "profile");
  assert.equal(result.cleaned[0].hash, "#skills");
});

// Minimal DOM fixtures exercise interaction state, not browser layout.
function element(attributes = {}) {
  const listeners = new Map();
  const classes = new Set();
  return {
    hidden: true, dataset: {}, textContent: "", attributes,
    classList: { add: (name) => classes.add(name), contains: (name) => classes.has(name),
      toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name) },
    setAttribute(name, value) { this.attributes[name] = value; },
    getAttribute(name) { return this.attributes[name]; },
    addEventListener(name, handler) { listeners.set(name, handler); },
    emit(name, event = {}) { listeners.get(name)?.(event); },
    querySelector() { return null; }, querySelectorAll() { return []; },
    contains(target) { return target === this; }, closest() { return null; },
  };
}

function initialize(options = {}) {
  const button = element({ "aria-expanded": "false" });
  const navigation = element();
  const header = element();
  const controls = element();
  const status = element();
  const body = element();
  const buttons = ["all", "professional", "independent", "academic"].map((filter) => {
    const item = element(); item.dataset.projectFilter = filter; return item;
  });
  const projects = ["professional", "independent", "independent", "academic", "academic", "academic", "academic"].map((context) => {
    const item = element(); item.dataset.projectContext = context;
    item.number = element(); item.querySelector = () => item.number; return item;
  });
  const document = element();
  document.body = body;
  button.focus = () => { document.activeElement = button; };
  header.contains = (target) => [header, button, navigation].includes(target);
  const elements = { ".site-header": header, ".menu-button": button, ".primary-navigation": navigation, ".project-filter": controls };
  document.querySelector = (selector) => options.missing ? null : elements[selector];
  document.querySelectorAll = () => projects;
  controls.querySelectorAll = () => buttons;
  controls.querySelector = () => status;
  const media = element(); media.matches = true;
  if (options.legacyMedia) {
    media.addListener = (handler) => { media.change = handler; };
    media.addEventListener = undefined;
  }
  const window = { matchMedia: () => media };
  vm.runInNewContext(read("script.js"), { document, window });
  return { button, navigation, header, controls, status, body, buttons, projects, document, media };
}

test("menu state, Escape focus, outside dismissal, and viewport changes", () => {
  const state = initialize();
  const { button, navigation, body, document, media } = state;
  assert.equal(button.hidden, false);
  button.emit("click");
  assert.equal(button.getAttribute("aria-expanded"), "true");
  assert.equal(body.classList.contains("menu-open"), true);
  document.activeElement = navigation;
  document.emit("keydown", { key: "Escape" });
  assert.equal(document.activeElement, button);
  assert.equal(body.classList.contains("menu-open"), false);
  for (const event of ["click", "focusin"]) {
    button.emit("click"); document.emit(event, { target: element() });
    assert.equal(button.getAttribute("aria-expanded"), "false");
  }
  button.emit("click");
  navigation.emit("click", { target: { closest: () => element() } });
  assert.equal(button.getAttribute("aria-expanded"), "false");
  button.emit("click"); media.matches = false; media.emit("change");
  assert.equal(body.classList.contains("menu-open"), false);
  button.emit("click");
  assert.equal(button.getAttribute("aria-expanded"), "false");
});

test("filters preserve order, numbering, pressed state, and announcements", () => {
  const { buttons, projects, controls, status } = initialize();
  assert.equal(controls.hidden, false);
  for (const [index, expectedCount] of [[1, 1], [2, 2], [3, 4], [0, 7]]) {
    buttons[index].emit("click");
    const visible = projects.filter((project) => !project.hidden);
    assert.equal(visible.length, expectedCount);
    assert.deepEqual(visible.map((project) => project.number.textContent),
      Array.from({ length: expectedCount }, (_, number) => String(number + 1).padStart(2, "0")));
    assert.equal(status.textContent, `Showing ${expectedCount} ${expectedCount === 1 ? "project" : "projects"}.`);
    assert.equal(buttons.filter((button) => button.getAttribute("aria-pressed") === "true").length, 1);
  }
});

test("missing controls fail safely and legacy media listeners still work", () => {
  assert.doesNotThrow(() => initialize({ missing: true }));
  const { button, body, media } = initialize({ legacyMedia: true });
  button.emit("click"); media.matches = false; media.change();
  assert.equal(body.classList.contains("menu-open"), false);
});
