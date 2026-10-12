# Vethathiri Maharishi Spiritual Village — React Site

Full **React + Vite + TypeScript** landing page (coded components, not a flat image).

## Run

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Structure

| Path | Role |
|------|------|
| `src/App.tsx` | Page shell, nav, all sections |
| `src/components/sections/` | Hero, About, Practices, Dimensions, … |
| `src/components/cards/` | Practice & dimension cards |
| `src/data/content.ts` | Copy and image paths |
| `src/index.css` | Design system (cream / forest / orange) |
| `public/mockup/` | Reference artwork crops for hero & portrait |

## Stack

React 19, Framer Motion, Lucide React, enquiry modal (`mailto`).

## Optional mockup-only view

`src/components/MockupExactPage.tsx` stacks the raw design JPEG (pixel-perfect static). The default app uses **React sections** instead.
