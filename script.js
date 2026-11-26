// TODO: replace with your Calendly scheduling link
const CALENDLY_URL = "https://calendly.com/your-name/discovery-call";
// Used when Calendly isn't set up yet or fails to load
const FALLBACK_EMAIL = "mailto:hello@behow.com?subject=Course%20call";

const calendlyReady = !CALENDLY_URL.includes("your-name");

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("menu");
function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menu.classList.toggle("is-open", open);
}
toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// YouTube click-to-load facades
const PLAY_ICON = '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>';

document.querySelectorAll(".video[data-yt]").forEach((el) => {
  const id = el.dataset.yt;
  const title = el.dataset.title || "Video";

  if (el.dataset.frame) {
    const corner = document.createElement("span");
    corner.className = "video__corner";
    corner.setAttribute("aria-hidden", "true");
    corner.textContent = el.dataset.frame;
    el.appendChild(corner);
  }

  // Placeholder ID: show a film-leader countdown frame instead of a broken player
  if (!id || id.startsWith("YOUTUBE_ID")) {
    el.classList.add("is-pending");
    el.insertAdjacentHTML("beforeend",
      '<svg class="video__leader" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      '<line class="hair" x1="0" y1="76" x2="320" y2="76"/><line class="hair" x1="160" y1="0" x2="160" y2="138"/>' +
      '<circle class="ring" cx="160" cy="76" r="52"/><circle class="ring" cx="160" cy="76" r="43"/>' +
      '<text x="160" y="96" text-anchor="middle">3</text></svg>');
    const note = document.createElement("p");
    note.className = "video__note";
    note.textContent = `${title} · coming soon`;
    el.appendChild(note);
    return;
  }

  const img = document.createElement("img");
  img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  img.alt = "";
  img.loading = "lazy";
  img.onerror = () => img.remove();
  el.appendChild(img);

  const btn = document.createElement("button");
  btn.className = "video__play";
  btn.type = "button";
  btn.setAttribute("aria-label", `Play video: ${title}`);
  btn.innerHTML = PLAY_ICON;
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

// Calendly popup, with an email fallback when it isn't configured or didn't load
document.querySelectorAll("[data-calendly]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    if (calendlyReady && window.Calendly) {
      Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else if (calendlyReady) {
      window.open(CALENDLY_URL, "_blank", "noopener");
    } else {
      window.location.href = FALLBACK_EMAIL;
    }
  });
});

// Mobile booking dock: appears once the hero buttons scroll away,
// and steps aside while the closing call-to-action is on screen
const dock = document.querySelector(".dock");
const heroCta = document.querySelector(".title-card__cta");
const end = document.getElementById("book");
if (dock && "IntersectionObserver" in window) {
  if (heroCta) {
    new IntersectionObserver(([entry]) => {
      dock.classList.toggle("is-shown", !entry.isIntersecting && entry.boundingClientRect.top < 0);
    }).observe(heroCta);
  }
  if (end) {
    new IntersectionObserver(([entry]) => {
      dock.classList.toggle("is-hidden", entry.isIntersecting);
    }, { threshold: 0.25 }).observe(end);
  }
} else if (dock) {
  dock.classList.add("is-shown");
}
