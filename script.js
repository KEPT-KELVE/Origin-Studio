"use strict";

// The website introduces the Windows app; photos are never uploaded here.
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-nav");
if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menu.classList.remove("is-open");
  };
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menu.classList.toggle("is-open", open);
  });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

const descriptions = {
  tools: {
    title: "Start with the tools you know.",
    description: "Brushes, shapes, editable text and an eyedropper. Paint over your photo, then refine your work with reversible masks."
  },
  layers: {
    title: "Keep every part of your idea editable.",
    description: "Import photos on separate layers. Reorder, duplicate, transform and blend them, with masks and colour settings for each layer."
  },
  metadata: {
    title: "The whole story, in the details.",
    description: "Camera identity, software, capture dates and GPS—ready to inspect and edit beside your photo."
  }
};
document.querySelectorAll("[data-explore]").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.explore;
    if (!descriptions[key]) return;
    document.querySelectorAll("[data-explore]").forEach(item => {
      const selected = item.dataset.explore === key;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    document.getElementById("explore-title").textContent = descriptions[key].title;
    document.getElementById("explore-description").textContent = descriptions[key].description;
  });
});

const screenshot = document.getElementById("screenshot-dialog");
const expandButton = document.querySelector(".expand-button");
if (screenshot && expandButton) {
  const closeScreenshot = () => screenshot.close();
  expandButton.addEventListener("click", () => {
    if (typeof screenshot.showModal === "function") {
      screenshot.showModal();
      document.body.classList.add("modal-open");
    } else {
      // Older browsers can still show the original supplied screenshot.
      window.open("assets/origin-workspace.png", "_blank", "noopener");
    }
  });
  screenshot.querySelector(".dialog-close").addEventListener("click", closeScreenshot);
  screenshot.addEventListener("click", event => {
    if (event.target !== screenshot) return;
    const bounds = screenshot.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeScreenshot();
  });
  screenshot.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    expandButton.focus();
  });
}
