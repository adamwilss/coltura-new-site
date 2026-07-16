export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'small-business-website-design',
    name: 'Small Business Website Design',
    headline: 'Small Business Website Design That Actually Works',
    subheadline:
      'We design and build websites specifically for small local businesses — trades, shops, service providers, and professionals who need to look credible online.',
    metaTitle: 'Small Business Website Design | Local Business Sites | Coltura',
    metaDescription:
      'Professional website design for small businesses. Fast, mobile-friendly, SEO-optimised sites Built in 7 days.',
    keywords: [
      'small business website design',
      'website design for small businesses',
      'local business website',
      'small business web design',
      'affordable website design small business',
    ],
    description:
      "Our website design service is built for local trades, shops, and service providers who want to look proper online without paying agency rates. Every site is built for phones first, loads insanely fast, and actually gets you found locally.",
    features: [
      "Custom design built for your brand",
      'Mobile-first responsive layout',
      'Fast loading (under 1 second target)',
      'Local SEO setup included',
      'Google Business Profile integration',
      'Contact forms and click-to-call buttons',
      'Content management and updates included',
    ],
    benefits: [
      'Look professional to customers researching online',
      'Rank higher in local Google searches',
      'Convert more visitors into calls and enquiries',
      'Stand out from competitors with outdated sites',
      'Never worry about technical maintenance again',
    ],
    faqs: [
      {
        question: 'How long does a small business website take to build?',
        answer:
          'Most sites are ready within 7 days from when we receive your content and branding. We keep the process fast and simple.',
      },
      {
        question: 'Do I need to provide content and photos?',
        answer:
          'Yes, but we guide you through exactly what we need. Most clients send phone photos and bullet points, and we turn them into a professional site.',
      },
      {
        question: 'What if I need changes after launch?',
        answer:
          'Our monthly care plan includes unlimited text and image updates. Send us changes anytime and we handle them within 48 hours.',
      },
    ],
    relatedServices: [
      'website-redesign-services',
      'seo-websites-for-local-businesses',
      'website-maintenance-plans',
    ],
  },
  {
    slug: 'website-redesign-services',
    name: 'Website Redesign Services',
    headline: 'Website Redesign Services That Transform Your Online Presence',
    subheadline:
      'Your old website is costing you customers. We redesign it into a fast, modern, mobile-friendly site that ranks better and converts more visitors.',
    metaTitle: 'Website Redesign Services | Refresh Your Site | Coltura',
    metaDescription:
      'Professional website redesign services for local businesses. Modern, fast, mobile-friendly redesigns Built in 7 days.',
    keywords: [
      'website redesign services',
      'website refresh',
      'redesign my website',
      'website makeover',
      'local business website redesign',
    ],
    description:
      'Our website redesign service transforms outdated, slow, or ineffective websites into modern, fast, mobile-first sites that rank higher and convert better. We keep what works and rebuild what does not.',
    features: [
      'Full audit of your current site',
      'Modern, mobile-first redesign',
      'Content migration and improvement',
      'SEO preservation and improvement',
      'Speed optimisation',
      'Google Business Profile reconnection',
      '48-hour update turnaround post-launch',
    ],
    benefits: [
      'Fix slow loading and mobile issues',
      'Improve Google rankings with better SEO',
      'Modern design builds instant trust',
      'Keep existing content that works',
      'Launch quickly without long downtime',
    ],
    faqs: [
      {
        question: 'Will I lose my Google ranking during a redesign?',
        answer:
          'No. We carefully preserve your URLs, redirects, and SEO setup. Most clients see rankings improve after launch, not drop.',
      },
      {
        question: 'How much of my old content can you keep?',
        answer:
          'As much as you want. We migrate and improve existing content while adding new pages and features where needed.',
      },
      {
        question: 'Can you redesign a Wix or Squarespace site?',
        answer:
          'Yes. We rebuild sites from any platform into a faster, more flexible custom site that you actually own and control.',
      },
    ],
    relatedServices: [
      'small-business-website-design',
      'seo-websites-for-local-businesses',
      'fast-loading-websites',
    ],
  },
  {
    slug: 'website-maintenance-plans',
    name: 'Website Maintenance Plans',
    headline: 'Website Maintenance Plans That Keep Your Site Alive',
    subheadline:
      'Websites need regular care. Our maintenance plans handle updates, backups, security, and performance so you never have to worry about your site again.',
    metaTitle: 'Website Maintenance Plans | Care & Updates | Coltura',
    metaDescription:
      'Monthly website maintenance plans for local businesses. Updates, backups, security, and support Get in touch for a quote/month.',
    keywords: [
      'website maintenance plans',
      'website care plan',
      'website support',
      'website updates service',
      'monthly website maintenance',
    ],
    description:
      'Our website maintenance plans keep your site secure, fast, and up to date. We handle text and image updates, form checks, backups, security patches, and performance monitoring — all for a simple monthly fee.',
    features: [
      'Unlimited text and image updates',
      'Monthly form and link checks',
      'Regular backups to cloud storage',
      'Security monitoring and patches',
      'Performance optimisation',
      '48-hour update turnaround',
      'Monthly performance reports',
    ],
    benefits: [
      'Never worry about technical issues again',
      'Keep your site fresh and current',
      'Prevent security vulnerabilities',
      'Fix problems before customers notice',
      'Free up your time to run your business',
    ],
    faqs: [
      {
        question: 'What counts as an "update" in the care plan?',
        answer:
          'Any text change, image replacement, price update, new testimonial, or minor content addition. Large new pages or features may require additional work.',
      },
      {
        question: 'How quickly are updates made?',
        answer:
          'Standard updates are completed within 48 hours. Urgent fixes are handled same-day where possible.',
      },
      {
        question: 'Do you monitor my site for problems?',
        answer:
          'Yes. We run monthly checks for broken links, form errors, speed issues, and security vulnerabilities. You get a report every month.',
      },
    ],
    relatedServices: [
      'small-business-website-design',
      'website-redesign-services',
      'fast-loading-websites',
    ],
  },
  {
    slug: 'seo-websites-for-local-businesses',
    name: 'SEO Websites for Local Businesses',
    headline: 'SEO Websites for Local Businesses That Rank and Convert',
    subheadline:
      'Every website we build includes local SEO setup. But for businesses that want to dominate their area, our advanced SEO service pushes you to the top of local searches.',
    metaTitle: 'SEO Websites for Local Businesses | Local SEO | Coltura',
    metaDescription:
      'SEO-optimised websites for local businesses. Rank higher in local searches with our SEO-focused design and content. Get in touch for a quote.',
    keywords: [
      'seo websites for local businesses',
      'local seo website',
      'seo web design',
      'local business seo',
      'website with seo included',
    ],
    description:
      'Our SEO websites are built from the ground up to rank in local searches. We optimise speed, structure, content, and citations so you appear when customers search for your services nearby.',
    features: [
      'Local keyword research and integration',
      'Google Business Profile optimisation',
      'Schema markup for local business',
      'Location page creation',
      'Citation building and consistency checks',
      'Review generation strategy',
      'Monthly SEO performance reports',
    ],
    benefits: [
      'Rank higher in "near me" searches',
      'Get more organic enquiries without ads',
      'Beat competitors who ignore local SEO',
      'Build long-term search visibility',
      'Trackable results every month',
    ],
    faqs: [
      {
        question: 'How long until I see SEO results?',
        answer:
          'Initial improvements typically appear in 1-3 months. Strong local rankings usually take 3-6 months of consistent effort.',
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer:
          'No ethical SEO company can guarantee rankings. We guarantee best-practice work, transparent reporting, and continuous improvement based on results.',
      },
      {
        question: 'Is SEO included in your standard website package?',
        answer:
          'Basic local SEO setup is included in every site we build. Advanced ongoing SEO is available as a separate service or higher-tier care plan.',
      },
    ],
    relatedServices: [
      'small-business-website-design',
      'google-business-profile-setup',
      'fast-loading-websites',
    ],
  },
  {
    slug: 'fast-loading-websites',
    name: 'Fast Loading Websites',
    headline: 'Fast Loading Websites That Keep Visitors Engaged',
    subheadline:
      'Speed is not a luxury — it is a competitive advantage. We build websites that load in under a second, score 90+ on Google PageSpeed, and convert more visitors.',
    metaTitle: 'Fast Loading Websites | Speed Optimisation | Coltura',
    metaDescription:
      'Lightning-fast websites for local businesses. Under 1-second load times, 90+ PageSpeed scores, and better conversions. Built in 7 days.',
    keywords: [
      'fast loading websites',
      'website speed optimisation',
      'fast website design',
      'page speed improvement',
      'speed optimised website',
    ],
    description:
      'Our fast loading websites are built with performance as the priority. We use modern frameworks, optimised images, efficient code, and premium hosting to achieve sub-one-second load times and top Google PageSpeed scores.',
    features: [
      'Sub-1-second load time target',
      '90+ Google PageSpeed score',
      'Image optimisation and modern formats',
      'Efficient code with no bloat',
      'Premium hosting and CDN',
      'Core Web Vitals optimisation',
      'Monthly speed monitoring',
    ],
    benefits: [
      'Rank higher on Google (speed is a ranking factor)',
      'Keep visitors who would otherwise leave',
      'Convert more browsers into buyers',
      'Look more professional and trustworthy',
      'Reduce hosting and bandwidth costs',
    ],
    faqs: [
      {
        question: 'How fast will my website load?',
        answer:
          'We target under 1 second on desktop and under 2 seconds on mobile. Most of our sites achieve this consistently.',
      },
      {
        question: 'Does speed really affect my Google ranking?',
        answer:
          'Yes. Google has confirmed speed as a ranking factor, especially on mobile. Faster sites rank higher and provide better user experience.',
      },
      {
        question: 'Can you speed up my existing website?',
        answer:
          'Yes. We offer speed optimisation services for existing sites, though the biggest improvements usually come from a rebuild on a modern platform.',
      },
    ],
    relatedServices: [
      'small-business-website-design',
      'website-redesign-services',
      'mobile-optimised-websites',
    ],
  },
  {
    slug: 'mobile-optimised-websites',
    name: 'Mobile Optimised Websites',
    headline: 'Mobile Optimised Websites for the On-the-Go Customer',
    subheadline:
      'Over 70% of local business searches happen on mobile. If your site is not thumb-friendly, you are losing most of your potential customers.',
    metaTitle: 'Mobile Optimised Websites | Mobile-First Design | Coltura',
    metaDescription:
      'Mobile-first websites for local businesses. Designed for phones, fast on all devices, and built to convert mobile visitors. Get in touch for a quote.',
    keywords: [
      'mobile optimised websites',
      'mobile first web design',
      'responsive website design',
      'mobile friendly website',
      'phone optimised website',
    ],
    description:
      'Our mobile-optimised websites are designed for phones first. Every element — buttons, text, images, forms, and navigation — is thumb-friendly and fast on mobile networks. Because most of your customers will find you on their phone.',
    features: [
      'Mobile-first design approach',
      'Thumb-friendly buttons and navigation',
      'Fast loading on mobile networks',
      'Click-to-call buttons prominently placed',
      'Simplified mobile forms',
      'Mobile-optimised images and video',
      'Touch-friendly maps and directions',
    ],
    benefits: [
      'Capture mobile "near me" searches',
      'Reduce bounce rate from mobile visitors',
      'Make contacting you effortless on phones',
      'Rank better in mobile Google searches',
      'Convert mobile browsers into callers',
    ],
    faqs: [
      {
        question: 'What does mobile-first mean?',
        answer:
          'Mobile-first means we design for phones first, then scale up for tablets and desktops. This ensures the mobile experience is perfect, not an afterthought.',
      },
      {
        question: 'Will my site work on all phones?',
        answer:
          'Yes. We test on iPhones, Android devices, and various screen sizes to ensure consistent performance everywhere.',
      },
      {
        question: 'How important is mobile optimisation for local businesses?',
        answer:
          'Critical. Over 70% of local searches happen on mobile. A non-mobile-friendly site is effectively invisible to most of your potential customers.',
      },
    ],
    relatedServices: [
      'small-business-website-design',
      'fast-loading-websites',
      'seo-websites-for-local-businesses',
    ],
  },
  {
    slug: 'google-business-profile-setup',
    name: 'Google Business Profile Setup',
    headline: 'Google Business Profile Setup That Gets You Found',
    subheadline:
      'Your Google Business Profile is often the first thing customers see. We set it up properly, optimise it completely, and keep it active so you rank in local searches.',
    metaTitle: 'Google Business Profile Setup | Local SEO | Coltura',
    metaDescription:
      'Professional Google Business Profile setup and optimisation for local businesses. Rank higher in local searches. One-time setup Get in touch for a quote.',
    keywords: [
      'google business profile setup',
      'google my business setup',
      'local seo setup',
      'gbp optimisation',
      'google business profile service',
    ],
    description:
      'Our Google Business Profile setup service claims, verifies, and fully optimises your GBP. We add complete business information, categories, services, photos, and posts — then set up a strategy for ongoing activity and review generation.',
    features: [
      'Profile claim and verification',
      'Complete business information setup',
      'Category and service optimisation',
      'Professional photo uploads',
      'Initial post creation',
      'Q&A setup with common questions',
      'Review generation strategy',
    ],
    benefits: [
      'Appear in Google Maps and local search results',
      'Rank higher than competitors with incomplete profiles',
      'Build trust with complete, professional information',
      'Generate more calls and direction requests',
      'Establish a foundation for all local SEO efforts',
    ],
    faqs: [
      {
        question: 'Do I already need a website for a Google Business Profile?',
        answer:
          'No, but having one helps. We can set up your GBP first, then build your website to reinforce and expand on that foundation.',
      },
      {
        question: 'How long does setup take?',
        answer:
          'Initial setup takes 1-2 days. Verification (usually a postcard from Google) takes 5-14 days. Full optimisation happens as soon as verification completes.',
      },
      {
        question: 'Will you manage my profile ongoing?',
        answer:
          'Yes. Our higher-tier care plans include monthly GBP updates, post creation, and review response management.',
      },
    ],
    relatedServices: [
      'seo-websites-for-local-businesses',
      'small-business-website-design',
      'website-maintenance-plans',
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
