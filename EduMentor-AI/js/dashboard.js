/* EduMentor AI — dashboard: saqlangan profilni o'qiydi va bo'limlarni ko'rsatadi. */
const STORAGE_KEY = "eduMentorUser";
const TEACHER_ROLE = "O\u2018qituvchi";

function readUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed.name === "string" && parsed.name.trim() ? parsed : null;
  } catch {
    return null;
  }
}

const user = readUser();

if (!user) {
  window.location.replace("login.html");
} else {
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText("welcomeName", user.name);
  setText("headerName", user.name);
  setText("avatarInitial", user.name.charAt(0).toUpperCase());
  setText(
    "roleText",
    user.role === TEACHER_ROLE
      ? "O‘qituvchi ish maydoningiz tayyor. Dars yaratish va sinf natijalarini kuzatish imkoniyatlari shu yerda jamlanadi."
      : "O‘quvchi ish maydoningiz tayyor. O‘rganish, mashq qilish va rivojlanish uchun vositalar shu yerda jamlanadi."
  );
  setText("profileMeta", "Shu qurilmada saqlangan · " + (user.role || "Rol tanlanmagan"));

  // Hali ulanmagan bo'limlar: ishlaydi deb ko'rsatmaymiz, halol xabar beramiz.
  document.querySelectorAll("[data-soon]").forEach((card) => {
    card.addEventListener("click", () => {
      if (window.EduUI) window.EduUI.toast("“" + card.dataset.soon + "” bo‘limi hali ulanmagan. Tez orada qo‘shiladi.");
    });
  });

  // Chiqish: faqat shu qurilmadagi profilni o'chiradi (haqiqiy akkaunt hali yo'q).
  const logoutButton = document.getElementById("logoutBtn");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* e'tibor bermaymiz */ }
      window.location.href = "index.html";
    });
  }
}
