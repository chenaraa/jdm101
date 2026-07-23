# JDM101 — The JDM Car Encyclopedia & Matchmaker

A production-ready Next.js 15 (App Router) site: a searchable encyclopedia of
51 iconic Japanese Domestic Market cars, a "JDM Matchmaker" quiz, and a
head-to-head car comparison tool. Dark, premium automotive-magazine styling.
No database required — all car data lives in a typed TypeScript file so it's
easy to extend.

## Tech stack

- Next.js 15 (App Router, static generation for every car page)
- TypeScript
- Tailwind CSS (custom "Shakotan Garage" dark automotive theme)
- Zero external database — car data is a typed array in `data/cars.ts`
- Deployable to Vercel or Cloudflare Pages

## Project structure

```
/app
  page.tsx                 → Homepage
  layout.tsx                → Root layout, global metadata, fonts
  globals.css                → Theme tokens, base styles
  sitemap.ts                 → Auto-generated sitemap.xml
  robots.ts                  → Auto-generated robots.txt
  not-found.tsx               → Custom 404
  /cars
    page.tsx                  → Encyclopedia browse/search page
    /[slug]
      page.tsx                 → Individual car detail page (SSG)
  /quiz
    page.tsx                    → JDM Matchmaker quiz page
  /compare
    page.tsx                     → Compare-two-cars page

/components
  SiteHeader.tsx, SiteFooter.tsx  → Layout chrome
  CarCard.tsx                      → Reusable car grid card
  SearchBar.tsx                     → Live-search dropdown (header + homepage)
  EncyclopediaBrowser.tsx            → Client search/filter for /cars
  QuizWidget.tsx                      → Multi-step quiz + scored results
  CompareWidget.tsx                    → Two-car comparison table

/data
  cars.ts                → THE car database (51 cars). Add new cars here.

/lib
  types.ts                → Car TypeScript interface
  cars.ts                   → getAllCars, getCarBySlug, searchCars, etc.
  quiz.ts                    → Quiz scoring / recommendation engine

/utils
  format.ts       → slugify() and cn() helpers

/public
  /images/cars      → Drop real car photography here (see below)
```

## Installation

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

To build for production locally:

```bash
npm run build
npm run start
```

## Deployment

### Vercel (recommended, zero-config)

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no configuration needed.
4. Set your custom domain (`jdm101.com`) under Project Settings → Domains.

Or via CLI:

```bash
npm i -g vercel
vercel
```

### Cloudflare Pages

1. Push the project to a Git repo and connect it in the Cloudflare Pages
   dashboard, **or** use the CLI:

```bash
npm install -g @cloudflare/next-on-pages
npx @cloudflare/next-on-pages
```

2. Build command: `npx @cloudflare/next-on-pages`
3. Build output directory: `.vercel/output/static`
4. Set the custom domain under Cloudflare Pages → Custom domains.

Every car page (`/cars/[slug]`) is statically generated at build time via
`generateStaticParams`, so hosting is fast and cheap on either platform.

## Adding a new car

All car data lives in **`data/cars.ts`** as a single typed array. To add a
new car:

1. Open `data/cars.ts`.
2. Copy an existing car object (from `{` to the closing `},`).
3. Paste it at the end of the array, just before the closing `];`.
4. Fill in every field — see `lib/types.ts` for the full `Car` interface
   and required fields (name, chassisCode, engine, horsepower, strengths,
   weaknesses, etc.).
5. Set a unique `slug` — this becomes the URL, e.g. `slug: "mazda-rx8"` →
   `jdm101.com/cars/mazda-rx8`. You can generate one with the `slugify()`
   helper in `utils/format.ts`.
6. Add relevant search terms to the `tags` array (chassis codes, engine
   codes, nicknames) — this is what powers search queries like "RB26".
7. Optional: add the car's rough market price band to `PRICE_BAND` in
   `lib/quiz.ts` so it can surface correctly in Matchmaker results — if you
   skip this, it defaults to the "$25k–$50k" band.
8. Optional: add the slug to `getFeaturedCars()` in `lib/cars.ts` to feature
   it on the homepage.

That's it — no other file needs to change. The new car automatically:
- Gets its own static page at `/cars/your-slug`
- Appears in the encyclopedia grid and search results
- Becomes eligible for the JDM Matchmaker quiz and the Compare tool
- Is included in `sitemap.xml`

### Adding real photography

Car pages currently use a styled placeholder instead of real photos (per
the "no external images" build constraint). To add real images:

1. Drop image files into `/public/images/cars/your-slug.jpg`.
2. In `components/CarCard.tsx` and `app/cars/[slug]/page.tsx`, replace the
   placeholder `<div>` blocks with a Next.js `<Image>` component pointing
   at `/images/cars/${car.slug}.jpg`.

## SEO

- Every page has unique `<title>` and `<meta description>` via the Next.js
  Metadata API (`generateMetadata` on car pages).
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and
  `/robots.txt` automatically at build time from the live car list — no
  manual maintenance needed as you add cars.
- Car pages include JSON-LD structured data (`schema.org/Car`) for rich
  search results.
- URLs are SEO-friendly and human-readable, e.g.
  `/cars/nissan-skyline-gtr-r34`.

## Roadmap / built to extend

The codebase is intentionally structured so these are straightforward to
add later without a rewrite:

- **User accounts** — add an auth provider (NextAuth/Clerk/Auth.js) and a
  `/app/api` route; the rest of the app doesn't assume a database today.
- **Favorites** — once accounts exist, store favorited `slug`s per user.
- **Comments** — add a comments table/service and a `<Comments slug={} />`
  component on the car detail page.
- **Car values tracker** — replace the static `horsepower`/spec strings
  with a small pricing API call, or add a `priceHistory` field to `Car`.
- **AI car recommendations** — `lib/quiz.ts` is a pure scoring function;
  swap or augment it with an LLM call that takes the same `QuizAnswers`
  input and returns ranked `slug`s.
- **Import guides** — add a new `/app/import-guides` route; it can reuse
  `CarCard`, `SiteHeader`, and `SiteFooter` as-is.

## Notes

- All specs (horsepower, torque, weight, 0–60 times) are approximate,
  sourced from public/manufacturer data for educational purposes, and
  vary by trim, market, and model year — always double-check exact figures
  before using them for a purchase decision.
- This is an independent enthusiast resource, not affiliated with Nissan,
  Toyota, Honda, Mazda, Mitsubishi, Subaru, or Suzuki.
