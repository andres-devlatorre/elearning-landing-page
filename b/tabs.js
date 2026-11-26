// Service tabs: click or arrow keys switch the panel beside the course player
const tabs = [...document.querySelectorAll('[role="tab"]')];
const showcase = document.querySelector(".showcase");

function select(tab, focus) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  // Fade the panel in only when the visitor switches tabs, not on page load
  if (showcase) showcase.classList.add("is-switching");
  if (focus) tab.focus();
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(tab, false));
  tab.addEventListener("keydown", (e) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (e.key === "Home") { e.preventDefault(); select(tabs[0], true); }
    else if (e.key === "End") { e.preventDefault(); select(tabs[tabs.length - 1], true); }
    else if (step) { e.preventDefault(); select(tabs[(i + step + tabs.length) % tabs.length], true); }
  });
});

// Course status: the first time the card comes into view, the course moves
// through its stages one by one and stops at "Build: In progress".
// Without JS, or with reduced motion, the card simply shows that final state.
(() => {
  const card = document.querySelector(".status");
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!card || calm || !("IntersectionObserver" in window)) return;

  const rows = [...card.querySelectorAll("dl > div")];
  const meter = card.querySelector(".status__meter span");
  const done = rows.filter((r) => r.querySelector("dd.ok, dd.busy")).length;
  card.classList.add("is-pending");
  if (meter) meter.style.setProperty("--p", 0);

  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    rows.forEach((row, i) => {
      setTimeout(() => {
        row.classList.add("is-in");
        if (meter && i < done) meter.style.setProperty("--p", (i + 1) / done);
        if (i === rows.length - 1) card.classList.add("is-settled");
      }, 400 + i * 520);
    });
  }, { threshold: 0.6 });
  io.observe(card);
})();
