// Site-wide copy and settings. Everything editable lives here or in cases.ts.
// Shaped like the planned Sanity `siteSettings` / `page` documents so it can move there later.

export const site = {
  name: 'Dine Albrecht',
  role: 'Developer · Sites & Products',
  disciplines: 'Sites · Products · Apps',
  location: 'Working worldwide',
  url: 'https://dinealbrecht.net',
  description:
    'Dine Albrecht builds websites, apps and products, front end to back end — launch sites for Red Bull, Rolex and McLaren, e-commerce for Stella McCartney and adidas.',
  // Stored reversed + base64 so the address never appears in the built HTML.
  // Assembled in the browser by the script in BaseLayout.
  emailEncoded: btoa('hello@dinealbrecht.net'.split('').reverse().join('')),
  availability: 'Available for work',
  year: new Date().getFullYear(),
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/works' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
];

export const home = {
  // Rendered as: WEBSITES [image] THAT / RESONATE. APPS / THAT DELIVER.
  heroBefore: 'Websites',
  heroAfter: 'that resonate. Products that deliver.',
  statement: 'Launch sites for Red Bull, Rolex and McLaren. E-commerce for Stella McCartney and adidas.',
};

export const clients = [
  { name: 'Stella McCartney', note: 'Fashion' },
  { name: 'John Lewis', note: 'Retail, UK' },
  { name: 'Michelberger Hotel', note: 'Hotel, Berlin' },
  { name: 'Heathrow', note: 'Airport, London' },
  { name: 'Londonewcastle', note: 'Property, London' },
  { name: 'Red Bull', note: 'Energy drink' },
  { name: 'Coca-Cola', note: 'Drinks' },
  { name: "Ballantine's", note: 'Whisky' },
];

export const services = {
  intro:
    'I build websites and web apps — front end, back end and everything in between. Agencies bring me in for launch and campaign sites; product teams bring me in for apps that need to keep working long after launch.',
  items: [
    { title: 'Campaign & launch sites', line: 'Interactive sites, browser games and product launches for agencies and brands' },
    { title: 'Web apps & products', line: 'Apps and platforms in React and Vue, built to grow with the team' },
    { title: 'E-commerce', line: 'Shops from product story to checkout, like Stella Sport for Stella McCartney and adidas' },
  ],
};

// DRAFT copy — edit freely.
export const about = {
  heading: 'About Dine',
  columns: [
    'I’m Dine Albrecht, a developer with fifteen years of front-end and back-end experience. I build launch sites for agencies and the brands they serve, and products for the teams that run them.',
    'From browser games and playful campaign sites to e-commerce and long-running products, every project gets the same thing: a clear idea, careful craft, and something that feels effortless to use.',
  ],
};

export const contact = {
  heading: 'Contact',
  line: 'Tell me what you want to build. A beautiful new site, an app that needs to feel effortless, or something you aren’t sure of yet?',
};

// Legal pages. PLACEHOLDERS in [brackets] — fill in before going live.
// Address and VAT ID are left out on purpose for now (owner's decision). § 5 DDG expects a postal
// address where post reaches you — not necessarily a home address; an Impressum address service works.
export const legal = {
  name: 'Dine Albrecht',
  address: [] as string[],
  vatId: '',
  authority: '[Your data protection authority, e.g. the Berlin Commissioner for Data Protection and Freedom of Information]',
  updated: '[Date]',
};

export const impressum = {
  heading: 'Impressum',
  intro: 'Legal notice according to § 5 DDG (German Digital Services Act).',
};

export const privacy = {
  heading: 'Privacy',
  intro:
    'This site sets no cookies, has no contact form and doesn’t track you across other websites. Here is what does happen with your data when you visit, and what your rights are.',
  sections: [
    {
      heading: 'Who is responsible',
      paragraphs: [
        `The controller under the GDPR is ${legal.name}. You can reach me by email using the address below.`,
      ],
    },
    {
      heading: 'Hosting',
      paragraphs: [
        'The site is hosted on Cloudflare Pages by Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, USA. To deliver the pages and protect them from attacks, Cloudflare processes technical data such as your IP address, the page you requested, the time and your browser type.',
        'This is necessary to show you the site at all, so the legal basis is my legitimate interest in a secure, working website (Art. 6(1)(f) GDPR). Cloudflare is certified under the EU–US Data Privacy Framework and processes this data on my behalf under a data processing agreement.',
      ],
    },
    // Matches the Cloudflare Web Analytics beacon in BaseLayout — remove both together.
    {
      heading: 'Visitor statistics',
      paragraphs: [
        'To see how many people visit and where they come from, I use Cloudflare Web Analytics. It sets no cookies, stores nothing on your device and doesn’t build profiles or follow you to other sites. It only shows me totals: page views, which site linked here, country, and device and browser type.',
        'The legal basis is my legitimate interest in understanding how the site is used (Art. 6(1)(f) GDPR).',
      ],
    },
    {
      heading: 'Email',
      paragraphs: [
        'If you email me, I use your address and message only to reply and, if we work together, to run the project. The legal basis is taking steps towards a contract (Art. 6(1)(b) GDPR) or my legitimate interest in answering your message (Art. 6(1)(f) GDPR). I delete emails when they are no longer needed, unless tax or commercial law requires me to keep them for longer.',
      ],
    },
    {
      heading: 'Fonts and your browser',
      paragraphs: [
        'The fonts are hosted on this site itself, so your browser doesn’t contact Google or any other font service.',
        'On the Work page, your browser remembers whether you chose the grid or the list view. That setting stays in your browser’s local storage, is never sent to me, and only exists because you asked for it (§ 25(2) TDDDG).',
      ],
    },
    {
      heading: 'Your rights',
      paragraphs: [
        'You have the right to access the data I hold about you, to have it corrected or deleted, to restrict how it is used, to receive it in a portable format and to object to processing based on legitimate interest (Art. 15–18, 20 and 21 GDPR). Just send me an email.',
        `You can also complain to a data protection authority (Art. 77 GDPR), for example ${legal.authority}.`,
      ],
    },
  ],
};
