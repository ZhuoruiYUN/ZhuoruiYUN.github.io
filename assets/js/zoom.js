// Initialize medium zoom.
$(document).ready(function () {
  document.querySelectorAll(".project-detail img:not([data-zoomable])").forEach((image) => {
    image.setAttribute("data-zoomable", "");
    image.classList.add("project-detail-image");
  });

  medium_zoom = mediumZoom("[data-zoomable]", {
    background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
  });
});
