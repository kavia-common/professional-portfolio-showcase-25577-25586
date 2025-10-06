(function () {
  "use strict";

  // PUBLIC_INTERFACE
  function initTakeThisJobs907315() {
    /** Initialize interactions for the Take this jobs screen. */
    const root = document.querySelector(".take-this-jobs-907-315");
    if (!root) return;

    // Improve image crispness on high DPR without fetching any network assets
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    root.style.setProperty("--dpr", dpr);

    // Modal behavior: since overlay and modal are part of the comp, ensure modal is visible
    const overlay = root.querySelector(".overlay");
    const modal = root.querySelector(".modal");

    // Buttons inside modal
    const yesBtn = root.querySelector('.modal .cta.primary');
    const cancelBtn = root.querySelector('.modal .cta.white');

    function closeModal() {
      if (overlay) overlay.style.display = "none";
      if (modal) modal.style.display = "none";
    }

    function openModal() {
      if (overlay) overlay.style.display = "";
      if (modal) modal.style.display = "";
    }

    // Attach minimal interactions
    if (cancelBtn) {
      cancelBtn.addEventListener("click", closeModal);
    }
    if (yesBtn) {
      yesBtn.addEventListener("click", function () {
        // Brief confirmation effect
        yesBtn.style.transform = "scale(0.98)";
        setTimeout(() => {
          yesBtn.style.transform = "";
          closeModal();
        }, 150);
      });
    }

    // The bottom CTA could open modal if it were hidden; keep as no-op to preserve spec fidelity
    const bottomCta = root.querySelector('.down-button .cta.primary');
    if (bottomCta) {
      bottomCta.addEventListener("click", function () {
        // If modal already hidden, show it again
        if (modal && modal.style.display === "none") {
          openModal();
        }
      });
    }

    // Accessibility focus styles
    root.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        root.classList.add("show-focus");
      }
    });
  }

  // Expose public init
  // PUBLIC_INTERFACE
  window.initTakeThisJobs907315 = initTakeThisJobs907315;

  // Auto-init when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTakeThisJobs907315);
  } else {
    initTakeThisJobs907315();
  }
})();
