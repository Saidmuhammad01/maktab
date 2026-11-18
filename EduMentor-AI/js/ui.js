/* EduMentor AI — umumiy UI yordamchilari (barcha sahifalarda <head> ichida ulanadi).
   Vazifalari: sticky header holati, ko'rinishda paydo bo'lish animatsiyasi, toast xabar. */
document.documentElement.classList.add("js");

(function () {
  "use strict";

  const REVEAL_SELECTOR =
    ".section-heading, .feature-card, .how-inner > div, .step, .closing, .tool-card, .status-panel";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Sticky header: sahifa siljiganda fon va chiziq paydo bo'ladi */
  function initHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* Elementlar ko'rinishga kirganda yumshoq paydo bo'ladi (JS bo'lmasa hammasi ko'rinib turadi) */
  function initReveal() {
    const items = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) return;

    const counters = new Map();
    items.forEach((el) => {
      const index = counters.get(el.parentElement) || 0;
      counters.set(el.parentElement, index + 1);
      el.style.setProperty("--d", Math.min(index, 5) * 70 + "ms");
      el.classList.add("reveal");
    });

    const finish = (el) => {
      el.classList.remove("reveal", "in");
      el.style.removeProperty("--d");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("in");
          // Animatsiyadan keyin klassni olib tashlaymiz, shunda hover effektlari buzilmaydi.
          el.addEventListener("transitionend", () => finish(el), { once: true });
          setTimeout(() => finish(el), 1400);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* Toast: qisqa holat xabari (masalan, hali ulanmagan bo'lim haqida) */
  let toastEl = null;
  let toastTimer = 0;
  function toast(message) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "toast";
      toastEl.setAttribute("role", "status");
      toastEl.setAttribute("aria-live", "polite");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    // Qayta ishga tushirish uchun bir kadr kutamiz
    requestAnimationFrame(() => toastEl.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
  }

  window.EduUI = { toast };

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initReveal();
  });
})();
