const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-navigation");
const themeToggle = document.querySelector(".theme-toggle");
const themeColor = document.querySelector("#theme-color");

function applyTheme(theme, persist = false) {
  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const label = `Switch to ${nextTheme} mode`;
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  }

  if (themeColor) {
    themeColor.setAttribute("content", theme === "dark" ? "#071b24" : "#0b2530");
  }

  if (persist) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still applies when browser storage is unavailable.
    }
  }
}

applyTheme(document.documentElement.dataset.theme || "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
  });
}

function closeMenu() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

const projectFilterButtons = document.querySelectorAll("[data-project-filter]");
const filterableProjects = document.querySelectorAll("[data-project-category]");
const filterStatus = document.querySelector(".filter-status");
const additionalProjectsGrid = document.querySelector(".other-projects");

function applyProjectFilter(selectedFilter) {
  let visibleCount = 0;
  let visibleAdditionalCount = 0;

  filterableProjects.forEach((project) => {
    const categories = project.dataset.projectCategory.split(" ");
    const isVisible = selectedFilter === "all" || categories.includes(selectedFilter);
    project.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
      if (project.classList.contains("compact-project")) {
        visibleAdditionalCount += 1;
      }
    }
  });

  if (additionalProjectsGrid) {
    additionalProjectsGrid.hidden = visibleAdditionalCount === 0;
  }

  projectFilterButtons.forEach((button) => {
    const isActive = button.dataset.projectFilter === selectedFilter;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (filterStatus) {
    const projectLabel = visibleCount === 1 ? "project" : "projects";
    filterStatus.textContent = `Showing ${visibleCount} ${projectLabel}.`;
  }
}

projectFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyProjectFilter(button.dataset.projectFilter);
  });
});

if (projectFilterButtons.length > 0 && filterableProjects.length > 0) {
  applyProjectFilter("all");
}
