# Vethathiri Maharishi Spiritual Village — Landing Page

React + Vite landing page with scroll-driven animations (Framer Motion), optimized assets, and a calm spiritual + nature visual system.

## Run locally

Use **Node.js 20+** (22 recommended). From the repo root (where `package.json` lives):

```bash
git checkout main   # landing page is on main after merge
npm install
npm run dev
```

Then open **http://localhost:5173** (not https).

You should see Vite print:

```text
  ➜  Local:   http://localhost:5173/
```

### If localhost does not open

1. **Wrong folder** — run commands in the project root (same folder as `package.json`), not only the git root if you use a monorepo layout.
2. **Dev server not running** — leave `npm run dev` running in a terminal; closing it stops the site.
3. **Port in use** — try `npm run dev -- --port 5174` and open http://localhost:5174
4. **Old branch** — if you only see a one-line README, run `git pull` and ensure you are on `main` (or branch `cursor/spiritual-landing-8f9e`).
5. **Install failed** — delete `node_modules`, run `npm install` again, then `npm run dev`.

Production-style preview (after build):

```bash
npm run build
npm run preview
```

Open [http://localhost:4173](http://localhost:4173).

## Production build

```bash
npm run build
npm run preview
```

## Stack

- React 19 + TypeScript
- Vite 8
- Framer Motion (lazy chunk for animation library)
- Google Fonts: Cormorant Garamond + DM Sans
