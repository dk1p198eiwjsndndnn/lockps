# Lock PS website

Static site (HTML/CSS/JS, no build step). Live at https://www.lockps.online

## Local preview

```
python3 -m http.server 8080
```
Open http://localhost:8080 (Copy buttons need https or localhost.)

## Deploy to Vercel

1. Push this folder to a GitHub repo, then in Vercel: **Add New -> Project -> Import** the repo.
   Framework Preset: **Other**. Build command: none. Output directory: `.` (root).
   Or with the CLI: `npx vercel --prod` from this folder.
2. Vercel -> Project -> **Settings -> Domains** -> add `lockps.online` and `www.lockps.online`.
3. At your domain registrar, set DNS (or use the exact values Vercel shows):
   - `A` record, name `@`, value `76.76.21.21`
   - `CNAME` record, name `www`, value `cname.vercel-dns.com`
4. Vercel issues the HTTPS certificate automatically. The apex `lockps.online` redirects to `www.lockps.online` (set in Vercel Domains, not in `vercel.json`).

## After editing

Raise `?v=14` on `styles.css` and `script.js` in `index.html`; those files are cached for a year.

## Server host files

`host/android.txt` (PowerTunnel), `host/ios.conf` (Surge) and `host/lockps-root-ca.crt`.
The host files point to game server IP `5.39.13.23`. If it changes, update both host files and `ip` in `script.js`.

## Languages

Each language is a dictionary file in `lang/<code>.json` (id, en, fil, ms, th, vi, pt, es).
Keys match the `data-i18n="..."` attributes in `index.html`; `rules` is the Rules list.
Indonesian is the default. To add a language: copy `lang/en.json`, translate the values,
then add an entry to `LANGS` and `FLAGS` in `i18n.js`. Missing keys fall back to Indonesian.
After editing a dictionary, raise `I18N_VERSION` in `i18n.js` so browsers fetch the new file.
