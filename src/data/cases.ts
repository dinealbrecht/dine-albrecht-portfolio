// The case studies. Slugs of the original nine MUST stay identical to the old Webflow URLs (SEO).
// Shaped like the planned Sanity `caseStudy` document so it can move there later.
import type { ImageMetadata } from 'astro';

import redBull1 from '../assets/work/red-bull-1.webp';
import redBull2 from '../assets/work/red-bull-2.jpg';
import redBull3 from '../assets/work/red-bull-3.jpg';
import redBull4 from '../assets/work/red-bull-4.webp';
import redBull5 from '../assets/work/red-bull-5.webp';
import stellaMc1 from '../assets/work/stella-mccartney-1.webp';
import stellaMc2 from '../assets/work/stella-mccartney-2.jpg';
import stellaMc3 from '../assets/work/stella-mccartney-3.webp';
import twentytwo1 from '../assets/work/twentytwo-1.webp';
import twentytwo2 from '../assets/work/twentytwo-2.webp';
import twentytwo3 from '../assets/work/twentytwo-3.webp';
import twentytwo4 from '../assets/work/twentytwo-4.webp';
import heathrow1 from '../assets/work/heathrow-airport-1.webp';
import heathrow2 from '../assets/work/heathrow-airport-2.webp';
import heathrow4 from '../assets/work/heathrow-airport-4.jpg';
import heathrow5 from '../assets/work/heathrow-airport-5.jpg';
import heathrow6 from '../assets/work/heathrow-airport-6.jpg';
import rolex1 from '../assets/work/rolex-1.jpg';
import rolex2 from '../assets/work/rolex-2.jpg';
import mclaren1 from '../assets/work/mclaren-1.webp';
import mclaren2 from '../assets/work/mclaren-2.webp';
import mclaren3 from '../assets/work/mclaren-3.webp';
import mclaren4 from '../assets/work/mclaren-4.webp';
import mclaren5 from '../assets/work/mclaren-5.webp';
import lnc1 from '../assets/work/chromor-1.jpg';
import lnc2 from '../assets/work/chromor-2.webp';
import lnc3 from '../assets/work/chromor-3.webp';
import lnc4 from '../assets/work/chromor-4.webp';
import lnc5 from '../assets/work/chromor-5.jpg';
import movi1 from '../assets/work/movi-1.webp';
import movi2 from '../assets/work/movi-2.webp';
import movi3 from '../assets/work/movi-3.webp';
import movi4 from '../assets/work/movi-4.webp';
import stella1 from '../assets/work/stella-1.jpg';
import stella2 from '../assets/work/stella-2.webp';
import stella3 from '../assets/work/stella-3.jpg';
import stella4 from '../assets/work/stella-4.webp';
import stella5 from '../assets/work/stella-5.jpg';
import medicare1 from '../assets/work/medicare-benefits-1.jpg';
import medicare2 from '../assets/work/medicare-benefits-2.jpg';
import medicare3 from '../assets/work/medicare-benefits-3.jpg';
import theOpen1 from '../assets/work/the-open-1.jpg';
import theOpen2 from '../assets/work/the-open-2.jpg';

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string; // one-liner shown on cards
  type: string;
  role?: string; // defaults to 'Development'
  agency?: string;
  summary?: string;
  challenge?: string;
  results?: string;
  hero: Shot;
  gallery: Shot[];
}

