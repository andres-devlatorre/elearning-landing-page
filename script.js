// TODO: replace with your Calendly scheduling link
const CALENDLY_URL = "https://calendly.com/your-name/discovery-call";

document.documentElement.classList.add("js");

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");
function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  menu.classList.toggle("is-open", open);
}
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// YouTube click-to-load facades
document.querySelectorAll(".video[data-yt]").forEach((el) => {
  const id = el.dataset.yt;
  const title = el.dataset.title || "Video";

  const img = document.createElement("img");
  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  img.alt = "";
  img.loading = "lazy";
  img.onerror = () => img.remove(); // placeholder IDs fall back to the gradient
  el.appendChild(img);

  const btn = document.createElement("button");
  btn.className = "video__play";
  btn.type = "button";
  btn.setAttribute("aria-label", `Play video: ${title}`);
  btn.textContent = "▶";
  el.appendChild(btn);

  const load = () => {
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = title;
    iframe.allow = "accelerometer; autoplay; encrypted-media; picture-in-picture";
    iframe.allowFullscreen = true;
    el.replaceChildren(iframe);
  };
  el.addEventListener("click", load, { once: true });
});

// Calendly popup (falls back to opening the link if the widget hasn't loaded)
document.querySelectorAll("[data-calendly]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.Calendly) {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      window.open(CALENDLY_URL, "_blank", "noopener");
    }
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
