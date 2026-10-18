// The nine case studies. Slugs MUST stay identical to the old Webflow URLs (SEO).
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
import heathrow3 from '../assets/work/heathrow-airport-3.webp';
import rolex1 from '../assets/work/rolex-1.jpg';
import rolex2 from '../assets/work/rolex-2.jpg';
import mclaren1 from '../assets/work/mclaren-1.webp';
import mclaren2 from '../assets/work/mclaren-2.webp';
import mclaren3 from '../assets/work/mclaren-3.webp';
import mclaren4 from '../assets/work/mclaren-4.webp';
import mclaren5 from '../assets/work/mclaren-5.webp';
import lnc1 from '../assets/work/chromor-1.webp';
import lnc2 from '../assets/work/chromor-2.webp';
import lnc3 from '../assets/work/chromor-3.webp';
import lnc4 from '../assets/work/chromor-4.webp';
import lnc5 from '../assets/work/chromor-5.webp';
import movi1 from '../assets/work/movi-1.webp';
import movi2 from '../assets/work/movi-2.webp';
import movi3 from '../assets/work/movi-3.webp';
import movi4 from '../assets/work/movi-4.webp';
import stella1 from '../assets/work/stella-1.webp';
import stella2 from '../assets/work/stella-2.webp';
import stella3 from '../assets/work/stella-3.webp';
import stella4 from '../assets/work/stella-4.webp';
import stella5 from '../assets/work/stella-5.webp';

export interface Shot {
  src: ImageMetadata;
  alt: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string; // one-liner shown on cards
  type: string;
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
    hero: { src: stellaMc1, alt: 'POP by Stella McCartney campaign site landing page' },
    gallery: [
      { src: stellaMc3, alt: 'Interactive quiz screen with illustrated icons' },
      { src: stellaMc2, alt: 'Quiz step with a slider answer' },
    ],
  },
  {
    slug: 'twentytwo',
    client: 'Twentytwo',
    title: 'Interactive site for the second largest building in London',
    type: 'Property launch',
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
    hero: { src: heathrow1, alt: '“Where has Heathrow taken you?” anniversary site landing page' },
    gallery: [
      { src: heathrow2, alt: 'Grid of user stories and destinations' },
      { src: heathrow3, alt: 'Heathrow 70 years logo on purple' },
    ],
  },
  {
    slug: 'rolex',
    client: 'Rolex',
    title: 'New web presence for Rolex',
    type: 'Brand website',
    hero: { src: rolex1, alt: 'Rolex Milgauss close-up on the product page' },
    gallery: [{ src: rolex2, alt: 'Rolex Milgauss collection page' }],
  },
  {
    slug: 'mclaren',
    client: 'McLaren',
    title: 'Website for the launch of a new car',
    type: 'Launch site',
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
    title: 'Interactive website to showcase the work of the architecture firm',
    type: 'Portfolio site',
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
    summary: 'A beautifully animated website to showcase Michelberger Hotel.',
    challenge:
      'Creating a website that is both easy to use and playful. We built navigation that makes moving around the hotel fun and easy at the same time.',
    results: 'A colourful website that showcases the rooms, spaces and projects, with booking built in.',
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
    summary: 'E-commerce website for the new Stella Sport collection by Stella McCartney and adidas.',
    hero: { src: stella1, alt: 'Stella Sport: “Tanks that break barriers” product story' },
    gallery: [
      { src: stella2, alt: '“The Stellasport Girls” athlete profile' },
      { src: stella3, alt: '“Climbing new heights” campaign page' },
      { src: stella4, alt: 'Mobile product story' },
      { src: stella5, alt: 'Tumblr community collage' },
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
