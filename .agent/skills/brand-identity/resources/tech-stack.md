# Tech Stack — Garazen Auto Website

## Core
- **Framework:** React 19 (via ESM imports from esm.sh)
- **Build:** Vite (dev server + production builds)
- **Language:** TypeScript (.tsx components)
- **Styling:** Tailwind CSS (CDN runtime config in index.html)

## Key Libraries
| Library | Version | Purpose |
|---|---|---|
| `framer-motion` | ^12.34.0 | Animations, transitions, gestures |
| `lucide-react` | ^0.564.0 | Icon system (SVG, tree-shakeable) |
| `clsx` | ^2.1.1 | Conditional classnames |
| `tailwind-merge` | ^3.4.0 | Smart className merging |

## Architecture
- Single-page application (SPA)
- Component-based: `/components/` (features) + `/components/ui/` (primitives)
- Context API for state (`/context/BookingContext.tsx`)
- Constants file for all content/data (`/constants.tsx`)
- Types in `/types.ts`

## Hosting
- Static site — can be deployed to Vercel, Netlify, or any CDN
- No server-side rendering (CSR only)
- Import maps in `index.html` for module resolution
