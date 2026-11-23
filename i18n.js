// ===== Lock PS translations =====
// Keys match data-i18n="..." in index.html. Values may contain <strong>/<em>.
// Default language: Indonesian (id).
const I18N = {
  id: {
    nav_play: "Cara Main", nav_comm: "Komunitas", nav_rules: "Peraturan",
    h_play: "Cara Main", opt1: "Opsi 1: Lock PS APK", rec: "Rekomendasi",
    hint1: "Lock PS APK adalah Growtopia clone yang <strong>langsung connect</strong> ke Lock PS. <strong>Tidak perlu</strong> PowerTunnel atau Virtual Host.",
    s1: "Download Lock PS APK", b_download_lock_ps_apk: "Download Lock PS APK",
    s2: "Pasang APK", d3: "Buka file APK lalu install. Jika diminta, izinkan install dari sumber ini.",
    s4: "Main", d5: "Buka Lock PS APK lalu klik Play. Selesai!",
    opt2: "Opsi 2: Growtopia Asli + PowerTunnel",
    hint2: "Hanya jika kamu ingin main pakai <strong>APK Growtopia asli</strong>. Butuh PowerTunnel / Virtual Host.",
    s6: "Pasang Growtopia (Support GTPS)", b_download_gt_v5_58_support_gtps: "Download GT V5.58 Support GTPS",
    s7: "Pasang PowerTunnel", d8: "Download APK lalu install.", b_download_power_tunnel_apk: "Download Power Tunnel APK",
    s9: "Atur Host Settings", d10: "Buka PowerTunnel → ☰ → Host Settings → Host list URL.",
    s11: "Tempel URL", d12: "Copy URL ini lalu paste ke PowerTunnel:", c_copy_url: "Salin URL",
    s13: "Mulai", d14: "Set Update period ke <em>On start</em>, lalu tekan Start.",
    vhost: "Kalau URL gagal, pakai file Virtual Host:", b_download_virtual_host_file: "Download File Virtual Host",
    s15: "Buka Growtopia", d16: "Buka Growtopia lalu klik Play.",
    hint3: "<strong>Growtopia v5.59+</strong> butuh certificate. Install hanya dari link resmi di bawah.",
    s17: "Download Certificate", d18: "Buka link ini di Safari. iOS akan bilang profile sudah di-download.",
    c_copy_certificate_url: "Salin URL Certificate",
    s19: "Pasang Profile", d20: "Settings → General → VPN &amp; Device Management → pilih profile → Install.",
    s21: "Aktifkan Full Trust", d22: "Settings → General → About → Certificate Trust Settings → aktifkan Root CA.",
    s23: "Pasang Surge 5", d24: "Download dan install Surge 5 dari App Store.",
    s25: "Import Profile", d26: "Buka Default.conf → IMPORT → Download Profile from URL.",
    s27: "Tempel URL &amp; Setup", d28: "Paste URL ini ke Surge, tap SETUP, lalu allow VPN profile.",
    s29: "Buka Growtopia", d30: "Buka Growtopia lalu klik Play.",
    s31: "Pasang Growtopia (Support GTPS)", b_download_gt_v5_57_support_gtps_windows: "Download GT V5.57 Support GTPS (Windows)",
    s32: "Download Certificate", b_download_lock_ps_root_ca: "Download Lock PS Root CA",
    s33: "Pasang Certificate", d34: "Double-click file → Install Certificate → pilih <em>Local Machine</em>.",
    s35: "Pilih Trusted Root Store", d36: "Pilih \"Place all certificates in the following store\" → <em>Trusted Root Certification Authorities</em>.",
    s37: "Buka Notepad sebagai Administrator",
    s38: "Buka file hosts", d39: "File → Open, lalu buka:",
    s40: "Tambahkan entri", d41: "Paste di paling bawah, lalu Save (Ctrl + S).", c_copy_hosts: "Salin Hosts",
    s42: "Buka Growtopia", d43: "Buka Growtopia lalu klik Play.",
    s44: "Download Certificate",
    s45: "Tambahkan ke Keychain", d46: "Buka certificate dengan Keychain Access, tambahkan ke keychain <em>System</em>.",
    s47: "Aktifkan Trust", d48: "Double-click certificate → Trust → \"When using this certificate\" → <em>Always Trust</em>.",
    s49: "Buka Terminal", d50: "Buka Terminal lewat Spotlight.",
    s51: "Edit file hosts", d52: "Jalankan:",
    s53: "Tambahkan entri", d54: "Paste di paling bawah, lalu save dengan Ctrl+X, Y, Enter.",
    s55: "Buka Growtopia", d56: "Buka Growtopia lalu klik Play.",
    h_comm: "Komunitas Kami", wa: "Join grup WhatsApp", dc: "Join server Discord", h_rules: "Peraturan",
    copied: "Tersalin!", copy_fail: "Gagal menyalin", menu_open: "Buka menu", menu_close: "Tutup menu", music: "Musik", lang: "Bahasa",
    rules: [
      "Dilarang scam / menipu sesama player.",
      "Dilarang toxic, SARA, dan spam di broadcast.",
      "Dilarang menggunakan bug/exploit — laporkan ke staff.",
      "Dilarang jual-beli akun atau item dengan uang asli.",
      "Hormati staff dan sesama player.",
      "Pelanggaran dapat dikenakan ban tanpa peringatan.",
    ],
  },
  en: {
    nav_play: "How to Play", nav_comm: "Community", nav_rules: "Rules",
    h_play: "How to Play", opt1: "Option 1: Lock PS APK", rec: "Recommended",
    hint1: "Lock PS APK is a Growtopia clone that <strong>connects straight</strong> to Lock PS. <strong>No need</strong> for PowerTunnel or Virtual Host.",
    s1: "Download Lock PS APK", b_download_lock_ps_apk: "Download Lock PS APK",
    s2: "Install the APK", d3: "Open the APK file and install it. If asked, allow installs from this source.",
    s4: "Play", d5: "Open Lock PS APK and tap Play. Done!",
    opt2: "Option 2: Original Growtopia + PowerTunnel",
    hint2: "Only if you want to play with the <strong>original Growtopia APK</strong>. Needs PowerTunnel / Virtual Host.",
    s6: "Install Growtopia (GTPS Support)", b_download_gt_v5_58_support_gtps: "Download GT V5.58 GTPS Support",
    s7: "Install PowerTunnel", d8: "Download the APK and install it.", b_download_power_tunnel_apk: "Download Power Tunnel APK",
    s9: "Configure Host Settings", d10: "Open PowerTunnel → ☰ → Host Settings → Host list URL.",
    s11: "Paste the URL", d12: "Copy this URL and paste it into PowerTunnel:", c_copy_url: "Copy URL",
    s13: "Start", d14: "Set Update period to <em>On start</em>, then tap Start.",
    vhost: "If the URL fails, use the Virtual Host file:", b_download_virtual_host_file: "Download Virtual Host File",
    s15: "Launch Growtopia", d16: "Open Growtopia and tap Play.",
    hint3: "<strong>Growtopia v5.59+</strong> needs a certificate. Only install it from the official link below.",
    s17: "Download the Certificate", d18: "Open this link in Safari. iOS will say the profile was downloaded.",
    c_copy_certificate_url: "Copy Certificate URL",
    s19: "Install the Profile", d20: "Settings → General → VPN &amp; Device Management → choose the profile → Install.",
    s21: "Enable Full Trust", d22: "Settings → General → About → Certificate Trust Settings → turn on the Root CA.",
    s23: "Install Surge 5", d24: "Download and install Surge 5 from the App Store.",
    s25: "Import the Profile", d26: "Open Default.conf → IMPORT → Download Profile from URL.",
    s27: "Paste URL &amp; Set Up", d28: "Paste this URL into Surge, tap SETUP, then allow the VPN profile.",
    s29: "Launch Growtopia", d30: "Open Growtopia and tap Play.",
    s31: "Install Growtopia (GTPS Support)", b_download_gt_v5_57_support_gtps_windows: "Download GT V5.57 GTPS Support (Windows)",
    s32: "Download the Certificate", b_download_lock_ps_root_ca: "Download Lock PS Root CA",
    s33: "Install the Certificate", d34: "Double-click the file → Install Certificate → choose <em>Local Machine</em>.",
    s35: "Choose the Trusted Root Store", d36: "Choose \"Place all certificates in the following store\" → <em>Trusted Root Certification Authorities</em>.",
    s37: "Run Notepad as Administrator",
    s38: "Open the hosts file", d39: "File → Open, then open:",
    s40: "Add the entries", d41: "Paste at the very bottom, then Save (Ctrl + S).", c_copy_hosts: "Copy Hosts",
    s42: "Launch Growtopia", d43: "Open Growtopia and click Play.",
    s44: "Download the Certificate",
    s45: "Add to Keychain", d46: "Open the certificate with Keychain Access and add it to the <em>System</em> keychain.",
    s47: "Enable Trust", d48: "Double-click the certificate → Trust → \"When using this certificate\" → <em>Always Trust</em>.",
    s49: "Open Terminal", d50: "Open Terminal through Spotlight.",
    s51: "Edit the hosts file", d52: "Run:",
    s53: "Add the entries", d54: "Paste at the very bottom, then save with Ctrl+X, Y, Enter.",
    s55: "Launch Growtopia", d56: "Open Growtopia and click Play.",
    h_comm: "Our Community", wa: "Join the WhatsApp group", dc: "Join the Discord server", h_rules: "Rules",
    copied: "Copied!", copy_fail: "Copy failed", menu_open: "Open menu", menu_close: "Close menu", music: "Music", lang: "Language",
    rules: [
      "No scamming or cheating other players.",
      "No toxicity, hate speech or spam in broadcasts.",
      "No using bugs/exploits. Report them to staff.",
      "No buying or selling accounts or items for real money.",
      "Respect staff and other players.",
      "Breaking the rules can get you banned without warning.",
    ],
  },
  fil: {
    nav_play: "Paano Maglaro", nav_comm: "Komunidad", nav_rules: "Mga Patakaran",
    h_play: "Paano Maglaro", opt1: "Opsyon 1: Lock PS APK", rec: "Inirerekomenda",
    hint1: "Ang Lock PS APK ay Growtopia clone na <strong>diretsong kumokonekta</strong> sa Lock PS. <strong>Hindi na kailangan</strong> ng PowerTunnel o Virtual Host.",
    s1: "I-download ang Lock PS APK", b_download_lock_ps_apk: "I-download ang Lock PS APK",
    s2: "I-install ang APK", d3: "Buksan ang APK file at i-install. Kung tanungin, payagan ang install mula sa source na ito.",
    s4: "Maglaro", d5: "Buksan ang Lock PS APK at i-tap ang Play. Tapos na!",
    opt2: "Opsyon 2: Orihinal na Growtopia + PowerTunnel",
    hint2: "Kung gusto mo lang maglaro gamit ang <strong>orihinal na Growtopia APK</strong>. Kailangan ng PowerTunnel / Virtual Host.",
    s6: "I-install ang Growtopia (GTPS Support)", b_download_gt_v5_58_support_gtps: "I-download ang GT V5.58 GTPS Support",
    s7: "I-install ang PowerTunnel", d8: "I-download ang APK at i-install.", b_download_power_tunnel_apk: "I-download ang Power Tunnel APK",
    s9: "I-set up ang Host Settings", d10: "Buksan ang PowerTunnel → ☰ → Host Settings → Host list URL.",
    s11: "I-paste ang URL", d12: "Kopyahin ang URL na ito at i-paste sa PowerTunnel:", c_copy_url: "Kopyahin ang URL",
    s13: "Simulan", d14: "Itakda ang Update period sa <em>On start</em>, tapos i-tap ang Start.",
    vhost: "Kung pumalya ang URL, gamitin ang Virtual Host file:", b_download_virtual_host_file: "I-download ang Virtual Host File",
    s15: "Buksan ang Growtopia", d16: "Buksan ang Growtopia at i-tap ang Play.",
    hint3: "Kailangan ng certificate ang <strong>Growtopia v5.59+</strong>. I-install lang mula sa opisyal na link sa ibaba.",
    s17: "I-download ang Certificate", d18: "Buksan ang link na ito sa Safari. Sasabihin ng iOS na na-download na ang profile.",
    c_copy_certificate_url: "Kopyahin ang Certificate URL",
    s19: "I-install ang Profile", d20: "Settings → General → VPN &amp; Device Management → piliin ang profile → Install.",
    s21: "I-enable ang Full Trust", d22: "Settings → General → About → Certificate Trust Settings → i-on ang Root CA.",
    s23: "I-install ang Surge 5", d24: "I-download at i-install ang Surge 5 mula sa App Store.",
    s25: "I-import ang Profile", d26: "Buksan ang Default.conf → IMPORT → Download Profile from URL.",
    s27: "I-paste ang URL at I-setup", d28: "I-paste ang URL na ito sa Surge, i-tap ang SETUP, tapos payagan ang VPN profile.",
    s29: "Buksan ang Growtopia", d30: "Buksan ang Growtopia at i-tap ang Play.",
    s31: "I-install ang Growtopia (GTPS Support)", b_download_gt_v5_57_support_gtps_windows: "I-download ang GT V5.57 GTPS Support (Windows)",
    s32: "I-download ang Certificate", b_download_lock_ps_root_ca: "I-download ang Lock PS Root CA",
    s33: "I-install ang Certificate", d34: "I-double-click ang file → Install Certificate → piliin ang <em>Local Machine</em>.",
    s35: "Piliin ang Trusted Root Store", d36: "Piliin ang \"Place all certificates in the following store\" → <em>Trusted Root Certification Authorities</em>.",
    s37: "Patakbuhin ang Notepad bilang Administrator",
    s38: "Buksan ang hosts file", d39: "File → Open, tapos buksan ang:",
    s40: "Idagdag ang mga entry", d41: "I-paste sa pinakababa, tapos i-Save (Ctrl + S).", c_copy_hosts: "Kopyahin ang Hosts",
    s42: "Buksan ang Growtopia", d43: "Buksan ang Growtopia at i-click ang Play.",
    s44: "I-download ang Certificate",
    s45: "Idagdag sa Keychain", d46: "Buksan ang certificate gamit ang Keychain Access at idagdag sa <em>System</em> keychain.",
    s47: "I-enable ang Trust", d48: "I-double-click ang certificate → Trust → \"When using this certificate\" → <em>Always Trust</em>.",
    s49: "Buksan ang Terminal", d50: "Buksan ang Terminal gamit ang Spotlight.",
    s51: "I-edit ang hosts file", d52: "Patakbuhin:",
    s53: "Idagdag ang mga entry", d54: "I-paste sa pinakababa, tapos i-save gamit ang Ctrl+X, Y, Enter.",
    s55: "Buksan ang Growtopia", d56: "Buksan ang Growtopia at i-click ang Play.",
    h_comm: "Ang Aming Komunidad", wa: "Sumali sa WhatsApp group", dc: "Sumali sa Discord server", h_rules: "Mga Patakaran",
    copied: "Nakopya!", copy_fail: "Hindi nakopya", menu_open: "Buksan ang menu", menu_close: "Isara ang menu", music: "Musika", lang: "Wika",
    rules: [
      "Bawal mang-scam o manloko ng ibang player.",
      "Bawal ang toxic, hate speech at spam sa broadcast.",
      "Bawal gumamit ng bug/exploit. I-report sa staff.",
      "Bawal magbenta o bumili ng account o item gamit ang totoong pera.",
      "Igalang ang staff at kapwa player.",
      "Ang paglabag ay puwedeng magresulta sa ban nang walang babala.",
    ],
  },
};
// ===== Language switcher =====
// Indonesian is the default. Choice is kept in localStorage.
const LANGS = [
  { code: "id", label: "Indonesia", short: "ID", html: "id" },
  { code: "en", label: "English", short: "EN", html: "en" },
  { code: "fil", label: "Filipino", short: "PH", html: "fil" },
];