export const cases: CaseStudy[] = [
  {
    slug: 'red-bull',
    client: 'Red Bull',
    title: 'Game for Red Bull',
    type: 'Browser game',
    agency: 'Dies Das Berlin',
    summary:
      'A memory card game in the Red Bull website for Red Bull Italy, drawn in a hand-illustrated playing-card style. Players flip cards to find pairs against the clock, then enter the code from a Red Bull four-pack to put their score on the leaderboard and win a Red Bull fridge.',
    challenge:
      'Making a game feel quick and tactile inside an existing brand site: smooth card flips, a timer and lives, and a leaderboard tied to on-pack codes so the game drove purchases up.',
    results:
      'Built the game front end and the leaderboard. Ran as part of the Red Bull Italy campaign.',
    hero: { src: redBull1, alt: 'Red Bull “Doppia Concentrazione” memory game on the Red Bull website' },
    gallery: [
      { src: redBull5, alt: 'Game intro screen with a hand of illustrated playing cards' },
      { src: redBull2, alt: 'Memory game board mid-play' },
      { src: redBull3, alt: 'Memory game board with a matched pair revealed' },
      { src: redBull4, alt: 'High-score leaderboard at the end of the game' },
    ],
  },
  {
    slug: 'stella-mccartney',
    client: 'Stella McCartney',
    title: 'Playful site for a perfume launch',
    type: 'Campaign site',
    agency: 'Clubhouse London',
    summary:
      'Campaign site for the launch of POP, a Stella McCartney fragrance. Visitors take a short, playful quiz about a friend and get a personalised video to share.',
    challenge:
      'Keeping a quiz light and fun while matching the soft, dreamy look of the campaign: animated clouds, illustrated icons and custom slider answers that work on desktop and phone.',
    results:
      'Built the site and quiz front end using Vue.js.',
    hero: { src: stellaMc1, alt: 'POP by Stella McCartney campaign site landing page' },
    gallery: [
      { src: stellaMc3, alt: 'Interactive quiz screen with illustrated icons' },
      { src: stellaMc2, alt: 'Quiz step with a slider answer' },
    ],
  },
  {
    slug: 'twentytwo',
    client: 'Twentytwo',
    title: 'Interactive site for the second tallest building in London',
    type: 'Property launch',
    agency: 'Futurecorp London',
    summary:
      'Marketing site for Twentytwo, a new office tower in the City of London and the second tallest building in London, after The Shard. It shows future tenants the lobby, the amenities and every floor before the building was finished.',
    challenge:
      'Explaining a 60-plus-storey building on a screen: an interactive section through the tower highlights amenities floor by floor, and a floor plate explorer shows the adaptable layouts and areas.',
    results:
      'Built the interactive building section and floor explorer, in a bold graphic style with full-bleed photography that also works on mobile.',
    hero: { src: twentytwo1, alt: 'Twentytwo site showing the building lobby beside a bold graphic panel' },
    gallery: [
      { src: twentytwo2, alt: 'Interactive building section with amenities floor highlighted' },
      { src: twentytwo3, alt: 'Floor plate explorer with a selected floor in yellow' },
      { src: twentytwo4, alt: 'Mobile layout: “We imagined the building we’d want to work in”' },
    ],
  },
  {
    slug: 'heathrow-airport',
    client: 'Heathrow Airport',
    title: 'Fun website for 70 years of Heathrow Airport',
    type: 'Anniversary site',
    agency: 'Havas London',
    summary:
      'Anniversary site for Heathrow’s 70th birthday (1946–2016) asking “Where has Heathrow taken you?”. People shared their travel stories and got the chance to win birthday gifts, such as a trip to Sydney with Qantas and Destination NSW.',
    challenge:
      'Turning hundreds of personal stories into something fun to browse: a mixed grid of stories, photos and gifts, a story submission form, and gift pages for each partner, all on desktop and mobile.',
    results:
      'Built the site front end from the agency designs.',
    hero: { src: heathrow1, alt: '“Where has Heathrow taken you?” anniversary site landing page' },
    gallery: [
      { src: heathrow2, alt: 'Grid of user stories and destinations' },
      { src: heathrow4, alt: 'Gift page: “A trip of a lifetime with Qantas and Destination New South Wales” above a Qantas A380 over Sydney Harbour' },
      { src: heathrow5, alt: 'Mobile homepage in a phone: “Where has Heathrow taken you?” above the Sydney trip gift' },
      { src: heathrow6, alt: '“Submission complete — Thanks!” confirmation page with the 70 years logo' },
    ],
  },
  {
    slug: 'rolex',
    client: 'Rolex',
    title: 'New web presence for Rolex',
    type: 'Brand website',
    agency: 'Specialmoves London',
    summary:
      'New web presence for Rolex, with full-screen product pages such as the Milgauss collection.',
    challenge:
      'Presenting watches with the precision the brand is known for: large close-up photography, a smooth full-screen carousel and detailed collection pages that load fast despite the heavy imagery.',
    hero: { src: rolex1, alt: 'Rolex Milgauss close-up on the product page' },
    gallery: [{ src: rolex2, alt: 'Rolex Milgauss collection page' }],
  },
  {
    slug: 'mclaren',
    client: 'McLaren',
    title: 'Website for the launch of a new car',
    type: 'Launch site',
    agency: 'SapientNitro London',
    summary:
      'Launch site for the McLaren 12C Spider, built around the idea that “every part tells a story”. Visitors explore the car piece by piece, from wheels and brakes to the engineering behind it.',
    challenge:
      'Making a car configurator and engineering stories feel as premium as the car: an interactive car model with options for paint, wheels and brakes, detail pages for each part, performance data and engineer interviews with video.',
    results:
      'Built the interactive configurator and the story pages.',
    hero: { src: mclaren1, alt: 'McLaren 12C Spider launch site: “Every part tells a story”' },
    gallery: [
      { src: mclaren2, alt: 'Car configurator with wheel and colour options' },
      { src: mclaren3, alt: 'Wheel detail page: “Everything comes down to this”' },
      { src: mclaren4, alt: 'Performance specs and technical drawings' },
      { src: mclaren5, alt: 'Engineer interview page with video' },
    ],
  },
  {
    slug: 'chromor',
    client: 'Londonewcastle',
    title: 'Interactive website to showcase the work of a London property developer',
    type: 'Portfolio site',
    agency: 'Futurecorp London',
    summary:
      'Website for Londonewcastle, a London property developer, showing finished and current projects such as Dollar Bay and Balfron Tower, plus their magazine and bulletin.',
    challenge:
      'Showcasing a large portfolio of buildings in a way that feels like exploring London: big project pages with bold colour titles, a grid of recently completed work and an interactive map of the city.',
    results:
      'Built the site and the CMS for projects and articles.',
    hero: { src: lnc1, alt: 'Londonewcastle site: Dollar Bay project page' },
    gallery: [
      { src: lnc2, alt: 'Homepage: “Developers for the new world” and the L&N Magazine' },
      { src: lnc3, alt: '“Explore our world” interactive map of London' },
      { src: lnc4, alt: '“Recently completed” project grid' },
      { src: lnc5, alt: 'Balfron Tower project page' },
    ],
  },
  {
    slug: 'movi',
    client: 'Michelberger Hotel',
    title: 'Playful website for a trendy Berlin hotel',
    type: 'Hotel website',
    agency: 'A Colour Bright Berlin',
    summary:
      'A playful, animated website for Michelberger, a hotel in Berlin known for its creative spirit. Each part of the hotel gets its own colour: rooms, food and drink, private dining, public spaces and projects.',
    challenge:
      'Making a site that is both easy to use and playful. The navigation had to make moving around the hotel fun without getting in the way of booking a room.',
    results:
      'A colourful site that shows the rooms, spaces and projects, with booking built in. Built the site in React.js.',
    hero: { src: movi1, alt: 'Michelberger site: “Rooms” on a violet-to-coral gradient' },
    gallery: [
      { src: movi2, alt: 'Rooms page with photography' },
      { src: movi3, alt: 'Private Dining page on lime green' },
      { src: movi4, alt: 'Public Spaces page on mint green' },
    ],
  },
  {
    slug: 'stella',
    client: 'Stella Sport',
    title: 'E-commerce website for Stella McCartney / adidas',
    type: 'E-commerce',
    role: 'Vue.js development',
    agency: 'Clubhouse London',
    summary:
      'E-commerce site for Stella Sport, the sportswear line by Stella McCartney and adidas. Product pages work like magazine features, alongside athlete profiles and a feed from the Stella Sport community on Tumblr.',
    challenge:
      'The animations. The site was full of intricate motion: campaign stories like “Tanks that break barriers” and “Climbing new heights” unfold as you move through them, with layered images and type. All of it had to run smoothly and still lead naturally to the products and checkout, on desktop and mobile.',
    results:
      'Built the front end and all its animations in Vue.js.',
    hero: { src: stella1, alt: 'Stella Sport: “Tanks that break barriers” product story' },
    gallery: [
      { src: stella2, alt: '“The Stellasport Girls” athlete profile' },
      { src: stella3, alt: '“Climbing new heights” campaign page' },
      { src: stella4, alt: 'Mobile product story' },
      { src: stella5, alt: 'Tumblr community collage' },
    ],
  },
  {
    slug: 'medicare-benefits',
    client: 'National General U.S.',
    title: 'Medicare Benefits: plan finder to switch to a better Medicare plan',
    type: 'Web app',
    role: 'Vue.js development',
    agency: 'The 49 London',
    summary:
      'Medicare Benefits helps people in the US find a Medicare plan that suits them better than the one they have. The product has two sides: a public site where people compare plans on their own, and a tool for licensed agents to use on calls with customers. On both, you enter a ZIP code, doctors and prescriptions, then compare Medicare Advantage, Medicare Supplement and prescription drug plans side by side.',
    challenge:
      'Making a complex, regulated product easy to use on a live call: filters for premiums, co-pays, out-of-pocket limits, star ratings and extra benefits, results that update as the agent narrows them down, and Live Link co-browsing so the customer sees the same screen at the same time and can easily compare.',
    results:
      'Built the product in Vue.js.',
    hero: { src: medicare3, alt: 'Medicare Benefits homepage: “Find a new plan.” beside a woman comparing plans on a laptop' },
    gallery: [
      { src: medicare2, alt: 'Plan finder first step: “What type of Medicare coverage do you have?” with four answer buttons' },
      { src: medicare1, alt: 'Agent tool: plan type tabs, customer and doctor filters, and premium and co-pay sliders' },
    ],
  },
  {
    slug: 'the-open',
    client: 'The Open',
    title: 'Live leaderboard for The Open Championship',
    type: 'Live leaderboard',
    role: 'Angular development',
    agency: 'Elvis London',
    summary:
      'The live leaderboard for The Open Championship, golf’s oldest major. Fans around the world follow every player’s score as it happens, star their favourite players, switch to a hole-by-hole view of every round and dig into player stats like driving distance, greens in regulation and par 5 scoring.',
    challenge:
      'Keeping scores live and accurate for a global audience during the busiest days of the golf year, without the page slowing down: a fast-updating table with position changes, complex filtering, a champion view for the winner, and a hole-by-hole grid that colours every birdie and bogey.',
    results:
      'Built the leaderboard in Angular.',
    hero: { src: theOpen1, alt: 'The Open leaderboard: Xander Schauffele kissing the Claret Jug above the final standings' },
    gallery: [
      { src: theOpen2, alt: 'Hole-by-hole view: scores for all 18 holes per player, birdies in red and bogeys in grey' },
    ],
  },
];

export const featured = ['red-bull', 'stella', 'mclaren', 'twentytwo', 'movi', 'heathrow-airport'].map(
  (s) => cases.find((c) => c.slug === s)!,
);

export const nextCase = (slug: string) => {
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
};

// Product work under NDA: words only, no client names, no screenshots, no detail pages.
export interface NdaWork {
  kind: string; // e.g. 'Fintech app'
  line: string; // what it is and what you owned
  duration?: string; // e.g. '2024 — now', '18 months'
  stack: string[];
}

export const ndaWork: NdaWork[] = [
  {
    kind: 'Fintech app',
    line: 'App for a fintech company.',
    stack: ['Angular'],
  },
  {
    kind: 'Building platform',
    line: 'App for a platform in the building industry.',
    stack: ['React'],
  },
];
