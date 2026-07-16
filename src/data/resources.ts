export interface ResourceData {
  slug: string;
  title: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: string[];
  faqs: { question: string; answer: string }[];
  relatedResources: string[];
  readTime: string;
}

export const RESOURCES: ResourceData[] = [
  {
    slug: 'what-makes-a-good-small-business-website',
    title: 'What Makes a Good Small Business Website',
    headline: 'What Makes a Good Small Business Website in 2025',
    metaTitle: 'What Makes a Good Small Business Website | Coltura',
    metaDescription:
      'Discover the key elements of a successful small business website. Clear messaging, fast loading, mobile design, local SEO, and trust signals.',
    keywords: [
      'good small business website',
      'small business website tips',
      'what makes a good website',
      'business website essentials',
      'website best practices',
    ],
    excerpt:
      'A good small business website is fast, mobile-friendly, and clearly explains what you do and why customers should choose you.',
    content: [
      'A good small business website does three things: it tells visitors what you do, why they should trust you, and how to contact you — all within seconds.',
      'Speed matters. If your site takes more than three seconds to load, half your visitors will leave before they see anything. Mobile matters even more. Over 70% of local business searches happen on phones, so your site must look and work perfectly on small screens.',
      'Clear messaging beats clever messaging. Your homepage headline should explain what you do and who you serve in plain English. Avoid jargon, buzzwords, and vague claims like "solutions for modern businesses."',
      'Trust signals turn browsers into buyers. Customer reviews, professional photos, qualifications, and guarantees all reduce the perceived risk of choosing you.',
      'Local SEO ensures people nearby can find you. This means accurate contact details, a Google Business Profile, and location mentions throughout your content.',
      'Finally, every page should have a clear next step. Whether that is calling, messaging, booking, or visiting — make it obvious and easy.',
    ],
    faqs: [
      {
        question: 'How many pages does a small business website need?',
        answer:
          'Most local businesses only need 3-5 pages: Home, Services, About, and Contact. What matters is quality, not quantity.',
      },
      {
        question: 'Should my small business website have a blog?',
        answer:
          'Only if you will update it regularly. A stale blog looks worse than no blog. Focus on making your core pages excellent first.',
      },
      {
        question: 'How much should a small business website cost?',
        answer:
          'A professional small business website typically costs between £500 and £3,000 depending on complexity. Ongoing maintenance is often overlooked but essential.',
      },
    ],
    relatedResources: [
      'why-most-local-business-websites-fail',
      'website-costs-explained',
      'why-website-speed-matters',
    ],
    readTime: '5 min read',
  },
  {
    slug: 'why-most-local-business-websites-fail',
    title: 'Why Most Local Business Websites Fail',
    headline: 'Why Most Local Business Websites Fail (And How to Fix Yours)',
    metaTitle: 'Why Most Local Business Websites Fail | Coltura',
    metaDescription:
      'The most common reasons local business websites fail: slow speed, poor mobile design, unclear messaging, and no local SEO. Learn how to fix them.',
    keywords: [
      'why local business websites fail',
      'website mistakes',
      'common website problems',
      'local business website issues',
      'fix my website',
    ],
    excerpt:
      'Most local business websites fail because they are slow, confusing, invisible on Google, or never updated after launch.',
    content: [
      'Most local business websites fail for the same five reasons. Understanding them is the first step to fixing yours.',
      'First, they are too slow. A website that takes more than three seconds to load loses visitors before they even see your offer. Slow hosting, unoptimised images, and bloated code are the usual culprits.',
      'Second, they ignore mobile. Over 70% of local searches happen on phones. If your site requires pinching, zooming, or horizontal scrolling, you are losing customers.',
      'Third, the messaging is unclear. Visitors should know what you do, who you serve, and why to choose you within five seconds. Most small business websites bury this information under fluffy copy and stock photos.',
      'Fourth, they are invisible on Google. Without local SEO — accurate contact details, location keywords, and a Google Business Profile — you will not appear in "near me" searches no matter how pretty your site looks.',
      'Fifth, they are abandoned after launch. A website is not a one-time project. Outdated information, broken forms, and stale content signal to visitors (and Google) that your business might be inactive too.',
      'The fix is simple: build fast, design mobile-first, write clearly, optimise for local search, and keep your site maintained.',
    ],
    faqs: [
      {
        question: 'Is my website too slow?',
        answer:
          'Test it with Google PageSpeed Insights. If your score is below 50 on mobile, or load time exceeds 3 seconds, you are losing visitors.',
      },
      {
        question: 'Why am I not showing up on Google?',
        answer:
          'Usually because of missing local SEO: no Google Business Profile, no location keywords, inconsistent contact details, or technical issues blocking search engines.',
      },
      {
        question: 'How often should I update my website?',
        answer:
          'At minimum, review your site quarterly. Update prices, hours, team info, and testimonials. Ideally, make small updates monthly to signal to Google that your business is active.',
      },
    ],
    relatedResources: [
      'what-makes-a-good-small-business-website',
      'website-costs-explained',
      'local-seo-basics',
    ],
    readTime: '6 min read',
  },
  {
    slug: 'website-costs-explained',
    title: 'Website Costs Explained',
    headline: 'Website Costs Explained: What You Actually Pay For',
    metaTitle: 'Website Costs Explained | Small Business Guide | Coltura',
    metaDescription:
      'A clear breakdown of website costs for small businesses. Design, development, hosting, domain, content, and ongoing maintenance explained.',
    keywords: [
      'website costs',
      'how much does a website cost',
      'small business website price',
      'website pricing explained',
      'website design cost uk',
    ],
    excerpt:
      'Website costs break down into five clear categories. Here\'s exactly what you\'re paying for — and what each one should cost.',
    content: [
      'Small business website costs fall into five categories. Ignore any of them and you\'ll either overspend or end up with a site that doesn\'t work. Here\'s the real breakdown.',
      '1. Design & Development — £500 to £3,000. This is the biggest upfront cost. A professional 5-page website for a local business typically costs £500-£3,000 depending on complexity, custom features, and who builds it. Template sites (Wix, Squarespace) sit at the bottom. Custom hand-coded sites sit at the top. You get what you pay for — a £500 template looks like a £500 template.',
      '2. Hosting — £5 to £100/month. Hosting is what keeps your site online. Cheap shared hosting (£5-£30/month) is fine for brochure sites but expect slow speeds and downtime. Managed hosting (£20-£100/month) is faster, more secure, and includes automatic backups. If your site is how customers find you, don\'t cheap out on hosting.',
      '3. Domain Name — £10 to £20/year. Your domain is your online address (e.g. yourbusiness.co.uk). It\'s cheap but critical. Secure your exact business name plus common variations (.com, .uk). Renew it on time — losing your domain means losing your email and website overnight.',
      '4. Content & Imagery — £200 to £500 per page. Words and pictures do the selling. Professional copywriting costs £200-£500 per page but converts visitors into customers. Good photos make an enormous difference — hire a photographer for a half day (£150-£300) or use your best phone shots in natural light. Stock photos scream "template."',
      '5. Maintenance & Updates — £50 to £200/month. This is the cost most businesses forget. Security patches, plugin updates, backups, content changes, broken link checks — they all need regular attention. Budget £50-£200/month for ongoing maintenance, or use a service like Coltura\'s care plans (£99/month) which include hosting, updates, and monthly edits.',
      'Total first-year cost for a professional small business website: £1,500-£5,000 including build, hosting, domain, content, and 12 months of maintenance.',
    ],
    faqs: [
      {
        question: 'Why do website quotes vary so much?',
        answer:
          'Because different providers include different things. A £495 quote might exclude content writing, SEO, and maintenance. A £3,000 quote usually includes design, development, copywriting, SEO setup, and sometimes the first year of hosting. Always ask: what\'s included? What\'s extra? What happens after launch?',
      },
      {
        question: 'Can I build a cheap website myself?',
        answer:
          'Yes, with Wix, Squarespace, or WordPress. A DIY site costs £10-£30/month plus your time. But be honest about what you\'re getting: slower load times, weaker SEO, limited customisation, and nobody to call when something breaks. DIY works if you\'re just starting out. Most businesses outgrow it within 12 months.',
      },
      {
        question: 'What ongoing costs should I expect after my site is live?',
        answer:
          'Plan for three things: hosting (£60-£360/year), domain renewal (£10-£20/year), and maintenance — either your time or £50-£200/month for someone else to handle updates, security, and backups. Coltura\'s care plans bundle hosting + maintenance + content updates. Get in touch for pricing.',
      },
      {
        question: 'What\'s the difference between a £500 site and a £3,000 site?',
        answer:
          'A £500 site is usually a template with your logo dropped in. One page, limited SEO, no custom design, no copywriting. A £3,000 site is custom-designed for your brand, includes professional copywriting, has proper SEO foundations, loads fast on mobile, and usually includes a year of support. The difference shows in your Google rankings and how many visitors actually call you.',
      },
    ],
    relatedResources: [
      'wix-vs-custom-websites',
      'squarespace-vs-hand-coded-websites',
      'what-makes-a-good-small-business-website',
    ],
    readTime: '7 min read',
  },
  {
    slug: 'wix-vs-custom-websites',
    title: 'Wix vs Custom Websites',
    headline: 'Wix vs Custom Websites: What Is Right for Your Business?',
    metaTitle: 'Wix vs Custom Websites | Small Business Guide | Coltura',
    metaDescription:
      'Compare Wix and custom-built websites for small businesses. Speed, SEO, flexibility, cost, and long-term value explained.',
    keywords: [
      'wix vs custom website',
      'wix vs professional website',
      'should I use wix',
      'custom website vs website builder',
      'wix for small business',
    ],
    excerpt:
      'Wix is fast to set up but limits speed, SEO, and flexibility. Custom websites cost more upfront but perform better and grow with your business.',
    content: [
      'Wix and custom websites both have their place. The right choice depends on your budget, technical skills, and how seriously you take your online presence.',
      'Wix shines in speed of setup. You can have a basic site live in a day with no coding. Templates look decent, and the drag-and-drop editor is intuitive. For hobby businesses or testing an idea, Wix is fine.',
      'But Wix has hard limits. Page speed is often slow, which hurts both user experience and Google rankings. SEO tools are basic — you will struggle to rank competitively. Custom features, integrations, and design flexibility are restricted to what Wix allows.',
      'Custom websites cost more upfront but deliver more long-term. You control every pixel, every line of code, and every optimisation. Fast loading, proper local SEO, custom booking systems, and unique branding all become possible.',
      'For local businesses that rely on Google searches to find customers, custom is usually the better investment. The extra upfront cost pays back through better rankings, more enquiries, and a site that grows with your business.',
      'The middle ground is a professionally built site on a flexible platform like Next.js or WordPress — faster and more optimised than Wix, without the Wix limitations.',
    ],
    faqs: [
      {
        question: 'Is Wix bad for SEO?',
        answer:
          'Wix SEO is basic and limited. You can do the fundamentals, but advanced local SEO, speed optimisation, and technical SEO are restricted. For competitive markets, this matters.',
      },
      {
        question: 'Can I move my Wix site to a custom website later?',
        answer:
          'Not easily. Wix sites are locked to their platform. Moving means rebuilding from scratch, which is why many businesses regret starting with Wix.',
      },
      {
        question: 'How much more does a custom website cost than Wix?',
        answer:
          'Wix starts at £10-£30/month plus templates. A professional custom site costs £995-£3,000 upfront plus hosting. The custom site typically pays for itself through better performance and more enquiries.',
      },
    ],
    relatedResources: [
      'squarespace-vs-hand-coded-websites',
      'website-costs-explained',
      'what-makes-a-good-small-business-website',
    ],
    readTime: '5 min read',
  },
  {
    slug: 'squarespace-vs-hand-coded-websites',
    title: 'Squarespace vs Hand Coded Websites',
    headline: 'Squarespace vs Hand-Coded Websites: The Honest Comparison',
    metaTitle: 'Squarespace vs Hand Coded Websites | Coltura',
    metaDescription:
      'Compare Squarespace and hand-coded websites. Design, speed, SEO, flexibility, and total cost of ownership for small businesses.',
    keywords: [
      'squarespace vs custom website',
      'squarespace vs hand coded',
      'website builder vs custom',
      'squarespace for small business',
      'hand coded website benefits',
    ],
    excerpt:
      'Squarespace looks good out of the box but limits speed, SEO, and custom features. Hand-coded websites perform better and grow with your business.',
    content: [
      'Squarespace is the polished choice among website builders. Templates look professional, the editor is smooth, and everything feels designed. For photographers, designers, and portfolio sites, it works well.',
      'But Squarespace shares the same fundamental limits as all builders. Your site runs on their platform, their code, and their rules. Speed is adequate but not fast. SEO tools are present but shallow. Custom functionality is limited to their integrations.',
      'Hand-coded websites — built with modern frameworks like Next.js or React — remove those limits entirely. Every line of code serves your business. Speed, SEO, animations, integrations, and design are all fully controllable.',
      'For local businesses competing on Google, speed and SEO matter. A hand-coded site typically loads in under one second and scores 90+ on Google PageSpeed. Squarespace sites often score 40-60. That difference directly impacts rankings and conversions.',
      'The trade-off is cost and maintenance. Hand-coded sites need a developer to build and update. Squarespace lets you make small changes yourself. For businesses that rarely update their site, this matters less than you think.',
      'Our view: if your website is a key source of new customers, invest in a hand-coded or professionally built custom site. If it is purely informational and you never rely on Google traffic, Squarespace may suffice.',
    ],
    faqs: [
      {
        question: 'Does Squarespace have good SEO?',
        answer:
          'Squarespace covers SEO basics but lacks advanced features. You cannot fully control technical SEO, schema markup, or speed optimisation — all critical for competitive local rankings.',
      },
      {
        question: 'Can I customise a Squarespace site completely?',
        answer:
          'Within their templates, yes. Beyond that, no. Custom layouts, unique animations, bespoke booking systems, and advanced integrations all require leaving Squarespace.',
      },
      {
        question: 'Is a hand-coded website worth the extra cost?',
        answer:
          'If you rely on your website for customers, yes. The better speed, SEO, and flexibility typically generate enough extra enquiries to pay for the difference within months.',
      },
    ],
    relatedResources: [
      'wix-vs-custom-websites',
      'website-costs-explained',
      'why-website-speed-matters',
    ],
    readTime: '6 min read',
  },
  {
    slug: 'why-website-speed-matters',
    title: 'Why Website Speed Matters',
    headline: 'Why Website Speed Matters More Than Ever',
    metaTitle: 'Why Website Speed Matters | SEO & Conversions | Coltura',
    metaDescription:
      'Website speed directly impacts Google rankings, conversions, and user experience. Learn why fast websites win and how to speed yours up.',
    keywords: [
      'why website speed matters',
      'website speed importance',
      'fast website benefits',
      'page speed seo',
      'website loading time',
    ],
    excerpt:
      'A one-second delay in page load time reduces conversions by 7%. Speed affects Google rankings, user experience, and your bottom line.',
    content: [
      'Website speed is not a nice-to-have. It directly affects how many visitors become customers, where you rank on Google, and how professional your business appears.',
      'Google has used page speed as a ranking factor since 2010, and it became even more important with the Core Web Vitals update. Slow sites rank lower. Full stop.',
      'User behaviour is even more dramatic. 53% of mobile visitors abandon a site that takes longer than three seconds to load. A one-second delay reduces conversions by 7%. On a £1,000/day business, that is £70 lost daily — £25,000 yearly.',
      'Speed also affects trust. Fast sites feel professional and reliable. Slow sites feel neglected, which makes visitors question whether your business is still active.',
      'The main speed killers are unoptimised images, cheap hosting, bloated code, too many plugins, and missing caching. Most of these are fixable without rebuilding your site.',
      'A well-built website should load in under one second on desktop and under two seconds on mobile. If yours does not, you are losing customers to competitors who invested in speed.',
    ],
    faqs: [
      {
        question: 'How do I test my website speed?',
        answer:
          'Use Google PageSpeed Insights, GTmetrix, or WebPageTest. These tools score your site and show exactly what is slowing it down.',
      },
      {
        question: 'What is a good page load time?',
        answer:
          'Under 1 second on desktop and under 2 seconds on mobile is excellent. Under 3 seconds is acceptable. Anything over 3 seconds is costing you visitors.',
      },
      {
        question: 'Will speeding up my website improve my Google ranking?',
        answer:
          'Yes. Speed is a confirmed Google ranking factor. Faster sites rank higher, especially on mobile. Combined with good content and local SEO, speed can be the difference between page one and page two.',
      },
    ],
    relatedResources: [
      'what-makes-a-good-small-business-website',
      'local-seo-basics',
      'website-costs-explained',
    ],
    readTime: '4 min read',
  },
  {
    slug: 'local-seo-basics',
    title: 'Local SEO Basics',
    headline: 'Local SEO Basics: How to Get Found in "Near Me" Searches',
    metaTitle: 'Local SEO Basics | Small Business Guide | Coltura',
    metaDescription:
      'Learn local SEO basics for small businesses. Google Business Profile, local keywords, reviews, and citations explained simply.',
    keywords: [
      'local seo basics',
      'local seo guide',
      'how to rank locally',
      'near me seo',
      'small business local seo',
    ],
    excerpt:
      'Local SEO helps nearby customers find your business. Master Google Business Profile, local keywords, reviews, and citations to rank in "near me" searches.',
    content: [
      'Local SEO is how you appear when someone searches "plumber near me" or "hair salon in Macclesfield." It is simpler than national SEO but requires specific, consistent actions.',
      'Your Google Business Profile is the foundation. Claim it, verify it, and fill it out completely — business name, address, phone, hours, services, photos, and regular updates. Businesses with complete profiles rank higher.',
      'Local keywords signal your location to Google. Include your town, neighbourhood, and "near me" phrases naturally in your page titles, headings, and content. Do not overstuff — write for humans first.',
      'Reviews are a ranking factor and a conversion tool. Ask happy customers to leave Google reviews. Respond to every review, positive or negative. Businesses with more reviews rank higher and look more trustworthy.',
      'Citations are mentions of your business name, address, and phone number (NAP) on other websites. Consistency matters — the same NAP across directories, social media, and your own site builds trust with Google.',
      'Finally, your website must be mobile-friendly and fast. Most local searches happen on phones while people are out and about. A slow or clunky mobile site kills enquiries before they start.',
    ],
    faqs: [
      {
        question: 'How long does local SEO take to work?',
        answer:
          'Typically 1-3 months to see initial improvements, and 6-12 months for strong local rankings. Consistency matters more than speed.',
      },
      {
        question: 'Do I need a website for local SEO?',
        answer:
          'Technically no — Google Business Profiles can exist without websites. But businesses with websites rank higher, look more professional, and convert better.',
      },
      {
        question: 'How do I get more Google reviews?',
        answer:
          'Ask every happy customer. Send a follow-up text or email with a direct link to your Google review page. Make it as easy as possible.',
      },
    ],
    relatedResources: [
      'how-google-business-profiles-work',
      'why-most-local-business-websites-fail',
      'why-website-speed-matters',
    ],
    readTime: '6 min read',
  },
  {
    slug: 'how-google-business-profiles-work',
    title: 'How Google Business Profiles Work',
    headline: 'How Google Business Profiles Work (And Why Yours Matters)',
    metaTitle: 'How Google Business Profiles Work | Local SEO | Coltura',
    metaDescription:
      'Understand how Google Business Profiles work and why they are essential for local SEO. Setup, optimisation, and ranking tips for small businesses.',
    keywords: [
      'google business profile',
      'google my business',
      'how google business profiles work',
      'local seo google',
      'gbp optimisation',
    ],
    excerpt:
      'Your Google Business Profile is often the first thing customers see. A complete, optimised profile ranks higher and generates more calls and visits.',
    content: [
      'Your Google Business Profile (GBP) is the box that appears on the right side of Google search results and in Google Maps. It is often the first impression customers have of your business — before they ever visit your website.',
      'Google uses three factors to rank profiles: relevance, distance, and prominence. Relevance means how well your profile matches the search. Distance is how close you are to the searcher. Prominence is how well-known and active your business appears online.',
      'To optimise relevance, choose accurate business categories, write detailed service descriptions, and use location keywords naturally in your profile.',
      'Distance is mostly fixed — you cannot move your business. But you can target nearby neighbourhoods and areas in your profile description and posts.',
      'Prominence is where you have the most control. Get reviews, add photos regularly, post updates, and ensure your business is mentioned consistently across the web. The more active and cited your business, the higher you rank.',
      'A complete GBP with photos, services, products, Q&A, and regular posts outranks incomplete profiles every time. Treat it as an extension of your website, not an afterthought.',
    ],
    faqs: [
      {
        question: 'Is Google Business Profile free?',
        answer:
          'Yes, completely free. It is one of the most powerful free marketing tools available to local businesses.',
      },
      {
        question: 'How often should I update my Google Business Profile?',
        answer:
          'Post updates weekly if possible — offers, news, photos. Add new photos monthly. Respond to reviews within 24-48 hours. Regular activity signals to Google that your business is active and relevant.',
      },
      {
        question: 'Can I have multiple Google Business Profiles?',
        answer:
          'Only if you have multiple legitimate business locations. Creating fake or duplicate profiles violates Google\'s guidelines and can get you banned.',
      },
    ],
    relatedResources: [
      'local-seo-basics',
      'why-most-local-business-websites-fail',
      'how-ai-search-is-changing-seo',
    ],
    readTime: '5 min read',
  },
  {
    slug: 'website-checklist-for-trades',
    title: 'Website Checklist for Trades',
    headline: 'Website Checklist for Trades: What Every Builder, Plumber, and Electrician Needs',
    metaTitle: 'Website Checklist for Trades | Builders, Plumbers, Electricians | Coltura',
    metaDescription:
      'Essential website checklist for tradespeople. What to include, what to avoid, and how to turn your website into a lead generation tool.',
    keywords: [
      'website checklist for trades',
      'tradesman website essentials',
      'builder website checklist',
      'plumber website checklist',
      'trade business website',
    ],
    excerpt:
      'Trades websites need clear services, qualifications, reviews, and easy contact. This checklist covers everything builders, plumbers, electricians, and other trades need.',
    content: [
      'Trade websites have one job: turn visitors into enquiries. Every element should build trust and make contacting you effortless. Here is the checklist we use for every trades website we build.',
      '1. Clear service list. Visitors should know exactly what you do within seconds. List your services with brief descriptions — no jargon, no vague claims.',
      '2. Qualifications and insurance. Display trade registrations, insurance details, and any accreditations. For builders: FMB, NHBC. For plumbers: Gas Safe. For electricians: NICEIC, Part P.',
      '3. Project or work gallery. Before/after photos, completed jobs, or examples of your best work. Visual proof beats written claims.',
      '4. Customer reviews. Genuine testimonials with names and locations. Video testimonials are even better. Reviews reduce the perceived risk of hiring you.',
      '5. Areas covered. Be specific — list towns, postcodes, or regions. This helps with local SEO and tells visitors if you serve their area.',
      '6. Clear pricing or quote process. Even a "from" price or "request a free quote" CTA helps visitors know what to expect.',
      '7. Easy contact methods. Prominent phone number, click-to-call on mobile, contact form, and WhatsApp if you use it. Every extra click loses enquiries.',
      '8. Fast, mobile-friendly design. Most trade enquiries come from mobile. Your site must load fast and work perfectly on phones.',
      '9. Local SEO setup. Google Business Profile connection, location keywords, and schema markup so you appear in "near me" searches.',
      '10. Regular updates. Outdated websites look abandoned. Update galleries, testimonials, and offers at least quarterly.',
    ],
    faqs: [
      {
        question: 'Do I need a portfolio if I am just starting out?',
        answer:
          'Yes, but use what you have. Photos of your best jobs — even a few — plus any training certificates or apprenticeship work. Quality over quantity.',
      },
      {
        question: 'Should I put my prices on my website?',
        answer:
          'At minimum, give a guide or starting price. Visitors who cannot see any pricing often assume you are expensive and move on. Transparency builds trust.',
      },
      {
        question: 'How do I get reviews for my trade business?',
        answer:
          'Ask every satisfied customer. Send a text with a direct link to your Google review page immediately after finishing the job while they are still pleased with your work.',
      },
    ],
    relatedResources: [
      'what-makes-a-good-small-business-website',
      'local-seo-basics',
      'website-costs-explained',
    ],
    readTime: '7 min read',
  },
  {
    slug: 'how-ai-search-is-changing-seo',
    title: 'How AI Search Is Changing SEO',
    headline: 'How AI Search Is Changing SEO (And What Local Businesses Should Do)',
    metaTitle: 'How AI Search Is Changing SEO | Local Business Guide | Coltura',
    metaDescription:
      'AI search engines like ChatGPT, Perplexity, and Google SGE are changing SEO. Learn what local businesses need to know and how to adapt.',
    keywords: [
      'ai search seo',
      'ai search changing seo',
      'chatgpt search',
      'perplexity seo',
      'future of local seo',
      'ai search engines',
    ],
    excerpt:
      'AI search engines answer questions directly instead of showing links. Local businesses need clear, structured, trustworthy content to get mentioned in AI responses.',
    content: [
      'AI search is here. ChatGPT, Perplexity, Google\'s Search Generative Experience, and Bing Copilot answer questions directly instead of just showing blue links. This changes everything for local business SEO.',
      'Traditional SEO focused on ranking on page one of Google. AI SEO focuses on being the answer AI engines cite when someone asks "who is the best plumber in Poynton?" or "what should I look for in a local web designer?"',
      'AI engines favour clear, factual, well-structured content. They love FAQs, bullet points, concise explanations, and explicit claims backed by evidence. They struggle with vague marketing fluff and unsupported superlatives.',
      'Trust signals matter more than ever. AI engines check reviews, citations, and consistency across the web. Businesses with strong Google Business Profiles, consistent contact details, and genuine customer feedback get cited more often.',
      'Structured data helps AI understand your content. Schema markup — like LocalBusiness, Service, and FAQ schema — tells AI exactly what you do, where you are, and what questions you answer.',
      'For local businesses, the strategy is clear: write genuinely helpful content, structure it clearly, build real reviews and citations, and mark it up with schema. Be the obvious, trustworthy answer in your niche and location.',
    ],
    faqs: [
      {
        question: 'Will AI search replace Google?',
        answer:
          'Not immediately, but AI search is growing fast. Google itself is integrating AI into search results. Businesses that optimise for AI now will be ahead of competitors who wait.',
      },
      {
        question: 'How do I optimise my website for AI search?',
        answer:
          'Write clear, factual content. Use FAQs and structured lists. Add schema markup. Build genuine reviews and citations. Avoid vague marketing language — be specific and helpful.',
      },
      {
        question: 'Does traditional SEO still matter?',
        answer:
          'Yes. AI search engines still rely on traditional signals — backlinks, content quality, site speed, and local citations. AI SEO builds on top of good traditional SEO, it does not replace it.',
      },
    ],
    relatedResources: [
      'local-seo-basics',
      'why-website-speed-matters',
      'what-makes-a-good-small-business-website',
    ],
    readTime: '6 min read',
  },
  {
    slug: 'google-ads-costs-for-uk-trades',
    title: 'Google Ads Costs for UK Trades',
    headline: 'Google Ads Costs for UK Trades: What Builders, Plumbers, and Electricians Actually Pay Per Click',
    metaTitle: 'Google Ads Costs for UK Trades | CPC Data by Industry | Coltura',
    metaDescription:
      'Real UK Google Ads cost-per-click data for roofers, plumbers, electricians, builders, and 40+ other trades. See what your competitors pay for every click.',
    keywords: [
      'google ads costs for trades',
      'trades ppc costs uk',
      'google ads cost per click trades',
      'roofer google ads cost',
      'plumber google ads cost',
      'electrician google ads cost',
      'trades google ads cpc',
      'cost per click trades uk',
    ],
    excerpt:
      'Roofers pay £5-12 per click. Plumbers pay £3-7. Emergency trades pay up to £20. See the real Google Ads costs across 40+ UK trades.',
    content: [
      'If you run a trade business and have ever considered Google Ads, you have probably wondered what your competitors are paying. The answer: a lot more than you think. Here is the real cost-per-click data across 40+ UK trades, compiled from industry sources as of June 2026.',
      '',
      '## High-CPC Trades (£5-15 per click)',
      '',
      'These are the most expensive trades to advertise on Google. Every click costs serious money — and many of these searches are urgent, pushing costs even higher.',
      '',
      '| Trade | Average CPC | Emergency CPC |',
      '|---|---|---|',
      '| Roofers | £5-12 | £12-20 (storm) |',
      '| Plumbers | £3-7 | £6-15 (emergency) |',
      '| Heating engineers | £4-10 | £8-15 (emergency) |',
      '| Builders (general) | £4-10 | £6-15 |',
      '| Kitchen fitters | £4-9 | £6-12 |',
      '| Electricians | £3-8 | £5-12 (emergency) |',
      '| Bathroom fitters | £3-8 | £5-10 |',
      '| Locksmiths | £4-10 | £8-18 (emergency) |',
      '| Removal companies | £3-8 | £5-12 |',
      '| Skip hire | £3-7 | £5-10 |',
      '| Tree surgeons | £3-7 | £6-12 (emergency) |',
      '| Pest control | £3-7 | £5-12 (emergency) |',
      '',
      'Roofers face the most brutal costs. A storm warning triggers emergency searches, and every click can cost £12-20. A single storm week could burn through £500-1,000 in ad spend before you even answer the phone.',
      '',
      '## Medium-CPC Trades (£2-7 per click)',
      '',
      '| Trade | Average CPC |',
      '|---|---|',
      '| Landscapers / gardeners | £2-5 |',
      '| Painters & decorators | £2-5 |',
      '| Plasterers | £2-5 |',
      '| Carpet cleaners | £2-5 |',
      '| Cleaners (domestic) | £2-5 |',
      '| Window cleaners | £1.50-4 |',
      '| Groundworkers | £3-6 |',
      '| CCTV/security installers | £3-7 |',
      '| Garage mechanics | £2-6 |',
      '| Tilers | £2-5 |',
      '| Joiners | £2-5 |',
      '| Fascias/soffits/guttering | £3-6 |',
      '| Insulation contractors | £3-6 |',
      '| Solar/renewable energy | £3-7 |',
      '',
      '## Lower-CPC Trades (£1-4 per click)',
      '',
      '| Trade | Average CPC |',
      '|---|---|',
      '| Dog walkers | £1.50-3 |',
      '| Dog groomers | £1.50-3 |',
      '| Window fitters/glaziers | £2-5 |',
      '| Chimney sweeps | £1.50-3 |',
      '| Upholsterers | £1.50-3 |',
      '| Sign makers | £1.50-3 |',
      '',
      '## The Real Cost',
      '',
      'Let us run the numbers for a typical Macclesfield roofer. At £6 per click and 100 clicks/month, that is £600/month — £7,200/year. At a 10% conversion rate: 10 leads. Cost per lead: £60.',
      '',
      'A Coltura website pays for itself compared to ongoing ad spend.',
      '',
      'After the website is live, every organic lead costs £0. No per-click fee. No daily budget. No auction against competitors. Your website works 24/7, generating enquiries while you sleep.',
      '',
      '## Location Multipliers',
      '',
      '| Area | CPC vs National Average |',
      '|---|---|',
      '| London | 1.4x-1.8x higher |',
      '| Manchester, Birmingham | 1.1x-1.3x higher |',
      '| Macclesfield, Wilmslow | 0.7x-0.9x lower |',
      '| Rural Cheshire | 0.5x-0.7x lower |',
      '',
      '## The Formula',
      '',
      'Annual PPC cost = average CPC x monthly clicks x 12. A Coltura website pays for itself when annual ad spend exceeds that cost — which for most trades happens within 2-6 months.',
      '',
      '## Why Organic Wins',
      '',
      'Google Ads stop the moment your budget runs out. Organic traffic from a well-optimised website compounds over time. Your site gains authority, accumulates reviews, earns backlinks, and ranks for more keywords every month.',
      '',
      'Every day you spend on ads is a day competitors get the organic leads you could own — for free.',
    ],
    faqs: [
      {
        question: 'Why are Google Ads so expensive for trades?',
        answer:
          'Trade keywords are highly competitive because a single job can be worth hundreds or thousands of pounds. Roofers, plumbers, and electricians bid aggressively because winning one emergency call-out at £20 per click can turn into a £500-2,000 job. High job value justifies high click costs.',
      },
      {
        question: 'Can I run Google Ads without a website?',
        answer:
          'Technically yes — Google allows ads pointing to a Google Business Profile or phone number. But ads convert far better with a professional website behind them. Without one, you are paying for clicks that have nowhere convincing to land.',
      },
      {
        question: 'How do I reduce my Google Ads costs?',
        answer:
          'Use specific local keywords rather than broad terms. "Emergency plumber Macclesfield" is cheaper and converts better than just "plumber." Add negative keywords to exclude irrelevant searches. And invest in local SEO — the best way to reduce costs is to rank organically.',
      },
      {
        question: 'Which trade has the most expensive Google Ads?',
        answer:
          'Roofers and emergency locksmiths pay the most — £12-20 per click during high-demand periods like storms or late-night lockouts.',
      },
      {
        question: 'Should I invest in Google Ads or a website first?',
        answer:
          'Build the website first. It is a long-term asset that generates free traffic forever. Use ads to supplement during quiet periods while your organic rankings grow. Website first, ads second.',
      },
    ],
    relatedResources: [
      'website-costs-explained',
      'local-seo-basics',
      'what-makes-a-good-small-business-website',
      'why-website-speed-matters',
    ],
    readTime: '7 min read',
  },
];

export function getResourceBySlug(slug: string): ResourceData | undefined {
  return RESOURCES.find((r) => r.slug === slug);
}

export function getAllResourceSlugs(): string[] {
  return RESOURCES.map((r) => r.slug);
}
