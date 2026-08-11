const m=document.querySelector(".menu-toggle"),n=document.querySelector(".nav-links"),t=document.querySelector("#toast");m?.addEventListener("click",()=>{const o=n.classList.toggle("open");m.setAttribute("aria-expanded",o)});document.querySelectorAll("[data-coming-soon]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();t.textContent="Coming soon — this link will be added when it's ready.";t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}));document.querySelector("#signup-form")?.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#signup-message").textContent="Email signup is coming soon — your address was not sent anywhere yet.";e.target.reset()});


// Reversible scroll animations — replay when sections re-enter the viewport
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible", entry.isIntersecting);
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -5% 0px"
});

document.querySelectorAll(".scroll-reveal, .stagger-reveal, .track-reveal").forEach(el => {
  revealObserver.observe(el);
});

// Cinematic first-load hero entrance
window.addEventListener("DOMContentLoaded",()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>document.body.classList.add("hero-loaded"))})});


// v19 — robust hover/pointer pop for Visual cards
document.querySelectorAll(".visual-card").forEach(card => {
  card.addEventListener("pointerenter", () => {
    card.classList.add("visual-pop");
  });
  card.addEventListener("pointerleave", () => {
    card.classList.remove("visual-pop");
  });
  card.addEventListener("mouseenter", () => {
    card.classList.add("visual-pop");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("visual-pop");
  });
});
