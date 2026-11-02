const viewer = document.querySelector("[data-voxel-viewer]");
const buttons = Array.from(document.querySelectorAll("[data-model-src]"));
const spinButton = document.querySelector("[data-toggle-spin]");

if (viewer) {
  viewer.setAttribute("auto-rotate-delay", "0");
  viewer.setAttribute("rotation-per-second", "720deg");

  const normalSpin = () => {
    viewer.setAttribute("rotation-per-second", "36deg");
    viewer.setAttribute("auto-rotate", "");
  };

  viewer.addEventListener("load", () => {
    viewer.setAttribute("rotation-per-second", "720deg");
    window.setTimeout(normalSpin, 1700);
  });

  ["pointerup", "pointercancel", "mouseleave", "touchend"].forEach((eventName) => {
    viewer.addEventListener(eventName, () => {
      viewer.setAttribute("auto-rotate", "");
      viewer.setAttribute("auto-rotate-delay", "0");
    });
  });

  viewer.addEventListener("camera-change", () => {
    viewer.setAttribute("auto-rotate-delay", "0");
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    viewer.src = button.dataset.modelSrc;
  });
});

spinButton?.addEventListener("click", () => {
  const spinning = viewer.hasAttribute("auto-rotate");
  if (spinning) {
    viewer.removeAttribute("auto-rotate");
    spinButton.textContent = "Spin";
  } else {
    viewer.setAttribute("auto-rotate", "");
    spinButton.textContent = "Still";
  }
});
