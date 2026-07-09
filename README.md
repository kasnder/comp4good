# Computing 4 Good (Comp4Good)

The umbrella site for Comp4Good, the interdisciplinary research team at Maastricht
University's Law & Tech Lab behind [RegTech4AI](https://regtech4ai.com),
[CoCoDa](https://snsf-cocoda.github.io) and [ReDD Focus](https://www.reddfocus.org).
A single-page [Astro](https://astro.build) static site sharing the design system of
[kollnig.net](https://kollnig.net) — Newsreader serif, paper/ink tokens, dark mode —
with its own deep-teal accent.

## Tech stack

- **Framework**: [Astro](https://astro.build) (static output, zero client JS bar the
  theme toggle)
- **Language**: TypeScript
- **Styling**: plain CSS, design tokens in `src/styles/global.css`

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Content

- `src/data/content.ts` — mission, research themes, projects, team, collaborators,
  "join us" text. Edit this file to update copy; the page (`src/pages/index.astro`)
  reads from it.
- `src/data/publications.json` — **generated, not hand-edited.** See below.
- `public/team/*.jpg` — team photos.

## Publications

`src/data/publications.json` is synced from the sibling `kollnig.net` repo's
`tools/sync_pubs.py`, which merges Konrad Kollnig's personal publication feed
(Google Scholar + DBLP + OpenAlex, restricted to 2024 onward) with every other lab
member's OpenAlex works, resolved by a pinned OpenAlex author ID per member. Author
lists and project tags for jointly-authored papers come from that repo's
`tools/publications.json` seed.

To resync, from the `kollnig.net` repo root (with this repo checked out as a
sibling directory):

```bash
python3 tools/sync_pubs.py
```

The sync is skipped (with a notice, no files touched) if this repo isn't checked
out next to `kollnig.net`, and never wipes existing output on fetch failure.

## Deployment

Deploys to **GitHub Pages** via `.github/workflows/deploy.yml`: `npm ci` →
`npm run build` → upload `dist/`, triggered on push to `main`. The site is served
from the custom domain `comp4good.com` (`astro.config.mjs` sets `site` accordingly;
no `base` path needed).

## Project structure

- `src/layouts/Base.astro` — shared shell: head/SEO, masthead, nav, footer, theme
  toggle.
- `src/pages/index.astro` — the single page (mission, themes, projects, team,
  publications, join us).
- `src/data/` — content and publications data (see above).
- `src/styles/global.css` — design tokens and base styles.
- `public/` — logos, team photos, self-hosted fonts.
