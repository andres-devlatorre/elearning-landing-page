// Service tabs: click or arrow keys switch the panel beside the course player
const tabs = [...document.querySelectorAll('[role="tab"]')];

function select(tab, focus) {
  tabs.forEach((t) => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
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
