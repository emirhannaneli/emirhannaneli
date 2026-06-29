# emirhannaneli — Personal Portfolio

The source for my personal portfolio at **[emirman.dev](https://emirman.dev)** — an editorial,
multilingual single-page site built with the App Router. Profile, skills, projects, experience
and the offered languages are all data-driven from a single config, so content changes never
require touching components.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-icons** for iconography
- **Vitest** for tests
- WebGL aurora hero, SVG-displacement liquid-glass UI, per-locale SEO (metadata, OpenGraph/Twitter
  cards, hreflang, sitemap, JSON-LD)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |
| `npm run test`  | Run the Vitest test suite            |

## Editing Content

Everything structural lives in **[`site.config.ts`](./site.config.ts)** — profile, social links,
skills, projects, experience, stats, nav and the languages the site ships in.

Translated text (headings, descriptions, taglines) lives per-language under `lib/content/<code>.ts`,
keyed by the ids defined in the config. Adding a project or skill is: add the entry in
`site.config.ts`, then add its text to each `lib/content/*` dictionary.

### Adding a language

1. Append the locale to `locales` in `site.config.ts`.
2. Create its dictionary at `lib/content/<code>.ts`.
3. Register it in `lib/content/index.ts`.

The default locale is served at `/`; others are served at `/<code>` (e.g. `/tr`).

## Docker

A multi-stage, standalone Dockerfile is included:

```bash
docker build -t emirhannaneli .
docker run -p 3000:3000 emirhannaneli
```

## Deployment

Deployed on [Vercel](https://vercel.com). Pushes to `main` trigger a production build.
