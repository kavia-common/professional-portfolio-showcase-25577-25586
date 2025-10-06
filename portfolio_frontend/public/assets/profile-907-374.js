(function () {
  "use strict";

  // PUBLIC_INTERFACE
  function initProfile907374() {
    /** Initialize interactions for the Profile screen (screen_907:374). */
    const root = document.querySelector(".profile-907-374");
    if (!root) return;

    // DPR hint for potential crispness with CSS if needed
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    root.style.setProperty("--dpr", dpr);

    // Keyboard focus visibility helper
    root.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        root.classList.add("show-focus");
      }
    });

    // Micro interaction: press feedback on list rows
    root.querySelectorAll(".list-row").forEach((row) => {
      row.addEventListener("mousedown", () => (row.style.opacity = "0.85"));
      row.addEventListener("mouseup", () => (row.style.opacity = ""));
      row.addEventListener("mouseleave", () => (row.style.opacity = ""));
      row.addEventListener("touchstart", () => (row.style.opacity = "0.85"), { passive: true });
      row.addEventListener("touchend", () => (row.style.opacity = ""), { passive: true });
    });
  }

  // Expose public initializer
  // PUBLIC_INTERFACE
  window.initProfile907374 = initProfile907374;

  // Auto-init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProfile907374);
  } else {
    initProfile907374();
  }
})();
