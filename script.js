const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector("#toast");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

document.querySelectorAll("[data-coming-soon]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showToast("Coming soon — this link will be added when it's ready.");
  });
});

document.querySelector("#signup-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#signup-message");

  if (!email) return;

  message.textContent = "Email signup is coming soon — your address was not sent anywhere yet.";
  document.querySelector("#signup-form").reset();
});
