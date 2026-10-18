# dinealbrecht.net

Portfolio for Dine Studio. Static Astro site, no CMS yet — all copy lives in two files:

- `src/data/site.ts` — header, hero, clients, services, about, contact copy
- `src/data/cases.ts` — the nine case studies (text + which screenshots)

Images are in `src/assets/work/`. Astro turns them into resized WebP at build time (58 MB of PNGs → ~9 MB site).

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
```

## Deploy (free)

The site is plain static files, so any static host works. URLs stay identical to the Webflow site (`/works`, `/works/red-bull`, `/contact`).

**Cloudflare Pages (recommended — free for commercial use, unlimited bandwidth)**
1. Push this folder to a GitHub repo.
2. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: **Astro**. Build command `npm run build`, output `dist`.
4. Once the `*.pages.dev` URL looks right: Custom domains → add `dinealbrecht.net`, then update DNS at your registrar.

**Vercel** works too (`vercel.json` is already set up for the clean URLs): import the GitHub repo at vercel.com/new, framework Astro, deploy. Note Vercel's free Hobby plan is for non-commercial use only — a portfolio that brings in client work is commercial, so you'd be expected to be on Pro ($20/mo).

## Cutover checklist

1. Deploy, check every page on the preview URL (desktop + phone).
2. Point the domain at the new host.
3. Wait ~48h, check Google Search Console, submit `/sitemap-index.xml`.
4. **Then** cancel both Webflow charges (site plan + workspace plan). Export form submissions first.

## Notes

- The email address is never in the HTML — it is stored encoded and assembled in the browser (`Email.astro`), so scrapers don't get it.
- Fonts (Inter Tight, Fragment Mono) are self-hosted in `public/fonts` — no Google Fonts request, which keeps it GDPR-clean.
- `_webflow-export/` holds the raw pages + images downloaded from the old site. Reference only, gitignored.
