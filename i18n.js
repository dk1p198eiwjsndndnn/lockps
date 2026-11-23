// ===== Lock PS translations =====
// Each language is a dictionary file: lang/<code>.json
// Keys match data-i18n="..." in index.html. Values may contain <strong>/<em>.
// To add a language: copy lang/en.json, translate the values, add it to LANGS and FLAGS below.
const I18N = {};
const I18N_VERSION = "18";

// ===== Language switcher =====
// Indonesian is the default. Choice is kept in localStorage.
const LANGS = [
  { code: "id", label: "Indonesia", short: "ID", html: "id" },
  { code: "en", label: "English", short: "EN", html: "en" },
  { code: "fil", label: "Filipino", short: "PH", html: "fil" },
  { code: "ms", label: "Melayu", short: "MY", html: "ms" },
  { code: "th", label: "ไทย", short: "TH", html: "th" },
  { code: "vi", label: "Tiếng Việt", short: "VN", html: "vi" },
  { code: "pt", label: "Português", short: "BR", html: "pt-BR" },
  { code: "es", label: "Español", short: "ES", html: "es" },
];

// Flat flags as inline SVG, so they look the same on every OS.
// Windows renders emoji flags as bare letters, so images are used instead.
const FLAGS = {
  id: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='8' fill='%23ce1126'/><rect y='8' width='24' height='8' fill='%23fff'/></svg>",
  en: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23012169'/><path d='M0 0l24 16M24 0L0 16' stroke='%23fff' stroke-width='3.2'/><path d='M0 0l24 16M24 0L0 16' stroke='%23c8102e' stroke-width='1.9'/><path d='M12 0v16M0 8h24' stroke='%23fff' stroke-width='5.3'/><path d='M12 0v16M0 8h24' stroke='%23c8102e' stroke-width='3.2'/></svg>",
  fil: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='8' fill='%230038a8'/><rect y='8' width='24' height='8' fill='%23ce1126'/><path d='M0 0l13.9 8L0 16z' fill='%23fff'/><circle cx='4.2' cy='8' r='2.2' fill='%23fcd116'/></svg>",
  ms: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23fff'/><path d='M0 1.14h24M0 3.43h24M0 5.71h24M0 8h24M0 10.29h24M0 12.57h24M0 14.86h24' stroke='%23cc0001' stroke-width='1.14'/><rect width='12' height='9.14' fill='%23010066'/><circle cx='5' cy='4.57' r='3.2' fill='%23fc0'/><circle cx='6' cy='4.57' r='2.6' fill='%23010066'/><circle cx='9' cy='4.57' r='1.3' fill='%23fc0'/></svg>",
  th: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23a51931'/><rect y='2.67' width='24' height='10.67' fill='%23f4f5f8'/><rect y='5.33' width='24' height='5.33' fill='%232d2a4a'/></svg>",
  vi: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23da251d'/><path d='M12 3.2l1.13 3.47h3.65l-2.95 2.15 1.13 3.47L12 10.14l-2.96 2.15 1.13-3.47-2.95-2.15h3.65z' fill='%23ff0'/></svg>",
  pt: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23009b3a'/><path d='M12 2l9.5 6L12 14 2.5 8z' fill='%23fedf00'/><circle cx='12' cy='8' r='3.5' fill='%23002776'/></svg>",
  es: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23aa151b'/><rect y='4' width='24' height='8' fill='%23f1bf00'/></svg>",
};

const flagImg = (code) =>
  `<img class="flag" alt="" width="24" height="16" src="data:image/svg+xml,${FLAGS[code].replace(/'/g, "%27").replace(/</g, "%3C").replace(/>/g, "%3E")}" />`;

const LANG_KEY = "lockps-lang";
const getLang = () => {
  const saved = localStorage.getItem(LANG_KEY);
  return LANGS.some((l) => l.code === saved) ? saved : "id";
};

// Rules live in script.js's data object; i18n overrides them per language.
// Indonesian dictionary is read from the page itself, so the default needs no download.
function readPageDictionary() {
  const dict = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (!(el.dataset.i18n in dict)) dict[el.dataset.i18n] = el.innerHTML.trim().replace(/\s+/g, " ");
  });
  return dict;
}

