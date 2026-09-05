# Jahnnobi Talukdar — Portfolio

Next.js 16 (App Router) + Tailwind v4 + TypeScript. Bilingual (EN / DE) portfolio
for a Digital Health & Data Science MSc, with per-project case-study pages.

## Run

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en or /de
npm run build
npx eslint src   # lint
```

## Design system

- **Style:** Accessible & Ethical — high contrast, WCAG-minded, calm.
- **Palette:** deep teal `#0e7c86` + health green `#0f9d77` on warm near-white; full dark mode.
- **Type:** Figtree (headings) · Noto Sans (body) · Newsreader italic (accents), self-hosted via `next/font`.

## Routes

| Path | What |
|------|------|
| `/` | redirects to `/en` or `/de` (Accept-Language) |
| `/[locale]` | one-page portfolio: hero, work, education, skills, about, contact |
| `/[locale]/work/[slug]` | full case study per project |
| `/icon`, `/[locale]/opengraph-image` | generated favicon (JT monogram) + social card |
| `/robots.txt`, `/sitemap.xml` | generated, both locales + hreflang |

## Editing content

All copy lives in **`src/content/`**:

| File | What |
|------|------|
| `en.ts` | English — source of truth |
| `de.ts` | German — **first-draft translation, have a native speaker review** |
| `types.ts` | shape (don't need to touch) |

Keep `en.ts` and `de.ts` in the same shape. Real data is in place; the
remaining **`TODO:`** markers are:
- project `repo` links → currently the GitHub profile; point each at its repo
- project detail `results` figures marked `TODO %` / `TODO (…)` → real accuracy,
  sensitivity, record counts
- breast-cancer dataset name (guessed: Wisconsin Diagnostic) → confirm
- LinkedIn URL assumes `/in/jahnnobi-talukdar`

Optional, uncomment in `en.ts` / `de.ts` when ready:
- `thesis: {…}` — the Education section renders a highlighted thesis card automatically
- `experience: [{…}]` — renders an Experience sub-list under Education

Other:
- `public/Jahnnobi-Talukdar-CV.pdf` — real CV (currently a stub PDF)
- phone number from the CV is deliberately **not** on the site (scraper/spam risk)
- domain string `jahnnobitalukdar.com` in `layout.tsx`, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `UNIVERSITY` / `HOCHSCHULE` const at the top of each content file (currently "SRH University", campus Fürth)

## Notable pieces

- **`components/threshold-explorer.tsx`** — interactive decision-threshold widget
  on the breast-cancer project. Synthetic 1,000-sample set (~37% malignant),
  deterministic, no deps; slider trades sensitivity vs specificity, with a
  confusion-matrix table for screen readers.
- **`proxy.ts`** — locale redirect (Next 16 renamed `middleware` → `proxy`).
- **`components/locale-switcher.tsx`** — swaps the locale segment, keeps the path.

## Deploy

Push to GitHub, import on Vercel (zero config). Add the custom domain there.
