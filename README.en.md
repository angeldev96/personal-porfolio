# Angel Valladares — Personal Portfolio (Codebase)

This repository holds the source for Angel Valladares' personal portfolio — a fast, SEO-friendly web CV designed to showcase experience, projects, certifications and provide clear contact channels (including Upwork profile).

---

Live demo: https://angelvalladares.dev (configurable via `NEXT_PUBLIC_SITE_URL`)

## What this repo contains (for employers)
- A modern portfolio with multi-language support (English/Spanish).
- Sections: About, Projects, Certificates, Upwork-focused summary, contact links.
- Implemented to make it easy to evaluate freelance experience and hire directly or via Upwork.

## Tech stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript + React
- Styling: Tailwind CSS
- UI: lightweight component primitives (Card, Button, Badge, Avatar)
- Integrations: optional Vercel Analytics, Open Graph image generation

## Project structure
- `src/app`: App Router pages and locale layouts (`[locale]`).
- `src/data/resume-data.tsx`: single source of truth for resume content (name, work, projects, certificates).
- `src/i18n`: `dictionary.ts` contains translations/labels for `en` and `es`.
- `src/components`: reusable components used across pages.
- `public/` and `src/images/logos/`: static assets and logos.

## SEO & i18n highlights
- Centralized metadata (title, description, Open Graph, Twitter) in `src/app/layout.tsx`.
- JSON-LD (Person and WebSite) added to improve search presence.
- Locale-aware routes (`/en`, `/es`) and middleware (`middleware.ts`) that persist the locale in a cookie.

## Image optimization
- Uses `next/image` for screenshots and gallery images. `next.config.js` includes `images.remotePatterns` for Cloudinary and GitHub avatars.
- Favicon served from `public/favicon.ico` (configured in metadata).

## Notable recent updates
- Replaced raw `<img>` tags with `next/image` to improve LCP and bandwidth usage.
- Improved spacing and layout for the Certificates page.
- Replaced portfolio link in header/command menu with Upwork profile link when available.
- SEO improvements to target "Freelancer Full-Stack in Honduras." 

## Run locally
Requirements: Node 18+.

```bash
npm install
npm run dev    # development (http://localhost:3000)
npm run build  # production build
npm run start  # serve production build
```

Environment variables:
- `NEXT_PUBLIC_SITE_URL` — public site URL used in metadata
- `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS` — set `true` to enable Vercel Analytics

## Lint & build checks
- `next build` runs TypeScript checks and lint; run `npm run lint` locally to inspect issues.

## Deployment
- Intended for Vercel deployment (App Router support). Set `NEXT_PUBLIC_SITE_URL` in production environment.

## Updating content
- Edit `src/data/resume-data.tsx` to change CV content (projects, certifications, contact).
- Edit `src/i18n/dictionary.ts` to modify translations and labels.

## Recommendations for SEO
- Keep descriptions concise and include keywords (e.g., "Freelancer Honduras, Full-Stack Developer, Next.js, Node.js").
- Keep Open Graph image up-to-date for social sharing.

## Contact
- Public email: arivalladares2.0@gmail.com
- Upwork: https://www.upwork.com/freelancers/~0116803452ac7b4ff7

---
License: MIT (see `LICENSE`)

If you want, I can also add CI (GitHub Actions) that runs `npm run build` and `npm run lint` on PRs.
