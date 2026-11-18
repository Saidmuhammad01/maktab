/* EduMentor AI — onboarding: ism va rolni qabul qilib, shu qurilmada saqlaydi. */
const STORAGE_KEY = "eduMentorUser";

const form = document.getElementById("onboardingForm");
const nameInput = document.getElementById("userName");
const error = document.getElementById("formError");
const submitButton = form.querySelector(".submit-button");

function showError(message) {
  error.textContent = message;
  nameInput.setAttribute("aria-invalid", "true");
  nameInput.focus();
}

function clearError() {
  error.textContent = "";
  nameInput.removeAttribute("aria-invalid");
}

// Demo prototip: ma'lumotlar faqat shu qurilma brauzerida saqlanadi.
// Maxfiy rejimda localStorage xato berishi mumkin, shuning uchun himoyalangan.
function saveUser(user) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return true;
  } catch {
    return false;
  }
}

nameInput.addEventListener("input", clearError);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value.trim();
  const role = new FormData(form).get("role");

  if (name.length < 2) {
    showError("Iltimos, ismingizni kamida 2 ta harf bilan kiriting.");
    return;
  }

  submitButton.disabled = true;

  if (!saveUser({ name, role })) {
    submitButton.disabled = false;
    showError("Brauzer ma’lumotni saqlashga ruxsat bermadi. Maxfiy rejimni o‘chirib, qayta urinib ko‘ring.");
    return;
  }

  window.location.href = "dashboard.html";
});
