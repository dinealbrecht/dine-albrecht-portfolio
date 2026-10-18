// Site-wide copy and settings. Everything editable lives here or in cases.ts.
// Shaped like the planned Sanity `siteSettings` / `page` documents so it can move there later.

export const site = {
  name: 'Dine Studio',
  role: 'Websites & Apps',
  location: 'Working worldwide',
  url: 'https://dinealbrecht.net',
  description:
    'Dine Studio designs and develops websites and apps with clarity and purpose — for agencies and brands like Red Bull, Rolex, McLaren and Stella McCartney.',
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
  heroAfter: 'that resonate. Apps that deliver.',
  statement: 'Built for brands like Red Bull, Rolex, McLaren and Stella McCartney.',
};

export const clients = [
  { name: 'Stella McCartney', note: 'Fashion' },
  { name: 'John Lewis', note: 'Retail, UK' },
  { name: 'Michelberger Hotel', note: 'Hotel, Berlin' },
  { name: 'Heathrow', note: 'Airport, London' },
  { name: 'Londonewcastle', note: 'Architecture, London' },
  { name: 'Red Bull', note: 'Energy drink' },
  { name: 'Coca-Cola', note: 'Drinks' },
  { name: "Ballantine's", note: 'Whisky' },
];

export const services = {
  intro:
    'We develop websites and apps with clarity and purpose — smart strategy and thoughtful detail that move people and ideas forward.',
  items: [
    { title: 'Strategy', line: 'Strategy that resonates' },
    { title: 'Websites', line: 'Designed to convert' },
    { title: 'Apps', line: 'Every tap, considered' },
  ],
};

// DRAFT copy — edit freely.
export const about = {
  heading: 'About Dine',
  columns: [
    'Dine Studio is the practice of Christine “Dine” Albrecht, a developer with fifteen years of front-end and back-end experience, building websites and apps for agencies and the brands they serve.',
    'From browser games and playful campaign sites to e-commerce and product launches, every project gets the same thing: a clear idea, careful craft, and a site that feels effortless to use.',
  ],
};

export const contact = {
  heading: 'Contact',
  line: 'Tell us what you want to build. A beautiful new site, an app that needs to feel effortless, or something you aren’t sure of yet?',
};
