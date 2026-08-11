const m=document.querySelector(".menu-toggle"),n=document.querySelector(".nav-links"),t=document.querySelector("#toast");m?.addEventListener("click",()=>{const o=n.classList.toggle("open");m.setAttribute("aria-expanded",o)});document.querySelectorAll("[data-coming-soon]").forEach(a=>a.addEventListener("click",e=>{e.preventDefault();t.textContent="Coming soon — this link will be added when it's ready.";t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}));document.querySelector("#signup-form")?.addEventListener("submit",e=>{e.preventDefault();document.querySelector("#signup-message").textContent="Email signup is coming soon — your address was not sent anywhere yet.";e.target.reset()});


// Subtle scroll-in animations
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".scroll-reveal, .stagger-reveal").forEach(el => {
  revealObserver.observe(el);
});

// Cinematic first-load hero entrance
window.addEventListener("DOMContentLoaded",()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>document.body.classList.add("hero-loaded"))})});
