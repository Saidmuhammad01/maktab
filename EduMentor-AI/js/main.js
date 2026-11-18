/* EduMentor AI — landing sahifa: mobil navigatsiya menyusi. */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  const setOpen = (open) => {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Menyuni yopish" : "Menyuni ochish");
    menuToggle.textContent = open ? "×" : "☰";
  };

  menuToggle.addEventListener("click", () => setOpen(!navLinks.classList.contains("open")));

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Escape bosilganda yoki menyudan tashqariga bosilganda yopiladi
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("open")) {
      setOpen(false);
      menuToggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) setOpen(false);
  });

  // Ekran kengayganda (masalan, telefon aylantirilganda) menyu holatini tozalaymiz
  const desktopQuery = window.matchMedia("(min-width: 651px)");
  const onChange = (event) => { if (event.matches) setOpen(false); };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", onChange);
  else if (desktopQuery.addListener) desktopQuery.addListener(onChange);
}
