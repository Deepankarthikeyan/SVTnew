# Vethathiri Maharishi Spiritual Village

Production-quality React + Vite website recreating the Spiritual Based Life Living reference layout.

## Stack

- React 19 + TypeScript + Vite 8
- Framer Motion (scroll reveal, hero entrance, card hover)
- Lucide React icons
- CSS design system (`src/index.css`) aligned to the reference palette

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/sections/` — page sections (Hero, About, Practices, …)
- `src/components/cards/` — Practice and Dimension cards
- `src/context/EnquireContext.tsx` — enquiry modal (validated form → mailto)
- `src/data/content.ts` — section content arrays

## Enquiries

CTAs open a validated enquiry form. On submit, the user's email client opens with a pre-filled message to `enquire@spiritualvillage.org` (no backend required).
