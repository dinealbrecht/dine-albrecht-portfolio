# dinealbrecht.net

Portfolio for Dine Studio, moved off Webflow. Static Astro 7 site (`output: static`, `build.format: 'file'`, `trailingSlash: 'never'`).

## Hard constraints

- **URLs must not change.** Case-study slugs in `src/data/cases.ts` match the old Webflow URLs (`red-bull`, `stella-mccartney`, `twentytwo`, `heathrow-airport`, `rolex`, `mclaren`, `chromor`, `movi`, `stella`). Never rename one without a redirect.
- **Email only.** No contact form, no Calendly. Every CTA goes through `src/components/Email.astro`, which keeps the address out of the HTML. Never write the address in plain text in a template.
- **Minimal JS.** Only the menu dialog, email assembly, and the works grid/list toggle. Everything else is static.
- **No new dependencies without asking.** Runtime deps are `astro` and `@astrojs/sitemap`.

## Design

Editorial look: warm paper `#f3f0e8`, ink `#0e0e0d`, huge uppercase Inter Tight headings with tight tracking, Fragment Mono uppercase 12px meta labels in a 4-column row (header, footers), thin rules above section headings, black statement band, full-bleed image strips, full-screen menu (black left / image right). Tokens in `src/styles/global.css`. Respect `prefers-reduced-motion`.

## Content

All copy in `src/data/site.ts` and `src/data/cases.ts` (shaped like the planned Sanity `siteSettings` / `caseStudy` docs, so moving to Sanity later is a swap of the data source). Every image needs real alt text.

The Rolex screenshots are only 640px wide — replace with higher-res originals when available.