async function loadDictionary(code) {
  if (I18N[code]) return I18N[code];
  const res = await fetch(`lang/${code}.json?v=${I18N_VERSION}`);
  if (!res.ok) throw new Error(`lang/${code}.json: ${res.status}`);
  I18N[code] = await res.json();
  return I18N[code];
}

async function setLang(code) {
  try {
    const dict = await loadDictionary(code);
    // Missing keys fall back to Indonesian, so a half-done dictionary never blanks text
    applyLang(code, { ...I18N.id, ...dict });
  } catch (err) {
    console.warn("Language load failed, staying on Indonesian:", err);
    if (code !== "id") setLang("id");
  }
}

// Questrial has no Thai letters; load a Thai font only when Thai is picked
function ensureFont(code) {
  if (code !== "th" || document.getElementById("font-th")) return;
  const link = Object.assign(document.createElement("link"), {
    id: "font-th",
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@400;600;700&display=swap",
  });
  document.head.appendChild(link);
}

function applyLang(code, dict) {
  ensureFont(code);
  document.documentElement.lang = (LANGS.find((l) => l.code === code) || LANGS[0]).html;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text != null) el.innerHTML = text;
  });

  const rulesList = document.getElementById("rules-list");
  if (rulesList && Array.isArray(dict.rules)) {
    rulesList.innerHTML = dict.rules
      .map((r) => `<li>${String(r).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]))}</li>`)
      .join("");
  }

  // Labels that live in attributes, not text
  const music = document.getElementById("music-btn");
  if (music) {
    music.setAttribute("aria-label", dict.music);
    music.setAttribute("title", `${dict.music} on/off`);
  }
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", open ? dict.menu_close : dict.menu_open);
  }
  // script.js reads these for the copy-button feedback
  window.LOCKPS_COPY_MSG = { ok: dict.copied, fail: dict.copy_fail };
  window.LOCKPS_MENU_LABEL = { open: dict.menu_open, close: dict.menu_close };

  const btn = document.getElementById("lang-btn");
  if (btn) {
    const cur = LANGS.find((l) => l.code === code) || LANGS[0];
    btn.innerHTML = `${flagImg(cur.code)}<span class="lang-short">${cur.short}</span>`;
    btn.setAttribute("aria-label", `${dict.lang}: ${cur.label}`);
    btn.setAttribute("title", dict.lang);
  }
  document.querySelectorAll("#lang-menu [data-lang]").forEach((item) => {
    item.setAttribute("aria-checked", String(item.dataset.lang === code));
  });
}

function buildLangPicker() {
  const nav = document.querySelector(".nav");
  if (!nav || document.getElementById("lang-wrap")) return;

  const wrap = document.createElement("div");
  wrap.className = "lang-wrap";
  wrap.id = "lang-wrap";
  wrap.innerHTML =
    `<button type="button" class="lang-btn" id="lang-btn" aria-haspopup="true" aria-expanded="false" aria-controls="lang-menu"></button>` +
    `<div class="lang-menu" id="lang-menu" role="menu" hidden>` +
    LANGS.map(
      (l) =>
        `<button type="button" role="menuitemradio" aria-checked="false" data-lang="${l.code}" lang="${l.html}">${flagImg(l.code)}<span>${l.label}</span></button>`
    ).join("") +
    `</div>`;

  const musicBtn = document.getElementById("music-btn");
  nav.insertBefore(wrap, musicBtn || null);

  const btn = wrap.querySelector("#lang-btn");
  const menu = wrap.querySelector("#lang-menu");
  const setOpen = (open) => {
    menu.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    setOpen(menu.hidden);
  });
  menu.addEventListener("click", (e) => {
    const item = e.target.closest("[data-lang]");
    if (!item) return;
    localStorage.setItem(LANG_KEY, item.dataset.lang);
    setLang(item.dataset.lang);
    setOpen(false);
    btn.focus();
  });
  document.addEventListener("click", (e) => {
    if (!wrap.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) {
      setOpen(false);
      btn.focus();
    }
  });
}

// Indonesian (default) comes from the page plus lang/id.json for rules and UI messages
I18N.id = readPageDictionary();
buildLangPicker();
fetch(`lang/id.json?v=${I18N_VERSION}`)
  .then((r) => (r.ok ? r.json() : {}))
  .then((d) => Object.assign(I18N.id, d))
  .catch(() => {})
  .finally(() => setLang(getLang()));
