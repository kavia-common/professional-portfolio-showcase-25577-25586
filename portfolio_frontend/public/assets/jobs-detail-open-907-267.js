(function () {
  "use strict";

  // PUBLIC_INTERFACE
  function initJobsDetailOpen907267() {
    /** Initialize interactions for the Jobs Detail - Open screen. */
    const root = document.querySelector(".jobs-detail-open-907-267");
    if (!root) return;

    // Improve crispness on high DPR without fetching any network assets
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    root.style.setProperty("--dpr", dpr);

    // Accessibility focus styles
    root.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        root.classList.add("show-focus");
      }
    });

    // Bottom CTA present but no modal interactions defined in this screen JSON
    const bottomCta = root.querySelector(".down-button .cta.primary");
    if (bottomCta) {
      bottomCta.addEventListener("click", function () {
        // Placeholder: hook up navigation or action if specified later
        bottomCta.style.transform = "scale(0.98)";
        setTimeout(() => { bottomCta.style.transform = ""; }, 120);
      });
    }
  }

  // Expose public init
  // PUBLIC_INTERFACE
  window.initJobsDetailOpen907267 = initJobsDetailOpen907267;

  // Auto-init when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initJobsDetailOpen907267);
  } else {
    initJobsDetailOpen907267();
  }
})();
