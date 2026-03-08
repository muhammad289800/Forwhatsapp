# AGENTS.md

## Cursor Cloud specific instructions

### Repository structure

This repo uses **separate Git branches** (not directories) for its products:

- `origin/cursor/britt-tech-group-website-07a4` — **Britt Tech Group Website** (Next.js 14 / TypeScript / Tailwind CSS). This is the primary product.
- `origin/cursor/new-whatsapp-messaging-agent-0c45` — **WhatsApp Messaging Agent** (Node.js / whatsapp-web.js). Requires real WhatsApp QR authentication; cannot be tested headlessly.
- `main` — Empty skeleton (README only).

### Britt Tech Group Website

- **Dev server:** `npm run dev` (port 3000). No database, no backend API, no env vars required.
- **Lint:** `npm run lint` — pre-existing `react/no-unescaped-entities` errors exist in the codebase; lint exits non-zero but the dev server works fine.
- **Build:** `npm run build` — currently fails due to the same pre-existing lint errors (Next.js enforces ESLint during production builds). The dev server is unaffected.
- **Client Portal:** Mock auth at `/portal`. Demo credentials: `demo@test.com` / `password123`.
- **Contact form:** Client-side only (no backend wired up). Submission shows a success message locally.

### WhatsApp Messaging Agent

- Lives on its own branch. Requires `npm install` then `npm start`.
- Needs Chromium/Puppeteer system dependencies and a real WhatsApp account for QR scanning — not testable in a headless cloud environment.
