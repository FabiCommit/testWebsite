(() => {
  // Navbar: optisch "fester", sobald gescrollt
  const nav = document.getElementById("topNav");
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    nav?.classList.toggle("is-scrolled", y > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form: Demo-Submit (Frontend-only)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (status) {
        status.textContent = "Danke! (Demo) – Formular ist aktuell noch nicht mit einem Backend verbunden.";
      }
      form.reset();
    });
  }
})();
