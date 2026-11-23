// ===== Lock PS data — edit everything here =====
const data = {
  ip: "5.39.13.23",
  // Placeholder rules — replace with the real ones
  rules: [
    "Dilarang scam / menipu sesama player.",
    "Dilarang toxic, SARA, dan spam di broadcast.",
    "Dilarang menggunakan bug/exploit — laporkan ke staff.",
    "Dilarang jual-beli akun atau item dengan uang asli.",
    "Hormati staff dan sesama player.",
    "Pelanggaran dapat dikenakan ban tanpa peringatan.",
  ],
};

const hosts = ["growtopia1.com", "growtopia2.com", "www.growtopia1.com", "www.growtopia2.com"];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const $ = (id) => document.getElementById(id);

// Each block checks its element exists, so one missing element never stops the rest

// Hosts entries (Windows + macOS)
const hostsText = hosts.map((h) => `${data.ip} ${h}`).join("\n");
document.querySelectorAll(".hosts-entries").forEach((el) => (el.textContent = hostsText));

// Rules
if ($("rules-list")) $("rules-list").innerHTML = data.rules.map((r) => `<li>${esc(r)}</li>`).join("");

// Copy buttons (Modern Web Guidance: copy-button)
// Markup: <button command="--copy" commandfor="ID"> + sibling <span class="tip" role="status">
function legacyCopy(text) {
  // Last resort for plain http, where navigator.clipboard is missing
  const field = Object.assign(document.createElement("textarea"), { value: text });
  field.setAttribute("readonly", "");
  field.style.cssText = "position:fixed;inset-block-start:0;opacity:0";
  document.body.append(field);
  field.select();
  try { return document.execCommand("copy"); } finally { field.remove(); }
}

const timers = new WeakMap();
let lastMessage = "";

function report(button, ok) {
  const tip = button.nextElementSibling; // the role="status" bubble
  clearTimeout(timers.get(button));
  button.removeAttribute("data-copied");
  button.removeAttribute("data-failed");
  let message = ok ? "Copied!" : "Copy gagal";
  if (message === lastMessage) message += "\u00A0"; // VoiceOver skips identical repeats
  lastMessage = message;
  tip.textContent = "";
  void button.offsetWidth; // restart the CSS animation
  button.setAttribute(ok ? "data-copied" : "data-failed", "");
  requestAnimationFrame(() => (tip.textContent = message));
  timers.set(button, setTimeout(() => {
    button.removeAttribute("data-copied");
    button.removeAttribute("data-failed");
    tip.textContent = "";
  }, 2000));
}

async function copy(button, target) {
  // innerText keeps rendered line breaks (hosts entries)
  const text = target.innerText.trim();
  if (!text) return;
  try {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      if (!legacyCopy(text)) throw new Error("Copy failed");
    }
    report(button, true);
  } catch {
    report(button, false);
  }
}

if ("CommandEvent" in window) {
  // command events do not bubble: listen in the capture phase
  document.addEventListener("command", (event) => {
    if (event.command === "--copy") copy(event.source, event.target);
  }, true);
} else {
  // Fallback for browsers without Invoker Commands
  document.addEventListener("click", (event) => {
    const button = event.target.closest('button[command="--copy"]');
    if (!button) return;
    const target = document.getElementById(button.getAttribute("commandfor"));
    if (target) copy(button, target);
  });
}

// Theme music: try autoplay; browsers block sound until the user interacts,
// so start on the first tap/click/key instead. The mute choice is remembered.
const music = $("theme");
const musicBtn = $("music-btn");
if (music && musicBtn) {
  music.volume = 0.4;
  const MUTE_KEY = "lockps-music-muted";
  const setPressed = (on) => {
    // Fixed label + aria-pressed: screen readers say "Musik, pressed / not pressed"
    musicBtn.setAttribute("aria-pressed", on);
  };
  const play = () => music.play().then(() => setPressed(true)).catch(() => setPressed(false));

  const startOnInteract = (e) => {
    if (e.target.closest && e.target.closest("#music-btn")) return; // button handles itself
    removeInteract();
    if (localStorage.getItem(MUTE_KEY) === "1") return;
    music.muted = false;
    play();
  };
  const events = ["pointerdown", "keydown", "touchstart"];
  const removeInteract = () => events.forEach((t) => document.removeEventListener(t, startOnInteract, true));

  setPressed(false);
  if (localStorage.getItem(MUTE_KEY) !== "1") {
    music.play().then(() => setPressed(true)).catch(() => {
      // Autoplay with sound was blocked. Start muted (always allowed), then
      // unmute on the first interaction so the track is already in progress.
      music.muted = true;
      music.play().catch(() => {}); // silent until first tap, so icon stays "off"
      events.forEach((t) => document.addEventListener(t, startOnInteract, { capture: true, passive: true }));
    });
  }

  musicBtn.addEventListener("click", () => {
    removeInteract();
    if (music.paused || music.muted) {
      localStorage.removeItem(MUTE_KEY);
      music.muted = false;
      play();
    } else {
      music.pause();
      localStorage.setItem(MUTE_KEY, "1");
      setPressed(false);
    }
  });
}

// Mobile nav
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
});
