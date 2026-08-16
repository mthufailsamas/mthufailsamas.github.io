const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".primary-navigation");

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
const filterableProjects = document.querySelectorAll("[data-project-context]");
const filterStatus = document.querySelector(".filter-status");

function applyProjectFilter(selectedFilter) {
  let visibleCount = 0;

  filterableProjects.forEach((project) => {
    const isVisible = selectedFilter === "all" || project.dataset.projectContext === selectedFilter;
    project.hidden = !isVisible;

    if (isVisible) {
      visibleCount += 1;
    }
  });

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
