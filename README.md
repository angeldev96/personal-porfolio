# Angel Valladares — Personal Portfolio

Source code for my personal portfolio and web CV: a fast, SEO-friendly, bilingual (English / Spanish) site that showcases my work experience, projects, certifications, blog, and development setup.

**Live:** [angelvalladares.dev](https://angelvalladares.dev)

---

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + React 18 |
| Styling | Tailwind CSS 3 |
| UI primitives | Radix UI + `class-variance-authority` (Card, Button, Badge, Avatar, Dialog, Command) |
| Command palette | `cmdk` (⌘K menu) |
| Drawer / print | `vaul` |
| Icons | `lucide-react` + custom social icons |
| Analytics | Vercel Analytics (opt-in) |
| Package manager | Bun (`bun.lock`) |
| Hosting | Vercel |

## Features

- **Bilingual (en / es)** — locale-prefixed routes (`/en`, `/es`), middleware redirect to the default locale, and a `NEXT_LOCALE` cookie. UI labels live in `src/i18n/dictionary.ts`.
- **Dark / light theme** — class-based theme switch via `theme-provider` with a toggle, no flash on load.
- **Command menu** — `⌘K` palette for quick navigation and links.
- **SEO** — centralized metadata, JSON-LD (`Person` + `WebSite`), dynamic Open Graph image, `robots.ts`, and `sitemap.ts`.
- **Optimized images** — `next/image` with remote patterns allowed for Cloudinary and GitHub avatars.
- **Print / PDF friendly** — a drawer-based print flow for exporting the CV.

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root metadata, fonts, theme, analytics
│   ├── opengraph-image.tsx     # Dynamic OG image
│   ├── robots.ts / sitemap.ts  # SEO endpoints
│   ├── components/             # Page sections (Header, Summary, WorkExperience, Skills, Projects, Certificates, BlogSection, Education)
│   └── [locale]/
│       ├── page.tsx            # Home (about, work, skills, projects, certificates)
│       ├── projects/[slug]/    # Project detail
│       ├── certificates/       # Certificates page
│       ├── blog/ + blog/[slug] # Blog index + post
│       ├── setup/              # Hardware / software / platforms I use
│       └── upwork-summary/     # Freelance summary page
├── components/                 # Reusable UI (navbar, command-menu, theme/language toggles, print-drawer, ui/* primitives, icons/*)
├── data/
│   ├── resume-data.tsx         # Single source of truth: work, projects, certificates, skills, setup, education, contact (en + es)
│   └── blog-data.tsx           # Blog posts (en + es)
└── i18n/
    ├── config.ts               # Locales + helpers
    └── dictionary.ts           # UI labels / translations
```

## Running locally

Requires Node 18+ and [Bun](https://bun.sh).

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build (runs type + lint checks)
bun run start    # serve the production build
bun run lint     # lint only
```

> Using npm/yarn/pnpm instead of Bun also works — the scripts only call `next`.

## Environment variables

Set `NEXT_PUBLIC_SITE_URL` explicitly in production. The code falls back to the
correct domain, but defining it avoids any risk of indexing under the wrong host.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | **Set in production.** Public site URL for canonical links, Open Graph, sitemap, robots, and JSON-LD | `https://angelvalladares.dev` |
| `NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS` | Set to `true` to enable Vercel Analytics | _(disabled)_ |

## Updating content

All content is data-driven — no component edits needed for routine updates:

- **Resume content** (work, projects, certificates, skills, setup, education, contact) → `src/data/resume-data.tsx`
- **Blog posts** → `src/data/blog-data.tsx`
- **UI labels / translations** → `src/i18n/dictionary.ts`

Keep the `en` and `es` entries in sync when editing the data files.

## Deployment

Built for [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` in the production environment. A `Dockerfile` and `docker-compose.yaml` are also included for container-based hosting.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). This repo is a personal portfolio, so changes are mostly content updates in the data files.

## Contact

- **Email:** arivalladares2.0@gmail.com
- **GitHub:** [@angeldev96](https://github.com/angeldev96)
- **LinkedIn:** [Angel Valladares](https://www.linkedin.com/in/angel-valladares-422490159/)

## License

[MIT](LICENSE)
