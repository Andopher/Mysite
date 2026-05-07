# chrisrisio.com

Personal site. Next.js 15, TypeScript, Tailwind v4, Framer Motion, Lenis.
Static export, no backend. Deploys to Vercel with zero config.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customize (the parts you'll actually edit)

| File | What to change |
|---|---|
| `app/layout.tsx` | `<title>`, `<meta description>`, `metadataBase` URL |
| `app/components/Hero.tsx` | Tagline copy, location |
| `app/components/Work.tsx` | The `projects` and `experience` arrays |
| `app/components/About.tsx` | Bio paragraphs, four-column dl row |
| `app/components/Now.tsx` | The `items` array of what you're currently into |
| `app/components/Contact.tsx` | Email, GitHub, LinkedIn, calendar link |

## Deploy

Push to GitHub, import the repo on Vercel. No env vars required.

```bash
git add . && git commit -m "Initial site" && git push
```

## Stack

- **Next.js 16**, App Router, fully static
- **Tailwind v4**, design tokens in `app/globals.css`
- **Framer Motion** for page reveals, parallax, and the magnetic CTA
- **Lenis** for smooth scroll
- **Geist Sans/Mono + Instrument Serif** typography

## Design choices (so you don't accidentally undo them)

- **Monochrome with one accent** (`--accent` orange-rust, used for the section dot indicator and CTA hover only). Resist the urge to add more color.
- **One serif italic family** (Instrument Serif) used for emphasis. Never set whole sentences in italic.
- **Motion is restrained**: fade+blur reveals, parallax on hero, subtle 3D tilt on project cards. Avoid bouncy springs and rotating decorative elements.
- **No icon library**. The few arrows are unicode characters (`→ ↓ ↗`).
- **Type sizes use `clamp()`** so the site scales gracefully across viewports without breakpoint jank.
