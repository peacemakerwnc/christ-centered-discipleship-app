# Peacemakers

A static PWA: daily Catholic discipleship for fathers (2026 liturgical content).

## Entry point

- **`index.html`** — canonical app. Deploy the **repository root** as the static site root so `./manifest.json`, `./assets/`, and `./daily-content-2026.js` resolve correctly.
- **`christ-centered-discipleship-app.html`** — redirects to `./index.html` (legacy URL only).

## Deploy to Railway (GitHub)

1. Push this repo to GitHub.
2. In [Railway](https://railway.app), **New Project** → **Deploy from GitHub** → select the repo.
3. Use a **static** or **Nixpacks** service that serves the repo root over HTTPS (no Node server required for the app itself). Set the **publish / root directory** to the project root (where `index.html` lives).
4. Open the generated HTTPS URL on your phone.

If your platform asks for a **start command**, use a static file server that serves the current directory (for example `npx --yes serve -s . -l $PORT` only if the template requires a process; many static hosts need no command).

## Install on a phone

- **iPhone:** Safari → Share → **Add to Home Screen**.
- **Android:** Chrome → menu (⋮) → **Install app** or **Add to Home screen**.

## Files

| File | Role |
|------|------|
| `index.html` | App shell |
| `daily-content-2026.js` | Daily content |
| `manifest.json` | PWA manifest |
| `assets/icon-192.png`, `assets/icon-512.png` | Icons |

## Notes

- No backend; no `localStorage` / `sessionStorage` in the app shell.
- Requires **HTTPS** for install / home-screen in production.