// Flat flags as inline SVG, so they look the same on every OS.
// Windows renders emoji flags as bare letters, so images are used instead.
const FLAGS = {
  id: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='8' fill='%23ce1126'/><rect y='8' width='24' height='8' fill='%23fff'/></svg>",
  en: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='16' fill='%23012169'/><path d='M0 0l24 16M24 0L0 16' stroke='%23fff' stroke-width='3.2'/><path d='M0 0l24 16M24 0L0 16' stroke='%23c8102e' stroke-width='1.9'/><path d='M12 0v16M0 8h24' stroke='%23fff' stroke-width='5.3'/><path d='M12 0v16M0 8h24' stroke='%23c8102e' stroke-width='3.2'/></svg>",
  fil: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 16'><rect width='24' height='8' fill='%230038a8'/><rect y='8' width='24' height='8' fill='%23ce1126'/><path d='M0 0l13.9 8L0 16z' fill='%23fff'/><circle cx='4.2' cy='8' r='2.2' fill='%23fcd116'/></svg>",
};

const flagImg = (code) =>
  `<img class="flag" alt="" width="24" height="16" src="data:image/svg+xml,${FLAGS[code].replace(/'/g, "%27").replace(/</g, "%3C").replace(/>/g, "%3E")}" />`;

const LANG_KEY = "lockps-lang";
const getLang = () => {
  const saved = localStorage.getItem(LANG_KEY);
  return LANGS.some((l) => l.code === saved) ? saved : "id";
};

// Rules live in script.js's data object; i18n overrides them per language.
function applyLang(code) {
  const dict = I18N[code] || I18N.id;
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
    applyLang(item.dataset.lang);
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

buildLangPicker();
applyLang(getLang());
