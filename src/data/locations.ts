export interface LocationData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  areas: string[];
  nearby: string[];
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: LocationData[] = [
  {
    slug: 'cheshire',
    name: 'Cheshire',
    headline: 'Web Design Cheshire | Modern Websites for Local Businesses',
    subheadline:
      'We build fast, mobile-friendly websites for Cheshire businesses — from Poynton to Macclesfield, Wilmslow to Stockport. Built in 7 days, maintained monthly.',
    metaTitle: 'Web Design Cheshire | Modern Websites for Local Businesses | Coltura',
    metaDescription:
      'Professional web design for Cheshire businesses. Fast, mobile-friendly sites Built in 7 days. Serving Poynton, Macclesfield, Wilmslow, Stockport, and all of Cheshire.',
    keywords: [
      'web design cheshire',
      'website design cheshire',
      'web designer cheshire',
      'local business website cheshire',
      'cheshire web design agency',
      'small business website cheshire',
    ],
    description:
      'Coltura builds modern websites for businesses across Cheshire. Whether you are in Poynton, Macclesfield, Wilmslow, or Stockport, we create fast, mobile-friendly sites that help local customers find you and trust you.',
    areas: [
      'Poynton',
      'Macclesfield',
      'Wilmslow',
      'Stockport',
      'Alderley Edge',
      'Crewe',
      'Congleton',
      'Knutsford',
    ],
    nearby: [
      'Web Design Poynton',
      'Web Design Macclesfield',
      'Web Design Wilmslow',
      'Web Design Stockport',
    ],
    faqs: [
      {
        question: 'Do you work with businesses all over Cheshire?',
        answer:
          'Yes. We work with local businesses across Cheshire — from Poynton and Macclesfield to Wilmslow and Stockport. Most of the build process is remote, and we can meet in person if you prefer.',
      },
      {
        question: 'How long does it take to build a website?',
        answer:
          'Most local business websites are ready within 7 days from when we receive your content and branding.',
      },
      {
        question: 'Do you offer ongoing support for Cheshire businesses?',
        answer:
          'Yes. Our monthly care plan includes text and image updates, form checks, backups, and performance monitoring Get in touch for a quote.',
      },
    ],
  },
  {
    slug: 'poynton',
    name: 'Poynton',
    headline: 'Web Design Poynton | Websites for Local Businesses',
    subheadline:
      'Poynton businesses deserve better websites. We build clean, fast, mobile-friendly sites that help you stand out in a competitive local market.',
    metaTitle: 'Web Design Poynton | Local Business Websites | Coltura',
    metaDescription:
      'Professional web design for Poynton businesses. Fast, mobile-friendly websites Built in 7 days. Local SEO included.',
    keywords: [
      'web design poynton',
      'website design poynton',
      'web designer poynton',
      'local business website poynton',
      'poynton web design',
    ],
    description:
      'We build modern websites for Poynton businesses. From the town centre to Higher Poynton, we help local trades, shops, and service providers look professional online and attract more customers.',
    areas: [
      'Poynton Town Centre',
      'Higher Poynton',
      'Poynton Pool',
      'Adlington',
      'Bramhall',
      'Hazel Grove',
    ],
    nearby: ['Web Design Cheshire', 'Web Design Macclesfield', 'Web Design Stockport'],
    faqs: [
      {
        question: 'Do you work with Poynton businesses in person?',
        answer:
          'Yes. We are happy to meet Poynton clients in person for discovery calls and handover sessions, though most of the work happens remotely for speed.',
      },
      {
        question: 'Can you help my Poynton business rank locally?',
        answer:
          'Absolutely. Every site we build includes local SEO setup so you appear in "near me" searches around Poynton, Bramhall, Hazel Grove, and surrounding areas.',
      },
      {
        question: 'How much does a Poynton business website cost?',
        answer:
          'Get in touch for a tailored proposal. No templates, no surprises.',
      },
    ],
  },
  {
    slug: 'macclesfield',
    name: 'Macclesfield',
    headline: 'Web Design Macclesfield | Modern Websites for Local Businesses',
    subheadline:
      'Professional websites for Macclesfield businesses. Trades, shops, and services in the Silk Town — built in 7 days, optimised for local search, and backed by real support.',
    metaTitle: 'Web Design Macclesfield | Local Business Websites | Coltura',
    metaDescription:
      'Professional web design for Macclesfield businesses. Fast, mobile-friendly websites Get in touch for a quote. Covering Macc town centre, Prestbury, Bollington, Tytherington and beyond.',
    keywords: [
      'web design macclesfield',
      'website design macclesfield',
      'web designer macclesfield',
      'local business website macclesfield',
      'macclesfield web design',
    ],
    description:
      'Macclesfield is home to a thriving mix of tradespeople, independent shops, health and beauty businesses, and professional services — all competing for attention in a town where word of mouth still matters, but Google matters more. We build modern, fast websites for Macclesfield businesses that look professional on a phone and rank for searches like "plumber near me" or "hairdresser Macclesfield." From the cobbled streets around St Michael\'s Church to the business parks near Tytherington, we have helped local businesses get online properly — not with a generic template, but with a site that reflects how they actually work.',
    areas: [
      'Macclesfield Town Centre',
      'Prestbury',
      'Bollington',
      'Tytherington',
      'Sutton',
      'Bosley',
    ],
    nearby: ['Web Design Cheshire', 'Web Design Poynton', 'Web Design Wilmslow'],
    faqs: [
      {
        question: 'Do you work with Macclesfield businesses in person?',
        answer:
          'Yes. We are based nearby and happy to meet Macclesfield clients in person — whether that is a coffee on Chestergate to talk through your requirements or a handover session once the site is live. Most of the build work happens remotely so we can move fast.',
      },
      {
        question: 'Can you help my Macclesfield business rank locally?',
        answer:
          'Absolutely. Every site we build includes local SEO setup — targeting searches in Macclesfield, Prestbury, Bollington, Tytherington, and the surrounding villages. Most of our Macclesfield clients see first-page Google rankings for their main keywords within 3-6 months.',
      },
      {
        question: 'What kind of Macclesfield businesses do you work with?',
        answer:
          'All kinds. We have built sites for Macclesfield plumbers, electricians, hairdressers, cafes, accountants, cleaning companies, and independent retailers. Our most successful Macclesfield site — a local tradesman — went from zero online presence to 12 enquiries a week after launch.',
      },
      {
        question: 'How much does a Macclesfield business website cost?',
        answer:
          'Get in touch for a tailored proposal — that includes hosting, SSL, unlimited text changes, and monthly SEO check-ups. No templates, no surprises.',
      },
    ],
  },
  {
    slug: 'stockport',
    name: 'Stockport',
    headline: 'Web Design Stockport | Websites for Local Businesses',
    subheadline:
      'Stockport businesses deserve better websites. We build clean, fast, mobile-friendly sites that help you stand out in a competitive local market.',
    metaTitle: 'Web Design Stockport | Local Business Websites | Coltura',
    metaDescription:
      'Professional web design for Stockport businesses. Fast, mobile-friendly websites Built in 7 days. Local SEO included.',
    keywords: [
      'web design stockport',
      'website design stockport',
      'web designer stockport',
      'local business website stockport',
      'stockport web design',
      'greater manchester web design',
    ],
    description:
      'We build modern websites for Stockport businesses. From the town centre to Cheadle and Heaton Moor, we help local trades, shops, and service providers look professional online and attract more customers.',
    areas: [
      'Stockport Town Centre',
      'Cheadle',
      'Heaton Moor',
      'Reddish',
      'Edgeley',
      'Bramhall',
      'Marple',
    ],
    nearby: ['Web Design Cheshire', 'Web Design Poynton', 'Web Design Macclesfield'],
    faqs: [
      {
        question: 'Do you work with Stockport businesses in person?',
        answer:
          'Yes. We are happy to meet Stockport clients in person for discovery calls and handover sessions, though most of the work happens remotely for speed.',
      },
      {
        question: 'Can you help my Stockport business rank locally?',
        answer:
          'Absolutely. Every site we build includes local SEO setup so you appear in "near me" searches around Stockport, Cheadle, Heaton Moor, and surrounding areas.',
      },
      {
        question: 'How much does a Stockport business website cost?',
        answer:
          'Get in touch for a tailored proposal. No templates, no surprises.',
      },
    ],
  },
  {
    slug: 'wilmslow',
    name: 'Wilmslow',
    headline: 'Web Design Wilmslow | Websites for Local Businesses',
    subheadline:
      'Wilmslow businesses deserve better websites. We build clean, fast, mobile-friendly sites that help you stand out in a competitive local market.',
    metaTitle: 'Web Design Wilmslow | Local Business Websites | Coltura',
    metaDescription:
      'Professional web design for Wilmslow businesses. Fast, mobile-friendly websites Built in 7 days. Local SEO included.',
    keywords: [
      'web design wilmslow',
      'website design wilmslow',
      'web designer wilmslow',
      'local business website wilmslow',
      'wilmslow web design',
    ],
    description:
      'We build modern websites for Wilmslow businesses. From the town centre to Alderley Edge and Handforth, we help local trades, shops, and service providers look professional online and attract more customers.',
    areas: [
      'Wilmslow Town Centre',
      'Alderley Edge',
      'Handforth',
      'Styal',
      'Morley',
      'Lacey Green',
    ],
    nearby: ['Web Design Cheshire', 'Web Design Poynton', 'Web Design Macclesfield'],
    faqs: [
      {
        question: 'Do you work with Wilmslow businesses in person?',
        answer:
          'Yes. We are happy to meet Wilmslow clients in person for discovery calls and handover sessions, though most of the work happens remotely for speed.',
      },
      {
        question: 'Can you help my Wilmslow business rank locally?',
        answer:
          'Absolutely. Every site we build includes local SEO setup so you appear in "near me" searches around Wilmslow, Alderley Edge, Handforth, and surrounding areas.',
      },
      {
        question: 'How much does a Wilmslow business website cost?',
        answer:
          'Get in touch for a tailored proposal. No templates, no surprises.',
      },
    ],
  },
  {
    slug: 'alderley-edge',
    name: 'Alderley Edge',
    headline: 'Web Design Alderley Edge | Websites for Local Businesses',
    subheadline:
      'Alderley Edge businesses deserve better websites. We build clean, fast, mobile-friendly sites that help you stand out in a competitive local market.',
    metaTitle: 'Web Design Alderley Edge | Local Business Websites | Coltura',
    metaDescription:
      'Professional web design for Alderley Edge businesses. Fast, mobile-friendly websites Built in 7 days. Local SEO included.',
    keywords: [
      'web design alderley edge',
      'website design alderley edge',
      'web designer alderley edge',
      'local business website alderley edge',
      'alderley edge web design',
    ],
    description:
      'We build modern websites for Alderley Edge businesses. From the village centre to Nether Alderley and Chorley, we help local trades, shops, and service providers look professional online and attract more customers.',
    areas: [
      'Alderley Edge Village',
      'Nether Alderley',
      'Chorley',
      'Mottram St Andrew',
      'Prestbury',
      'Wilmslow',
    ],
    nearby: ['Web Design Cheshire', 'Web Design Wilmslow', 'Web Design Macclesfield'],
    faqs: [
      {
        question: 'Do you work with Alderley Edge businesses in person?',
        answer:
          'Yes. We are happy to meet Alderley Edge clients in person for discovery calls and handover sessions, though most of the work happens remotely for speed.',
      },
      {
        question: 'Can you help my Alderley Edge business rank locally?',
        answer:
          'Absolutely. Every site we build includes local SEO setup so you appear in "near me" searches around Alderley Edge, Nether Alderley, Prestbury, and surrounding areas.',
      },
      {
        question: 'How much does an Alderley Edge business website cost?',
        answer:
          'Get in touch for a tailored proposal. No templates, no surprises.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((l) => l.slug);
}
