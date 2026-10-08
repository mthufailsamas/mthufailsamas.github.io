(() => {
  "use strict";

  function initializeNavigation() {
    const header = document.querySelector(".site-header");
    const button = document.querySelector(".menu-button");
    const navigation = document.querySelector(".primary-navigation");
    if (!header || !button || !navigation || !window.matchMedia) return;

    // Keep this breakpoint aligned with the mobile navigation rule in styles.css.
    const mobileViewport = window.matchMedia("(max-width: 860px)");
    const isOpen = () => button.getAttribute("aria-expanded") === "true";

    function setMenuState(open) {
      const expanded = open && mobileViewport.matches;
      button.setAttribute("aria-expanded", String(expanded));
      button.setAttribute("aria-label", expanded ? "Close navigation" : "Open navigation");
      navigation.classList.toggle("open", expanded);
      document.body.classList.toggle("menu-open", expanded);
    }

    button.addEventListener("click", () => setMenuState(!isOpen()));
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenuState(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !isOpen()) return;
      const returnFocus = navigation.contains(document.activeElement);
      setMenuState(false);
      if (returnFocus) button.focus();
    });

    // Dismiss without stealing focus from the user's next destination.
    document.addEventListener("click", (event) => {
      if (isOpen() && !header.contains(event.target)) setMenuState(false);
    });
    document.addEventListener("focusin", (event) => {
      if (isOpen() && !header.contains(event.target)) setMenuState(false);
    });

    const closeOnBreakpointChange = () => setMenuState(false);
    if (mobileViewport.addEventListener) {
      mobileViewport.addEventListener("change", closeOnBreakpointChange);
    } else {
      mobileViewport.addListener(closeOnBreakpointChange);
    }
    setMenuState(false);
    header.classList.add("navigation-ready");
    button.hidden = false;
  }

  function initializeProjectFilters() {
    const controls = document.querySelector(".project-filter");
    if (!controls) return;
    const buttons = Array.from(controls.querySelectorAll("[data-project-filter]"));
    const projects = Array.from(document.querySelectorAll("[data-project-context]"), (element) => ({
      element,
      context: element.dataset.projectContext,
      number: element.querySelector(".project-kicker span"),
    }));
    const status = controls.querySelector(".filter-status");
    if (!buttons.length || !projects.length) return;

    function applyFilter(selected) {
      if (!buttons.some((button) => button.dataset.projectFilter === selected)) return;
      let visibleCount = 0;
      projects.forEach(({ element, context, number }) => {
        const visible = selected === "all" || context === selected;
        element.hidden = !visible;
        if (visible) {
          visibleCount += 1;
          if (number) number.textContent = String(visibleCount).padStart(2, "0");
        }
      });
      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.projectFilter === selected));
      });
      if (status) {
        status.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? "project" : "projects"}.`;
      }
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.projectFilter));
    });
    applyFilter("all");
    controls.hidden = false;
  }

  initializeNavigation();
  initializeProjectFilters();
})();
