/* Shared site-wide JavaScript (kept dependency-free for static hosting). */

(function () {
  function qs(selector, root) {
    return (root || document).querySelector(selector);
  }

  function qsa(selector, root) {
    return Array.from((root || document).querySelectorAll(selector));
  }

  // -----------------------------
  // Mobile menu helpers
  // -----------------------------

  function getMobileMenu() {
    return document.getElementById("mobile-menu");
  }

  function closeAllMobileSubmenus() {
    qsa(".mobile-submenu").forEach((submenu) => submenu.classList.remove("active"));
    qsa(".mobile-menu-toggle").forEach((toggle) => toggle.classList.remove("active"));
  }

  // Expose these because the HTML uses inline onclick handlers today.
  window.toggleMobileMenu = function toggleMobileMenu() {
    const mobileMenu = getMobileMenu();
    if (!mobileMenu) return;

    mobileMenu.classList.toggle("active");

    // Close all submenus when closing main menu
    if (!mobileMenu.classList.contains("active")) {
      closeAllMobileSubmenus();
    }
  };

  window.toggleSubmenu = function toggleSubmenu(submenuId, toggleButton) {
    const submenu = document.getElementById(submenuId);
    if (!submenu) return;

    submenu.classList.toggle("active");
    if (toggleButton && typeof toggleButton.classList?.toggle === "function") {
      toggleButton.classList.toggle("active");
    }
  };

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const mobileMenu = getMobileMenu();
    if (!mobileMenu || !mobileMenu.classList.contains("active")) return;

    const mobileMenuBtn = qs(".mobile-menu-btn");
    const target = event.target;

    // If no button exists (or couldn't be found), treat it as an outside click.
    const clickedButton = mobileMenuBtn ? mobileMenuBtn.contains(target) : false;
    const clickedMenu = mobileMenu.contains(target);

    if (!clickedMenu && !clickedButton) {
      window.toggleMobileMenu();
    }
  });

  // Close mobile menu when window is resized to desktop size
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 768) return;
    const mobileMenu = getMobileMenu();
    if (mobileMenu && mobileMenu.classList.contains("active")) {
      window.toggleMobileMenu();
    }
  });

  // -----------------------------
  // Index page: demo modal (optional)
  // -----------------------------

  (function setupDemoOverlay() {
    const demoBtn = document.getElementById("watch-demo-btn");
    const overlay = document.getElementById("demo-overlay");
    const iframe = document.getElementById("demo-iframe");
    const closeBtn = document.getElementById("demo-close");

    if (!demoBtn || !overlay || !iframe || !closeBtn) return;

    const DEMO_URL =
      "https://www.youtube.com/embed/c2YvliEA_J4?autoplay=1&playsinline=1&controls=0&rel=0&modestbranding=1&fs=0&iv_load_policy=3";

    function openDemo(event) {
      event.preventDefault();
      iframe.src = DEMO_URL;
      overlay.classList.add("active");
      demoBtn.setAttribute("aria-expanded", "true");
    }

    function closeDemo() {
      overlay.classList.remove("active");
      iframe.src = "";
      demoBtn.setAttribute("aria-expanded", "false");
    }

    demoBtn.addEventListener("click", openDemo);
    closeBtn.addEventListener("click", closeDemo);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeDemo();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("active")) {
        closeDemo();
      }
    });
  })();
})();


