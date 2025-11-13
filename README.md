# NFT Marketplace (React + TypeScript + Vite)

🌐 **Live Demo:** [swarm-test-three.vercel.app](https://swarm-test-three.vercel.app/)

A lightweight NFT marketplace UI scaffold built with React 19, TypeScript, Vite, Tailwind CSS (v4), Redux Toolkit, and React Router. It includes a simple home page hero with a 3D preview using react-three-fiber/drei and a scalable, feature‑first project structure.

## Setup Instructions

Prerequisites

- Node.js 18+ (recommended 20 LTS)
- npm (comes with Node)

Install & run

- Clone the repo and `cd nft-marketplace`
- Install deps: `npm install`
- Start dev server: `npm run dev`
- Lint code: `npm run lint`
- Build for production: `npm run build`
- Preview production build: `npm run preview`

Project structure

- App root: `nft-marketplace/`
- Source: `src/` with the following organization:
  - `app/` Redux store and typed hooks
  - `features/` RTK slices by domain (e.g., `nft/`, `user/`)
  - `pages/` routed views (e.g., `pages/Home/index.tsx`)
  - `components/` shared UI, `hooks/` custom hooks
  - `services/` API clients; `lib/` config/constants/helpers
  - `styles/` global styles and design tokens
  - `assets/` static assets (icons/images)
- Build output: `dist/`. Static public files: `public/`.

Tailwind usage notes

- Tailwind v4 via `@tailwindcss/vite` with global tokens in CSS variables.
- To satisfy linters, prefer canonical arbitrary syntax:
  - Use `bg-(--color-background)` instead of `bg-[var(--color-background)]`.
  - Use `text-white!` rather than `!text-white`.

## Tech Decisions & Trade‑offs

- Created a minimal Redux example, though it's not actively used

## Improvements With More Time

- Complete UI component slicing
- Improve responsiveness across devices
- Mock API integration
  - Replace placeholder `/nfts` call with mock API.
- Performance
  - Lazy‑load the 3D hero and heavy routes; implement route‑level code splitting and prefetching.
- UX & accessibility
  - Skeletons/placeholders for loading; consistent empty/error states.
- Testing
  - Add Vitest + React Testing Library unit tests for slices, selectors, and UI.

---

If you have questions or want me to prioritize any of the improvements above, let me know and I’ll plan the next steps.
