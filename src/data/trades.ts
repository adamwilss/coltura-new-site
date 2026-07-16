export interface TradeData {
  slug: string;
  name: string;
  plural: string;
  headline: string;
  subheadline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  painPoints: string[];
  benefits: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  relatedTrades: string[];
  ctaText: string;
  avgCpc?: string;
  cpcNote?: string;
}

export const TRADES: TradeData[] = [
  {
    slug: 'barbers',
    name: 'Barbers',
    plural: 'Barbershops',
    headline: 'Websites for Barbers That Actually Bring in Walk-Ins',
    subheadline:
      'Most barbers rely on Instagram and word of mouth. A proper website helps new customers find you, see your work, and book a slot — even while you are cutting.',
    metaTitle: 'Website Design for Barbers | Coltura',
    metaDescription:
      'Modern websites for barbers and barbershops. Online booking, gallery, pricing, and local SEO. Built in 7 days.',
    keywords: [
      'barber website design',
      'barbershop website',
      'website for barbers',
      'barber booking website',
      'barber web design',
      'local barber website',
    ],
    painPoints: [
      'Relying only on Instagram — posts get buried in 24 hours',
      'No online booking — customers have to DM or call during cuts',
      'New clients cannot find your prices or opening hours easily',
      'No place to show off your best fades and beard work properly',
      'Google shows old Facebook pages or directory listings instead of your brand',
    ],
    benefits: [
      'Online booking that works while you cut hair',
      'Clean gallery to showcase your best cuts and styles',
      'Clear pricing and opening hours so customers know what to expect',
      'Google Business Profile integration so you show up in "barber near me" searches',
      'Mobile-first design — because most customers are on their phone',
    ],
    features: [
      'Click-to-call and WhatsApp booking buttons',
      'Image gallery for haircuts, beard trims, and styles',
      'Service and pricing page',
      'Opening hours and location map',
      'Customer reviews section',
      'Instagram feed integration',
      'Barber-specific SEO setup',
    ],
    faqs: [
      {
        question: 'Can customers book appointments through the website?',
        answer:
          'Yes. We can add simple booking integration or click-to-call/WhatsApp buttons so customers book however suits you.',
      },
      {
        question: 'Will my haircut photos look good on mobile?',
        answer:
          'Absolutely. Every site we build is mobile-first. Your gallery will look crisp and load fast on any phone.',
      },
      {
        question: 'How do new customers find my barbershop website?',
        answer:
          'We set up local SEO and connect your Google Business Profile so you rank when people search "barber near me" or "barbershop in [your town]".',
      },
    ],
    relatedTrades: ['hair-salons', 'tattoo-shops', 'personal-trainers'],
    ctaText: 'Get a Barber Website',
  },
  {
    slug: 'hair-salons',
    name: 'Hair Salons',
    plural: 'Hair Salons',
    headline: 'Websites for Hair Salons That Book Appointments While You Sleep',
    subheadline:
      'A salon website should do more than look pretty. It should show your colour work, list your services, and make booking effortless for new and returning clients.',
    metaTitle: 'Website Design for Hair Salons | Coltura',
    metaDescription:
      'Beautiful websites for hair salons with online booking, galleries, and local SEO. Built in 7 days.',
    keywords: [
      'hair salon website design',
      'salon website',
      'hairdresser website',
      'beauty salon web design',
      'salon booking website',
      'website for hairdressers',
    ],
    painPoints: [
      'Clients calling to ask "what colours do you do?" — information that should be on your site',
      'No way to showcase balayage, highlights, or transformation photos properly',
      'Booking via Instagram DMs gets lost or forgotten',
      'No online presence beyond a Facebook page you never update',
      'Missing out on "hair salon near me" Google searches',
    ],
    benefits: [
      'Professional online booking that reduces no-shows',
      'Before/after gallery to show off colour and cut transformations',
      'Clear service menu with pricing and timing',
      'Team profiles so clients know who they are booking with',
      'Local SEO to capture "hair salon near me" searches',
    ],
    features: [
      'Online booking integration (or click-to-call)',
      'Before and after photo gallery',
      'Service menu with pricing',
      'Stylist/team profiles',
      'Testimonials and reviews',
      'Gift voucher section',
      'Salon-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show before and after photos?',
        answer:
          'Yes. We build clean galleries that let you showcase transformations, colour work, and styles in a way that loads fast and looks professional.',
      },
      {
        question: 'Will clients be able to book online?',
        answer:
          'Yes. We integrate with popular booking tools or add simple click-to-call/WhatsApp buttons — whatever works best for your workflow.',
      },
      {
        question: 'Can I update prices myself?',
        answer:
          'Yes. As part of our monthly care plan, we handle all text and image updates for you. Just send us the new prices and we update them within 48 hours.',
      },
    ],
    relatedTrades: ['barbers', 'nail-studios', 'tattoo-shops'],
    ctaText: 'Get a Salon Website',
  },
  {
    slug: 'dog-walkers',
    name: 'Dog Walkers',
    plural: 'Dog Walkers & Pet Services',
    headline: 'Websites for Dog Walkers That Fill Your Walking Schedule',
    subheadline:
      'Pet owners want to know their dog is safe, loved, and in good hands. A professional website with your credentials, approach, and reviews builds that trust before they ever call.',
    metaTitle: 'Website Design for Dog Walkers & Pet Services | Coltura',
    metaDescription:
      'Trust-building websites for dog walkers and pet service providers. Reviews, pricing, insurance credentials, and local SEO. Built in 7 days.',
    keywords: [
      'dog walker website design',
      'pet services website',
      'dog walking website',
      'website for dog walkers',
      'pet care web design',
      'local dog walker website',
    ],
    painPoints: [
      'Pet owners cannot verify your insurance, first aid training, or walker credentials online',
      'No place to show your approach — solo walks, 2-dog maximum, purpose-equipped vehicle',
      'Booking only by phone — missed calls mean missed walking slots',
      'Word of mouth is slow in a growing town where new families do not know you',
      'Missing "dog walker near me" and "dog walking services [town]" searches',
    ],
    benefits: [
      'Showcase your dog-handling experience, insurance, and first aid training',
      'Clear pricing and walk options so owners know what to expect',
      'Easy booking via enquiry form or click-to-call',
      'Build trust with photos of happy dogs on walks',
      'Rank for local dog walking and pet care searches',
    ],
    features: [
      'Photo gallery of dogs on walks and outings',
      'Service menu with walk types and pricing',
      'Booking enquiry form or click-to-call',
      'Insurance and certification display',
      'Areas and postcodes covered',
      'Customer reviews and testimonials',
      'Meet-the-walker profile page',
    ],
    faqs: [
      {
        question: 'Can I show photos of the dogs I walk?',
        answer:
          'Yes. We build photo galleries that show happy dogs on walks, giving pet owners confidence that their dog will be well cared for.',
      },
      {
        question: 'Will people be able to request walks online?',
        answer:
          'Yes. We add booking enquiry forms or click-to-call buttons so pet owners can reach you easily — even when you are out on a walk.',
      },
      {
        question: 'Can I list different walk types and prices?',
        answer:
          'Absolutely. We structure your services however works best — solo walks, group walks, puppy visits, pet sitting — with clear pricing for each.',
      },
    ],
    relatedTrades: ['dog-groomers', 'vets', 'cleaners'],
    ctaText: 'Get a Dog Walker Website',
  },
  {
    slug: 'dog-groomers',
    name: 'Dog Groomers',
    plural: 'Dog Groomers',
    headline: 'Websites for Dog Groomers That Get Tails Wagging',
    subheadline:
      'Pet parents want to see that you care before they trust you with their dog. A clean website with your services, prices, and photos builds that trust instantly.',
    metaTitle: 'Website Design for Dog Groomers | Coltura',
    metaDescription:
      'Friendly websites for dog groomers with service menus, galleries, and local SEO. Built in 7 days.',
    keywords: [
      'dog groomer website design',
      'pet grooming website',
      'dog grooming web design',
      'website for dog groomers',
      'local dog groomer website',
    ],
    painPoints: [
      'Pet owners cannot find your grooming prices online',
      'No place to show off your grooming transformations',
      'Booking only by phone — missed calls mean missed business',
      'Relying on Facebook where posts get buried',
      'Not showing up when people search "dog groomer near me"',
    ],
    benefits: [
      'Showcase happy dogs and grooming transformations',
      'Clear service and pricing menu so owners know what to expect',
      'Easy booking via click-to-call or online form',
      'Build trust before they ever call you',
      'Rank in local searches for dog grooming services',
    ],
    features: [
      'Photo gallery of groomed dogs',
      'Service menu with breed-specific pricing',
      'Booking request form or click-to-call',
      'Opening hours and location map',
      'Customer reviews and testimonials',
      'FAQ section for nervous pet owners',
    ],
    faqs: [
      {
        question: 'Can I show photos of dogs I have groomed?',
        answer:
          'Yes. We create beautiful galleries that showcase your work and help nervous pet parents feel confident choosing you.',
      },
      {
        question: 'Will people be able to request appointments online?',
        answer:
          'Yes. We add booking request forms or click-to-call buttons so pet owners can reach you easily.',
      },
      {
        question: 'Can I list different prices for different breeds?',
        answer:
          'Absolutely. We structure your service menu however works best — by breed, by size, by service type, or all three.',
      },
    ],
    relatedTrades: ['local-shops', 'cleaners', 'personal-trainers'],
    ctaText: 'Get a Groomer Website',
  },
  {
    slug: 'driving-instructors',
    name: 'Driving Instructors',
    plural: 'Driving Instructors',
    headline: 'Websites for Driving Instructors That Fill Your Diary',
    subheadline:
      'Learners and parents research driving instructors online before they call. A professional website with your pass rate, areas covered, and prices puts you ahead.',
    metaTitle: 'Website Design for Driving Instructors | Coltura',
    metaDescription:
      'Professional websites for driving instructors with pricing, areas covered, and local SEO. Built in 7 days.',
    keywords: [
      'driving instructor website',
      'driving school website design',
      'ADI website',
      'driving lessons website',
      'website for driving instructors',
    ],
    painPoints: [
      'Learners cannot find your lesson prices or availability online',
      'No place to show your pass rate or reviews from past students',
      'Parents researching for their teenager cannot verify you are legitimate',
      'Competing instructors with websites rank higher on Google',
      'Relying on word of mouth in an increasingly digital market',
    ],
    benefits: [
      'Show your pass rate, experience, and reviews front and centre',
      'Clear pricing and lesson packages so learners know what to budget',
      'List the areas and postcodes you cover',
      'Build trust with parents researching instructors for their children',
      'Capture "driving lessons near me" searches on Google',
    ],
    features: [
      'Lesson pricing and packages',
      'Areas covered map',
      'Pass rate and experience highlights',
      'Student reviews and testimonials',
      'Booking enquiry form',
      'Car type and transmission info',
      'Theory test resources link',
    ],
    faqs: [
      {
        question: 'Can I show my pass rate on the website?',
        answer:
          'Yes. We highlight your pass rate, years of experience, and qualifications in a clean, trust-building layout.',
      },
      {
        question: 'Will parents be able to find me when researching instructors?',
        answer:
          'Absolutely. We optimize for searches like "driving instructor near me" and "driving lessons [your area]" so you show up when families are researching.',
      },
      {
        question: 'Can students book lessons through the site?',
        answer:
          'We add enquiry forms and click-to-call buttons. If you use a booking app, we can integrate that too.',
      },
    ],
    relatedTrades: ['personal-trainers', 'cleaners', 'local-shops'],
    ctaText: 'Get an Instructor Website',
  },
  {
    slug: 'cleaners',
    name: 'Cleaners',
    plural: 'Cleaners',
    headline: 'Websites for Cleaners That Turn Browsers Into Bookings',
    subheadline:
      'Homeowners and businesses want to see that you are trustworthy before they let you into their space. A clean, credible website makes that first impression count.',
    metaTitle: 'Website Design for Cleaners | Coltura',
    metaDescription:
      'Trust-building websites for domestic and commercial cleaners. Services, pricing, reviews, and local SEO. Built in 7 days.',
    keywords: [
      'cleaner website design',
      'cleaning business website',
      'domestic cleaner website',
      'commercial cleaning website',
      'website for cleaners',
    ],
    painPoints: [
      'Potential clients cannot see what cleaning services you offer or your rates',
      'No place to show DBS checks, insurance, or professional credentials',
      'Word of mouth is slow — you need a way to be found online',
      'Competing cleaning companies with websites rank higher on Google',
      'No way to collect and display customer reviews properly',
    ],
    benefits: [
      'Show your services, rates, and availability clearly',
      'Highlight insurance, DBS checks, and professional standards',
      'Collect and display customer reviews to build trust',
      'Capture "cleaner near me" and "cleaning services" searches',
      'Look more professional than cleaners without a website',
    ],
    features: [
      'Service menu (domestic, commercial, end of tenancy)',
      'Pricing guide or quote request form',
      'Insurance and credentials display',
      'Customer reviews and testimonials',
      'Areas covered',
      'Contact and booking form',
      'Eco-friendly products section (if applicable)',
    ],
    faqs: [
      {
        question: 'Can I show that I am insured and DBS checked?',
        answer:
          'Yes. We prominently display your insurance, DBS status, and any professional memberships to build immediate trust.',
      },
      {
        question: 'Will people be able to request quotes online?',
        answer:
          'Yes. We add quote request forms that capture the details you need to give an accurate estimate.',
      },
      {
        question: 'Can I list different services for homes and businesses?',
        answer:
          'Absolutely. We structure your services however works best — domestic, commercial, deep cleans, end of tenancy, whatever you offer.',
      },
    ],
    relatedTrades: ['window-cleaners', 'local-shops', 'dog-groomers'],
    ctaText: 'Get a Cleaner Website',
  },
  {
    slug: 'commercial-contract-cleaning',
    name: 'Commercial Contract Cleaners',
    plural: 'Commercial Contract Cleaning Companies',
    headline: 'Websites for Commercial Contract Cleaners That Land the Big Tenders',
    subheadline:
      'B2B cleaning contracts are won on trust, credentials, and proof of delivery. A proper website shows facility managers and procurement teams exactly why they should choose you — before you even step into the room.',
    metaTitle: 'Website Design for Commercial Contract Cleaners | Coltura',
    metaDescription:
      'B2B websites for commercial contract cleaning, caretaking, and facilities maintenance companies. Accreditation badges, case studies, and tender enquiry forms. Built in 7 days.',
    keywords: [
      'commercial cleaning website design',
      'contract cleaning website',
      'B2B cleaning company website',
      'facilities maintenance website',
      'caretaking services website',
      'cleaning tender website',
      'corporate cleaning website',
    ],
    painPoints: [
      'No email address visible on the website — facility managers and procurement teams cannot send RFPs or tender enquiries digitally, forcing them to call or move on',
      'Website frozen in 2012-era design — not mobile-responsive, undermining credibility with B2B buyers who research on phones and tablets',
      'Zero case studies, project photos, or client logos despite 15+ years of commercial contracts across the North West',
      'No online enquiry or tender request form — every lead requires a phone call, creating friction for busy decision-makers',
      'Industry accreditations (ISO, CHAS, SafeContractor, BICSc) nowhere to be found — procurement teams need these for shortlisting',
    ],
    benefits: [
      'A professional B2B website that matches the quality of your service delivery — facility managers judge your company by your online presence before they ever call',
      'Prominent email, phone, and enquiry form so procurement teams can send RFPs, request site surveys, and shortlist you in seconds',
      'Case study pages with client logos proving you deliver at scale — offices, schools, hospitals, retail, industrial',
      'Accreditation showcase (CHAS, SafeContractor, ISO, BICSc) with proper badges — the first thing procurement checks',
      'Local landing pages for every commercial centre you serve — "contract cleaning Manchester," "office cleaning Stockport," "commercial cleaning Cheshire"',
    ],
    features: [
      'Tender enquiry form capturing site size, service requirements, frequency, and budget',
      'Client case studies with sector-specific pages (offices, healthcare, education, retail, industrial)',
      'Accreditation and compliance badge showcase (CHAS, SafeContractor, ISO, BICSc, Constructionline)',
      'Service pages for each cleaning vertical (daily office, periodic deep clean, window cleaning, washroom, waste management)',
      'Team and management profiles with bios and qualifications',
      'Local landing pages for every commercial hub you serve',
      'Google review integration and testimonial carousel',
      'Mobile-responsive, modern design that reflects a professional B2B operation',
    ],
    faqs: [
      {
        question: 'How quickly can you build a commercial cleaning website?',
        answer:
          'We build and launch in 7 days. You provide your logo, service details, case studies, client logos, and accreditations — we handle everything else. You review on day 5, and we go live on day 7.',
      },
      {
        question: 'Can facility managers request tenders and quotes through the website?',
        answer:
          'Yes. We build dedicated enquiry forms that capture site size, service requirements, frequency, and budget — so you receive actionable tender leads instead of vague phone calls.',
      },
      {
        question: 'Will my industry accreditations be visible to procurement teams?',
        answer:
          'Absolutely. We prominently display your CHAS, SafeContractor, ISO, BICSc, and any other certifications with proper badges and verification links — this is often the first thing procurement teams check when shortlisting suppliers.',
      },
      {
        question: 'Can you build location-specific pages for all the commercial areas I cover?',
        answer:
          'Yes. Whether you cover Manchester, Stockport, Cheshire, or the entire North West, we build individual landing pages for each commercial hub so you rank for "contract cleaning [location]" and "commercial cleaning [location]" searches.',
      },
    ],
    relatedTrades: ['cleaners', 'security-services', 'window-cleaners'],
    ctaText: 'Get a Commercial Cleaning Website',
  },
    {
    slug: 'fascias-soffits-guttering',
    name: 'Fascias & Soffits Specialists',
    plural: 'Fascias, Soffits & Guttering',
    headline: 'Websites for Fascias & Soffits Specialists That Turn Homeowner Searches Into Surveys',
    subheadline:
      'Homeowners searching for fascia replacement, soffit repairs, and guttering are ready to book. A proper website with project photos, accreditations, and local landing pages captures those enquiries before your competitors do.',
    metaTitle: 'Website Design for Fascias, Soffits & Guttering Specialists | Coltura',
    metaDescription:
      'Professional websites for fascias, soffits, guttering, and roofline specialists. Project gallery, Which? Trusted Trader badges, local SEO, and online quote forms. Built in 7 days.',
    keywords: [
      'fascias website design',
      'soffits website design',
      'guttering website',
      'roofline specialist website',
      'fascia replacement website',
      'mock Tudor boards website',
      'dry verge website',
      'cladding website',
    ],
    painPoints: [
      'About and Contact pages returning 404 — homeowners ready to book a survey cannot reach you',
      'Zero project photos after years in business — fascias and soffits are visual work (colour-matched UPVC, mock Tudor boards, dry verge) that sells itself when photographed',
      '200+ 5★ reviews trapped on third-party platforms (Which? Trusted Trader, Checkatrade, Birdeye) with none visible on site or in Google search results',
      'No local landing pages for the 20+ towns you actually serve — missing every "fascia replacement [town]" search',
      'Industry accreditations (Which? Trusted Trader, FENSA, CERTASS, Fair Trades) buried in text or absent entirely',
    ],
    benefits: [
      'Turn existing reviews into Google-visible stars with proper schema markup',
      'Showcase colour-matched UPVC installations and mock Tudor board craftsmanship with a project gallery',
      'Capture survey bookings with a quick quote form that asks property type, issue, and photo upload',
      'Rank for every town you serve with dedicated local landing pages',
      'Display Which? Trusted Trader and other badges prominently — the trust signals homeowners look for before calling',
    ],
    features: [
      'Project photo gallery organised by service type — fascia replacement, soffit repairs, guttering, mock Tudor boards, dry verge, cladding',
      'Which? Trusted Trader, FENSA, CERTASS, Fair Trades, and other accreditation badges displayed in header and footer',
      'Online survey booking form with property type selector, issue description, and photo upload for homeowners to send a picture of the problem',
      'Detailed service pages for every roofline trade — UPVC fascias, wooden fascias, soffits, seamless aluminium guttering, cast iron effect guttering, mock Tudor boards, dry verge systems, cladding',
      'Local landing pages for every town and county you cover — each optimised for searches like "fascia replacement Macclesfield" and "guttering repair Stockport"',
      'Google review integration with JSON-LD aggregateRating schema so your review stars appear in search results',
      '20-year guarantee and insurance-backed warranty display — prominently featured as a trust anchor',
      'Before/after transformation gallery — show the difference colour-matched fascias and new guttering makes to a property',
      'Mobile-responsive design — homeowners spotting a dripping gutter or rotting fascia often search on their phone from the garden',
    ],
    faqs: [
      {
        question: 'Can you integrate our Which? Trusted Trader and other reviews?',
        answer:
          'Yes. If you have 200+ reviews on Which? Trusted Trader, Checkatrade, Fair Trades, or Birdeye that are invisible on your own website, we implement proper schema markup so Google displays your star rating in search results — and we add a review showcase page that pulls your best testimonials onto the site.',
      },
      {
        question: 'Can homeowners send photos of their fascias or guttering problem through the website?',
        answer:
          'Yes. We build a quote form with photo upload — a homeowner can snap a picture of their rotting fascia, dripping gutter, or missing dry verge on their phone and send it directly to you with an enquiry. You can quote more accurately without the first site visit.',
      },
      {
        question: 'We cover 20+ towns — how do we rank for all of them?',
        answer:
          'We build dedicated local landing pages for every town in your coverage area — each page optimised for searches like "fascia replacement Knutsford," "soffit repair Wilmslow," and "guttering specialist Macclesfield." Every page features area-specific content and a clear survey booking CTA.',
      },
      {
        question: 'Can we show our before/after transformations?',
        answer:
          'Absolutely. The visual difference between old rotting fascias and new colour-matched UPVC is dramatic — and it is your best sales tool. We build a before/after gallery that lets homeowners instantly see the transformation, organised by service type.',
      },
      {
        question: 'Our contact page is broken — can you fix that?',
        answer:
          'Yes. Many trade websites have dead contact pages that cost them enquiries every day. We build your site with every page working, a clear contact form, click-to-call phone number, and your email visible — so homeowners can reach you however they prefer.',
      },
    ],
    relatedTrades: ['roofers', 'window-fitters-glaziers', 'builders', 'double-glazing', 'renderers'],
    ctaText: 'Get a Fascias & Soffits Website',
  },
  {
    slug: 'window-cleaners',
    name: 'Window Cleaners',
    plural: 'Window Cleaners',
    headline: 'Websites for Window Cleaners That Get You Spotted',
    subheadline:
      'Householders and businesses need to know you are reliable, insured, and local. A simple website with your services, prices, and areas covered does exactly that.',
    metaTitle: 'Website Design for Window Cleaners | Coltura',
    metaDescription:
      'Simple, effective websites for window cleaners. Pricing, areas covered, and local SEO. Built in 7 days.',
    keywords: [
      'window cleaner website',
      'window cleaning website design',
      'website for window cleaners',
      'local window cleaner website',
    ],
    painPoints: [
      'Customers cannot find your prices or how often you visit online',
      'No way to show you are insured for working at height',
      'Competing window cleaners with Google Business Profiles rank higher',
      'New housing estates do not know you exist yet',
      'No online presence beyond a van sticker and word of mouth',
    ],
    benefits: [
      'Clear pricing and service frequency (monthly, fortnightly, one-off)',
      'Show insurance and safety credentials',
      'List the streets, estates, and areas you cover',
      'Capture "window cleaner near me" searches',
      'Look professional to commercial clients who research online',
    ],
    features: [
      'Service frequency and pricing',
      'Areas covered map',
      'Insurance and safety credentials',
      'Commercial and domestic services',
      'Customer testimonials',
      'Contact and enquiry form',
      'Before/after gallery',
    ],
    faqs: [
      {
        question: 'Can I show that I am insured for working at height?',
        answer:
          'Yes. We display your insurance details and any safety certifications to reassure both domestic and commercial clients.',
      },
      {
        question: 'Will people be able to see what areas I cover?',
        answer:
          'Absolutely. We add a clear areas-covered section or map so customers instantly know if you serve their street or estate.',
      },
      {
        question: 'Can I list different prices for monthly vs one-off cleans?',
        answer:
          'Yes. We structure your pricing clearly — monthly, fortnightly, one-off, commercial — whatever fits your business model.',
      },
    ],
    relatedTrades: ['cleaners', 'roofers', 'landscapers'],
    ctaText: 'Get a Window Cleaner Website',
  },
  {
    slug: 'restaurants',
    name: 'Restaurants',
    plural: 'Restaurants',
    headline: 'Websites for Restaurants That Turn Hungry Browsers Into Bookings',
    subheadline:
      'Diners check your menu, reviews, and photos before they book. A slow, clunky website — or no website at all — sends them straight to your competitors.',
    metaTitle: 'Website Design for Restaurants | Coltura',
    metaDescription:
      'Stunning websites for restaurants with menus, booking, galleries, and local SEO. Built in 7 days.',
    keywords: [
      'restaurant website design',
      'restaurant web design',
      'website for restaurants',
      'restaurant booking website',
      'local restaurant website',
    ],
    painPoints: [
      'Diners cannot find your current menu online — only old photos on Instagram',
      'No online booking — customers have to call during service hours',
      'Third-party delivery apps take a cut and own your customer data',
      'No place to show your restaurant atmosphere, chef, or story',
      'Missing out on "restaurant near me" and "best [cuisine] near me" searches',
    ],
    benefits: [
      'Beautiful menu pages that you can update easily',
      'Online table booking integration',
      'Photo gallery of dishes, interior, and atmosphere',
      'Capture "restaurant near me" searches with local SEO',
      'Own your customer relationship instead of relying on delivery apps',
    ],
    features: [
      'Digital menu with categories and pricing',
      'Table booking integration',
      'Photo gallery of dishes and restaurant interior',
      'Opening hours and location map',
      'Customer reviews integration',
      'Dietary information and allergen notes',
      'Gift voucher section',
    ],
    faqs: [
      {
        question: 'Can I update the menu myself when dishes change?',
        answer:
          'Yes. As part of our monthly care plan, we handle all menu updates for you. Just send the new dishes and prices and we update them within 48 hours.',
      },
      {
        question: 'Can customers book tables through the website?',
        answer:
          'Yes. We integrate with popular booking platforms or add click-to-call buttons for phone reservations.',
      },
      {
        question: 'Will the site work with my delivery platform?',
        answer:
          'Absolutely. We can link to your delivery partners while also encouraging direct bookings and table reservations.',
      },
    ],
    relatedTrades: ['cafes', 'takeaways', 'local-shops'],
    ctaText: 'Get a Restaurant Website',
  },
  {
    slug: 'cafes',
    name: 'Cafes',
    plural: 'Cafes',
    headline: 'Websites for Cafes That Bring in the Morning Crowd',
    subheadline:
      'Coffee lovers search for cafes with good atmosphere, food, and WiFi before they visit. A warm, inviting website shows them what to expect before they walk through your door.',
    metaTitle: 'Website Design for Cafes | Coltura',
    metaDescription:
      'Warm, inviting websites for cafes with menus, galleries, and local SEO. Built in 7 days.',
    keywords: [
      'cafe website design',
      'coffee shop website',
      'cafe web design',
      'website for cafes',
      'local cafe website',
    ],
    painPoints: [
      'Customers cannot find your coffee menu or food options online',
      'No way to show your cafe atmosphere, seating, or WiFi availability',
      'Instagram posts bury your opening hours and location',
      'No online presence for "cafe near me" or "coffee shop near me" searches',
      'Freelancers and students do not know you have WiFi and power sockets',
    ],
    benefits: [
      'Show your coffee, food, and atmosphere with a photo gallery',
      'Clear menu and pricing so customers know what to expect',
      'Highlight WiFi, power sockets, and seating for remote workers',
      'Capture "cafe near me" and "coffee shop near me" searches',
      'Update specials and seasonal drinks easily',
    ],
    features: [
      'Coffee and food menu',
      'Photo gallery of interior and drinks',
      'Opening hours and location',
      'WiFi and facilities info',
      'Customer reviews',
      'Events and live music section',
      'Cafe-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my coffee and food menu online?',
        answer:
          'Yes. We create beautiful menu pages that show your coffee, food, and prices in a way that looks as good as your cafe.',
      },
      {
        question: 'Will people know we have WiFi and power sockets?',
        answer:
          'Absolutely. We highlight all your facilities — WiFi, power, outdoor seating, dog friendly — so the right customers find you.',
      },
      {
        question: 'Can I update daily specials easily?',
        answer:
          'Yes. Our monthly care plan includes text and image updates. Send us your daily or weekly specials and we post them within 48 hours.',
      },
    ],
    relatedTrades: ['restaurants', 'takeaways', 'local-shops'],
    ctaText: 'Get a Cafe Website',
  },
  {
    slug: 'tattoo-shops',
    name: 'Tattoo Shops',
    plural: 'Tattoo Shops',
    headline: 'Websites for Tattoo Shops That Showcase Your Art',
    subheadline:
      'Tattoo clients spend hours researching artists and styles before they book. A portfolio website with your work, style specialties, and booking info turns that research into a deposit.',
    metaTitle: 'Website Design for Tattoo Shops | Coltura',
    metaDescription:
      'Portfolio websites for tattoo shops and artists. Galleries, artist profiles, booking, and local SEO. Built in 7 days.',
    keywords: [
      'tattoo shop website design',
      'tattoo artist website',
      'tattoo studio website',
      'website for tattoo shops',
      'tattoo portfolio website',
    ],
    painPoints: [
      'Clients cannot browse your portfolio properly on Instagram — it is not organized by style',
      'No place to show each artist\'s specialty and availability',
      'Booking enquiries get lost in Instagram DMs',
      'No way to display your hygiene standards and licensing',
      'Missing out on "tattoo shop near me" and "[style] tattoo [town]" searches',
    ],
    benefits: [
      'Organized portfolio by style — realism, traditional, Japanese, etc.',
      'Artist profiles with specialties and availability',
      'Clear booking process and deposit info',
      'Display hygiene standards and licensing to build trust',
      'Rank for style-specific and location-based tattoo searches',
    ],
    features: [
      'Portfolio gallery by style and artist',
      'Artist profiles and specialities',
      'Booking enquiry form',
      'Aftercare information page',
      'Hygiene and licensing display',
      'Customer reviews and healed tattoo photos',
      'Tattoo-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I organise my portfolio by tattoo style?',
        answer:
          'Yes. We build portfolio galleries organised by style — realism, traditional, neo-traditional, Japanese, fine line — so clients find exactly what they want.',
      },
      {
        question: 'Will clients be able to book consultations online?',
        answer:
          'Yes. We add booking enquiry forms that capture style preferences, placement ideas, and availability.',
      },
      {
        question: 'Can I show my hygiene and licensing credentials?',
        answer:
          'Absolutely. We display your hygiene ratings, licensing, and aftercare standards prominently to build trust before clients visit.',
      },
    ],
    relatedTrades: ['hair-salons', 'barbers', 'nail-studios'],
    ctaText: 'Get a Tattoo Shop Website',
  },
  {
    slug: 'personal-trainers',
    name: 'Personal Trainers',
    plural: 'Personal Trainers',
    headline: 'Websites for Personal Trainers That Convert Scrollers Into Clients',
    subheadline:
      'People research trainers online before they commit. A website with your qualifications, client results, and session info turns that research into a signed-up client.',
    metaTitle: 'Website Design for Personal Trainers | Coltura',
    metaDescription:
      'High-converting websites for personal trainers. Results, qualifications, booking, and local SEO. Built in 7 days.',
    keywords: [
      'personal trainer website design',
      'PT website',
      'fitness coach website',
      'personal trainer web design',
      'website for personal trainers',
    ],
    painPoints: [
      'Potential clients cannot see your qualifications, specialities, or client results',
      'No online booking — enquiries via Instagram DMs get lost',
      'Competing trainers with websites look more professional',
      'No place to show before/after transformations or client testimonials',
      'Missing "personal trainer near me" and "PT in [area]" searches',
    ],
    benefits: [
      'Showcase qualifications, specialities, and training philosophy',
      'Client transformation gallery and testimonials',
      'Clear session pricing and packages',
      'Online booking or enquiry forms',
      'Capture local fitness and PT searches',
    ],
    features: [
      'Trainer profile and qualifications',
      'Client transformation gallery',
      'Session pricing and packages',
      'Online booking or enquiry form',
      'Speciality areas (weight loss, strength, rehab)',
      'Testimonials and reviews',
      'Blog or tips section for SEO',
    ],
    faqs: [
      {
        question: 'Can I show my client transformations?',
        answer:
          'Yes. We create transformation galleries and testimonial sections that show the real results you deliver.',
      },
      {
        question: 'Will clients be able to book sessions online?',
        answer:
          'Yes. We add booking enquiry forms or integrate with scheduling tools so clients can book directly.',
      },
      {
        question: 'Can I list different packages for 1-to-1 and group training?',
        answer:
          'Absolutely. We structure your pricing and packages however works best — 1-to-1, pairs, small groups, online coaching, whatever you offer.',
      },
    ],
    relatedTrades: ['driving-instructors', 'cleaners', 'builders'],
    ctaText: 'Get a PT Website',
  },
  {
    slug: 'builders',
    name: 'Builders',
    plural: 'Builders',
    headline: 'Websites for Builders That Win the Big Jobs',
    subheadline:
      'Homeowners research builders for weeks before they call. A professional website with your projects, accreditations, and testimonials puts you ahead of the competition.',
    metaTitle: 'Website Design for Builders | Coltura',
    metaDescription:
      'Professional websites for builders with project galleries, accreditations, and local SEO. Built in 7 days.',
    keywords: [
      'builder website design',
      'building company website',
      'construction website',
      'website for builders',
      'local builder website',
    ],
    painPoints: [
      'Homeowners cannot see your past projects or read reviews online',
      'No place to display accreditations, insurance, or trade memberships',
      'Competing builders with websites win larger projects',
      'Word of mouth is too slow for consistent work',
      'Not showing up for "builder near me" or "extension builder [town]" searches',
    ],
    benefits: [
      'Project gallery showcasing extensions, renovations, and new builds',
      'Display accreditations, insurance, and trade memberships',
      'Customer testimonials and case studies',
      'Clear service areas and contact info',
      'Rank for local building and construction searches',
    ],
    features: [
      'Project gallery with before/during/after photos',
      'Accreditations and insurance display',
      'Service areas covered',
      'Customer testimonials',
      'Services list (extensions, renovations, new builds)',
      'Enquiry form for quotes',
      'Builder-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my building projects in a gallery?',
        answer:
          'Yes. We create project galleries with before, during, and after photos so homeowners can see the quality of your work.',
      },
      {
        question: 'Will my accreditations and insurance be visible?',
        answer:
          'Absolutely. We prominently display your FMB, NHBC, or other accreditations along with insurance details to build trust instantly.',
      },
      {
        question: 'Can homeowners request quotes through the website?',
        answer:
          'Yes. We add detailed quote request forms that capture project type, budget, and timeline so you can respond with accurate estimates.',
      },
    ],
    relatedTrades: ['plumbers', 'electricians', 'roofers', 'plasterers'],
    ctaText: 'Get a Builder Website',
  },
  {
    slug: 'plumbers',
    name: 'Plumbers',
    plural: 'Plumbers',
    headline: 'Websites for Plumbers That Stop the Leak in Your Calendar',
    subheadline:
      'When pipes burst, people search "emergency plumber near me" and call the first credible result. A fast, professional website makes sure that is you.',
    metaTitle: 'Website Design for Plumbers | Coltura',
    metaDescription:
      'Fast, professional websites for plumbers with emergency call buttons, services, and local SEO. Built in 7 days.',
    keywords: [
      'plumber website design',
      'plumbing website',
      'emergency plumber website',
      'website for plumbers',
      'local plumber website',
    ],
    painPoints: [
      'Emergency customers cannot find your number quickly on mobile',
      'No place to list your full range of services beyond basic plumbing',
      'Competing plumbers with websites get the emergency callouts',
      'No way to show Gas Safe registration or qualifications',
      'Missing "plumber near me" and "emergency plumber" searches',
    ],
    benefits: [
      'Prominent emergency call button on mobile',
      'Full service list — boilers, bathrooms, heating, gas',
      'Display Gas Safe and other qualifications',
      'Customer reviews and testimonials',
      'Rank for emergency and local plumbing searches',
    ],
    features: [
      'Emergency call button (click-to-call)',
      'Full service menu',
      'Gas Safe and qualification display',
      'Areas covered',
      'Customer reviews',
      'Quote request form',
      'Plumber-specific local SEO',
    ],
    faqs: [
      {
        question: 'Will customers be able to call me in an emergency?',
        answer:
          'Yes. We add a prominent click-to-call button that sits at the top of every page on mobile, so emergency customers reach you in one tap.',
      },
      {
        question: 'Can I show my Gas Safe registration?',
        answer:
          'Absolutely. We display your Gas Safe number, qualifications, and insurance details to build instant trust.',
      },
      {
        question: 'Will I show up for "emergency plumber near me" searches?',
        answer:
          'Yes. We optimize for emergency plumbing keywords and local searches so you appear when customers need you most.',
      },
    ],
    relatedTrades: ['builders', 'electricians', 'roofers'],
    ctaText: 'Get a Plumber Website',
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    plural: 'Electricians',
    headline: 'Websites for Electricians That Power Up Your Bookings',
    subheadline:
      'Homeowners and landlords want to see you are qualified, insured, and local before they let you rewire their property. A professional website ticks every box.',
    metaTitle: 'Website Design for Electricians | Coltura',
    metaDescription:
      'Professional websites for electricians with qualifications, services, and local SEO. Built in 7 days.',
    keywords: [
      'electrician website design',
      'electrical contractor website',
      'sparky website',
      'website for electricians',
      'local electrician website',
    ],
    painPoints: [
      'Customers cannot verify your NICEIC or Part P registration online',
      'No place to list your full services — rewiring, EV chargers, smart homes',
      'Landlords cannot find your EICR pricing or availability',
      'Competing electricians with websites look more established',
      'Missing "electrician near me" and "emergency electrician" searches',
    ],
    benefits: [
      'Display NICEIC, Part P, and other qualifications prominently',
      'Full service list — domestic, commercial, EICRs, EV chargers',
      'Emergency call button for urgent enquiries',
      'Customer reviews and testimonials',
      'Rank for local and emergency electrical searches',
    ],
    features: [
      'Qualification and registration display',
      'Full service menu',
      'Emergency call button',
      'EICR and landlord services section',
      'Areas covered',
      'Customer reviews',
      'Electrician-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my NICEIC and Part P registration?',
        answer:
          'Yes. We display your qualifications, registration numbers, and insurance details front and centre so customers trust you immediately.',
      },
      {
        question: 'Will landlords find me for EICR work?',
        answer:
          'Absolutely. We optimize for landlord and letting agent searches like "EICR [area]" and "landlord electrical certificate near me".',
      },
      {
        question: 'Can I list EV charger installation as a service?',
        answer:
          'Yes. We structure your services to include everything you offer — rewiring, EV chargers, smart home installs, EICRs, and more.',
      },
    ],
    relatedTrades: ['plumbers', 'builders', 'roofers'],
    ctaText: 'Get an Electrician Website',
  },
  {
    slug: 'roofers',
    name: 'Roofers',
    plural: 'Roofers',
    headline: 'Websites for Roofers That Keep Your Pipeline Full',
    subheadline:
      'Roofing is a trust business. Homeowners need to see you are insured, experienced, and local before they let you climb their roof. A credible website does that instantly.',
    metaTitle: 'Website Design for Roofers | Coltura',
    metaDescription:
      'Trust-building websites for roofers with insurance, project galleries, and local SEO. Built in 7 days.',
    keywords: [
      'roofer website design',
      'roofing company website',
      'roof repair website',
      'website for roofers',
      'local roofer website',
    ],
    painPoints: [
      'Homeowners cannot verify your insurance or experience online',
      'No place to show completed roofing projects or materials used',
      'Storm damage leads get snatched by competitors with better websites',
      'No way to display manufacturer accreditations or guarantees',
      'Missing "roofer near me" and "emergency roof repair" searches',
    ],
    benefits: [
      'Show insurance, accreditations, and guarantees prominently',
      'Project gallery with before/after roof photos',
      'Storm damage and emergency repair call button',
      'Material and manufacturer info for discerning homeowners',
      'Rank for local roofing and emergency repair searches',
    ],
    features: [
      'Insurance and accreditation display',
      'Project gallery',
      'Emergency repair call button',
      'Services list (repairs, replacements, flat roofs, etc.)',
      'Material and manufacturer info',
      'Customer testimonials',
      'Roofer-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my roofing insurance and guarantees?',
        answer:
          'Yes. We prominently display your insurance, manufacturer accreditations, and workmanship guarantees to build homeowner confidence.',
      },
      {
        question: 'Will I get emergency repair enquiries?',
        answer:
          'Absolutely. We add emergency call buttons and optimize for storm damage and emergency roof repair searches.',
      },
      {
        question: 'Can I show the roofing materials I use?',
        answer:
          'Yes. We showcase your preferred manufacturers and materials so homeowners know they are getting quality work.',
      },
    ],
    relatedTrades: ['builders', 'plumbers', 'plasterers'],
    ctaText: 'Get a Roofer Website',
  },
  {
    slug: 'plasterers',
    name: 'Plasterers',
    plural: 'Plasterers',
    headline: 'Websites for Plasterers That Smooth Over the Competition',
    subheadline:
      'Builders and homeowners want to see smooth walls, not smooth talk. A portfolio website with your plastering work, finishes, and prices wins the job before you even quote.',
    metaTitle: 'Website Design for Plasterers | Coltura',
    metaDescription:
      'Portfolio websites for plasterers with galleries, finishes, and local SEO. Built in 7 days.',
    keywords: [
      'plasterer website design',
      'plastering website',
      'skimming website',
      'website for plasterers',
      'local plasterer website',
    ],
    painPoints: [
      'Builders cannot see your plastering finish quality online',
      'No place to show the range of finishes you offer — skimming, rendering, dry lining',
      'Homeowners researching renovations cannot find your prices or availability',
      'Word of mouth from builders is inconsistent',
      'Missing "plasterer near me" and "skimming service [town]" searches',
    ],
    benefits: [
      'Portfolio showing smooth finishes, rendering, and dry lining',
      'Clear service list and pricing guide',
      'Builder and homeowner testimonials',
      'Areas covered and availability',
      'Rank for local plastering and rendering searches',
    ],
    features: [
      'Plastering finish gallery',
      'Services list (skimming, rendering, dry lining, coving)',
      'Pricing guide or quote form',
      'Builder and homeowner testimonials',
      'Areas covered',
      'Insurance and qualification display',
      'Plasterer-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show different plastering finishes?',
        answer:
          'Yes. We create galleries organised by finish type — skimming, rendering, dry lining, coving — so builders and homeowners see your range.',
      },
      {
        question: 'Will builders find me for subcontract work?',
        answer:
          'Absolutely. We optimize for builder and contractor searches so you appear when construction firms need plastering subcontractors.',
      },
      {
        question: 'Can I list my day rates or pricing?',
        answer:
          'Yes. We add clear pricing guides or quote request forms so customers know what to expect before they call.',
      },
    ],
    relatedTrades: ['builders', 'roofers', 'landscapers'],
    ctaText: 'Get a Plasterer Website',
  },
  {
    slug: 'landscapers',
    name: 'Landscapers',
    plural: 'Landscapers',
    headline: 'Websites for Landscapers That Grow Your Client List',
    subheadline:
      'Homeowners with overgrown gardens search for inspiration before they call. A stunning portfolio website with your transformations, services, and seasonal offers turns browsers into bookings.',
    metaTitle: 'Website Design for Landscapers | Coltura',
    metaDescription:
      'Stunning portfolio websites for landscapers and gardeners with galleries, services, and local SEO. Built in 7 days.',
    keywords: [
      'landscaper website design',
      'landscaping website',
      'gardener website',
      'website for landscapers',
      'local landscaper website',
    ],
    painPoints: [
      'Homeowners cannot see your garden transformations or design style online',
      'No place to list seasonal services — lawn care, planting, maintenance',
      'Competing landscapers with portfolios win the premium projects',
      'No way to show before/after garden photos properly',
      'Missing "landscaper near me" and "garden design [town]" searches',
    ],
    benefits: [
      'Beautiful before/after garden transformation galleries',
      'Seasonal service menu — design, maintenance, lawn care',
      'Clear pricing and project consultation info',
      'Customer testimonials with garden photos',
      'Rank for local landscaping and garden design searches',
    ],
    features: [
      'Before/after garden gallery',
      'Services menu (design, maintenance, lawn care, patios)',
      'Seasonal offers section',
      'Project consultation booking',
      'Customer testimonials',
      'Areas covered',
      'Landscaper-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show before and after garden photos?',
        answer:
          'Yes. We create stunning before/after galleries that show your garden transformations and help homeowners visualise what you can do for them.',
      },
      {
        question: 'Can I list different services for different seasons?',
        answer:
          'Absolutely. We structure your services by season — spring planting, summer maintenance, autumn clear-ups, winter preparation — and update them as part of your monthly care plan.',
      },
      {
        question: 'Will people book consultations through the website?',
        answer:
          'Yes. We add consultation booking forms or click-to-call buttons so homeowners can easily arrange a garden visit.',
      },
    ],
    relatedTrades: ['builders', 'plasterers', 'window-cleaners'],
    ctaText: 'Get a Landscaper Website',
  },
  {
    slug: 'mechanics',
    name: 'Mechanics',
    plural: 'Mechanics',
    headline: 'Websites for Mechanics That Get Engines and Enquiries Firing',
    subheadline:
      'Drivers research garages before they trust you with their car. A professional website with your services, MOT info, and reviews brings them through the door instead of the competitor down the road.',
    metaTitle: 'Website Design for Mechanics | Coltura',
    metaDescription:
      'Professional websites for mechanics and garages with services, MOT info, and local SEO. Built in 7 days.',
    keywords: [
      'mechanic website design',
      'garage website',
      'car repair website',
      'MOT garage website',
      'website for mechanics',
    ],
    painPoints: [
      'Drivers cannot find your services, MOT prices, or availability online',
      'No place to show manufacturer specialisations or diagnostic capabilities',
      'Competing garages with websites capture the MOT and service bookings',
      'No way to display customer reviews and trust signals properly',
      'Missing "garage near me" and "MOT [town]" searches',
    ],
    benefits: [
      'Clear service list — MOT, servicing, repairs, diagnostics',
      'MOT and service pricing displayed upfront',
      'Manufacturer specialisations and diagnostic capabilities',
      'Customer reviews and testimonials',
      'Rank for local garage and MOT searches',
    ],
    features: [
      'Service menu (MOT, servicing, repairs, diagnostics)',
      'MOT and pricing info',
      'Manufacturer specialisations',
      'Online booking or enquiry form',
      'Customer reviews',
      'Opening hours and location',
      'Mechanic-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I list my MOT prices and service packages?',
        answer:
          'Yes. We display your MOT prices, service packages, and any offers clearly so drivers know exactly what to expect.',
      },
      {
        question: 'Will drivers be able to book MOTs or services online?',
        answer:
          'Yes. We add booking enquiry forms or integrate with your garage management system so drivers can request appointments easily.',
      },
      {
        question: 'Can I show I specialise in certain car brands?',
        answer:
          'Absolutely. We highlight your manufacturer specialisations, diagnostic equipment, and any dealer-level capabilities.',
      },
    ],
    relatedTrades: ['local-shops', 'cleaners', 'plumbers'],
    ctaText: 'Get a Mechanic Website',
  },
  {
    slug: 'accountants',
    name: 'Accountants',
    plural: 'Accountants',
    headline: 'Websites for Accountants That Balance Credibility With New Clients',
    subheadline:
      'Business owners research accountants online before they trust you with their finances. A professional website with your services, qualifications, and client types shows them you are the right choice.',
    metaTitle: 'Website Design for Accountants | Coltura',
    metaDescription:
      'Professional websites for accountants and accountancy firms. Services, qualifications, and local SEO. Built in 7 days.',
    keywords: [
      'accountant website design',
      'accountancy firm website',
      'bookkeeper website',
      'website for accountants',
      'local accountant website',
    ],
    painPoints: [
      'Potential clients cannot see your full service range or specialisations online',
      'No place to display ACCA, ICAEW, or AAT qualifications',
      'Competing accountants with modern websites look more credible',
      'No way to show client types — small business, freelancers, landlords',
      'Missing "accountant near me" and "small business accountant [town]" searches',
    ],
    benefits: [
      'Professional service list — bookkeeping, tax, payroll, VAT',
      'Qualification and membership display',
      'Client type specialisations — small business, landlord, freelancer',
      'Clear pricing or consultation booking',
      'Rank for local and specialisation-based accounting searches',
    ],
    features: [
      'Service menu (bookkeeping, tax, payroll, VAT, accounts)',
      'Qualification and membership display',
      'Client type specialisations',
      'Consultation booking form',
      'Customer testimonials',
      'Resources or blog section',
      'Accountant-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my ACCA or ICAEW qualifications?',
        answer:
          'Yes. We prominently display your professional memberships, qualifications, and any specialist accreditations to build trust with potential clients.',
      },
      {
        question: 'Will small business owners find me online?',
        answer:
          'Absolutely. We optimise for searches like "small business accountant near me" and "bookkeeper [your area]" so you attract the right clients.',
      },
      {
        question: 'Can I list different services for different client types?',
        answer:
          'Yes. We structure your services by client type — small businesses, landlords, freelancers, contractors — so visitors instantly see what you offer them.',
      },
    ],
    relatedTrades: ['dental-clinics', 'estate-agents', 'local-shops'],
    ctaText: 'Get an Accountant Website',
  },
  {
    slug: 'appliance-repair',
    name: 'Appliance Repair',
    plural: 'Appliance Repair Businesses',
    headline: 'Websites for Appliance Repair That Turn "Help, My Washing Machine Is Flooding" Into Booked Jobs',
    subheadline:
      'When someone\'s oven dies mid-Sunday-roast or their fridge packs up in summer, they need a repair engineer NOW. A fast, clear website with brand lists, prices, and emergency contact gets you the call — not your competitor.',
    metaTitle: 'Website Design for Appliance Repair | Coltura',
    metaDescription:
      'Emergency-ready websites for appliance repair businesses with brand lists, instant contact, local SEO, and online booking. Built in 7 days.',
    keywords: [
      'appliance repair website design',
      'washing machine repair website',
      'appliance repair web design',
      'domestic appliance repair SEO',
      'emergency appliance repair website',
      'dishwasher repair website',
      'fridge repair website',
    ],
    painPoints: [
      'Customers in crisis cannot find your phone number on a broken contact page',
      '246 Checkatrade reviews at 9.84/10 — completely invisible on a static HTML site from 2010',
      'Email addresses Cloudflare-obfuscated or hidden behind contact forms — customers give up',
      'Every brand you repair is invisible online — "Bosch washing machine repair Macclesfield" searches go to competitors',
      'No online booking — customers want to book a slot, not play phone tag',
    ],
    benefits: [
      'Emergency call-out banner above the fold — phone number visible instantly',
      'Google and Checkatrade review integration — social proof that converts browsers into callers',
      'Brand-specific service pages — one page per brand you repair, ranking for high-intent searches',
      'Simple booking form with appliance type, brand, and fault description fields',
      'Transparent pricing, accreditation badges, and 12-month guarantee display',
    ],
    features: [
      'Emergency call-out banner with click-to-call phone number',
      'Google review schema and embedded review section',
      'Individual brand repair pages (Bosch, Samsung, Hotpoint, Indesit, Miele, etc.)',
      'Appliance-type service pages (washing machine, dishwasher, fridge, oven, tumble dryer)',
      'Online booking form with appliance/brand/fault fields',
      'Accreditation and guarantee display (Checkatrade, manufacturer-approved badges)',
      'Service area map and local landing pages',
      'Mobile-responsive — customers searching from their wet kitchen floor',
    ],
    faqs: [
      {
        question: 'Can I show all my Google and Checkatrade reviews?',
        answer:
          'Yes. We embed your review scores and feed directly on your site — so the 246 Checkatrade reviews at 9.84/10 are visible to every visitor, not buried on a directory.',
      },
      {
        question: 'Will I rank for specific appliance and brand searches?',
        answer:
          'Absolutely. We build dedicated pages for each brand you repair (Bosch, Samsung, Hotpoint) and each appliance type (washing machine, dishwasher, oven) — so you capture the exact searches customers make in an emergency.',
      },
      {
        question: 'Can customers book a repair slot online?',
        answer:
          'Yes. A simple booking form lets customers select their appliance type, brand, describe the fault, and pick a time slot — reducing phone tag and missed calls.',
      },
      {
        question: 'How do you handle the emergency nature of appliance repair?',
        answer:
          'We design with urgency in mind — phone numbers are visible above the fold, the booking form is one click away, and the site loads fast on mobile so panicking homeowners find you instantly.',
      },
    ],
    relatedTrades: ['electricians', 'plumbers', 'heating-engineers', 'garage-mechanics'],
    ctaText: 'Get an Appliance Repair Website',
  },
  {
    slug: 'dental-clinics',
    name: 'Dental Clinics',
    plural: 'Dental Clinics',
    headline: 'Websites for Dental Clinics That Make Patients Smile Before They Arrive',
    subheadline:
      'Patients research dentists carefully before they trust you with their teeth. A warm, professional website with your services, team, and reviews turns that research into a booking.',
    metaTitle: 'Website Design for Dental Clinics | Coltura',
    metaDescription:
      'Warm, professional websites for dental clinics with services, team profiles, and local SEO. Built in 7 days.',
    keywords: [
      'dental website design',
      'dentist website',
      'dental clinic website',
      'website for dentists',
      'local dentist website',
    ],
    painPoints: [
      'Patients cannot find your treatment list or pricing online',
      'No place to introduce your dental team and build trust',
      'Nervous patients cannot see your clinic environment beforehand',
      'Competing practices with modern websites attract more NHS and private patients',
      'Missing "dentist near me" and "dental clinic [town]" searches',
    ],
    benefits: [
      'Clear treatment menu — NHS, private, cosmetic, emergency',
      'Team profiles with photos and specialisations',
      'Clinic gallery to reassure nervous patients',
      'Online booking or enquiry forms',
      'Rank for local dental and emergency dentist searches',
    ],
    features: [
      'Treatment menu (NHS, private, cosmetic, emergency)',
      'Dentist and team profiles',
      'Clinic photo gallery',
      'Online booking or enquiry form',
      'Patient reviews and testimonials',
      'Opening hours and location',
      'Dental-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can patients see my treatments and prices online?',
        answer:
          'Yes. We create clear treatment menus with pricing guides so patients know what to expect before they call.',
      },
      {
        question: 'Will nervous patients feel reassured by the website?',
        answer:
          'Absolutely. We add clinic photos, team introductions, and gentle language to help anxious patients feel comfortable before they visit.',
      },
      {
        question: 'Can patients book appointments online?',
        answer:
          'Yes. We integrate with practice management systems or add enquiry forms so patients can request appointments easily.',
      },
    ],
    relatedTrades: ['chiropractors', 'accountants', 'hair-salons'],
    ctaText: 'Get a Dental Website',
  },
  {
    slug: 'estate-agents',
    name: 'Estate Agents',
    plural: 'Estate Agents',
    headline: 'Websites for Estate Agents That Sell Properties and Your Service',
    subheadline:
      'Sellers and landlords judge your agency by your website before they judge your valuations. A sleek, fast website with your listings, team, and sold properties proves you are the right agent.',
    metaTitle: 'Website Design for Estate Agents | Coltura',
    metaDescription:
      'Sleek websites for estate agents with listings, team profiles, and local SEO. Built in 7 days.',
    keywords: [
      'estate agent website design',
      'letting agent website',
      'property website',
      'website for estate agents',
      'local estate agent website',
    ],
    painPoints: [
      'Sellers judge your professionalism by your website before meeting you',
      'No place to showcase sold properties and recent success',
      'Landlords cannot find your letting and management fees online',
      'Slow, outdated websites lose enquiries to modern competitors',
      'Missing "estate agent near me" and "letting agent [town]" searches',
    ],
    benefits: [
      'Sleek, fast design that impresses sellers and landlords',
      'Sold properties and recent success showcase',
      'Clear fee structure for sales, lettings, and management',
      'Team profiles and branch info',
      'Rank for local estate and letting agent searches',
    ],
    features: [
      'Property listing integration (or link to portal)',
      'Sold properties showcase',
      'Fee structure and services',
      'Team and branch profiles',
      'Valuation booking form',
      'Landlord services section',
      'Estate agent-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I link to my property portal listings?',
        answer:
          'Yes. We link to your Rightmove, Zoopla, or OnTheMarket listings while keeping visitors on your branded site for valuations and landlord services.',
      },
      {
        question: 'Will sellers and landlords find me online?',
        answer:
          'Absolutely. We optimise for local searches like "estate agent near me" and "letting agent [your area]" so you capture both seller and landlord enquiries.',
      },
      {
        question: 'Can I show my sold properties and recent success?',
        answer:
          'Yes. We create a sold properties section that showcases your recent successes and builds confidence with potential sellers.',
      },
    ],
    relatedTrades: ['accountants', 'builders', 'local-shops'],
    ctaText: 'Get an Estate Agent Website',
  },
  {
    slug: 'local-shops',
    name: 'Local Shops',
    plural: 'Local Shops',
    headline: 'Websites for Local Shops That Bring High Street Shoppers Online',
    subheadline:
      'Even a small shop needs a website. Locals search for opening hours, stock, and directions. A simple website with your products, hours, and personality keeps them coming back.',
    metaTitle: 'Website Design for Local Shops | Coltura',
    metaDescription:
      'Simple, effective websites for local shops and retailers. Opening hours, products, and local SEO. Built in 7 days.',
    keywords: [
      'shop website design',
      'retail website',
      'local shop website',
      'small business website',
      'website for local shops',
    ],
    painPoints: [
      'Customers cannot find your opening hours or stock online',
      'No place to show new arrivals, offers, or seasonal stock',
      'Competing chains with websites capture local search traffic',
      'No way to tell your shop\'s story and build local loyalty',
      'Missing "[type] shop near me" and "local shop [town]" searches',
    ],
    benefits: [
      'Clear opening hours, location, and contact info',
      'Product highlights and new arrivals section',
      'Tell your shop\'s story and build local loyalty',
      'Capture local "near me" searches',
      'Look as professional as chain competitors',
    ],
    features: [
      'Opening hours and location map',
      'Product highlights and categories',
      'New arrivals and offers section',
      'Shop story and team section',
      'Customer reviews',
      'Contact and enquiry form',
      'Shop-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my products without building a full online shop?',
        answer:
          'Yes. We create product highlight pages and galleries that show what you stock without the complexity of a full e-commerce setup.',
      },
      {
        question: 'Will locals find me when searching for shops near them?',
        answer:
          'Absolutely. We optimise for local searches like "[product] shop near me" and connect your Google Business Profile so you appear in local map results.',
      },
      {
        question: 'Can I update opening hours for holidays?',
        answer:
          'Yes. As part of our monthly care plan, we handle all text updates — seasonal hours, holiday closures, special events — within 48 hours.',
      },
    ],
    relatedTrades: ['restaurants', 'cafes', 'takeaways'],
    ctaText: 'Get a Shop Website',
  },
  {
    slug: 'takeaways',
    name: 'Takeaways',
    plural: 'Takeaways',
    headline: 'Websites for Takeaways That Turn Hunger Into Orders',
    subheadline:
      ' hungry customers search for menus, opening hours, and reviews before they order. A fast, mouth-watering website with your menu, offers, and easy ordering keeps them ordering from you.',
    metaTitle: 'Website Design for Takeaways | Coltura',
    metaDescription:
      'Fast, mouth-watering websites for takeaways with menus, offers, and local SEO. Built in 7 days.',
    keywords: [
      'takeaway website design',
      'takeaway shop website',
      'food takeaway website',
      'website for takeaways',
      'local takeaway website',
    ],
    painPoints: [
      'Customers cannot find your current menu or prices online',
      'No place to show daily specials, meal deals, or new dishes',
      'Third-party delivery apps take a large cut of every order',
      'Slow or outdated menus on directory sites put customers off',
      'Missing "takeaway near me" and "[cuisine] takeaway [town]" searches',
    ],
    benefits: [
      'Clear, up-to-date menu with prices and dietary info',
      'Daily specials and meal deals section',
      'Direct ordering phone number and click-to-call',
      'Capture local takeaway and cuisine searches',
      'Reduce reliance on expensive delivery apps',
    ],
    features: [
      'Digital menu with categories and pricing',
      'Daily specials and offers section',
      'Click-to-call and direct ordering',
      'Opening hours and delivery info',
      'Customer reviews',
      'Dietary and allergen information',
      'Takeaway-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can customers see my full menu with prices?',
        answer:
          'Yes. We create clear, appetising menu pages with categories, prices, and dietary info that look great on mobile — because that is where most takeaway orders start.',
      },
      {
        question: 'Can I update daily specials easily?',
        answer:
          'Yes. Our monthly care plan includes text and image updates. Send us your daily specials and we update them within 48 hours.',
      },
      {
        question: 'Will I show up for "takeaway near me" searches?',
        answer:
          'Absolutely. We optimise for local takeaway searches and connect your Google Business Profile so hungry customers find you first.',
      },
    ],
    relatedTrades: ['restaurants', 'cafes', 'local-shops'],
    ctaText: 'Get a Takeaway Website',
  },
  {
    slug: 'nail-studios',
    name: 'Nail Studios',
    plural: 'Nail Studios',
    headline: 'Websites for Nail Studios That Polish Your Online Presence',
    subheadline:
      'Nail art clients want to see your work, price list, and availability before they book. A beautiful portfolio website with your designs, services, and easy booking turns scrollers into appointments.',
    metaTitle: 'Website Design for Nail Studios | Coltura',
    metaDescription:
      'Beautiful portfolio websites for nail studios and technicians. Galleries, pricing, booking, and local SEO. Built in 7 days.',
    keywords: [
      'nail studio website design',
      'nail technician website',
      'nail salon website',
      'website for nail studios',
      'local nail studio website',
    ],
    painPoints: [
      'Clients cannot browse your nail art portfolio properly on Instagram',
      'No place to show your full service menu — extensions, art, gel, acrylic',
      'Booking via DMs gets lost or forgotten',
      'No way to display your hygiene standards and salon environment',
      'Missing "nail salon near me" and "nail art [town]" searches',
    ],
    benefits: [
      'Organised portfolio by nail art style and technique',
      'Clear service menu with pricing and timing',
      'Easy booking via click-to-call or enquiry form',
      'Display hygiene standards and salon photos',
      'Rank for local nail and beauty searches',
    ],
    features: [
      'Nail art portfolio gallery',
      'Service menu (gel, acrylic, extensions, art)',
      'Pricing and timing info',
      'Booking enquiry form',
      'Salon environment photos',
      'Customer reviews',
      'Nail studio-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I organise my nail art by style?',
        answer:
          'Yes. We create galleries organised by style — French, chrome, nail art, extensions — so clients find exactly what they want.',
      },
      {
        question: 'Will clients see my prices before booking?',
        answer:
          'Absolutely. We display clear pricing for each service so clients know what to expect and you waste less time quoting.',
      },
      {
        question: 'Can I show my salon hygiene standards?',
        answer:
          'Yes. We display your hygiene practices, sterilisation methods, and salon environment to reassure clients about safety and cleanliness.',
      },
    ],
    relatedTrades: ['hair-salons', 'tattoo-shops', 'barbers'],
    ctaText: 'Get a Nail Studio Website',
  },
  {
    slug: 'chiropractors',
    name: 'Chiropractors',
    plural: 'Chiropractors',
    headline: 'Websites for Chiropractors That Align With New Patients',
    subheadline:
      'People in pain search for chiropractors carefully. They want to see your qualifications, treatment approach, and reviews before they book. A professional website gives them every reason to choose you.',
    metaTitle: 'Website Design for Chiropractors | Coltura',
    metaDescription:
      'Professional websites for chiropractors with qualifications, treatments, and local SEO. Built in 7 days.',
    keywords: [
      'chiropractor website design',
      'chiropractic clinic website',
      'back pain website',
      'website for chiropractors',
      'local chiropractor website',
    ],
    painPoints: [
      'Patients cannot find your treatment info or pricing online',
      'No place to show your qualifications, memberships, and approach',
      'Competing chiropractors with websites capture more new patients',
      'No way to display patient success stories and reviews',
      'Missing "chiropractor near me" and "back pain [town]" searches',
    ],
    benefits: [
      'Clear treatment menu — back pain, neck pain, sports injuries',
      'Qualification and membership display',
      'Patient testimonials and success stories',
      'Easy booking or enquiry forms',
      'Rank for local chiropractic and pain relief searches',
    ],
    features: [
      'Treatment menu and conditions treated',
      'Qualification and membership display',
      'Patient testimonials',
      'Booking or enquiry form',
      'First visit info and what to expect',
      'Opening hours and location',
      'Chiropractor-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can patients see what conditions I treat?',
        answer:
          'Yes. We create clear treatment pages covering back pain, neck pain, sciatica, sports injuries, and any other conditions you specialise in.',
      },
      {
        question: 'Will my qualifications be visible to patients?',
        answer:
          'Absolutely. We display your GCC registration, professional memberships, and any specialist qualifications to build immediate trust.',
      },
      {
        question: 'Can nervous patients learn what to expect on their first visit?',
        answer:
          'Yes. We add a "what to expect" section that explains your consultation process, treatment approach, and any preparation needed — helping anxious patients feel comfortable.',
      },
    ],
    relatedTrades: ['dental-clinics', 'personal-trainers', 'accountants'],
    ctaText: 'Get a Chiropractor Website',
  },
  {
    slug: 'joiners',
    name: 'Joiners & Carpenters',
    plural: 'Joiners & Carpenters',
    headline: 'Websites for Joiners & Carpenters That Nail the First Impression',
    subheadline:
      'Your workshop produces handcrafted joinery — doors, staircases, bespoke furniture. A portfolio website with your projects, materials, and craftsmanship story wins premium commissions before you even quote.',
    metaTitle: 'Website Design for Joiners & Carpenters | Coltura',
    metaDescription:
      'Bespoke portfolio websites for joiners, carpenters, and woodworkers. Project galleries, materials showcase, and local SEO. Built in 7 days.',
    keywords: [
      'joiner website design',
      'carpenter website',
      'joinery website',
      'bespoke furniture website',
      'website for joiners',
      'carpentry web design',
      'joinery company website',
    ],
    painPoints: [
      'Incredible joinery work with zero project photos — visitors cannot see your craftsmanship',
      'Material expertise (oak, walnut, ash, painted finishes) invisible — customers do not understand the quality difference',
      'Heritage work and conservation credentials hidden — losing period property commissions to less-qualified competitors',
      'No local SEO — "bespoke furniture maker near me" and "joinery workshop [town]" searches go to general builders',
      'Competing joiners with portfolio websites look more established and win premium projects',
    ],
    benefits: [
      'Categorised project gallery — bespoke furniture, doors & windows, staircases, fitted cabinetry',
      'Material and finish showcase with timber species and paint-grade options',
      'Heritage and conservation credentials displayed as trust badges',
      'Clear service list and lead time info so clients know what to expect',
      'Rank for joinery, carpentry, and bespoke furniture searches in your area',
    ],
    features: [
      'Project portfolio by category (furniture, doors, staircases, cabinetry)',
      'Material showcase (oak, walnut, ash, painted finishes, veneers)',
      'Workshop photo gallery and craftsmanship story',
      'Bespoke commission enquiry form with photo upload',
      'Heritage and conservation credentials section',
      'Customer testimonials and project case studies',
      'Joinery-specific local SEO across service areas',
    ],
    faqs: [
      {
        question: 'Can I show my joinery projects in a gallery?',
        answer:
          'Yes. This is the most important page on your site. We build a categorised project gallery — bespoke furniture, doors and windows, staircases, fitted cabinetry — so every visitor sees the breadth and quality of your craftsmanship. For joiners, a portfolio gallery is the number one conversion tool.',
      },
      {
        question: 'How do I showcase different timber species and finishes?',
        answer:
          'We build a materials showcase page with your timber species — English oak, American walnut, ash, tulipwood — and finish options including hand-painted, lacquered, oiled, and waxed. This educates clients before they enquire and helps them understand why handcrafted joinery costs what it does.',
      },
      {
        question: 'Can I highlight my heritage and conservation work?',
        answer:
          'Yes. We build a dedicated credentials section for period property work — sash window restoration, listed building joinery, conservation-grade materials. This positions you for premium heritage commissions that general carpenters cannot compete for.',
      },
      {
        question: 'Will architects and interior designers find me for commissions?',
        answer:
          'Absolutely. We optimise for trade-to-trade searches like "bespoke joinery workshop [area]" and "architectural joinery [town]" so you appear when designers and architects are sourcing specialist joinery for their projects.',
      },
      {
        question: 'Can clients upload photos for bespoke commission enquiries?',
        answer:
          'Yes. We add a bespoke commission enquiry form with photo and dimension upload so clients can share inspiration images and specifications upfront — saving you time on initial consultations.',
      },
    ],
    relatedTrades: ['kitchen-fitters', 'builders', 'upholsterers'],
    ctaText: 'Get a Joinery Website',
  },
  {
    slug: 'upholsterers',
    name: 'Upholstery',
    plural: 'Upholsterers',
    headline: 'Websites for Upholsterers That Show Every Heirloom Transformation',
    subheadline:
      'Antique restoration, modern re-cover, bespoke commissions — your craft speaks through fabric and frame. A website that shows before-and-after transformations turns curious browsers into booked appointments.',
    metaTitle: 'Website Design for Upholsterers | Coltura',
    metaDescription:
      'Portfolio-driven websites for upholsterers with before-and-after galleries, fabric libraries, and local SEO. Built in 7 days.',
    keywords: [
      'upholstery website design',
      'upholsterer web design',
      'furniture restoration website',
      'upholstery website',
      'upholsterer website',
      'antique restoration web design',
      'upholstery portfolio website',
      'bespoke upholstery website',
    ],
    painPoints: [
      'Entirely visual craft with zero project photos — visitors cannot see any of your furniture transformations',
      'Heritage credentials (John Makepeace, AMUSF, traditional skills) buried in one sentence — competitors quoting half the price look identical',
      "Fabric library invisible — premium Designer's Guild and budget contract vinyl need completely different presentations",
      'No local SEO — "furniture upholstery near me" and "antique chair restoration [town]" searches go to competitors',
      'Free collection/delivery (major differentiator) hidden in body text — should be the first thing a visitor sees',
    ],
    benefits: [
      'Categorised before-and-after gallery (antique restoration / modern re-cover / commercial / bespoke commissions)',
      'Heritage credentials and craftsmanship accreditations displayed as trust badges — AMUSF, John Makepeace, trade body memberships',
      'Fabric brand showcase with premium vs. contract tiers so customers understand pricing before they enquire',
      'Free collection/delivery banner and service area map — your strongest differentiator, impossible to miss',
      'Google review integration turning every furniture transformation into social proof',
    ],
    features: [
      'Before-and-after gallery with filter categories (antique, modern, commercial, bespoke)',
      'Heritage & accreditation section with craft school credentials and trade body badges',
      "Fabric library page with brand showcase (Designer's Guild, Romo, Zoffany, contract options) and price guidance",
      'Free collection/delivery announcement with postcode service area map',
      'Online enquiry form with photo upload for customer furniture photos',
      'Google review and testimonial integration with project photos',
      'Dedicated service pages: traditional upholstery, modern re-cover, commercial contract, bespoke commissions',
      'Trade-specific SEO targeting "furniture upholstery [town]", "chair restoration near me", "antique reupholstery"',
    ],
    faqs: [
      {
        question: 'Can I display photos of my furniture restoration work?',
        answer:
          'This is the centrepiece of your website. We build a categorised before-and-after gallery — antique restoration, modern re-cover, commercial contracts, and bespoke commissions — so every visitor can see exactly what you transform. Project photos are the single most important conversion tool for an upholsterer.',
      },
      {
        question: 'How do you showcase my heritage credentials and training?',
        answer:
          'We build a dedicated craftsmanship section with your training credentials (AMUSF, John Makepeace, trade body memberships), displayed as trust badges that appear across the site. When a customer sees a John Makepeace-trained tradeperson vs. an unknown, the choice is obvious.',
      },
      {
        question: 'Can I show the different fabric brands and price points I work with?',
        answer:
          'Yes. We build a fabric library page showcasing your supplier brands with price guidance tiers. This educates customers before they enquire, reducing "sticker shock" conversations and qualifying leads who understand the value of premium materials.',
      },
      {
        question: 'Will the website promote my free collection and delivery service?',
        answer:
          'Yes. Free collection and delivery is a major differentiator that wins upholstery work — it removes the "how do I transport this sofa?" barrier. We display it as a banner and build a postcode service area map so visitors instantly see you serve their area without any friction.',
      },
      {
        question: 'Will my website show up for local furniture upholstery searches?',
        answer:
          'Yes. We optimise every page for trade-specific local SEO across your service area. When someone searches "furniture upholstery [your town]" or "antique chair restoration near me", your website is built to appear — with a before-and-after gallery that converts the click into an enquiry.',
      },
    ],
    relatedTrades: ['flooring', 'kitchen-fitters'],
    ctaText: 'Get an Upholstery Website',
  },
  {
    slug: 'surveyors',
    name: 'Surveying',
    plural: 'Chartered Surveyors',
    headline: 'Websites for Chartered Surveyors That Win Instructions Before the Viewing',
    subheadline:
      'RICS-regulated, expert reports, local market knowledge — your credentials are your product. A website that showcases your expertise turns property searches into instructions before the client even picks up the phone.',
    metaTitle: 'Website Design for Chartered Surveyors | Coltura',
    metaDescription:
      'Professional websites for RICS chartered surveyors with case studies, team profiles, local SEO, and client portal integration. Built in 10 days.',
    keywords: [
      'chartered surveyor website design',
      'surveyor website',
      'RICS surveyor web design',
      'property surveyor website',
      'building surveyor website',
      'local surveyor SEO',
      'homebuyer report website',
    ],
    painPoints: [
      'RICS credentials and specialist qualifications invisible — every surveyor looks identical to a homebuyer comparing quotes',
      'No sample reports or case studies — clients cannot see the quality and depth of your work before instructing',
      'Team profiles missing or generic — surveyors are a people-trust profession but most sites hide the people',
      'Zero local SEO — "chartered surveyor [town]" and "homebuyer report near me" searches go to Rightmove-linked competitors and national chains',
      'No online instruction or quote request — phone-only in 2026 means losing evening and weekend enquiries to competitors with web forms',
    ],
    benefits: [
      'RICS accreditation and specialist qualifications displayed as trust badges — Regulated by RICS, AssocRICS, MRICS, FRICS tiers',
      'Sample report downloads and anonymised case studies showing your actual work — the ultimate pre-instruction trust builder',
      'Individual surveyor profiles with qualifications, specialisms, and local area expertise — homebuyers choose people, not firms',
      'Local landing pages for every town you cover — dominate "chartered surveyor [town]" searches across your patch',
      'Online instruction request form with property details and preferred survey type — capture enquiries 24/7',
    ],
    features: [
      'RICS and professional accreditation badges (RICS, RPSA, CIOB) with verification links',
      'Sample report library — downloadable Level 2/3 survey excerpts and case studies',
      'Individual surveyor profiles with photo, qualifications, specialisms, and towns covered',
      'Service pages: Homebuyer Reports (Level 2), Building Surveys (Level 3), Valuations, Party Wall, Defect Diagnosis',
      'Online instruction form with property address, survey type selector, and preferred date picker',
      'Local landing pages with area-specific market commentary and coverage maps',
      'Client testimonial integration with Google Reviews and Trustpilot',
      'Trade-specific SEO targeting "chartered surveyor [town]", "building survey near me", "homebuyer report cost"',
    ],
    faqs: [
      {
        question: 'Can I display sample survey reports to show the quality of my work?',
        answer:
          'Yes. We build a sample report library where you can share anonymised excerpts from Homebuyer Reports (Level 2) and Building Surveys (Level 3). This is the single most powerful trust builder for surveyors — clients can see the depth and clarity of your reporting before they instruct you, which is something almost no surveyor website offers.',
      },
      {
        question: 'How do you showcase my RICS credentials and specialist qualifications?',
        answer:
          'RICS regulation is your licence to trade — we display it prominently as a verified trust badge with a link to your RICS profile. Additional qualifications (MRICS, FRICS, RPSA, CIOB, expert witness status) are shown as tiered credentials so clients understand the depth of expertise behind your name.',
      },
      {
        question: 'Will I get individual profile pages for each surveyor in my practice?',
        answer:
          'Yes. Surveying is a people-trust profession — homebuyers instruct a person, not a logo. We build individual profile pages with each surveyor\'s photo, qualifications, specialist areas (heritage, new-build, commercial), years of experience, and the towns they cover. When a client in Wilmslow sees that your senior surveyor has 20 years of local knowledge, the instruction is won.',
      },
      {
        question: 'Can clients request a quote or instruct me through the website?',
        answer:
          'Yes. We build an online instruction form that captures the property address, survey type (Level 2, Level 3, valuation, specific defect), preferred date, and contact details. This means you capture enquiries evenings and weekends when competitors are closed — and the form pre-qualifies the lead so your team can respond with an accurate quote.',
      },
      {
        question: 'Will my website show up for local chartered surveyor searches?',
        answer:
          'Yes. We optimise every page for trade-specific local SEO — each town you cover gets a dedicated landing page with local market commentary, coverage maps, and the surveyors who work that area. When someone searches "chartered surveyor Macclesfield" or "building survey Cheshire", your website is built to appear with the credentials and sample reports that convert the click into an instruction.',
      },
    ],
    relatedTrades: ['estate-agents', 'builders'],
    ctaText: 'Get a Surveyor Website',
  },
  {
    slug: 'stonemasons',
    name: 'Stonemasons',
    plural: 'Stonemasons',
    headline: 'Websites for Stonemasons That Showcase Heritage Craftsmanship',
    subheadline:
      'Your stonework is your sales pitch. A proper website puts your best projects front and centre — architectural restoration, kitchen worktops, memorial masonry, and fireplaces — each with its own gallery so every buyer sees exactly what they need.',
    metaTitle: 'Website Design for Stonemasons | Coltura',
    metaDescription:
      'Professional websites for stonemasons with project galleries, heritage accreditations, and local landing pages. Built in 7 days.',
    keywords: [
      'stonemason website design',
      'stone masonry web design',
      'heritage restoration website',
      'kitchen worktop website',
      'memorial masonry website',
      'stone fireplace website',
    ],
    painPoints: [
      'Your craftsmanship is invisible — no project gallery means visitors cannot see the quality of your stonework',
      'Heritage credentials buried — listed-building and UNESCO work hidden in a single sentence instead of case studies',
      'Multiple services, one page — kitchen worktops, memorial masonry, and fireplaces all on the same page, confusing every buyer',
      'No local landing pages for premium towns — Alderley Edge, Wilmslow, and Prestbury homeowners never find you',
      'Trust signals missing — no accreditation badges, testimonials, or project photos to reassure high-spend clients',
    ],
    benefits: [
      'Project gallery organised by trade — restoration, worktops, memorials, and fireplaces each have their own showcase',
      'Heritage case studies with before/after sliders and listed-building credentials displayed prominently',
      'Dedicated service pages so each buyer follows their own path without seeing irrelevant work',
      'Local landing pages for every premium Cheshire town you serve, capturing high-value search traffic',
      'Accreditation badges, testimonials with project photos, and transparent quoting that builds trust before contact',
    ],
    features: [
      'Project portfolio with before/after image sliders organised by trade category',
      'Dedicated service pages: Architectural Restoration, Kitchen Worktops, Memorial Masonry, Fireplaces, Bespoke Carving',
      'Heritage case study pages with listed-building grades, conservation approvals, and project narratives',
      'Stone and marble type guide — Carrara, Calacatta, granite, limestone, sandstone, York stone',
      'Local landing pages for Alderley Edge, Wilmslow, Knutsford, Prestbury, Macclesfield, and wider Cheshire',
      'Enquiry form capturing project type, stone preference, dimensions, location, and timeline',
      'Testimonials with completed project photos and links to relevant gallery sections',
      'Accreditation showcase — Stone Federation, TrustMark, CHAS, and heritage credentials',
    ],
    faqs: [
      {
        question: 'Can my website show heritage restoration and kitchen worktops without confusing visitors?',
        answer:
          'Yes. We build dedicated service pages for each trade — architectural restoration, kitchen worktops, memorial masonry, fireplaces, and bespoke carving — with separate galleries and enquiry forms. A church committee researching restoration never sees a kitchen worktop, and a homeowner choosing marble never sees a headstone.',
      },
      {
        question: 'How do you showcase listed-building and UNESCO heritage credentials?',
        answer:
          'We build a dedicated Heritage & Restoration case studies section with individual project pages for each major restoration. Each includes before/after photos, techniques used, listed-building grade, conservation approvals, and client testimony. Your Stone Federation and TrustMark accreditations are displayed as verified trust badges throughout the site.',
      },
      {
        question: 'Will homeowners in Alderley Edge and Wilmslow find my website?',
        answer:
          'Yes. We build dedicated landing pages for each premium town you serve with locally relevant project photos, area-specific property content, and SEO optimisation for searches like "stone fireplace Alderley Edge" or "marble worktops Knutsford." These are the wealthiest postcodes in Cheshire.',
      },
      {
        question: 'How do you handle the memorial masonry section sensitively?',
        answer:
          'We build a dedicated Memorial Masonry section separate from commercial and residential work. It features stone options, inscription styles, cemetery regulation guidance, and a compassionate enquiry form with no sales language. Families browsing this section will not encounter kitchen worktop galleries.',
      },
      {
        question: 'Can clients request a quote through the website?',
        answer:
          'Yes. We build a detailed quotation form asking for project type, stone preference, approximate dimensions, property location, and timeline. This pre-qualifies leads so you can respond with an informed estimate — and it works 24/7, capturing enquiries evenings and weekends when your phone is off.',
      },
    ],
    relatedTrades: ['builders', 'upholsterers', 'kitchen-fitters'],
    ctaText: 'Get a Stonemason Website',
  },
  {
    slug: 'painters-decorators',
    name: 'Painters & Decorators',
    plural: 'Painters & Decorators',
    headline: 'Websites for Painters & Decorators That Show Every Brushstroke',
    subheadline:
      'Homeowners want to see transformations, not promises. A portfolio website with before/after photos, finish options, and transparent pricing turns browsers into bookings before you lift a brush.',
    metaTitle: 'Website Design for Painters & Decorators | Coltura',
    metaDescription:
      'Portfolio websites for painters and decorators with before/after galleries, specialist finishes, and local SEO. Built in 7 days.',
    keywords: [
      'painter decorator website design',
      'painting website',
      'decorator website',
      'website for painters',
      'local decorator website',
    ],
    painPoints: [
      'Clients cannot see the quality of your finishes — cutting-in, skirting, coving',
      'No portfolio showing colour transformations and wallpaper work',
      'Specialist services like spray painting or heritage work are invisible online',
      'Builders and property developers cannot find you for subcontract work',
      'Missing local searches for "painter and decorator near me" and "decorator [town]"',
    ],
    benefits: [
      'Before/after galleries that sell your craft at a glance',
      'Specialist finish pages (spray painting, wallpaper, heritage, commercial)',
      'Clear pricing guides or quote forms',
      'Customer testimonials with project photos',
      'Rank for local decorating and painting searches',
    ],
    features: [
      'Before/after project gallery',
      'Services list (interior, exterior, wallpaper, spray painting, heritage)',
      'Pricing guide or estimate form',
      'Customer testimonials with photos',
      'Areas covered and availability calendar',
      'Insurance and trade association display',
      'Painter-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show before and after photos of my painting work?',
        answer:
          'Yes. We build dedicated project galleries with side-by-side before/after images organised by project type — room transformations, exterior repaints, heritage restoration, and commercial work.',
      },
      {
        question: 'Will property developers find me for renovation work?',
        answer:
          'Absolutely. We optimize your site for phrases like "commercial painter and decorator Cheshire" and "property renovation painter" so developers and landlords find you for volume work.',
      },
      {
        question: 'Can I list specialist services like spray painting or wallpaper hanging?',
        answer:
          'Yes. We create dedicated service pages for each specialist area — spray painting, wallpaper hanging, heritage restoration, and commercial decorating — each optimized for its own local search terms.',
      },
      {
        question: 'How do I get quotes through my website?',
        answer:
          'We add a quote request form asking for room dimensions, surfaces, finish type, and timeline. You receive structured leads 24/7, even when you are on a job and cannot answer the phone.',
      },
    ],
    relatedTrades: ['plasterers', 'builders', 'roofers'],
    ctaText: 'Get a Painter & Decorator Website',
  },
  {
    slug: 'physiotherapists',
    name: 'Physiotherapists',
    plural: 'Physiotherapy Clinics',
    headline: 'Websites for Physiotherapists That Turn Research into Revenue',
    subheadline:
      'You read the latest research and treat premiership footballers. Your website should be as evidence-based as your practice — with online booking, specialist clinic pages, and every review displayed like a badge of honour.',
    metaTitle: 'Website Design for Physiotherapists | Coltura',
    metaDescription:
      'Professional websites for physiotherapy clinics with online booking, specialist clinic pages, and review integration. Built in 7 days.',
    keywords: [
      'physiotherapist website design',
      'physio clinic web design',
      'sports physio website',
      'running clinic website',
      'MSK physiotherapy website',
      'private physio website',
    ],
    painPoints: [
      'Evidence-based practice claims undermined by a blog frozen for 5+ years — contradicting your own USP',
      'Specialist clinics invisible — Running Clinic, Tendon Clinic, and Sports Injuries all on one generic page',
      'Trust signals buried — 52 Trustpilot reviews and 4.9 Google rating nowhere on the site',
      'No online booking — patients must call during office hours to schedule, losing evening and weekend enquiries',
      'Two-location practice treated as one — no local landing pages for each clinic catchment area',
    ],
    benefits: [
      'Online booking that runs 24/7, converting website visitors into appointments while your phone is off',
      'Dedicated clinic pages — Running Clinic, Tendon Clinic, Sports Injuries, and General MSK — each with targeted SEO',
      'Every Trustpilot and Google review pulled onto the site automatically, with rich schema for search stars',
      'A live blog feed with monthly clinical case studies that proves you genuinely read the research',
      'Multi-location setup with individual Google Business Profiles connected to each clinic page',
    ],
    features: [
      'Online booking system integrating with existing practice management software',
      'Dedicated specialist clinic pages: Running Clinic, Tendon Clinic, Sports Injuries, Post-Surgical Rehab, General MSK',
      'Auto-updating review carousel pulling from Trustpilot, Google, and other review platforms',
      'Clinician profile pages with qualifications, specialisms, sports affiliations, and availability',
      'Evidence-based blog with clinical case study format and monthly publishing cadence',
      'Local landing pages for each clinic location with dedicated Google Maps and GBP integration',
      'Initial consultation enquiry form capturing injury type, onset, sport/activity, and preferred clinic',
      'Insurance and referral partner logos — BUPA, AXA, NHS, private healthcare, sports clubs',
    ],
    faqs: [
      {
        question: 'Can patients book appointments directly through the website?',
        answer:
          'Yes. We integrate online booking that connects to your practice management software. Patients can see availability, choose their clinician, and book 24/7 — no phone call needed. Evening and weekend bookings convert enquiries that would otherwise be lost.',
      },
      {
        question: 'How do you handle a multi-location clinic with different specialisms?',
        answer:
          'We build dedicated location pages for each clinic with local SEO, Google Maps, and Google Business Profile integration. Each location page highlights which clinicians and specialist clinics are available at that site. Patients searching "physio Macclesfield running injury" land on the right page.',
      },
      {
        question: 'Can my Trustpilot and Google reviews be shown on the website automatically?',
        answer:
          'Yes. We build review carousels that pull from Trustpilot, Google, and any other review platforms automatically. Rich schema markup ensures your star rating appears in search results. New reviews appear on the site without you touching anything.',
      },
      {
        question: 'How do you make an evidence-based practice visible online?',
        answer:
          'We build a clinical case study blog format with monthly publishing. Each post covers a real case (anonymised): presentation, assessment, treatment plan, outcome. This proves you apply current research to real patients — and gives Google fresh, authoritative content every month.',
      },
      {
        question: 'Can I show which insurance companies and sports clubs I work with?',
        answer:
          'Yes. We build trust bar sections with BUPA, AXA, and private healthcare logos, plus sports club partnerships and NHS referrals. Each logo links to relevant booking paths — patients filtered by insurance type see the right consultation options.',
      },
    ],
    relatedTrades: ['chiropractors', 'personal-trainers', 'vets'],
    ctaText: 'Get a Physio Clinic Website',
  },
  {
    slug: 'vets',
    name: 'Vets',
    plural: 'Veterinary Practices',
    headline: 'Websites for Vets That Turn Pet Owners into Loyal Clients',
    subheadline:
      'Independent vet practices are losing to corporate chains on search. A proper website with online booking, pet portal, and review integration helps you compete — and keeps your practice independent.',
    metaTitle: 'Website Design for Vets | Coltura',
    metaDescription:
      'Professional websites for independent veterinary practices. Online booking, pet portal, review integration, and local SEO. Built in 7 days.',
    keywords: [
      'vet website design',
      'veterinary practice website',
      'independent vet website',
      'pet clinic web design',
      'vet online booking website',
      'vet SEO',
    ],
    painPoints: [
      '114 Google reviews at 5.0★ invisible on your website — your strongest asset hidden from every visitor',
      'Corporate chains with £20k/month marketing budgets outranking your independent practice for every search',
      'No online booking — pet owners must call during surgery hours to schedule, losing emergency and after-hours enquiries',
      'No pet portal — owners cannot access health records, order repeat prescriptions, or check vaccination reminders online',
      'New state-of-the-art facility looks like every other generic vet website — the £1M investment is invisible online',
    ],
    benefits: [
      'Online booking that runs 24/7, converting pet owners into appointments while your phone is off — corporate chains do this, now you can too',
      'Every Google review pulled onto the site automatically with rich schema for search stars — 114 five-star reviews working for you round the clock',
      'Dedicated pet portal integrating with practice management software — repeat prescriptions, vaccination reminders, and health records at owners\' fingertips',
      'Local landing pages that rank for "vet Macclesfield," "vet Wilmslow," "vet Knutsford" — capturing every town in your catchment',
      'A website that looks like the £1M facility it represents — not a £29 template that makes you look like every other practice',
    ],
    features: [
      'Online booking system with appointment type selection, preferred vet, and 24/7 availability',
      'Integrated pet portal with vaccination reminders, repeat prescription ordering, and weight tracking',
      'Auto-updating Google review carousel with rich schema for search result stars',
      'Vet team profile pages with qualifications, specialisms, and personal bios',
      'Service pages for consultations, surgery, dentistry, imaging, lab diagnostics, and emergency care',
      'New client registration form capturing pet details, medical history, and insurance information',
      'Local landing pages for each town in your catchment area with dedicated GBP integration',
      'Sustainability pledge page and practice values — the things that make you independent, not corporate',
    ],
    faqs: [
      {
        question: 'Can pet owners book appointments directly through the website?',
        answer:
          'Yes. We integrate online booking that connects to your practice management software. Owners can see availability, choose their preferred vet, select appointment type, and book 24/7. Emergency triage forms ensure urgent cases are flagged immediately.',
      },
      {
        question: 'How do Google reviews show up on the site automatically?',
        answer:
          'We build a review carousel that pulls from Google, Trustpilot, and any other review platforms automatically. Rich schema markup ensures your star rating appears in search results. New reviews appear on the site without any manual work. The 114 reviews you have earned finally work for you.',
      },
      {
        question: 'Can pet owners order repeat prescriptions and access records through the website?',
        answer:
          'Yes. Our pet portal integration lets owners order repeat prescriptions, check vaccination reminders, view weight charts, and access health records — all from a secure login. This reduces phone calls and frees up reception for patient care.',
      },
      {
        question: 'How do you handle multi-town catchment areas for independent vets?',
        answer:
          'We build dedicated local landing pages for every town you serve — Macclesfield, Wilmslow, Knutsford, Bollington, Prestbury, and beyond. Each page has local SEO, Google Maps, and unique content about pet ownership in that area. Owners searching "vet near me" in any town find you.',
      },
      {
        question: 'Can you make a state-of-the-art facility look as good online as it does in person?',
        answer:
          'Yes. We do a full photography brief for your facility — theatre, consulting rooms, kennels, diagnostics, reception — and build a visual showcase that reflects the investment you have made. Your website finally matches the standard of care you deliver.',
      },
    ],
    relatedTrades: ['dog-groomers', 'dog-walkers', 'physiotherapists'],
    ctaText: 'Get a Veterinary Practice Website',
  },
  {
    slug: 'renewable-energy',
    name: 'Solar & Renewable Energy Installers',
    plural: 'Renewable Energy Installers',
    headline: 'Websites for Solar & Renewable Energy Installers That Sell the Future',
    subheadline:
      'Homeowners want solar panels and heat pumps but hesitate on trust. A professional website shows your MCS accreditations, completed installations, and savings projections — and turns browsers into booked surveys.',
    metaTitle: 'Website Design for Solar & Renewable Energy Installers | Coltura',
    metaDescription:
      'High-converting websites for solar panel, heat pump, and renewable energy installers with MCS accreditation display, project galleries, and finance calculators. Built in 7 days.',
    keywords: [
      'solar panel website design',
      'renewable energy installer website',
      'heat pump website design',
      'solar installer web design',
      'MCS accredited installer website',
      'renewable energy web design',
    ],
    painPoints: [
      'Homeowners cannot verify your MCS, NICEIC, or NAPIT accreditations online',
      'No project gallery to prove you have done 500+ installs — trust gap is huge in renewables',
      'Competitors run Google Ads and Facebook campaigns but you have no destination page',
      'No way to show energy savings projections or finance options that clinch the sale',
      'Missing "solar panels near me" and "heat pump installer [town]" searches — losing free organic leads',
    ],
    benefits: [
      'Display MCS, NICEIC, NAPIT, and RECC accreditations front and centre',
      'Project gallery with real installations — panels, heat pumps, battery storage',
      'Energy savings calculator or projections to help close high-ticket sales',
      'Finance and grant information (ECO4, BUS, 0% VAT) to reduce price objection',
      'Rank for solar, heat pump, battery storage, and EV charger searches locally',
    ],
    features: [
      'Accreditation and certification display',
      'Installation project gallery',
      'Energy savings calculator or projection tool',
      'Finance and grant information page',
      'Service pages (solar PV, heat pumps, battery storage, EV chargers)',
      'Local landing pages for every town you cover',
      'Renewable-energy-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can you display all my accreditations — MCS, NICEIC, NAPIT?',
        answer:
          'Yes. Accreditations are the number one trust signal in renewables. We display every certification, registration number, and insurance detail prominently so homeowners feel confident booking a survey.',
      },
      {
        question: 'Will I show up when people search "solar panels near me" or "heat pump installer"?',
        answer:
          'Absolutely. We build dedicated local landing pages for every town you cover with local SEO, Google Maps, and unique content. You capture all the free organic leads competitors are paying for with Google Ads.',
      },
      {
        question: 'Can customers get a rough savings estimate from the website?',
        answer:
          'Yes. We can add an energy savings projection tool or calculator that shows estimated annual savings, payback period, and carbon reduction — giving homeowners a reason to book a full survey.',
      },
      {
        question: 'How do you handle finance, grants, and incentives like ECO4 and the Boiler Upgrade Scheme?',
        answer:
          'We build a dedicated finance and grants page that explains every available scheme — ECO4, BUS, 0% VAT, Smart Export Guarantee — with clear eligibility criteria and next steps. This reduces price objection before the first call.',
      },
    ],
    relatedTrades: ['electricians', 'roofers', 'plumbers'],
    ctaText: 'Get a Renewable Energy Website',
  },
  {
    slug: 'opticians',
    name: 'Opticians',
    plural: 'Opticians',
    headline: 'Websites for Opticians That Turn Local Trust Into More Eye Tests',
    subheadline:
      'Independent opticians win on personal care and boutique frame curation, but most websites hide 200+ five-star reviews and make booking an eye test harder than it needs to be.',
    metaTitle: 'Website Design for Opticians | Coltura',
    metaDescription:
      'Modern websites for independent opticians. Online booking, frame gallery, patient reviews, and local SEO. Built in 7 days.',
    keywords: [
      'optician website design',
      'optometry website',
      'website for opticians',
      'eye clinic website',
      'optician web design',
      'independent optician website',
    ],
    painPoints: [
      '200+ five-star Google reviews — but zero displayed on your actual website where they convert',
      'Corporate chains (Specsavers, Boots, Vision Express) outrank you on every local search',
      'No online booking — patients have to phone during clinic hours instead of booking 24/7',
      'Boutique frame brands (Italian, Japanese, Swiss 3D-printed) invisible to online shoppers',
      'Award-winning practice looks generic online — NHS registration, SightCare awards, and 50+ year heritage hidden from new patients',
    ],
    benefits: [
      'Display 200+ reviews on every page so new patients see your reputation instantly',
      'Outrank corporate chains for "optician near me" and "eye test [town]" searches',
      'Online booking that captures appointments outside clinic hours',
      'Showcase boutique frames with a gallery that highlights brands like FEB31st, Masunaga, and Götti',
      'Tell your story — independent, family-run, 50+ years on the High Street — the one thing chains cannot copy',
    ],
    features: [
      'Google review carousel and integration',
      'Online appointment booking system',
      'Frame brand gallery and showcase',
      'Service pages (eye tests, contact lenses, OCT imaging, OrthoK, children\'s eye care)',
      'Team profiles with qualifications and specialisms',
      'Local landing pages for every town in your catchment',
      'Accreditation and award display (SightCare, GOC, GOS, NHS)',
    ],
    faqs: [
      {
        question: 'Can patients book eye tests and contact lens checks directly on the website?',
        answer:
          'Yes. We integrate online booking so patients can schedule appointments 24/7 — including outside clinic hours. New patients searching at 9pm can book before they forget.',
      },
      {
        question: 'How do you display my Google reviews on the website?',
        answer:
          'We pull your Google reviews live into a carousel or grid on every page. 200+ five-star reviews should be the first thing a new visitor sees — not hidden on a third-party platform.',
      },
      {
        question: 'Can I showcase boutique frame brands like FEB31st, Masunaga, and Götti?',
        answer:
          'Absolutely. We build a dedicated frame gallery that showcases each brand with photos, price ranges, and brand stories. This is what sets you apart from corporate chains.',
      },
      {
        question: 'Will I rank when people search "optician near me" or "eye test" in my town?',
        answer:
          'Yes. We build local landing pages for every town you serve, optimise your Google Business Profile integration, and set up structured data so you outrank corporate chains in local search results.',
      },
    ],
    relatedTrades: ['dental-clinics', 'physiotherapists', 'vets'],
    ctaText: 'Get an Optician Website',
  },
  {
    slug: 'scaffolders',
    name: 'Scaffolders',
    plural: 'Scaffolders',
    headline: 'Websites for Scaffolders That Build Trust Before You Even Arrive',
    subheadline:
      'Construction firms, builders, and homeowners all need scaffolders they can trust with safety and deadlines. A proper website shows you are professional before the first pole goes up.',
    metaTitle: 'Website Design for Scaffolders | Coltura',
    metaDescription:
      'Professional websites for scaffolders and scaffolding companies. Project galleries, safety credentials, instant quotes. Built in 7 days.',
    keywords: [
      'scaffolding website design',
      'scaffolder website',
      'website for scaffolders',
      'scaffolding company website',
      'local scaffolder website',
    ],
    painPoints: [
      'Your website has dead pages — About and Services links go nowhere, making you look unprofessional',
      'Zero project photos despite years of work on real construction sites',
      'No Google reviews or Google Business Profile — invisible when builders search for scaffolders',
      'Email address hidden behind obfuscation — potential clients cannot contact you',
      'No way for site managers to verify your safety credentials and insurance online',
    ],
    benefits: [
      'Project gallery showing real scaffolding jobs — residential, commercial, and access towers',
      'Google Business Profile integration so you appear in "scaffolder near me" searches',
      'Safety credentials, insurance, and accreditations displayed prominently to reassure site managers',
      'Clear contact details and instant quote forms that capture project specs upfront',
      'Mobile-friendly design — construction site managers research on phones between jobs',
    ],
    features: [
      'Project gallery with before/during/after scaffolding photos',
      'Safety credentials and insurance display (CISRS, NASC, CHAS, Constructionline)',
      'Service pages (domestic, commercial, access towers, temporary roofs, design service)',
      'Instant quote request form with project type and height details',
      'Location pages for every town in your coverage area',
      'Customer reviews and testimonials',
      'Team profiles with qualifications',
    ],
    faqs: [
      {
        question: 'Can I show photos of scaffolding projects I have completed?',
        answer:
          'Absolutely. We build a dedicated project gallery showcasing your best work across domestic, commercial, and industrial jobs. Before, during, and after photos reassure potential clients that you deliver.',
      },
      {
        question: 'Will construction site managers find my website when they search?',
        answer:
          'Yes. We optimise your site for local SEO and connect your Google Business Profile so you rank for searches like "scaffolder near me," "scaffolding company [town]," and "commercial scaffolding contractor."',
      },
      {
        question: 'Can I display my safety certifications and insurance details?',
        answer:
          'Yes. We prominently display your CISRS, NASC, CHAS, or Constructionline accreditations so site managers and main contractors can verify compliance at a glance before they call.',
      },
      {
        question: 'Can clients request a quote directly through the website?',
        answer:
          'Yes. We add a quote request form that captures project type, height, duration, and location so you get actionable enquiries instead of vague phone calls.',
      },
    ],
    relatedTrades: ['roofers', 'builders', 'groundworkers'],
    ctaText: 'Get a Scaffolder Website',
  },
  {
    slug: 'tree-surgeons',
    name: 'Tree Surgeons',
    plural: 'Tree Surgeons',
    headline: 'Websites for Tree Surgeons That Turn Lookers Into Bookers',
    subheadline:
      'Your work speaks for itself — but does your website? A proper site shows off your projects, proves your credentials, and gets homeowners to pick up the phone instead of calling the next name on Google.',
    metaTitle: 'Website Design for Tree Surgeons | Coltura',
    metaDescription:
      'Modern websites for tree surgeons and arborists. Project galleries, NPTC/Lantra credentials, emergency call-out, and local SEO. Built in 7 days.',
    keywords: [
      'tree surgeon website design',
      'arborist website',
      'website for tree surgeons',
      'tree surgery web design',
      'tree care website',
      'local tree surgeon website',
    ],
    painPoints: [
      'Zero project photos — the most visual trade with nothing to show for years of work',
      'NPTC, Lantra, CHAS, and insurance credentials buried or invisible',
      'Homeowners cannot find pricing, services, or coverage area easily',
      'No local landing pages for the premium towns you actually serve',
      'Emergency storm-damage work has no clear call-to-action — customers go elsewhere when minutes matter',
    ],
    benefits: [
      'Project gallery with before/after photos organised by job type (felling, pruning, stump grinding, hedge work)',
      'Prominent NPTC, Lantra, CHAS, and public liability insurance badges so homeowners trust you instantly',
      'Emergency call-out banner with 24/7 phone number for storm damage — captures urgent work your competitors miss',
      'Local landing pages for every town you cover so you rank for "tree surgeon [town]"',
      'Simple quote request form that captures tree type, height, access details, and urgency',
    ],
    features: [
      'Drag-and-drop project gallery with before/after sliders',
      'Emergency call-out hero banner with one-tap phone button (mobile)',
      'Credentials hub — NPTC, Lantra, CHAS, insurance, waste carrier licence',
      'Service pages: tree felling, crown reduction, stump grinding, hedge trimming, site clearance',
      'Quote request form with tree details, access info, and photo upload',
      'Local landing pages for each town in your service area',
      'Google Business Profile integration with review feed',
      'Mobile-first design — because homeowners research from their phone in the garden',
    ],
    faqs: [
      {
        question: 'How quickly can you build a tree surgeon website?',
        answer:
          'We build and launch in 7 days. You provide your logo, project photos, credentials, and service area — we handle everything else. You review on day 5, and we go live on day 7.',
      },
      {
        question: 'Can I show my NPTC and Lantra qualifications on the site?',
        answer:
          'Yes. We build a dedicated credentials section that prominently displays your NPTC, Lantra, CHAS, insurance certificates, and waste carrier licence so homeowners see your professionalism before they call.',
      },
      {
        question: 'Will my website show up for "tree surgeon near me" searches?',
        answer:
          'Yes. We optimise your site for local SEO with town-specific landing pages, Google Business Profile integration, and schema markup so you rank for searches like "tree surgeon Macclesfield," "arborist Wilmslow," and "emergency tree removal [town]."',
      },
      {
        question: 'Can customers request quotes through the website?',
        answer:
          'Yes. We build a quote request form that captures tree type, approximate height, access details, urgency, and even lets customers upload photos — so you arrive informed and ready to quote.',
      },
    ],
    relatedTrades: ['landscapers', 'groundworkers', 'fencing-contractors'],
    ctaText: 'Get a Tree Surgeon Website',
  },
  {
    slug: 'tyre-fitters',
    name: 'Mobile Tyre Fitters',
    plural: 'Mobile Tyre Fitting Companies',
    headline: 'Websites for Mobile Tyre Fitters That Book Jobs on Autopilot',
    subheadline:
      'Most mobile tyre fitters rely on Google Ads and directory listings \u2014 paying for every click they could get free from organic SEO. A proper website with online booking, a tyre catalogue, and real reviews brings in customers who need tyres right now.',
    metaTitle: 'Website Design for Mobile Tyre Fitters | Coltura',
    metaDescription:
      'Modern websites for mobile tyre fitters, mobile tyre fitting companies, and 24/7 emergency tyre replacement services. Online tyre catalogue, booking system, real reviews, and local SEO. Built in 7 days.',
    keywords: [
      'mobile tyre fitter website design',
      'tyre fitting website',
      'mobile tyre company website',
      '24/7 tyre replacement website',
      'emergency tyre fitter website',
      'tyre shop web design',
      'mobile tyre service website',
      'van tyre fitter website',
    ],
    painPoints: [
      'Paying \u00a35+ per click on Google Ads for "mobile tyre fitter near me" \u2014 every enquiry costs real money when it could be free from organic search',
      '50+ doorway template location pages ("Many motorists in [TOWN] rely on\u2026") that Google penalises rather than rewards \u2014 actively hurting rankings',
      'No online tyre catalogue or booking system \u2014 customers have to call during a roadside emergency instead of booking instantly',
      'Zero real reviews visible on the site despite years of satisfied customers \u2014 no Trustpilot, no Google Reviews, no testimonial section',
      'Agency-built WordPress site with 284KB homepage bloat, placeholder email addresses still in the code, three H1s, and spelling errors \u2014 your website is losing you money every day it stays like this',
    ],
    benefits: [
      'Online tyre catalogue with brand, size, and price filters so customers find their exact tyre and book instantly \u2014 no phone call needed',
      'Click-to-call and WhatsApp booking buttons that convert roadside emergency searches into jobs within seconds',
      'Real customer reviews embedded on every page so new customers see your track record before they pick up the phone',
      'Proper local landing pages for every town you cover \u2014 not doorway spam, but genuine pages that rank organically',
      'Booking system that works while you are on the road \u2014 customers select their tyre, pick a time slot, and you arrive informed and ready',
    ],
    features: [
      'Online tyre catalogue with make, model, size, and price filters',
      'Click-to-call and WhatsApp one-tap booking from any page',
      'Quote request form with vehicle registration lookup and tyre size selection',
      'Local landing pages for every town in your service area (not spam \u2014 real pages)',
      'Service area map with live coverage zones',
      'Emergency call-out badge with 24/7 phone number displayed on every page',
      'Google Business Profile integration with review feed',
      'Mobile-first design \u2014 critical when customers are stranded with a flat tyre searching on their phone',
    ],
    faqs: [
      {
        question: 'How does an online tyre catalogue work for a mobile fitter?',
        answer:
          'We build a searchable catalogue where customers filter by tyre size, brand (Michelin, Pirelli, Continental, Bridgestone, Goodyear, etc.), and price range. Each tyre shows availability and a "Book This Tyre" button that feeds directly into your booking system. Customers find their exact tyre in seconds \u2014 no phone call required. You can manage pricing and stock from a simple dashboard, and the catalogue auto-syncs with any supplier price lists you provide.',
      },
      {
        question: 'How quickly can you replace my agency-built website?',
        answer:
          'We build and launch in 7 days \u2014 and we do not leave placeholder emails, spelling errors, or 284KB bloated homepages behind. Your existing domain switches to the new site in under an hour with zero downtime. Everything redirects properly so existing search rankings are preserved. You review on day 5 and approve the final build on day 7. From launch day, you stop paying \u00a35+ per click for Google Ads and start getting organic traffic instead.',
      },
      {
        question: 'What about emergency call-out searches \u2014 can the site handle those?',
        answer:
          'Yes. We optimise every page for mobile (where 80%+ of roadside searches happen) with a persistent click-to-call button that follows the visitor as they scroll. When someone searches "emergency tyre fitter near me" at 10pm, they land on your site and can call with a single tap \u2014 no scrolling, no menus, no friction. We also add a WhatsApp booking button, because many customers prefer to message rather than call.',
      },
      {
        question: 'Will my reviews and reputation actually show up on the site?',
        answer:
          'Absolutely. We embed your Google Reviews, Trustpilot score, or any review platform you use directly on your homepage and every service page. We also build a dedicated reviews page that shows every single review \u2014 not just a widget, but a proper showcase. If you have no reviews yet, we integrate a review request system that emails customers after every job and makes leaving a review one-click simple.',
      },
    ],
    relatedTrades: ['mechanics', 'electricians', 'car-valeting-detailing'],
    ctaText: 'Get a Mobile Tyre Fitter Website',
    avgCpc: '\u00a35.24',
    cpcNote: 'Average CPC for UK mobile tyre fitting keywords (Google Ads 2025)',
  },
  {
    slug: 'tilers',
    name: 'Tilers',
    plural: 'Tilers',
    headline: 'Websites for Tilers That Show Off Your Craft',
    subheadline:
      'Your tiling work transforms rooms — but does your website show it? A proper site puts your best projects front and centre, builds trust with reviews, and gets homeowners calling you instead of the next tiler on Google.',
    metaTitle: 'Website Design for Tilers | Coltura',
    metaDescription:
      'Modern websites for tilers. Project galleries, brand partner badges, British Standards compliance, quote requests, and local SEO. Built in 7 days.',
    keywords: [
      'tiler website design',
      'tiling website',
      'website for tilers',
      'tiling contractor web design',
      'bathroom tiler website',
      'kitchen tiler website',
      'local tiler website',
    ],
    painPoints: [
      'Zero project photos on your site — the most visual trade with nothing to show for years of work',
      'Fired Earth, Ardex, Dural UK, and other brand partnerships are invisible to potential customers',
      'No Google reviews or testimonials online despite customers saying "amazing job"',
      'Outlook or Gmail email address undermines your professional brand',
      'No local landing pages for the premium towns you actually serve',
    ],
    benefits: [
      'Stunning project gallery organised by room type — bathrooms, kitchens, hallways, wet rooms, and outdoor tiling',
      'Brand partner badges (Fired Earth, Ardex, Dural UK, Fastwarm) prominently displayed to prove you use premium materials',
      'British Standards compliance section showing you work to BS 5385 — the mark of a professional tiler',
      'Customer reviews and before/after sliders that turn browsers into bookers',
      'Local landing pages for every town you cover so you rank for "tiler [town]" searches',
    ],
    features: [
      'Project gallery with room-by-room filtering (bathrooms, kitchens, hallways, wet rooms, outdoors)',
      'Before/after image sliders for renovation projects',
      'Brand partner showcase — Fired Earth, Ardex, Dural UK, Fastwarm, and more',
      'British Standards and insurance credentials section',
      'Quote request form with room dimensions, tile type, and photo upload',
      'Customer testimonials and review integration',
      'Local landing pages for each town in your service area',
      'Mobile-first design — because 70% of homeowners browse on their phone',
    ],
    faqs: [
      {
        question: 'How quickly can you build a tiler website?',
        answer:
          'We build and launch in 7 days. You provide your logo, project photos, brand partners, and credentials — we handle everything else. You review on day 5, and we go live on day 7.',
      },
      {
        question: 'Can I display my Fired Earth and Ardex brand partnerships?',
        answer:
          'Yes. We build a dedicated brand partner section with manufacturer logos and badges — so homeowners see you use premium materials before they even pick up the phone.',
      },
      {
        question: 'Will my site show up for "tiler near me" searches?',
        answer:
          'Absolutely. We optimise for local SEO with town-specific landing pages, Google Business Profile integration, and schema markup so you rank for "tiler Macclesfield," "bathroom tiler Wilmslow," and "kitchen tiler Knutsford."',
      },
      {
        question: 'Can people request a quote through the website?',
        answer:
          'Yes. We build a quote request form that captures room type, approximate dimensions, tile preferences, and even lets customers upload photos — so you can provide an informed quote without an initial site visit.',
      },
    ],
    relatedTrades: ['bathroom-fitters', 'kitchen-fitters', 'builders'],
    ctaText: 'Get a Tiler Website',
  },
  {
    slug: 'bathroom-fitters',
    name: 'Bathroom Fitters',
    plural: 'Bathroom Fitters',
    headline: 'Websites for Bathroom Fitters That Turn Browsers Into Renovations',
    subheadline:
      'Homeowners spend weeks researching bathroom renovations before they call. A professional website with project galleries, 3D design previews, and supplier brand pages wins the job before you even quote.',
    metaTitle: 'Website Design for Bathroom Fitters | Coltura',
    metaDescription:
      'Showcase websites for bathroom fitters with project galleries, 3D design previews, supplier brand pages, and online quoting. Built in 7 days.',
    keywords: [
      'bathroom fitter website design',
      'bathroom installation website',
      'bathroom renovation website',
      'bathroom showroom website',
      'bathroom fitter web design',
      'local bathroom fitter SEO',
    ],
    painPoints: [
      'Zero project photos despite years of bathroom installations — the most visual trade with nothing to show',
      'No place to showcase premium supplier brands — Vitra, Burlington, Porcelanosa, or bespoke materials are invisible',
      'Homeowners cannot see your design capability or finish quality before they call',
      'Competing fitters with modern portfolio websites win the high-end remodels',
      'Missing "bathroom fitter near me" and "bathroom renovation [town]" searches',
    ],
    benefits: [
      'Before/after project gallery organised by style — modern, traditional, wet rooms, en-suites',
      'Premium supplier brand showcase with logos and product descriptions',
      'Design consultation booking form that captures room dimensions and style preferences',
      'Customer reviews with project photos to build homeowner trust',
      'Rank for local bathroom fitting and renovation searches',
    ],
    features: [
      'Before/after project gallery',
      'Supplier brand partner showcase',
      'Design consultation booking form',
      'Customer testimonials with project photos',
      'Clear pricing guide or quote request form',
      'Areas covered and service map',
      'Bathroom-fitter-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show before and after photos of my bathroom installations?',
        answer:
          'Absolutely. We build a dedicated project gallery with before/after image sliders organised by style — modern bathrooms, traditional suites, wet rooms, and en-suites — so homeowners can see the quality of your work.',
      },
      {
        question: 'Can I showcase the bathroom brands and materials I work with?',
        answer:
          'Yes. We build a dedicated brand partner section with manufacturer logos, product descriptions, and links to supplier catalogues — so homeowners see you use premium materials before they even pick up the phone.',
      },
      {
        question: 'Can homeowners request a design consultation through the website?',
        answer:
          'Yes. We build a design consultation booking form that captures room dimensions, style preferences, budget range, and even lets customers upload inspiration photos — so you arrive informed and ready to propose.',
      },
      {
        question: 'How quickly can you build a bathroom fitter website?',
        answer:
          'We build and launch in 7 days. You provide your logo, project photos, supplier brands, and credentials — we handle everything else. You review on day 5, and we go live on day 7.',
      },
    ],
    relatedTrades: ['tilers', 'plumbers', 'builders'],
    ctaText: 'Get a Bathroom Fitter Website',
  },
  {
    slug: 'photographers-videographers',
    name: 'Photographers & Videographers',
    plural: 'Photography & Videography Businesses',
    headline: 'Websites for Photographers & Videographers That Book Clients on Sight',
    subheadline:
      'Your portfolio is your pitch. We build websites that make your best work impossible to scroll past — with galleries, pricing, availability calendars, and venue-specific landing pages that bring in bookings.',
    metaTitle: 'Website Design for Photographers & Videographers | Coltura',
    metaDescription:
      'Portfolio websites for wedding, commercial, and portrait photographers & videographers. Image-first galleries, enquiry forms, pricing pages, and venue landing pages. Built in 7 days.',
    keywords: [
      'photographer website design',
      'videographer website',
      'wedding photography website',
      'photography portfolio website',
      'video production website',
      'wedding videographer website',
    ],
    painPoints: [
      'Amazing portfolio buried on Instagram — no central place that says "hire me"',
      'Dual domains or separate photo/video brands splitting your SEO and confusing couples',
      'Pricing is invisible — couples have to email or DM just to find out if you fit their budget',
      'Zero Google reviews despite years of happy couples — no trust layer on the site',
      'No venue-specific landing pages — missing couples searching "wedding photographer [venue]"',
    ],
    benefits: [
      'Full-screen image galleries that sell your work in seconds',
      'Transparent pricing packages so couples self-qualify before enquiring',
      'Video highlight reels embedded on the homepage — motion grabs attention instantly',
      'Venue-specific landing pages that rank for "photographer at [venue]" searches',
      'Google review integration so every 5-star couple story builds your next booking',
    ],
    features: [
      'Full-screen gallery with lightbox zoom and category filtering (weddings, commercial, portraits)',
      'Embedded video showreel on homepage with autoplay',
      'Pricing and packages page with clear tiers, inclusions, and enquiry CTA',
      'Availability calendar showing open dates — reduces "are you free?" enquiries',
      'Venue landing pages optimised for venue-name + photographer/videographer SEO',
      'Client login portal for private gallery delivery and print ordering',
      'Contact form with date, venue, and budget fields — qualified leads from day one',
      'Instagram feed embed for fresh social proof',
    ],
    faqs: [
      {
        question: 'Can I separate my photo and video branding on one website?',
        answer:
          'Yes. We build with clear photo/video sections or a unified brand depending on your strategy. If you have separate domains cannibalising each other, we consolidate them into one stronger site that ranks for both services.',
      },
      {
        question: 'How do venue landing pages work for SEO?',
        answer:
          'We create dedicated pages like /venues/peckforton-castle-wedding-photographer that rank when couples search for photographers at specific venues. Each page features your real work from that venue, venue details, and a direct enquiry form — capturing high-intent traffic that photographers normally miss.',
      },
      {
        question: 'Can couples view and download their wedding gallery through my site?',
        answer:
          'Yes. We build a password-protected client portal where you upload galleries for each couple. They can view, share, and download images — no third-party gallery service needed. Optional print ordering integration available.',
      },
      {
        question: 'How quickly can you build a photographer or videographer website?',
        answer:
          '7 days from start to launch. You provide your best images, a showreel video, pricing packages, and venue list — we design, build, and optimise everything. You review on day 5, we launch on day 7.',
      },
    ],
    relatedTrades: ['barbers', 'dog-walkers'],
    ctaText: 'Get a Photographer Website',
  },
  {
    slug: 'locksmiths',
    name: 'Locksmiths',
    plural: 'Locksmiths',
    headline: 'Websites for Locksmiths That Unlock Emergency Call-Outs',
    subheadline:
      'People locked out at 2am search "emergency locksmith near me" on their phone. If your website is not there — with a tap-to-call button and clear pricing — they will ring your competitor.',
    metaTitle: 'Website Design for Locksmiths | Coltura',
    metaDescription:
      'Emergency-ready websites for locksmiths with 24/7 call buttons, MLA accreditation display, and local SEO. Built in 7 days.',
    keywords: [
      'locksmith website design',
      'emergency locksmith website',
      'website for locksmiths',
      'local locksmith web design',
      'locksmith SEO',
    ],
    painPoints: [
      'Customers searching "emergency locksmith near me" cannot find you in the middle of the night',
      'No place to display MLA or DBS-checked credentials that build trust instantly',
      'Competitors with websites capture the "locksmith + [area]" searches you should own',
      'No pricing page means customers call for a quote and then call someone else for a cheaper one',
      'UPVC specialists, auto locksmiths, and safe engineers cannot showcase their niche skills',
    ],
    benefits: [
      '24/7 tap-to-call emergency button prominent on every page',
      'Display MLA, DBS, and insurance credentials front and centre',
      'Separate service pages — residential, commercial, auto, UPVC, safes',
      'Transparent pricing builds trust before customers even call',
      'Rank for emergency and local locksmith searches across your coverage area',
    ],
    features: [
      'Emergency call button',
      'Accreditation and insurance display',
      'Full service menu',
      'Transparent pricing page',
      'Location and coverage area pages',
      'Customer reviews and testimonials',
      'Locksmith-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my MLA accreditation and insurance?',
        answer:
          'Yes. We display your Master Locksmiths Association badge, DBS check status, and public liability insurance prominently so customers trust you the moment they land on your site.',
      },
      {
        question: 'Will people find me for emergency lockout searches?',
        answer:
          'Absolutely. We optimise for "emergency locksmith [area]", "24 hour locksmith near me", and "locked out [area]" so your phone rings when someone is stuck outside at 2am.',
      },
      {
        question: 'Can I show pricing for common jobs?',
        answer:
          'Yes. We build a transparent pricing page showing typical costs — lockout call-out, lock change, UPVC mechanism repair, key cutting. Customers trust you more when they know what to expect.',
      },
      {
        question: 'Can I list separate services — residential, auto, commercial?',
        answer:
          'Yes. We create dedicated pages for residential locksmithing, auto locksmithing (car key programming, lockout), commercial master key systems, UPVC specialists, and safe engineers — each targeting different search terms.',
      },
      {
        question: 'How quickly can you build a locksmith website?',
        answer:
          '7 days from start to launch. You provide your credentials, service list, pricing, and coverage area — we design, build, and optimise everything for emergency search traffic. You review on day 5, we launch on day 7.',
      },
    ],
    relatedTrades: ['window-fitters-glaziers', 'garage-doors'],
    ctaText: 'Get a Locksmith Website',
  },
  {
    slug: 'kitchen-fitters',
    name: 'Kitchen Fitters',
    plural: 'Kitchen Fitters',
    headline: "Websites for Kitchen Fitters That Showcase £30k+ Installations",
    subheadline:
      'A Prestbury homeowner spending £40,000 on a bespoke kitchen searches online before visiting a showroom. If your website has no project gallery, they will never walk through your door.',
    metaTitle: 'Website Design for Kitchen Fitters | Coltura',
    metaDescription:
      'Portfolio-driven websites for kitchen fitters with room-by-room project galleries, brand partnership badges, and local landing pages. Built in 7 days.',
    keywords: [
      'kitchen fitter website design',
      'website for kitchen fitters',
      'bespoke kitchen website',
      'kitchen installation web design',
      'kitchen fitter SEO',
    ],
    painPoints: [
      'Zero project photos means your best work — £40k bespoke installations in Prestbury and Hale — is invisible to the homeowners searching for it',
      'Brand partnerships (Howdens, Magnet, Wren, Schmidt) have no home on your site, even though they are a major trust signal',
      'No local landing pages for the premium towns where your best-paying clients live',
      'No online consultation booking — every enquiry is a phone call that might not happen',
      'Competitors with galleries capture search traffic while your 30+ years of work sit unseen',
    ],
    benefits: [
      'Room-by-room project gallery that turns your best installations into 24/7 sales tools',
      'Brand partnership badges displayed prominently — Howdens, Magnet, Wren, Schmidt, bespoke workshop',
      'Dedicated local landing pages for Prestbury, Knutsford, Hale, Alderley Edge, Wilmslow',
      'Online consultation booking so homeowners can schedule a design visit directly',
      'Rank for "bespoke kitchen fitter [area]" and capture the £30k+ project searches',
    ],
    features: [
      'Room-by-room project gallery',
      'Brand partnership showcase',
      'Before-and-after sliders',
      'Online consultation booking',
      'Local landing pages',
      'Customer reviews and testimonials',
      'Kitchen-fitter-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show photos of kitchens I have installed?',
        answer:
          'Yes — this is the most important feature. We build a room-by-room project gallery with before-and-after sliders, room dimensions, materials used, and brand partnerships. Your best work sells your next job 24/7.',
      },
      {
        question: 'Can I display my brand partnerships like Howdens or Magnet?',
        answer:
          'Absolutely. We display your kitchen brand partnerships prominently with official badges where available. Homeowners trust recognised brands — showing you are an approved installer for Howdens, Magnet, or Schmidt builds instant credibility.',
      },
      {
        question: 'Can homeowners book a design consultation online?',
        answer:
          'Yes. We integrate a consultation booking form so homeowners can schedule a design visit or showroom appointment. No more missed calls — every enquiry captured directly on your site.',
      },
      {
        question: 'Will I rank for kitchen fitter searches in my area?',
        answer:
          'Yes. We build dedicated local landing pages for each premium town you cover — Prestbury, Knutsford, Hale, Alderley Edge, Wilmslow — each optimised for "bespoke kitchen fitter [town]" and "kitchen installation [area]" searches.',
      },
      {
        question: 'How quickly can you build a kitchen fitter website?',
        answer:
          '7 days from start to launch. You provide your best project photos, brand partnerships, service details, and coverage area — we design, build, and optimise everything. You review on day 5, we launch on day 7.',
      },
    ],
    relatedTrades: ['bathroom-fitters', 'joiners', 'builders'],
    ctaText: 'Get a Kitchen Fitter Website',
  },
  {
    slug: 'welders-fabricators',
    name: 'Welding & Fabrication',
    plural: 'Welding & Fabrication Companies',
    headline: 'Websites for Welders That Prove Your Metal Before Anyone Picks Up a Phone',
    subheadline:
      'Aerospace engineers, motorsport teams, and architects do not gamble on welders with no portfolio. If your website has zero project photos, you are invisible to the clients who pay premium rates for precision work.',
    metaTitle: 'Website Design for Welders & Fabricators | Coltura',
    metaDescription:
      'Industrial-grade websites for welders and metal fabricators. Project galleries, material certifications, sector landing pages. Built in 7 days.',
    keywords: [
      'welding website design',
      'fabrication website',
      'website for welders',
      'metal fabrication company website',
      'engineering website',
    ],
    painPoints: [
      'Zero project photos after years of precision fabrication — aerospace, motorsport, and architectural clients expect to see your work',
      'Titanium, aluminium, and stainless steel capabilities hidden behind a bare homepage with no case studies',
      'Accreditations (ISO, CE, EN 1090, CHAS) invisible — compliance-sensitive industries cannot verify you',
      'Single-page static site with no way to request a quote or upload specifications',
      'Specialist materials knowledge buried — potential clients searching for "titanium welding" or "stainless fabrication" never find you',
    ],
    benefits: [
      'Project gallery showcasing real fabrication work — precision TIG, structural, architectural, and specialist alloys',
      'Material capability pages (titanium, stainless steel, aluminium, nickel alloys) that rank in Google for specialist searches',
      'Accreditations, insurance, and certifications displayed prominently to reassure engineering and construction clients',
      'Specification upload form — clients submit drawings and material requirements for instant quoting',
      'Sector landing pages for aerospace, motorsport, architectural, industrial, and marine — each targeting a different client base',
    ],
    features: [
      'High-resolution project gallery organised by material and sector',
      'Material capability pages with technical specifications',
      'Accreditations and certifications hub (ISO 9001, EN 1090, CE marking, CHAS)',
      'Quote request form with specification file upload',
      'Sector landing pages (aerospace, motorsport, architectural, industrial, marine)',
      'Local landing pages for every town in your coverage area',
      'Team profiles with qualifications and specialisms',
      'On-site and mobile welding toggle for service availability',
    ],
    faqs: [
      {
        question: 'Can I show photos of past welding and fabrication projects?',
        answer:
          'Yes. We build a dedicated project gallery organised by material and sector so aerospace engineers, architects, and construction directors can see your precision work before they contact you.',
      },
      {
        question: 'Will engineers find my specialist capabilities like titanium and aluminium welding?',
        answer:
          'Yes. We create dedicated material capability pages optimised for search so when someone types "titanium welding Cheshire" or "stainless fabrication Manchester," your website appears. Your materials expertise becomes your lead generation engine.',
      },
      {
        question: 'Can I display my accreditations and certifications?',
        answer:
          'Yes. We prominently display your ISO 9001, EN 1090, CE marking, CHAS, or any other certifications so compliance-sensitive clients in aerospace, construction, and engineering can verify you instantly.',
      },
      {
        question: 'Can clients submit drawings and specifications through the website?',
        answer:
          'Yes. We add a specification upload form where potential clients can attach drawings, material requirements, and project briefs — giving you actionable enquiries instead of vague phone calls.',
      },
      {
        question: 'How quickly can I have a website that actually shows what I do?',
        answer:
          'Your website is live within 7 working days. We handle everything — portfolio photography, content writing, SEO, and domain setup — so you can keep welding while we build your online presence.',
      },
    ],
    relatedTrades: ['mechanics', 'groundworkers', 'builders', 'roofers'],
    ctaText: 'Get a Welding & Fabrication Website',
  },
  {
    slug: 'chimney-sweeps',
    name: 'Chimney Sweeps',
    plural: 'Chimney Sweeps',
    headline: 'Websites for Chimney Sweeps That Bring In More Flues',
    subheadline:
      'You keep homes safe and warm — but does your website open the door? A proper site shows off your credentials, makes booking effortless, and gets homeowners calling you instead of the next sweep on Google.',
    metaTitle: 'Website Design for Chimney Sweeps | Coltura',
    metaDescription:
      'Modern websites for chimney sweeps. NVQ/NCSSA/Trading Standards credential display, online booking, before/after galleries, and local SEO. Built in 7 days.',
    keywords: [
      'chimney sweep website design',
      'chimney sweep website',
      'website for chimney sweeps',
      'chimney sweep web design',
      'local chimney sweep website',
      'chimney cleaning website',
    ],
    painPoints: [
      'StackProtect or CAPTCHA walls blocking your credentials, service pages, and location pages from Google — customers cannot find you',
      'NVQ, NCSSA, and Trading Standards Buy With Confidence approval invisible to homeowners searching for a trustworthy sweep',
      'Zero Google reviews or Google Business Profile — no social proof for one of the most trust-dependent trades',
      'Gmail email address undermines the professional, safety-conscious image you need',
      'No local landing pages for the premium towns where homeowners actively search for chimney sweeps',
    ],
    benefits: [
      'Prominent NVQ, NCSSA, and Trading Standards Buy With Confidence badges so homeowners trust you immediately',
      'Online booking and availability calendar — customers book a sweep without picking up the phone',
      'Before/after gallery of real flues and fireplaces, proving you do the dirty work properly',
      'Local landing pages for every town you cover so you rank for "chimney sweep [town]" searches',
      'Review integration from Google and RatingsPlus — turn 5-star feedback into a 24/7 sales engine',
    ],
    features: [
      'Credential hub — NVQ, NCSSA, Trading Standards Buy With Confidence, and public liability insurance badges',
      'Online booking system with calendar availability and automated reminders',
      'Before/after gallery showcasing chimney inspections, sweeping, and fireplace restoration',
      'Service pages: chimney sweeping, cowl fitting, bird nest removal, CCTV inspections, stove installation',
      'Emergency call-out banner for blocked flues and smoking fireplaces',
      'Local landing pages for each town in your service area',
      'Review integration from Google, RatingsPlus, and Trustpilot',
      'Price guide page with transparent pricing for standard sweeps, bird nests, and CCTV surveys',
    ],
    faqs: [
      {
        question: 'How quickly can you build a chimney sweep website?',
        answer:
          'We build and launch in 7 days. You provide your logo, credentials, photos, and service area — we handle everything else. You review on day 5, and we go live on day 7.',
      },
      {
        question: 'Can I show my NVQ and NCSSA qualifications on the site?',
        answer:
          'Yes. We build a dedicated credentials section that prominently displays your NVQ qualification, NCSSA registration, and Trading Standards Buy With Confidence approval so homeowners see you are properly qualified before they book.',
      },
      {
        question: 'Will my website show up for "chimney sweep near me" searches?',
        answer:
          'Yes. We optimise your site for local SEO with town-specific landing pages, Google Business Profile integration, and schema markup so you rank for searches like "chimney sweep Macclesfield," "chimney sweep Wilmslow," and "chimney cleaning [town]."',
      },
      {
        question: 'Can customers book sweeps through the website?',
        answer:
          'Yes. We build an online booking system with calendar availability, service selection, and automated email reminders — so you spend less time on the phone and more time on the roof.',
      },
      {
        question: 'How do you prevent the CAPTCHA blocking problem I have now?',
        answer:
          'We never use StackProtect, Cloudflare CAPTCHA walls, or any technology that blocks Google from indexing your pages. Every credential, service page, and location page is fully crawlable and visible to both search engines and potential customers.',
      },
    ],
    relatedTrades: ['roofers', 'insulation-contractors', 'plumbers'],
    ctaText: 'Get a Chimney Sweep Website',
  },

  {
    slug: 'electrical-contractors',
    name: 'Electrical Contractor',
    plural: 'Electrical Contractors',
    headline: 'Websites for Electrical Contractors That Turn Certifications into Contracts',
    subheadline:
      'Your NICEIC registration, CHAS accreditation, and 45 years of institutional contracts prove you are one of Cheshire\'s most qualified electrical contractors — but if your project gallery is frozen in 2020, your Google reviews widget is installed but not turned on, and your accreditation badges are buried in a paragraph of text, a facilities manager searching "commercial electrical contractor Macclesfield" sees none of it. A modern website showcases your EICR testing, CCTV and access control installations, and NICEIC credentials above the fold — turning certifications into contracts.',
    metaTitle: 'Website Design for Electrical Contractors | Coltura',
    metaDescription:
      'Professional websites for electrical contractors, EICR testers, and commercial electricians. NICEIC badges, project galleries, emergency call-out. Built in 7 days.',
    keywords: [
      'electrical contractor website design',
      'electrician website',
      'EICR testing website',
      'commercial electrical contractor website',
      'NICEIC registered electrician website',
      'electrical services website',
      'CCTV installer website',
      'data cabling website',
    ],
    painPoints: [
      'Accreditation badges hidden — your NICEIC, CHAS, Constructionline, and ELECSA credentials are buried in text paragraphs or footer fine print, invisible to the procurement officers and facilities managers who require certified contractors for compliance',
      'Project gallery frozen or empty — after 45+ years of commercial, industrial, and domestic installations across Cheshire, there are either zero project photos or the gallery has not been updated since 2020, so prospective clients cannot see a single completed job',
      'Trust widgets installed but broken — your Google review widget is in the code but not configured, your 200+ reviews are invisible, and the "leave a review" section is empty, so your most powerful sales asset — social proof — generates zero trust',
      'Consumer-grade email addresses — Sky, Yahoo, Gmail, or BT Internet emails on a domain-branded website undermine credibility when quoting six-figure commercial contracts, making your £10M public liability insurance and institutional credentials look inconsistent',
      'No individual service pages — EICR testing, CCTV installation, access control, data cabling, fire alarm systems, and commercial maintenance each have different buyers and Google search terms, but all land on one generic "services" paragraph',
    ],
    benefits: [
      'NICEIC, CHAS, Constructionline, ELECSA, and ECA badges displayed above the fold on every page — procurement officers and commercial clients see your credentials before they read a single sentence',
      'Project gallery organised by sector — domestic rewires, commercial fit-outs, industrial control panels, CCTV and security installations, data cabling infrastructure — so every buyer sees exactly the work they need',
      'Google reviews embedded and visible — your 5.0★ reputation and 45+ years of client testimonials finally visible to every visitor, turning social proof into enquiries',
      'Dedicated service landing pages for EICR testing, CCTV and security, access control, fire alarms, data cabling, commercial maintenance, and domestic electrical work — each ranking for its own high-intent search terms',
      'Professional domain email integration — enquiries go to you@yourdomain.co.uk, reinforcing the credibility your NICEIC registration and institutional contracts demand',
    ],
    features: [
      'NICEIC, CHAS, Constructionline, ELECSA, and ECA accreditation badges displayed above the fold',
      'Dedicated service pages: EICR Testing & Reports, CCTV & Security Systems, Access Control, Fire Alarm Systems, Data Cabling & Networking, Commercial Maintenance Contracts, Domestic Electrical',
      'Project portfolio organised by sector with before/after photos and equipment specs',
      'Google Reviews integration with schema markup for star ratings in search results',
      '24/7 emergency call-out banner pinned to every page with click-to-call',
      'Online quote request form with service type selector and file upload for site plans and specifications',
      'Local landing pages for every town in your coverage area with location-specific project examples',
      'Mobile-responsive design so site managers and facilities teams can request emergency call-outs from any device',
    ],
    faqs: [
      {
        question: 'How do my NICEIC and CHAS certifications get displayed on the website?',
        answer:
          'We display your NICEIC, CHAS, Constructionline, ELECSA, and ECA accreditation badges above the fold on every page — in the header or hero section — so procurement officers and commercial facilities managers see your compliance credentials before they read a single sentence. We also build a dedicated accreditations page with certificate details, verification links, and insurance information so commercial tender teams can confirm your credentials in seconds.',
      },
      {
        question: 'Can you build separate pages for EICR testing, CCTV installation, and commercial maintenance so I rank for each service?',
        answer:
          'Yes. We build dedicated service landing pages for every service you offer — EICR Testing & Reports, CCTV & Security Systems, Access Control, Fire Alarm Systems, Data Cabling & Networking, Commercial Maintenance Contracts, and Domestic Electrical Work — each optimised for its own Google search terms. A facilities manager searching "EICR testing contractor Macclesfield" lands on your EICR page with relevant accreditations, example reports, and a direct enquiry form — not a generic homepage.',
      },
      {
        question: 'Will my Google reviews and testimonial pages actually show reviews instead of being empty?',
        answer:
          'Yes. We integrate your Google reviews using the Google Places API with proper schema markup so your star rating appears in search results. We build a dedicated reviews page that pulls in every review automatically, plus a testimonial carousel on your homepage. If you have reviews scattered across Checkatrade, Trustpilot, or third-party directories, we aggregate them into one visible, trust-building section.',
      },
      {
        question: 'Can I use my own domain email address instead of a consumer email?',
        answer:
          'Yes. We configure professional email routing so enquiries go to you@yourcompany.co.uk — not a Sky, Yahoo, Gmail, or BT Internet address. This single change reinforces the credibility your NICEIC registration, £10M public liability insurance, and institutional contracts demand. We also build your contact form to deliver directly to this address.',
      },
      {
        question: 'Will I show up when businesses search "commercial electrical contractor" in my area?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover — Macclesfield, Wilmslow, Alderley Edge, Knutsford, Stockport, and across Cheshire — each optimised for searches like "commercial electrical contractor [town]," "EICR testing [area]," and "emergency electrician [location]." Each page features relevant project examples, your NICEIC credentials, and a direct enquiry form. Combined with Google Business Profile integration, you capture commercial search traffic across your entire service territory.',
      },
    ],
    relatedTrades: ['plumbers', 'heating-engineers', 'builders', 'air-conditioning-hvac', 'renewable-energy'],
    ctaText: 'Get an Electrical Website',
  },
  {
    slug: 'bricklayers',
    name: 'Bricklayers',
    plural: 'Bricklayers & Stonemasons',
    headline: 'Websites for Bricklayers & Stonemasons That Show the Craft',
    subheadline:
      'Heritage lime mortar, stone masonry, and traditional brickwork are rare skills. A proper website with project galleries and credentials turns your craftsmanship into enquiries from homeowners who value quality.',
    metaTitle: 'Website Design for Bricklayers & Stonemasons | Coltura',
    metaDescription:
      'Craft-focused websites for bricklayers and heritage stonemasons. Project galleries, lime mortar credentials, and local SEO. Built in 7 days.',
    keywords: [
      'bricklayer website design',
      'stonemason website',
      'heritage brickwork website',
      'lime mortar website',
      'masonry contractor website',
      'brickwork and stone website',
    ],
    painPoints: [
      'Zero project photos after years of premium heritage and stone work — the craft is invisible online',
      'Homeowners searching for heritage restoration cannot find your NHL hot lime mortar or cobbling credentials',
      'Contact page returns 404 or hides contact details — potential clients give up and call the next number',
      'No Google reviews or testimonials visible despite satisfied clients with restored period properties',
      'Missing local landing pages for each town you serve — every village has period properties that need lime work',
    ],
    benefits: [
      'Project galleries that showcase heritage lime mortar, stone masonry, chimney repairs, and cobbling',
      'Dedicated service pages for each craft — lime pointing, stone walling, flagstones, heritage brickwork',
      'Trust-building credentials section with heritage restoration qualifications and insurance details',
      'Google review integration so your star rating appears in local search results',
      'Local landing pages for every town and village with period properties in your service area',
    ],
    features: [
      'Project gallery with before/after sliders for heritage restoration, stone masonry, and brickwork',
      'Dedicated service pages: lime mortar restoration, stone masonry, heritage brickwork, cobbling, flagstones, chimney repairs, church restoration',
      'Credentials and insurance display with NHL hot lime, traditional lime putty, and heritage qualifications',
      'Google review integration with schema markup for star ratings in search results',
      'Quote request form with photo upload so homeowners can attach images of their period property issues',
      'Local landing pages for every Cheshire town and village with listed or period building stock',
      'Mobile-responsive design so homeowners can view project galleries and request quotes from any device',
      'Blog section to share heritage restoration knowledge and rank for long-tail craft-specific searches',
    ],
    faqs: [
      {
        question: 'Can you showcase my lime mortar and stone masonry projects properly?',
        answer:
          'Yes. We build before/after project galleries with high-resolution sliders showing heritage brickwork, NHL hot lime pointing, stone walling, cobbling, flagstones, chimney repairs, and church restoration. Each project gets its own page with full description, materials used, and location. Period property owners searching for proof of your craftsmanship find a visual portfolio that sells your skill before they pick up the phone.',
      },
      {
        question: 'Will people searching for "heritage stonemason near me" actually find my website?',
        answer:
          'Yes. We build dedicated local landing pages for every town and village in your service area — each optimised for searches like "heritage stonemason Cheshire," "lime mortar restoration Mold," "stone masonry contractor North Wales," and "chimney repair [town]." Each page features relevant project examples, your heritage credentials, and a direct enquiry form. We also set up your Google Business Profile so you appear in local map searches.',
      },
      {
        question: 'Can I show my different services — bricklaying AND stonemasonry — on the same site?',
        answer:
          'Yes. We build dedicated service pages for every craft you offer — lime mortar restoration, stone masonry, heritage brickwork, cobbling, flagstones, chimney repairs, and church restoration — each optimised for its own Google search terms. A church warden searching "church stone restoration Cheshire" lands on your church restoration page, while a homeowner searching "lime mortar pointing near me" finds your lime mortar page with relevant project photos, materials explanation, and a direct quote form.',
      },
      {
        question: 'How do I get Google reviews when most of my work is on private period properties?',
        answer:
          'We set up a simple review collection system — a dedicated page with a Google review link you can send to clients by text or email after job completion. We also build a testimonial section on your site where you can display written references from past clients, church wardens, and conservation officers. Over time, these build the trust that heritage property owners need before commissioning specialist lime work.',
      },
      {
        question: 'What if my contact page is broken and my email bounces?',
        answer:
          'We fix this first. Your new site has a working contact page with your phone number, email address, and a simple enquiry form — all tested and verified. If your email currently bounces because your domain has no MX records, we help you set up professional email routing so enquiries actually reach you. No more 404 pages hiding your contact details from potential clients.',
      },
    ],
    relatedTrades: ['builders', 'roofers', 'renderers', 'groundworkers'],
    ctaText: 'Get a Bricklayer Website',
  },
  {
    slug: 'plant-hire',
    name: 'Plant Hire',
    plural: 'Plant Hire & Equipment Rental Companies',
    headline: 'Websites for Plant Hire Companies That Turn Browsers into Hirers',
    subheadline:
      'Your fleet speaks for itself — but your website should too. We build plant hire sites with real equipment galleries, live availability, and quote forms that convert.',
    metaTitle: 'Website Design for Plant Hire Companies | Coltura',
    metaDescription:
      'Modern websites for plant hire and equipment rental companies. Equipment galleries with spec sheets, online quote forms, local landing pages, and Google review integration. Built in 7 days.',
    keywords: [
      'plant hire website',
      'equipment rental website',
      'digger hire website',
      'excavator hire website',
      'construction plant hire website',
      'mini digger hire website',
      'telehandler hire website',
      'dumper hire website',
      'tool hire website',
    ],
    painPoints: [
      'Stock photos instead of real fleet images — potential hirers cannot see your actual machines, attachments, or condition',
      'No equipment spec sheets — operators and site managers need dig depth, lift capacity, and transport dimensions before they call',
      'Zero Google reviews after years of serving construction firms, landscapers, and homeowners — every job site has a happy client',
      'No online booking or quote form — hirers have to call during working hours when they are on site themselves',
      'Missing local landing pages for every town and city in your delivery radius — each area searches for plant hire independently',
    ],
    benefits: [
      'Real fleet photography galleries showing every machine, attachment, and working condition — no stock library images',
      'Equipment spec sheets with dig depth, operating weight, transport dimensions, and fuel type for every machine in your fleet',
      'Google review integration displaying your star rating directly in search results and on every page of your site',
      'Online quote and booking forms so site managers can reserve machines from their phone between pours',
      'Local landing pages for every town in your coverage area, each showing relevant equipment categories and delivery info',
    ],
    features: [
      'Fleet gallery with high-resolution photos of every machine category — mini diggers, excavators, rollers, dumpers, telehandlers, bulldozers, attachments',
      'Equipment spec sheets with dig depth, operating weight, transport dimensions, fuel type, and hire rates for each machine',
      'Online quote and booking form with date picker, machine selection, delivery address, and attachment requirements',
      'Google review integration with schema markup for star ratings in local search results',
      'Dedicated service pages for each equipment category optimised for search — mini digger hire, excavator hire, roller hire, dumper hire, telehandler hire',
      'Local landing pages for every town in your delivery radius with equipment availability and delivery information',
      'Transport and delivery information page with low-loader fleet details and delivery radius map',
      'Aggregates and attachments showcase with pricing and compatibility charts for every machine in your fleet',
      'Team and company story page — the "one digger to £1M turnover" narrative that builds trust with commercial clients',
      'Mobile-responsive design so site managers can check specs and book machines from their phone on site',
    ],
    faqs: [
      {
        question: 'Can you show my actual fleet, not stock photos?',
        answer:
          'Yes. We build a fleet gallery with high-resolution photography of every machine category in your yard — mini diggers, excavators, rollers, dumpers, telehandlers, bulldozers, and attachments. Each machine gets its own spec card showing dig depth, operating weight, transport dimensions, and fuel type. When a site manager searches "3-tonne excavator hire Cheshire," they see your actual machine, not a generic library image. This is the difference between a phone call and a scroll-past.',
      },
      {
        question: 'Can hirers book machines online or request a quote from the website?',
        answer:
          'Yes. We build an online quote and booking form with a date picker, machine category selector, delivery postcode field, and attachment requirements section. Site managers can request a quote from their phone between pours — no need to call during working hours. Every enquiry lands in your inbox with machine requested, dates, delivery address, and any special requirements already filled in. You call back to confirm availability and take payment — no time wasted on "what do you need and when?"',
      },
      {
        question: 'Will people searching "mini digger hire near me" actually find my website?',
        answer:
          'Yes. We build dedicated local landing pages for every town and city in your delivery radius — each optimised for searches like "mini digger hire Macclesfield," "excavator hire Cheshire," "dumper hire Manchester," and "plant hire [town]." Each page shows your relevant equipment, delivery information, Google reviews, and a direct quote form. We also set up your Google Business Profile so you appear in local map searches with your star rating visible.',
      },
      {
        question: 'I have a great company story — from one digger to 30 machines. Can you tell it properly?',
        answer:
          'Yes. We build a dedicated About and company story page that turns your journey into a trust asset. The construction industry runs on relationships, and your story — starting with one machine while working full-time, building to a fleet of 30 and targeting £1M turnover — proves reliability and ambition better than any stock photo ever could. We include team photos, your yard, your transport fleet, and any press features or awards. Commercial clients trust people, not logos.',
      },
      {
        question: 'How quickly can you have the site live?',
        answer:
          'Seven days from sign-off. You provide photos of your fleet (or we arrange a photographer), machine specs, and your service area — we build the rest. Day 7 your new site is live with a real fleet gallery, equipment spec sheets, online quote form, Google review integration, and local landing pages for every town in your delivery radius. You stop losing enquiries to competitors whose websites look more professional than yours.',
      },
    ],
    relatedTrades: ['builders', 'groundworkers', 'demolition-excavation', 'skip-hire', 'driveways', 'landscapers'],
    ctaText: 'Get a Plant Hire Website',
  },
  {
    slug: 'car-valeting-detailing',
    name: 'Car Valeting & Detailing',
    plural: 'Car Valeting & Detailing Businesses',
    headline: 'Websites for Car Valeting & Detailing That Turn Scrollers Into Bookings',
    subheadline:
      'Your before-and-after work speaks for itself — but only if people can see it. A proper website with transformation galleries, transparent pricing, and online booking turns casual browsers into paying customers.',
    metaTitle: 'Website Design for Car Valeting & Detailing | Coltura',
    metaDescription:
      'Professional websites for car valeting and detailing businesses. Before/after galleries, service menus, booking, and local SEO. Built in 7 days.',
    keywords: [
      'car valeting website',
      'car detailing website',
      'mobile valeting website',
      'auto detailing website',
      'car cleaning website',
      'valeting business website',
    ],
    painPoints: [
      'No before/after gallery — the single most important trust builder in this trade is invisible, meaning potential customers scroll past your site without seeing the quality of your work',
      'Zero Google reviews displayed on site — even if you have 50+ five-star ratings, no one can see them on your website, so you are relying on word of mouth alone',
      'No online booking or pricing — customers have to call or message just to find out if you are in their budget, losing impulse bookings to competitors who show prices upfront',
      'Gmail or Outlook email addresses — a professional domain name costs £10/year but a @gmail.com address on a Ferrari-detailing website kills credibility instantly',
      'No local landing pages for the towns you actually serve — you might cover Macclesfield, Wilmslow, Alderley Edge, and Congleton but your website only ranks for your home town at best',
      'Ceramic coating certifications and product partnerships are invisible — brands like Gtechniq, Gyeon, Swissvax, and CarPro are trust signals that clients look for, but they are buried or missing entirely',
    ],
    benefits: [
      'A stunning transformation gallery that does the selling for you — side-by-side before/after photos with service tags so customers can see exactly what you delivered for a Porsche, a Lamborghini, or a family SUV',
      'Google reviews embedded on every page — turn your existing five-star reputation into an on-site trust engine that converts visitors into bookings without them ever leaving your site',
      'Online booking with transparent pricing — service menus with prices, duration, and a calendar widget so customers can book a maintenance wash, ceramic coating, or full paint correction in 60 seconds',
      'Professional domain email that matches your premium work — you detail Ferraris; your email address should look like it belongs on a premium brand, not a free inbox',
      'Dedicated local landing pages for every town in your service area — rank for "car detailing Macclesfield," "mobile valeting Wilmslow," "ceramic coating Alderley Edge" and capture customers your competitors are missing',
      'Certification and brand badges displayed prominently — Gtechniq, Gyeon, Swissvax, Auto Glym, and other brand logos reassure customers you use professional-grade products and techniques',
    ],
    features: [
      'Before/After Transformation Gallery — a grid or carousel of side-by-side photos with service category tags (paint correction, ceramic coating, interior deep clean, headlight restoration) and vehicle make/model so customers can find work relevant to their car',
      'Service Menu with Pricing — individual pages for each service (maintenance wash, full valet, paint correction, ceramic coating, leather treatment, engine bay cleaning, window tints) with transparent pricing, duration, and what is included',
      'Online Booking System — a calendar widget with service selection, vehicle details field, location picker (mobile vs. unit drop-off), and optional photo upload for quote requests on correction work',
      'Google Review Integration — your existing reviews pulled onto the site in a carousel or grid, with star ratings, customer names, and vehicle details. Every page has a review snippet so visitors trust you before they scroll',
      'Local Landing Pages — one page per town you serve, each optimised for local search with your service area map, relevant before/after photos, Google reviews from customers in that town, and a booking CTA',
      'Certification & Product Partner Badges — Gtechniq, Gyeon, Swissvax, Auto Glym LifeShine, CarPro, and other brand logos displayed in a trust bar, with links to your accredited installer profile where applicable',
      'Mobile-First Design — your website looks perfect on a phone because that is where most customers will find you. Full gallery, booking, and pricing all finger-friendly. No pinch-zooming needed.',
      'Video Integration — embed YouTube or Instagram Reels of your work directly on service pages so customers can watch a full paint correction or ceramic coating application in 60 seconds',
    ],
    faqs: [
      {
        question: 'I have photos of my work on Instagram and Facebook — why do I need a website gallery?',
        answer:
          'Social media posts are temporary — they get buried in the feed within hours. A website gallery is permanent, organised by service type and vehicle, and searchable by Google. When someone searches "paint correction Macclesfield" or "ceramic coating near me," your website gallery shows up in search results. Your Instagram does not. A website turns your work into a 24/7 sales tool that brings in new customers who never followed you on social media.',
      },
      {
        question: 'Can customers book online or do they still need to call me?',
        answer:
          'Yes, we build a full online booking system. Customers select their service (maintenance wash, full valet, paint correction, ceramic coating, etc.), pick a date and time slot, enter their vehicle details (make, model, registration), choose mobile or unit drop-off, and optionally upload photos for a correction quote. You receive the booking with all the details — no back-and-forth "what car is it and what do you want done?" messages. You can still take phone bookings too; the online system handles the ones who would rather book at 10pm from their sofa.',
      },
      {
        question: 'I use an Outlook or Gmail address — does that really matter?',
        answer:
          'Yes, it matters more than most detailers realise. If you are detailing a Ferrari, Lamborghini, or Porsche — or even a well-loved BMW — the owner notices every detail. A @gmail.com or @outlook.com email address says "sole trader working from a driveway" even if you have a fully equipped unit and premium training. A @yourbusiness.co.uk email costs £5/month and instantly tells a premium car owner that you run a professional operation. It is the cheapest trust signal you can buy.',
      },
      {
        question: 'I am mobile — how do you handle location pages for a mobile service?',
        answer:
          'We build dedicated landing pages for every town and postcode area in your service radius. Each page includes a local map of your coverage, before/after photos of cars you have worked on in or near that area, Google reviews from customers in that town, your service list with mobile pricing, and a booking CTA. Someone searching "mobile car detailing Wilmslow" finds your Wilmslow page with everything they need to book — without scrolling through information about towns 20 miles away.',
      },
      {
        question: 'Can you show my ceramic coating certifications and product partnerships?',
        answer:
          'Absolutely. We create a dedicated certifications and partners section with official brand logos (Gtechniq, Gyeon, Swissvax, CarPro, Auto Glym, etc.) displayed as trust badges. If you are an accredited or approved installer for any brand, we link to your profile on their directory and explain what the certification means for the customer (e.g. manufacturer-backed warranty, approved application process). These logos are trust shortcuts — a car owner who recognises the Gtechniq badge immediately knows you use professional-grade products.',
      },
      {
        question: 'How quickly can you have a detailing website live?',
        answer:
          'Seven days from sign-off. You provide your best before/after photos (or we arrange a photographer to shoot your next few jobs), your service list and pricing, your certifications, and the towns you cover. Day 7 your new site is live with a transformation gallery, online booking, transparent pricing, Google reviews, certification badges, and local landing pages for your entire service area. You stop losing premium customers to competitors whose websites look more professional than yours.',
      },
    ],
    relatedTrades: ['window-cleaners', 'mechanics', 'painters-decorators', 'cleaners'],
    ctaText: 'Get a Car Valeting & Detailing Website',
  },
  {
    slug: 'sheet-metal-fabrication',
    name: 'Sheet Metal Fabricators',
    plural: 'Sheet Metal Fabrication Companies',
    headline: 'Websites for Sheet Metal Fabricators That Win Engineering Contracts',
    subheadline:
      'Precision manufacturing demands precision online. A website that showcases your ISO certifications, laser cutting capability, exotic alloys, and coded welding will get you on aerospace and nuclear RFQ shortlists.',
    metaTitle: 'Website Design for Sheet Metal Fabricators | Coltura',
    metaDescription:
      'Industrial websites for sheet metal fabrication and laser cutting companies. ISO badges, sector landing pages, RFQ forms with CAD upload, and project galleries. Built in 7 days.',
    keywords: [
      'sheet metal fabrication website',
      'laser cutting web design',
      'CNC fabrication website',
      'sheet metal website',
      'metal fabrication SEO',
      'engineering website design',
      'ISO certified fabrication website',
    ],
    painPoints: [
      'Procurement managers searching "laser cutting Cheshire" or "sheet metal fabrication UK" find competitors, not you — despite 40+ years in business',
      'UKAS ISO 9001 and ISO 14001 certifications are buried in PDFs — invisible to engineers evaluating supplier quality online',
      'Exotic alloy capability (Hastelloy, Inconel, titanium) that aerospace and nuclear buyers specifically search for is hidden in a single sentence of body text',
      'Zero project photos after decades of work — every RFQ response requires attaching photos manually because there is no gallery online',
      'No RFQ form with CAD file upload — engineers must email attachments manually instead of submitting through a professional procurement portal',
    ],
    benefits: [
      'Appear on RFQ shortlists for aerospace, nuclear, pharmaceutical, and chemical engineering buyers who search by certification and material capability',
      'UKAS ISO 9001 and ISO 14001 badges displayed above the fold — instant trust signal for procurement and quality managers',
      'Dedicated alloy pages for Hastelloy, Inconel, titanium, aluminium, and stainless steel — each targeting the exact searches engineers make',
      'Project gallery organised by sector (aerospace, motorsport, medical, industrial) to pre-fill every RFQ with proof of capability',
      'RFQ form with CAD/STEP file upload built in — engineers can submit enquiries with drawings attached in one step',
    ],
    features: [
      'Accreditation Badge Bar — UKAS ISO 9001, ISO 14001, EcoVadis, Alcumus displayed prominently above the fold with verification links',
      'Sector Landing Pages — aerospace, nuclear, pharmaceutical, chemical processing, food & beverage, automotive, construction, general engineering',
      'Material Capability Showcase — dedicated pages per alloy with spec sheets, thickness ranges, and example applications',
      'Machine Asset Page — Bystronic laser cutter, CNC brake press (60-tonne, 3m bed), coded welding stations with photos and capability specs',
      'Project Portfolio Gallery — sector-organised, lightbox-enabled, with project briefs for each piece',
      'RFQ / Quote Request Form — file upload supporting DXF, STEP, IGES, PDF drawings; auto-routes to estimating@',
      'Client Logo Wall — institutional and OEM client logos (NHS, AstraZeneca, aerospace primes) with testimonial carousel',
      'Mobile-Responsive — engineers visiting from site will get a tap-to-call estimating line and a fast-loading spec sheet on their phone',
    ],
    faqs: [
      {
        question: 'Can you build a website that attracts aerospace and nuclear RFQs?',
        answer:
          'Yes. We build sector landing pages targeting aerospace sheet metal fabrication, nuclear-grade metal fabrication, and pharmaceutical stainless steel — the exact searches procurement engineers make. Combined with ISO certification schema and material capability pages, your site will show up when buyers search for qualified suppliers.',
      },
      {
        question: 'How do you showcase exotic alloy capability online?',
        answer:
          'We create dedicated material pages for Hastelloy, Inconel, titanium, and duplex stainless steel — each with composition specs, thickness ranges, typical applications, and example projects. Engineers searching "Hastelloy fabrication UK" or "Inconel laser cutting" will find you.',
      },
      {
        question: 'Can customers upload CAD files directly through the website?',
        answer:
          'Yes. We build an RFQ form with multi-file upload supporting DXF, STEP, IGES, and PDF formats. Files auto-route to your estimating team with a reference number — no more email attachments getting lost in inboxes.',
      },
      {
        question: 'How quickly can you build a fabrication website?',
        answer:
          'Most fabrication websites are live in 7-10 days. The heavy lifting is the content architecture — sector pages, material pages, and machine specs — which we build from your existing certifications and capability docs.',
      },
      {
        question: 'Do you handle industrial SEO differently?',
        answer:
          'Industrial SEO is about precision, not volume. We target high-intent long-tail keywords like "ISO 9001 sheet metal fabrication Cheshire," "CNC laser cutting services UK," and "Inconel fabrication supplier" — terms where every click is a qualified engineering buyer, not a tyre-kicker.',
      },
    ],
    relatedTrades: ['welders-fabricators', 'renewable-energy', 'builders', 'groundworkers'],
    ctaText: 'Get a Sheet Metal Fabrication Website',
  },
  {
    slug: 'catering',
    name: 'Caterers',
    plural: 'Catering Companies',
    headline: 'Websites for Catering Companies That Make the Food Look as Good as It Tastes',
    subheadline:
      'Your food speaks for itself at every event — but your website should do the same online. A proper site showcases your dishes, proves your reputation, and gets corporate clients and party hosts booking instead of scrolling past.',
    metaTitle: 'Website Design for Caterers | Coltura',
    metaDescription:
      'Modern websites for catering companies and event caterers. Food galleries, transparent pricing, online booking, corporate credentials, and local SEO. Built in 7 days.',
    keywords: [
      'catering website design',
      'caterer website',
      'website for caterers',
      'event catering website',
      'corporate catering website',
      'buffet catering website',
      'local caterer website',
    ],
    painPoints: [
      'Zero food photography — the most visual trade with nothing to show on the website',
      'Email address buried in page source code or completely absent — corporate clients cannot contact you',
      'No Google reviews or third-party social proof despite years of events and thousands of guests served',
      'No online booking, instant quote, or enquiry form — every booking requires a phone call',
      'Brand-name clients (NHS, corporates, venues) invisible because there is nowhere to showcase them',
    ],
    benefits: [
      'Mouth-watering food gallery organised by event type — weddings, corporate, buffets, canapés, BBQs',
      'Prominent email, phone, and enquiry form — corporate PAs and wedding planners find you in seconds',
      'Google review integration and on-site testimonials so new clients trust you before they taste a single canapé',
      'Online booking and instant quote forms that capture guest count, dietary requirements, date, and venue',
      'Client logo showcase (NHS, corporate, venues) that proves you deliver at the highest level',
    ],
    features: [
      'Professional food photography gallery with category filters (weddings, corporate, buffets, canapés, BBQs)',
      'Transparent pricing page with per-head costs and package comparisons',
      'Online enquiry form capturing guest count, dietary requirements, venue, date, and budget',
      'Client logo wall with trusted-by brand showcase',
      'Named chef profiles with bios and qualifications',
      'Local landing pages for every town and region you serve',
      'Google Business Profile integration with review feed',
      'Instagram feed integration for real-time food photography',
      'Dietary/allergen filter for menus',
    ],
    faqs: [
      {
        question: 'How quickly can you build a catering website?',
        answer:
          'We build and launch in 7 days. You provide your logo, food photography, menus, pricing, client logos, and service area — we handle everything else. You review on day 5, and we go live on day 7.',
      },
      {
        question: 'Can clients book catering and request quotes through the website?',
        answer:
          'Yes. We build enquiry forms that capture guest count, dietary requirements, venue, date, and budget — so you get actionable leads instead of vague "how much do you charge?" emails.',
      },
      {
        question: 'Will my menus and pricing be easy to update?',
        answer:
          'Yes. We build a structured pricing page with per-head costs, package comparisons, and dietary filters that you can update as your menu and prices change. No technical skills needed.',
      },
      {
        question: 'Can you build location-specific pages for all the towns I cover?',
        answer:
          'Absolutely. Whether you cover 5 towns or 100, we build individual landing pages for each location so you rank for "catering [town]," "buffet catering [town]," and "event caterer [town]" across your entire service area.',
      },
    ],
    relatedTrades: ['event-catering', 'restaurants', 'cafes', 'takeaways'],
    ctaText: 'Get a Catering Website',
  },
  {
    slug: 'lawn-care',
    name: 'Lawn Care',
    plural: 'Lawn Care Companies',
    headline: 'Websites for Lawn Care Companies That Turn Fans Into Paying Customers',
    subheadline:
      'A massive social following means nothing if your fans cannot book you. A proper lawn care website converts Instagram and YouTube viewers into paying clients with online booking, galleries, and local SEO.',
    metaTitle: 'Website Design for Lawn Care Companies | Coltura',
    metaDescription:
      'Modern websites for lawn care, garden maintenance, and landscaping companies. Social media integration, before/after galleries, online booking, and local SEO. Built in 7 days.',
    keywords: [
      'lawn care website design',
      'garden maintenance website',
      'landscaping website',
      'website for lawn care',
      'gardening website design',
      'local gardener website',
    ],
    painPoints: [
      'Massive social media following — but no website for fans to actually book or enquire through',
      'Seasonal lawn treatments (aeration, scarification, fertilisation) invisible because there are no dedicated service pages',
      'Before/after lawn transformations only visible on Instagram stories that disappear after 24 hours',
      'No online booking means every client has to DM, WhatsApp, or call — losing 70% of impulse enquiries',
      'Zero local SEO despite covering multiple Cheshire towns — invisible on Google when homeowners search "lawn care near me"',
    ],
    benefits: [
      'Social media-to-website bridge — Instagram/YouTube auto-pull gallery keeps your site fresh with every post',
      'Online booking widget that lets clients pick a service, date, and time in 30 seconds — no DMs needed',
      'Permanent before/after transformation gallery organised by season and service type',
      'Dedicated seasonal treatment pages (spring scarification, autumn aeration, summer maintenance) that rank on Google',
      'Local landing pages for every town you cover so you show up for "lawn care Macclesfield" and "garden maintenance Wilmslow"',
    ],
    features: [
      'Social media auto-pull gallery (Instagram, YouTube, TikTok)',
      'Online booking widget with service/date/time selection',
      'Before/after transformation showcase',
      'Seasonal treatment pages (scarification, aeration, fertilisation, moss control)',
      'Transparent pricing page with service packages',
      'Local landing pages for every town covered',
      'Customer testimonials with project photos',
      'Google Business Profile integration',
      'Mobile-first design for homeowners searching on their phone',
    ],
    faqs: [
      {
        question: 'Can you connect my Instagram and YouTube to my website?',
        answer:
          'Yes. We build an auto-pull gallery that shows your latest Instagram posts, YouTube videos, and TikTok content directly on your website. Every time you post, your site updates automatically — no manual uploading needed.',
      },
      {
        question: 'Can clients book lawn treatments directly through the website?',
        answer:
          'Absolutely. We add an online booking widget where clients select their service (lawn mowing, scarification, aeration, fertilisation), pick a date and time slot, and confirm — all in under 30 seconds. No more WhatsApp ping-pong.',
      },
      {
        question: 'Will I show up on Google for "lawn care near me"?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover, optimised for searches like "lawn care Macclesfield," "garden maintenance Wilmslow," and "grass cutting [town]." Combined with your Google Business Profile, you will appear in both the map pack and organic results.',
      },
      {
        question: 'Can I show before/after photos on the website?',
        answer:
          'Yes. We create a permanent before/after transformation gallery organised by season and service type. Unlike Instagram stories that vanish in 24 hours, these stay visible forever and rank in Google image search.',
      },
      {
        question: 'How quickly can you build a lawn care website?',
        answer:
          '7 days from start to launch. You provide your logo, service list, pricing, coverage area, and social media handles — we design, build, and optimise everything. You review on day 5, we launch on day 7.',
      },
    ],
    relatedTrades: ['landscapers', 'gardeners', 'tree-surgeons', 'window-cleaners'],
    ctaText: 'Get a Lawn Care Website',
  },
  {
    slug: 'garden-design',
    name: 'Garden Design',
    plural: 'Garden Designers & Landscape Architects',
    headline: 'Websites for Garden Designers That Showcase Your Vision Before a Spade Hits the Ground',
    subheadline:
      'Your 3D renders and planting plans are beautiful — but if clients cannot find them, they cannot hire you. A garden design website turns your portfolio into a 24/7 sales tool with project galleries, consultation booking, and local SEO.',
    metaTitle: 'Website Design for Garden Designers | Coltura',
    metaDescription:
      'Stunning portfolio websites for garden designers and landscape architects. 3D render galleries, consultation booking, planting plan showcases, and local SEO. Built in 7 days.',
    keywords: [
      'garden design website',
      'garden designer website',
      'landscape architect website',
      'website for garden designers',
      'garden design portfolio website',
      'landscape design website design',
    ],
    painPoints: [
      'Beautiful 3D renders and planting plans buried in a Dropbox link or sent as email attachments — invisible to potential clients searching Google',
      'Instagram portfolio looks great but disappears in 24 hours on stories and gets buried in the feed — no permanent showcase for your best work',
      'Clients want to see your style before booking a consultation, but your portfolio only exists as a PDF you email after they enquire',
      'No online consultation booking means every client has to call or email to check your availability — losing impulse enquiries from dream clients',
      'Zero local SEO despite serving premium Cheshire towns — when someone Googles "garden designer Macclesfield" or "landscape architect Cheshire," your competitors show up instead of you',
    ],
    benefits: [
      'Permanent portfolio that showcases every project with before/after photos, 3D renders, planting plans, and client testimonials — works as a 24/7 sales tool',
      'Online consultation booking that lets clients pick a date and time for a garden design consultation in under 60 seconds',
      'Dedicated project pages for each garden type (cottage gardens, contemporary, family-friendly, low-maintenance) that rank on Google for those specific searches',
      'Instagram and Pinterest auto-pull gallery keeps your portfolio fresh with every post — no manual uploading needed',
      'Local landing pages for every premium town you cover so you appear for "garden designer Alderley Edge" and "landscape design Wilmslow"',
    ],
    features: [
      'Project portfolio with before/after galleries, 3D renders, and planting plans',
      'Online consultation booking widget',
      'Dedicated project type pages (cottage, contemporary, family, formal, wildlife)',
      'Social media auto-pull gallery (Instagram, Pinterest, YouTube)',
      'Client testimonials with project photos',
      'Transparent pricing or "starting from" guide pages',
      'Local landing pages for every premium town covered',
      'Google Business Profile integration',
      'Mobile-first design for homeowners browsing on their phone',
    ],
    faqs: [
      {
        question: 'Can you showcase my 3D renders and planting plans on the website?',
        answer:
          'Yes. We build dedicated project pages for each garden you have designed, featuring your 3D renders, planting plans, before/after photos, and client testimonials. Each project page is optimised to rank on Google so potential clients find your work when they search.',
      },
      {
        question: 'Can clients book a garden design consultation through the website?',
        answer:
          'Absolutely. We add an online booking widget where clients select "garden design consultation," pick a date and time slot, and provide their postcode and a brief description. You get an email notification and the booking appears in your calendar — no phone tag needed.',
      },
      {
        question: 'Will my website pull in my Instagram and Pinterest posts automatically?',
        answer:
          'Yes. We build an auto-pull gallery that shows your latest Instagram and Pinterest posts directly on your website. Every time you post, your portfolio updates automatically — no manual uploading needed. Your site stays fresh without any extra work.',
      },
      {
        question: 'Will I show up on Google when homeowners search for a garden designer?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover, optimised for searches like "garden designer Macclesfield," "landscape architect Cheshire," and "garden design [town]." Combined with Google Business Profile integration, you appear in both the map pack and organic results.',
      },
      {
        question: 'How quickly can you build a garden design website?',
        answer:
          '7 days from start to launch. You provide your logo, project photos, 3D renders, planting plans, service descriptions, coverage area, and social media handles — we design, build, and optimise everything. You review on day 5, we launch on day 7.',
      },
    ],
    relatedTrades: ['landscapers', 'gardeners', 'lawn-care', 'tree-surgeons'],
    ctaText: 'Get a Garden Design Website',
  },
  {
    slug: 'double-glazing',
    name: 'Double Glazing',
    plural: 'Double Glazing & Window Companies',
    headline: 'Websites for Double Glazing Companies That Turn Browsers into Buyers',
    subheadline:
      '44 years in business means nothing if every page on your site shows the same stock photo. We build glazing websites with real project galleries, FENSA/CERTASS badges, and instant quote tools.',
    metaTitle: 'Website Design for Double Glazing Companies | Coltura',
    metaDescription:
      'Conversion-focused websites for double glazing installers and window companies. Product showcase, FENSA/CERTASS badges, project galleries, finance calculator, and instant quote forms. Built in 10 days.',
    keywords: [
      'double glazing website design',
      'window company website',
      'glazing installer website',
      'FENSA registered website',
      'conservatory website',
      'replacement windows website',
      'uPVC window website',
    ],
    painPoints: [
      'Every page on your site uses the same stock photo — after 44 years of real installations, none of your actual work is visible',
      'FENSA and CERTASS registrations are buried in text or missing entirely — the certifications that reassure homeowners are invisible',
      'Zero Google reviews displayed on your site after decades of installations — your reputation is a secret',
      'No local landing pages for premium towns like Wilmslow and Alderley Edge — homeowners searching "double glazing [town]" find competitors instead',
      'Privacy and cookie pages link to your developer\'s domain — a GDPR risk that undermines trust with every visitor',
    ],
    benefits: [
      'Real project galleries that showcase your window, door, and conservatory installations — not the same stock photo on every page',
      'FENSA, CERTASS, and insurance badges displayed prominently so homeowners trust you before they call',
      'Google review integration pulling in your star rating so it appears in local search results',
      'Dedicated local landing pages for every town you cover — Wilmslow, Alderley Edge, Macclesfield, and beyond',
      'Product showcase pages for Residence 9, Rockdoor, Solidor, Guardian Warm Roof, and every door and window range you install',
    ],
    features: [
      'Project gallery with real installations — casement windows, sash windows, bay windows, composite doors, bifold doors, conservatories, orangeries, fascias, and soffits',
      'FENSA/CERTASS accreditation badges and insurance-backed guarantee display with schema markup for rich search results',
      'Google review carousel with star ratings pulled from your Google Business Profile',
      'Local landing pages for every town: Macclesfield, Wilmslow, Alderley Edge, Knutsford, Poynton, Bollington, and beyond',
      'Product showcase pages for each door and window range with specifications, colours, and finishes',
      'Instant quote form with window/door type, dimensions, and photo upload so you pre-qualify leads before visiting',
      'Finance calculator showing monthly payment options for homeowners browsing at 10pm',
      'Mobile-first responsive design — most double glazing searches happen on a phone during home renovation evenings',
    ],
    faqs: [
      {
        question: 'Can you show my real window and door installations instead of stock photos?',
        answer:
          'Yes. We build a real project gallery with high-resolution before/after images of your casement windows, sash windows, bay windows, composite doors, bifold doors, conservatories, orangeries, fascias, and soffits — organised by product type so homeowners see exactly the style they are considering. After 44 years of installations, your real work is far more convincing than any stock photo. Each project page includes the products installed, colours chosen, and the town — helping you rank in image search too.',
      },
      {
        question: 'Will my FENSA and CERTASS registrations actually be visible?',
        answer:
          'Absolutely. We display your FENSA, CERTASS, and insurance-backed guarantee badges prominently — in the header, footer, and on every service page — with proper schema markup so Google shows them as rich results in search listings. We also explain what each certification means for the homeowner (building regulations compliance, deposit protection, workmanship guarantee) so they understand why choosing a registered installer matters.',
      },
      {
        question: 'How do I get Google reviews showing on my website after decades in business?',
        answer:
          'We set up a Google review collection system — a simple link you can text or email to happy customers after every installation. We pull your existing reviews into an on-site carousel with star ratings and schema markup so your reputation appears in Google search results — not just on your profile page. Over time, this builds a review count that reflects decades of work, not months.',
      },
      {
        question: 'Can homeowners get an instant quote without phoning me?',
        answer:
          'Yes. We build an instant quote form where homeowners select their window or door type, enter approximate dimensions, upload a photo of their current installation, and choose preferred styles and colours. You receive a pre-qualified lead before picking up the phone — saving you time on tyre-kickers and letting serious buyers self-serve an enquiry at any hour.',
      },
      {
        question: 'Will I show up when someone Googles "double glazing Wilmslow" or "replacement windows Alderley Edge"?',
        answer:
          'Yes. We build dedicated local landing pages for every Cheshire town you cover — each optimised for searches like "double glazing Wilmslow," "replacement windows Alderley Edge," "composite doors Knutsford," and "conservatories Macclesfield." Each page features relevant project photos from that town, your FENSA/CERTASS credentials, and a direct quote form. Combined with your Google Business Profile, you dominate the local search results for every premium town in your service area.',
      },
    ],
    relatedTrades: ['window-fitters-glaziers', 'fascias-soffits-guttering', 'garage-doors', 'builders'],
    ctaText: 'Get a Double Glazing Website',
  },
  {
    slug: 'event-catering',
    name: 'Event Caterers',
    plural: 'Event Catering Companies',
    headline: 'Event Catering Websites That Book the Venue Calendar Before You Pick Up the Phone',
    subheadline:
      'Your canapés are award-winning, your venue partnerships are unmatched, and your reviews are glowing — but your website is a brochure from 2016 that hides every reason to book you. We fix that in 7 days.',
    metaTitle: 'Website Design for Event Catering Companies | Coltura',
    metaDescription:
      'Event catering websites that convert venue visitors into booked tastings. Gallery by event type, sample menus, venue partner pages, review integration, and online enquiry. Built in 7 days.',
    keywords: [
      'event catering website design',
      'wedding caterer website',
      'corporate catering website',
      'private party caterer web design',
      'catering website with online booking',
      'venue caterer website',
    ],
    painPoints: [
      'Gallery is a generic grid — couples cannot see what a real wedding you catered actually looked like',
      'Venue partner list is a text wall — zero photos, zero venue-specific galleries, zero trust transfer from prestigious venues like Chester Cathedral',
      'No sample menus or pricing tiers — high-end couples have to email just to see if you are in their budget',
      'Awards and press features buried on About page — "Multi-award-winning" with no visible proof',
      'No tasting booking or consultation calendar — the most important conversion action buried behind a generic contact form',
    ],
    benefits: [
      'Event-type galleries (weddings, corporate, private parties, awards ceremonies) so each audience sees relevant work',
      'Dedicated venue partner pages with photos of real events at each venue — trust transfer from Chester Cathedral to Delamere Manor',
      'Sample menus with transparent pricing tiers (bronze/silver/gold) so couples self-qualify before enquiring',
      'Award badges, press logos, and review carousel above the fold — social proof visible in 3 seconds',
      'Tasting booking integration — couples book a consultation directly from the site without emailing',
    ],
    features: [
      'Event-type gallery — dedicated photo galleries for weddings, corporate events, private parties, and awards ceremonies',
      'Venue partner pages — individual pages for each exclusive venue with photos of real events and venue-specific menus',
      'Sample menu builder — interactive menus with pricing tiers (canapé, bowl food, formal dining, late-night)',
      'Tasting & consultation booking — calendar integration so couples and event planners book directly',
      'Google review carousel and testimonial wall — every glowing review working as a sales asset',
      'Press & awards showcase — RTS awards, Cheshire Life features, North West Wedding Awards badges displayed with logos',
      'Mobile-first enquiry form with event type, date, guest count, and venue dropdown — pre-qualified leads arrive in your inbox',
      'Instagram feed integration — live social proof of recent events',
      'Local SEO for Cheshire, Manchester, Liverpool, and North Wales — every venue town gets a landing page',
    ],
    faqs: [
      {
        question: 'Can you build venue-specific pages for each exclusive venue I cater?',
        answer:
          'Yes — this is one of the most powerful features. We build a dedicated page for each venue (Chester Cathedral, Delamere Manor, Talhenbont Hall, Scarlet Hall, etc.) featuring photos of real events you have catered there, venue-specific menus, capacity info, and a direct enquiry form. When a couple Googles "wedding catering Chester Cathedral," your venue page ranks and captures that enquiry before any competitor.',
      },
      {
        question: 'How do you handle sample menus and pricing transparency?',
        answer:
          'We build interactive menu pages organised by event type and service level (e.g., canapé reception, bowl food, formal wedding breakfast, corporate lunch, BBQ, late-night food). Each tier shows sample dishes, inclusions, and a price-per-head range. Couples self-qualify before enquiring — you receive fewer tyre-kickers and more serious bookings. Pricing can be displayed as "from £X" ranges if you prefer not to publish exact figures.',
      },
      {
        question: 'Can couples book a tasting or consultation through the website?',
        answer:
          'Yes. We integrate a tasting booking calendar where couples select their preferred date, event type, venue, and guest count. You receive a pre-qualified lead with all the context you need before the first conversation. This replaces the generic "send us a message" form that every other caterer uses.',
      },
      {
        question: 'How quickly can you have an event catering website live?',
        answer:
          '7 days from signed proposal to launch. Day 1-2: design and gallery structure. Day 3-4: build venue pages, menus, and booking integration. Day 5-6: review carousel, press showcase, and testing. Day 7: launch with all SEO foundations in place.',
      },
    ],
    relatedTrades: ['catering', 'photographers-videographers', 'wedding-photographers', 'restaurants'],
    ctaText: 'Get an Event Catering Website',
  },
  {
    slug: 'locksmiths',
    name: 'Locksmiths',
    plural: 'Locksmiths',
    headline: 'Websites for Locksmiths That Prove You Are the Real Deal',
    subheadline:
      '£49 Google scam locksmiths are everywhere. A proper website with reviews, certifications, and real team photos shows customers you are the legitimate choice before they even call.',
    metaTitle: 'Website Design for Locksmiths | Coltura',
    metaDescription:
      'Professional websites for locksmiths and security companies. Google reviews, MLA accreditation badges, emergency call-out, and online booking. Built in 7 days.',
    keywords: [
      'locksmith website design',
      'website for locksmiths',
      'locksmith web design',
      'emergency locksmith website',
      'MLA locksmith marketing',
      'local locksmith website',
    ],
    painPoints: [
      '£49 Google scam locksmiths dominate search results and erode trust',
      'Master Locksmith Association credentials invisible — customers cannot tell you from a cowboy',
      '111 Google reviews not showing on your own website — your best sales asset is wasted',
      'No emergency call-out button or online booking — customers call competitors instead',
      'Team of qualified Master Locksmiths with zero photos or bios — invisible expertise',
    ],
    benefits: [
      'MLA and QML accreditation badges front-and-centre so customers see you are properly qualified',
      'Google reviews embedded live on your site — 111 5★ reviews working 24/7',
      'Emergency call-out button with click-to-call on mobile',
      'Team page with photos, bios, and qualifications — human trust layer',
      'Local landing pages for every town you cover so you rank for "locksmith [town]"',
    ],
    features: [
      'Google review widget — live review feed embedded on your site',
      'MLA / QML / FQML accreditation badges with verifiable links',
      'Emergency call-out CTA — prominent on every page, click-to-call on mobile',
      'Online booking and quote request form with job type selector',
      'Team page with individual bios, photos, qualifications, and years of service',
      'Local landing pages — dedicated pages for each town you serve',
      'Service pages for each locksmith service (uPVC, mortice, auto, safe engineering, CCTV, access control)',
      'Mobile-responsive with dark/trust-forward design',
    ],
    faqs: [
      {
        question: 'Do I need a website if I am already on Checkatrade and Google Business Profile?',
        answer:
          'Those platforms are rented ground — they control how you appear and they push competitors alongside your listing. Your own website is the only place you control 100%. It is where your reviews, certifications, team, and emergency call-out work together to convert visitors before they see a competitor.',
      },
      {
        question: 'How do you make sure I rank for "locksmith near me" searches?',
        answer:
          'We build dedicated landing pages for every town you cover, optimise your Google Business Profile alongside the site, embed your reviews for fresh content signals, and use proper local SEO schema markup so Google knows exactly where you operate and what you do.',
      },
      {
        question: 'Can you embed my Google reviews on the site?',
        answer:
          'Yes — we integrate your Google reviews live on the site so every new 5★ review automatically appears. This builds trust and also keeps your site content fresh for SEO.',
      },
      {
        question: 'How quickly can I have a working emergency call-out site?',
        answer:
          'We build and launch in 7 days. Day 1-2 design, Day 3-4 build with reviews and booking, Day 5-6 testing, Day 7 launch. Emergency call-out CTA is live from Day 1.',
      },
    ],
    relatedTrades: ['cctv-security-installers', 'builders', 'garage-doors'],
    ctaText: 'Get a Locksmith Website',
  },
  {
    slug: 'pest-control',
    name: 'Pest Control',
    plural: 'Pest Control Companies',
    headline: 'Websites for Pest Control Companies That Turn Panic Calls Into Booked Jobs',
    subheadline:
      'When someone has rats in the loft or wasps in the eaves, they need a professional they can trust — fast. A proper website with reviews, accreditations, and emergency call-out captures that panic-search before they click a competitor.',
    metaTitle: 'Website Design for Pest Control Companies | Coltura',
    metaDescription:
      'Professional websites for pest control companies. BPCA/NPTA accreditation badges, Google reviews, emergency call-out, online booking, and local SEO. Built in 7 days.',
    keywords: [
      'pest control website design',
      'website for pest control companies',
      'pest control web design',
      'emergency pest control website',
      'BPCA pest control marketing',
      'local pest control website',
    ],
    painPoints: [
      '16 Trustpilot reviews at 4.5★ completely invisible on your website — your best trust signal is wasted',
      'Zero Google reviews and no Google Business Profile — competitors appear first for every local search',
      '"Call Me Back" form broken on every page returning "Something went wrong" — emergency leads bouncing daily',
      'Electric vans fleet (genuinely unique eco USP in UK pest control) hidden in one blog post — no one knows',
      'No BPCA/NPTA accreditation badges — customers cannot verify you are properly qualified',
    ],
    benefits: [
      'BPCA/NPTA accreditation badges front-and-centre so customers see you are properly certified',
      'Trustpilot and Google reviews embedded live on your site — every 5★ review converts visitors',
      'Emergency call-out button with click-to-call on mobile — panic searches convert instantly',
      'Electric vans eco USP prominently featured — unique differentiator no competitor can claim',
      'Local landing pages for every town you cover so you rank for "pest control [town]"',
    ],
    features: [
      'Google and Trustpilot review widgets — live review feed embedded on your site',
      'BPCA / NPTA accreditation badges with verifiable links',
      'Emergency call-out CTA — prominent on every page, click-to-call on mobile',
      'Online booking and quote request form with pest type selector (rats, mice, wasps, bed bugs, cockroaches, fleas, moths, birds, squirrels, etc.)',
      'Individual service pages for each pest type — dedicated SEO pages ranking for "[pest] removal [town]"',
      'Local landing pages — dedicated pages for each town you serve',
      'Commercial pest control section — dedicated pages for restaurants, hotels, landlords, offices, and food processing',
      'Electric vans eco branding — sustainability USP integrated across the site',
      'Educational blog with pest guides — builds authority and captures informational searches',
      'Mobile-responsive with trust-forward emergency design — panic searches convert on phone',
    ],
    faqs: [
      {
        question: 'Do I need a website if I already have Trustpilot reviews and Nextdoor recommendations?',
        answer:
          'Those platforms are rented ground — they control how you appear and they push competitors alongside your listing. Your own website is the only place you control 100%. It is where your reviews, accreditations, service pages, and emergency call-out work together to convert visitors before they see a competitor. Right now, your 16 Trustpilot reviews at 4.5★ are invisible to anyone who finds your site directly.',
      },
      {
        question: 'How do you make sure I rank for "pest control near me" and "emergency pest control" searches?',
        answer:
          'We build dedicated landing pages for every town you cover (Handforth, Wilmslow, Macclesfield, Cheadle, Bramhall), individual service pages for each pest type, and optimise your Google Business Profile alongside the site. We embed your reviews for fresh content signals and use proper local SEO schema markup so Google knows exactly where you operate and what you do.',
      },
      {
        question: 'Can you fix my broken "Call Me Back" form?',
        answer:
          'Yes — this is a critical fix. We replace the broken form with a working contact system that includes pest type selection, photo upload for identification, and emergency priority routing. Every enquiry reaches you, and we test it thoroughly before launch. No more "Something went wrong" messages bouncing potential emergency jobs.',
      },
      {
        question: 'How quickly can you have an emergency pest control website live?',
        answer:
          '7 days from signed proposal to launch. Day 1-2: design and review integration. Day 3-4: build service pages, pest type pages, and booking. Day 5-6: local landing pages, accreditation badges, and testing. Day 7: launch with emergency call-out live and all SEO foundations in place.',
      },
    ],
    relatedTrades: ['cleaners', 'builders', 'cctv-security-installers'],
    ctaText: 'Get a Pest Control Website',
  },
  {
    slug: 'gardeners',
    name: 'Gardeners',
    plural: 'Gardeners & Garden Maintenance',
    headline: 'Websites for Gardeners That Convert Social Followers Into Paying Clients',
    subheadline:
      'Your Instagram and YouTube are thriving — but your followers have nowhere to book you. A proper gardening website turns your social audience into a steady stream of paying clients with online booking, transformation galleries, and local SEO.',
    metaTitle: 'Website Design for Gardeners & Garden Maintenance | Coltura',
    metaDescription:
      'Modern websites for gardeners, garden maintenance, and landscaping companies. Social media galleries, online booking, before/after transformations, and local SEO. Built in 7 days.',
    keywords: [
      'gardener website design',
      'garden maintenance website',
      'landscape gardener website',
      'website for gardeners',
      'gardening website design',
      'hedge trimming website',
      'local gardener website',
    ],
    painPoints: [
      'Massive Instagram, YouTube, and TikTok following — but no website for fans to actually book your services',
      'Website completely taken down or replaced with a goodbye page — your social audience has nowhere to convert',
      'Seasonal garden work (spring clean-ups, autumn pruning, hedge trimming, lawn care) invisible because there are no dedicated service pages',
      'Before/after garden transformations only visible on Instagram stories that disappear after 24 hours',
      'No online booking means every client has to DM, WhatsApp, or call — losing 70% of impulse enquiries from your social audience',
      'Zero local SEO despite covering multiple Cheshire towns — invisible on Google when homeowners search "gardener near me"',
    ],
    benefits: [
      'Social media-to-website bridge — Instagram, YouTube, and TikTok auto-pull gallery keeps your site fresh with every new post',
      'Online booking widget that lets clients pick a service, date, and time in 30 seconds — no more DM ping-pong',
      'Permanent before/after transformation gallery showcasing lawn makeovers, hedge transformations, and garden overhauls',
      'Dedicated seasonal service pages (spring tidy-up, summer maintenance, autumn leaf clearance, winter pruning) that rank on Google',
      'Pricing page with clear service packages — lawn care, hedge trimming, garden maintenance, landscaping — so clients know exactly what to expect',
      'Local landing pages for every town you cover so you show up for "gardener Macclesfield" and "garden maintenance Wilmslow"',
    ],
    features: [
      'Social media auto-pull gallery (Instagram, YouTube, TikTok, Facebook, LinkedIn)',
      'Online booking widget with service, date, and time selection',
      'Before/after transformation showcase organised by season',
      'Individual service pages: lawn care, hedge trimming, garden maintenance, landscaping, planting, garden clearance',
      'Seasonal treatment pages capturing high-intent search traffic year-round',
      'Transparent pricing page with service packages and add-ons',
      'Local landing pages for every town covered',
      'Customer testimonials with project photos',
      'Google Business Profile integration with review feed',
      'Mobile-first design for homeowners searching on their phone from the garden',
    ],
    faqs: [
      {
        question: 'My website has been taken down — can you build me a new one from scratch?',
        answer:
          'Yes. We build a complete website in 7 days from your social media content, photos, videos, and service list. You do not need an existing website — your Instagram and YouTube content gives us everything we need to showcase your work. By Day 7, your social followers will have a proper place to book you.',
      },
      {
        question: 'Can you pull my Instagram and YouTube content onto the website automatically?',
        answer:
          'Yes. We build an auto-pull gallery that shows your latest Instagram posts, YouTube videos, and TikTok content directly on your website. Every time you post, your website updates automatically — no manual uploading needed. Your social content becomes your portfolio.',
      },
      {
        question: 'Will I show up on Google for "gardener near me" searches?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover, optimised for searches like "gardener Macclesfield," "garden maintenance Wilmslow," and "hedge trimming [town]." Combined with your Google Business Profile, you appear in both the map pack and organic results.',
      },
      {
        question: 'Can clients book through the website?',
        answer:
          'Absolutely. We add an online booking widget where clients select their service (lawn mowing, hedge trimming, garden clearance, etc.), pick a date and time slot, and confirm — all in under 30 seconds. No more WhatsApp or Instagram DM ping-pong.',
      },
      {
        question: 'How quickly can you build a gardening website?',
        answer:
          '7 days from start to launch. You provide your logo, service list, pricing, coverage area, social media handles, and any photos — we design, build, and optimise everything. You review on Day 5, we launch on Day 7.',
      },
    ],
    relatedTrades: ['landscapers', 'lawn-care', 'tree-surgeons', 'fencing-contractors'],
    ctaText: 'Get a Gardening Website',
  },
  {
    slug: 'insulation-contractors',
    name: 'Insulation Contractors',
    plural: 'Insulation Contractors',
    headline: 'Websites for Insulation Contractors That Turn Enquiries into Surveys',
    subheadline:
      'Your lifetime warranty and real project photos should be the first thing homeowners see. We build insulation contractor sites with before-and-after galleries, trust badges, and quote forms that convert browsers into booked surveys.',
    metaTitle: 'Website Design for Insulation Contractors | Coltura',
    metaDescription:
      'Professional websites for loft insulation, cavity wall, underfloor, and spray foam contractors. Before-after galleries, lifetime warranty badges, and local SEO. Built in 7 days.',
    keywords: [
      'insulation contractor website design',
      'loft insulation website',
      'cavity wall insulation website',
      'insulation installer website',
      'spray foam insulation website',
      'home insulation website designer',
      'loft boarding website',
      'energy efficiency website',
    ],
    painPoints: [
      'Empty or placeholder gallery \u2014 zero project photos after years of insulating lofts, walls, and floors across dozens of homes',
      'Lifetime warranty and insurance-backed guarantees buried in fine print with no visible trust badges or certification logos',
      'Zero Google reviews despite hundreds of satisfied homeowners \u2014 every loft boarded and wall insulated is a review waiting to happen',
      'Missing local landing pages for every town in your coverage area \u2014 each town searches for insulation services independently',
      'No online quote or survey booking form \u2014 homeowners have to call during working hours when they are at work themselves',
    ],
    benefits: [
      'Before-and-after project galleries showing real loft insulation, boarding, hatch installations, and cavity wall work \u2014 not stock photos of someone in a hard hat',
      'Trust badges and certification logos displayed prominently \u2014 lifetime warranty, insurance-backed guarantee, and any trade body memberships where homeowners can verify them',
      'Google review integration displaying your star rating directly in search results and on every page of your site',
      'Local landing pages for every town in your coverage area, each showing relevant insulation services, project photos from that area, and a direct quote form',
      'Online survey booking and quote form so homeowners can request a free survey from their phone after the kids are in bed',
    ],
    features: [
      'Before-and-after project gallery with high-resolution photos of loft insulation, loft boarding, hatches, ladders, cavity wall insulation, and underfloor work',
      'Dedicated service pages for each insulation type \u2014 loft insulation, loft boarding, cavity wall insulation, underfloor insulation, spray foam, hatches and ladders, soundproofing',
      'Lifetime warranty badge and insurance-backed guarantee displayed site-wide with verification links',
      'Google review integration with schema markup for star ratings in local search results',
      'Online survey booking form with date picker, property type selector, insulation type interest, and photo upload for existing loft/wall conditions',
      'Local landing pages for every town in your coverage area with project photos from that area, service list, and direct quote form',
      'Energy savings calculator or savings estimate section \u2014 showing potential annual heating bill reductions per insulation type',
      'Before-and-after thermal imaging comparison if available \u2014 visually proving the heat retention improvement',
      'Mobile-responsive design so homeowners can book surveys and view galleries from their phone on the sofa',
      'FAQ section covering common questions: how long does installation take, will my house be messy, what savings can I expect, is there a guarantee',
    ],
    faqs: [
      {
        question: 'Can you show my actual project work, not stock photos?',
        answer:
          'Yes. We build a before-and-after project gallery with high-resolution photography of your real work \u2014 loft insulation, loft boarding, hatches and ladders, cavity wall insulation, underfloor insulation, and any specialist work like soundproofing or period property insulation. Each project has its own gallery with captions explaining what was done and why. When a homeowner searches "loft insulation Macclesfield," they see your actual work, not a generic stock image of someone holding fibreglass. This is the difference between a call and a scroll-past.',
      },
      {
        question: 'Can homeowners book a survey or request a quote online?',
        answer:
          'Yes. We build an online survey booking and quote form with a date picker, property type selector (detached, semi, terrace, bungalow, flat), insulation type interest (loft, cavity wall, underfloor, spray foam, soundproofing), room dimensions, and a photo upload for existing loft or wall conditions. Homeowners can request a free survey from their phone after the kids are in bed \u2014 no need to call during working hours. Every enquiry lands in your inbox with property details, insulation type, preferred dates, and photos already filled in. You call back to confirm the survey slot \u2014 no time wasted on "what do you need and when?"',
      },
      {
        question: 'Will people searching "loft insulation near me" actually find my website?',
        answer:
          'Yes. We build dedicated local landing pages for every town in your coverage area \u2014 each optimised for searches like "loft insulation Macclesfield," "cavity wall insulation Wilmslow," "loft boarding Alderley Edge," and "insulation contractor [town]." Each page shows your relevant services, project photos from that area, Google reviews, and a direct quote form. We also set up your Google Business Profile so you appear in local map searches with your star rating visible.',
      },
      {
        question: 'I offer a lifetime warranty and insurance-backed guarantee \u2014 can you make that visible?',
        answer:
          'Yes. Your lifetime warranty and insurance-backed guarantee should be the first thing a homeowner sees \u2014 not a sentence buried in your terms and conditions. We display your guarantee as a prominent trust badge on every page of your site, with a verification link so homeowners can check it is real. For insulation contractors, trust badges are the single biggest conversion lever: a homeowner choosing between two quotes will pick the one with a visible lifetime warranty every time.',
      },
      {
        question: 'How quickly can you have the site live?',
        answer:
          'Seven days from sign-off. You provide photos of your recent projects (or we arrange a photographer), your service area towns, and your guarantee details \u2014 we build the rest. Day 7 your new site is live with a real project gallery, lifetime warranty badge, online survey booking, Google review integration, and local landing pages for every town in your coverage area. You stop losing enquiries to competitors whose websites look more professional than yours.',
      },
    ],
    relatedTrades: ['builders', 'roofers', 'renewable-energy', 'damp-proofing', 'carpet-cleaners', 'handyman-property-maintenance'],
    ctaText: 'Get an Insulation Contractor Website',
  },
  {
    slug: 'funeral-directors',
    name: 'Funeral Directors',
    plural: 'Funeral Directors',
    headline: 'Websites for Funeral Directors That Comfort Families Before They Walk Through Your Door',
    subheadline:
      'Your independent funeral home deserves a website as dignified as the care you provide. We build funeral director sites with transparent pricing, team bios, Google reviews, and online arrangement forms that help grieving families make informed choices at 2am.',
    metaTitle: 'Website Design for Funeral Directors | Coltura',
    metaDescription:
      'Dignified websites for independent funeral directors. Transparent pricing, team introductions, Google reviews, and 24/7 online arrangement forms. Built in 7 days.',
    keywords: [
      'funeral director website design',
      'funeral home website',
      'independent funeral director website',
      'funeral services website',
      'funeral director web designer',
      'bereavement website design',
      'funeral arrangement website',
    ],
    painPoints: [
      'Zero Google reviews displayed despite years of grateful families — you have the reviews sitting on Google and in handwritten thank-you cards, but none of them appear on your site where families researching at 11pm can see them',
      'No transparent pricing — families are already vulnerable and anxious about cost; hiding prices forces them to call during business hours when they are at work or caring for children',
      'Team has no faces or bios — the funeral director who will walk a family through the hardest week of their life is invisible online, which erodes the trust you need before that first phone call',
      'Award nominations and community work buried in one sentence — AGFD Funeral Director of the Year, Snowflake Memorial programme, and decades of local service merit their own page with photos and stories',
      'No online arrangement form or out-of-hours contact path — families calling at 2am find nothing but a phone number, when they should find your face, your prices, and a gentle way to begin the conversation on their own terms',
    ],
    benefits: [
      'Google review integration displaying your star rating and real family testimonials directly on your site and in local search results — visible to families researching at any hour',
      'Transparent pricing page showing your full range of funeral options — from direct cremation to traditional service with limousines — so families can make informed choices without the anxiety of an unexpected bill',
      'Team page with professional photographs and bios of every funeral director, arranger, and celebrant — the face a family sees online is the same face that will greet them at your door',
      'Online arrangement enquiry form with gentle, non-intrusive questions that families can complete at 2am — you call them back in the morning with everything you need to begin',
      'Dedicated pages for your community work, awards, and unique services — Snowflake Memorial, AGFD nominations, and decades of local care deserve their own space',
    ],
    features: [
      'Google review integration with schema markup for star ratings in local search results — families see your 5.0★ rating before they click',
      'Transparent pricing page with your full funeral range, itemised options, and a clear price guarantee — no anxiety about hidden costs',
      'Team page with professional headshots, bios, and a welcome message from the funeral director — the human face of your care',
      'Online arrangement enquiry form with gentle questions (name of deceased, location, type of service, preferred date, contact preference) — families can begin at any hour on their own terms',
      '24/7 contact banner with your out-of-hours phone number displayed prominently on every page — never buried in the footer',
      'Community and awards page showcasing your AGFD nominations, Snowflake Memorial programme, community involvement, and any press features — proof you are trusted in your town',
      'Service pages for each funeral type — traditional burial, cremation, direct cremation, celebration of life, eco/green funerals, pre-paid funeral plans, memorial services — each with clear pricing and what is included',
      'Local landing pages for every town in your catchment area, each with your team photo, Google reviews, and a direct contact path',
      'Dignified, calm design language — soft colours, generous whitespace, dignified typography, and no pop-ups or aggressive CTAs. A website that feels like a quiet room.',
      'Mobile-responsive so families can research and make arrangements from their phone at any hour, including the 2am Google search that leads to your door',
    ],
    faqs: [
      {
        question: 'Can you make our website feel dignified and appropriate for grieving families?',
        answer:
          'Yes. This is the core of what we do for funeral directors. We use a calm, understated design language: soft neutrals, generous whitespace, dignified serif typography, and no pop-ups, countdown timers, or aggressive calls to action. The site feels like a quiet room — a space where families can gather information, see who you are, understand their options, and begin the conversation on their own terms. Every design choice is made with a grieving family at 2am in mind.',
      },
      {
        question: 'Can families make funeral arrangements or enquire online, outside of business hours?',
        answer:
          'Yes. We build an online arrangement enquiry form with gentle, non-intrusive questions: the name of the person who has died, their location, the type of service the family is considering (or "I\'m not sure yet"), preferred dates, and how they would like you to contact them. Families can complete this form at 2am, at 6am before work, or at 11pm after the children are in bed. You receive the full submission by email and call them back at a time they have chosen. You begin the conversation with everything you need — no fumbling for details during an emotional first call.',
      },
      {
        question: 'We have glowing Google reviews and handwritten thank-you cards — can you make those visible?',
        answer:
          'Yes. This is often the biggest gap we see on funeral director websites. You have families writing heartfelt reviews about how you "made an unbearable time bearable" — but those words are only visible on Google\'s third page of search results. We integrate your Google reviews directly into your site with schema markup so your star rating appears in local search results, and we feature real testimonials with families\' names (with permission) on your homepage, pricing page, and dedicated testimonial page. When a family searches "funeral director Macclesfield" at 2am, your 5.0★ rating and real words from real families are the first thing they see.',
      },
      {
        question: 'We are an independent funeral director competing with corporate chains — how do we stand out?',
        answer:
          'This is exactly why we exist. Corporate chains have call centres. You have your face, your name, your decades in the community, and your genuine care. We make the difference visceral: your website shows your photograph, your team, your real Google reviews from local families, your transparent local pricing (not a national rate card), and your community involvement — the Snowflake Memorial, the AGFD nomination, the decades of service that no corporate chain can match. When a family compares your site to Dignity or Co-op Funeralcare, they see a human being versus a logo. The choice makes itself.',
      },
      {
        question: 'How quickly can you have the site live?',
        answer:
          'Seven days from sign-off. You provide your team photographs, your pricing, your Google reviews, and the towns you serve — we build the rest. Day 7 your new site is live with transparent pricing, team bios, Google review integration, an online arrangement form, a community and awards page, and local landing pages for every town in your catchment area. Families searching for "funeral director near me" at any hour of the day or night find your face, your prices, and a dignified way to begin.',
      },
    ],
    relatedTrades: ['florists', 'photographers', 'cleaners-carpet', 'solicitors'],
    ctaText: 'Get a Funeral Director Website',
  },

  {
    slug: 'garage-mechanics',
    name: 'Garage Mechanics',
    plural: 'Garages & MOT Centres',
    headline: 'Websites for Garages & MOT Centres That Turn Reviews Into Bookings',
    subheadline:
      '89 reviews at 4.9★ — invisible. 591 inspection forms at 98.6% — hidden. Your garage has more trust than most, but your website is actively hiding it. We build garage sites that put your reputation front and centre.',
    metaTitle: 'Website Design for Garages & MOT Centres | Coltura',
    metaDescription:
      'Modern websites for garages, MOT centres, and car repair shops. Review integration, online booking, service menus with pricing, and local SEO. Built in 7 days.',
    keywords: [
      'garage website design',
      'MOT centre website',
      'car repair website',
      'garage website designer',
      'mechanic website',
      'local garage website',
      'vehicle service website',
      'car garage website',
    ],
    painPoints: [
      'Massive Google review count — but none visible on your website, so casual visitors never see your 4.9★ reputation',
      'Geo-blocking or security verification walls blocking your entire site from Google and potential customers alike',
      'No online booking — every MOT and service booking requires a phone call, losing the 60% of customers who prefer to book online',
      'Zero workshop photos after decades in business — customers cannot see your diagnostic equipment, ramps, or workshop cleanliness before trusting you with their car',
      'Accreditations (DVSA, RMI, Motor Ombudsman, Trust My Garage, Good Garage Scheme) buried in text or missing entirely — your credentials are invisible',
      'No email address on your contact page, or a consumer email address (tesco.net, sky.com, gmail.com) that undermines professional credibility',
      'No local landing pages despite covering multiple towns — someone searching "MOT Macclesfield" finds your competitors, not you',
    ],
    benefits: [
      'Google review integration with star ratings in search results — every visitor sees your 4.9★ reputation before they scroll',
      'Online MOT and service booking widget with date/time picker and service selection — bookings come in while you are working on cars',
      'Full workshop gallery showing diagnostic equipment, ramps, waiting area, and branded courtesy cars — builds trust before the first visit',
      'Accreditation badges (DVSA, RMI, Motor Ombudsman, Trust My Garage) displayed prominently — proving you are the real deal',
      'Transparent service menus with pricing for MOTs, interim/full servicing, brakes, clutches, timing belts, diagnostics, and repairs',
      'Local landing pages for every town you cover so "MOT [town]" and "garage near me" searches all lead to you',
    ],
    features: [
      'Google review feed embedded with live star ratings and recent reviews — schema markup for search result stars',
      'Online MOT and service booking widget with vehicle registration lookup, service selection, date/time picker, and contact fields',
      'Professional workshop gallery with photos of ramps, diagnostic bays, waiting area, courtesy cars, and team members',
      'Dedicated service pages for every offering: MOT testing, interim service, full service, major service, brakes, clutches, timing belts, diagnostics, air conditioning, tyres, exhausts',
      'Accreditation showcase with DVSA, RMI, Motor Ombudsman, Trust My Garage, Good Garage Scheme badge integration',
      'Transparent pricing page with service packages, MOT costs, and common repair estimates — no hidden surprises',
      'Local landing pages for every town in your service area — each with unique content, testimonials, and a booking CTA',
      'Free collection and delivery information with coverage area map',
      'Customer testimonials with named reviews and vehicle details',
      'Mobile-first design for customers searching "garage near me" from their phone when their car breaks down',
    ],
    faqs: [
      {
        question: 'My website is blocked behind a security verification wall — can you fix that?',
        answer:
          'This is one of the most damaging things for a garage website. Security verification walls block Google from indexing your site and block potential customers from viewing it. We replace this with a clean, fast, accessible website that loads instantly — no CAPTCHAs, no verification screens, no geo-blocks. Your 89 Google reviews and 591 inspection forms finally become visible to everyone searching for a garage.',
      },
      {
        question: 'Can customers book MOTs and services online?',
        answer:
          'Yes. We build an online booking widget where customers enter their vehicle registration, select the service they need (MOT, interim service, full service, brakes, diagnostics, etc.), pick a date and time, and provide their contact details — all in under 60 seconds. Every booking lands in your inbox with vehicle, service, preferred date, and contact info pre-filled. You confirm availability and the booking is locked in. This captures the 60% of customers who prefer to book online rather than call during working hours.',
      },
      {
        question: 'I have hundreds of reviews on Google and Good Garage Scheme — can you put them on my website?',
        answer:
          'Yes. We integrate your Google reviews with a live feed and schema markup that displays your star rating directly in Google search results. We also build a dedicated reviews page showing your Good Garage Scheme inspection scores, Motor Ombudsman status, and written customer testimonials — all in one place. The garage with 591 inspection forms at 98.6% satisfaction deserves to have that number front and centre on their homepage, not hidden behind a CAPTCHA wall.',
      },
      {
        question: 'Will I show up on Google for "MOT near me" and "garage Macclesfield"?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover — each optimised for searches like "MOT Macclesfield," "car service Wilmslow," "garage near me," and "brake repair [town]." Each page features relevant service information, your Google star rating, and a booking CTA. Combined with your Google Business Profile optimisation, you appear in both the map pack and organic search results for every town in your service area.',
      },
      {
        question: 'How quickly can you build a garage website?',
        answer:
          '7 days from start to launch. You provide your logo, service list, pricing, workshop photos, accreditation details, and any content you want included — we design, build, and optimise everything. You review on Day 5, we launch on Day 7. Day 1: we replace your CAPTCHA wall or broken site with a proper holding page so customers can already find you.',
      },
    ],
    relatedTrades: ['mechanics', 'electricians', 'car-valeting-detailing', 'tyre-fitters'],
    ctaText: 'Get a Garage Website',
  },
  {
    slug: 'garage-door-installers',
    name: 'Garage Door Installers',
    plural: 'Garage Door Installers',
    headline: 'Websites for Garage Door Installers That Show Your Work — Not Just Your Phone Number',
    subheadline:
      '25+ years installing Cardale, Garador, H\u00f6rmann, and Alluguard doors — but your website shows zero photos of installed doors and has five spelling errors on the About page. We build garage door websites where your craftsmanship and manufacturer partnerships are front and centre.',
    metaTitle: 'Website Design for Garage Door Installers | Coltura',
    metaDescription:
      'Modern websites for garage door installers. Project gallery, manufacturer badges, online quote form, and local landing pages. Built in 7 days.',
    keywords: [
      'garage door website design',
      'garage door installer website',
      'garage door company website',
      'website for garage door installers',
      'garage door web design',
      'local garage door website',
      'roller garage door website',
      'sectional garage door website',
    ],
    painPoints: [
      'Zero project photos of installed doors after 25+ years — the single biggest conversion barrier for a home improvement trade where every sale is visual',
      'Manufacturer partnerships (Cardale, Garador, H\u00f6rmann, Alluguard, Seceglide) hidden as plain text URLs — no badge recognition, no manufacturer trust transfer',
      'Spelling and grammar errors on your About page actively undermining credibility — "independant," "completly," "competive," "sevice," "canvasing"',
      'No mobile-responsive design — your site looks broken on the phone that 70% of your customers use to search for "garage door repair near me"',
      'Dual domains (gedoors.co.uk + garagedoorrepairuk.co.uk) with CAPTCHA security walls cannibalising your SEO and blocking every visitor including Google',
    ],
    benefits: [
      'Professional project gallery showing real installed doors — roller, sectional, up-and-over, side-hinged — so customers see exactly what their home could look like',
      'Manufacturer accreditation badges (Cardale, Garador, H\u00f6rmann, Alluguard, Seceglide) displayed prominently — proven trust from the moment a customer lands on your site',
      'Online quote form with door type selector, size inputs, and photo upload — pre-qualified enquiries arrive in your inbox with all the detail you need',
      'Local landing pages for every town you cover — "garage door repair Wilmslow," "roller garage doors Macclesfield" — capturing every relevant local search',
      'Same-day and emergency call-out badges front-and-centre — your 24/7 phone numbers are visible on every page, not buried in a footer',
    ],
    features: [
      'Professional project gallery organised by door type: roller, sectional, up-and-over, side-hinged, automated conversions — each with before-and-after photos',
      'Manufacturer partner showcase with official badges for Cardale, Select, Garador, H\u00f6rmann, Alluguard, Seceglide — building trust through brand association',
      'Online quote and booking form with door type picker, approximate dimensions, automated conversion checkbox, and photo upload — qualified leads arrive pre-filled',
      'Dedicated service pages for every offering: garage door installations, garage door repairs, electric conversions and automation, insulated roller doors, spring and cable replacement, remote control and key fob programming',
      'Emergency same-day repair call-out banner with 3 phone numbers displayed prominently on every page — no buried contact info',
      '10-year warranty badge and insurance-backed guarantee displayed in site-wide header and every service page',
      'Local landing pages for every town in your service area — each with relevant door type photos, your phone numbers, and a quote CTA',
      'Google review integration with schema markup for star ratings in search results',
      'Colour and style selector — customers browse RAL colours and finishes before enquiring',
      'Mobile-first design for customers searching "garage door repair near me" when their door is stuck — 70% of emergency enquiries come from phones',
    ],
    faqs: [
      {
        question: 'I have two websites with security verification walls — can you fix both?',
        answer:
          'Yes. Security verification CAPTCHAs on your website are the single most damaging thing for your online presence — they block Google from indexing your site, and they block customers from viewing it. We consolidate your two domains into one clean, fast website with no CAPTCHAs, no verification screens, no geo-blocks. Both domains redirect to your new site, so you capture all existing SEO value. Your 104 Birdeye reviews and 76 testimonials finally become visible to everyone searching for garage doors.',
      },
      {
        question: 'Can customers see what different garage doors look like before they enquire?',
        answer:
          'Yes. We build a professional project gallery with real photos of doors you have installed — roller doors, sectional doors, up-and-over, side-hinged — in different colours and finishes. Customers can browse by door type and see exactly what their home could look like. Each photo is optimised for fast loading while showing the detail that sells your work. After 30+ years in business, you have installed thousands of doors — your best ones deserve to be your hardest-working sales tool, not hidden behind a security verification wall.',
      },
      {
        question: 'How do I show customers we are approved installers for Cardale, Garador, and H\u00f6rmann?',
        answer:
          'We display your manufacturer partnership badges prominently on the homepage, project gallery, and individual service pages. Instead of plain text URLs that customers ignore, we use official-looking badge designs that instantly communicate "this company is trusted by top manufacturers." This transfers the brand trust of Cardale, Garador, H\u00f6rmann, Alluguard, and Seceglide directly to your business — reassuring customers that they are dealing with a proper installer, not a back-of-a-van operator.',
      },
      {
        question: 'Will my emergency repair phone number be visible on every page?',
        answer:
          'Yes. We display your three phone numbers — 0161 426 0099, 01625 290 072, and 07977 000 181 — in a sticky header that follows visitors as they scroll. We also place a prominent emergency call-out banner on every page with a single-tap call button for mobile users. When someone searches "garage door repair near me" because their door is stuck open, they land on your site and can call with one tap — no clicking through pages to find a number.',
      },
      {
        question: 'How quickly can you fix my spelling errors and build a new site?',
        answer:
          '7 days from start to launch. We review your existing content, fix all errors, and build a clean, professional website with a project gallery, manufacturer badges, quote form, and local landing pages. You provide your best installed-door photos, manufacturer partnership details, and preferred colours — we design, build, and optimise everything. You review on Day 5, we launch on Day 7. Day 1: we replace your CAPTCHA wall with a proper holding page so customers can already find you.',
      },
    ],
    relatedTrades: ['builders', 'carpet-cleaners', 'driveways', 'window-fitters-glaziers'],
    ctaText: 'Get a Garage Door Installer Website',
  },

  {
    slug: 'sign-makers',
    name: 'Sign Makers',
    plural: 'Sign Makers & Signwriters',
    headline: 'Websites for Sign Makers That Show the Work — Not Just Tell About It',
    subheadline:
      'Your hand-painted Victorian mural was used in TV documentaries. Your gold leaf work is on premium shopfronts across Cheshire. But your website shows zero project photos — and no one searching "sign maker near me" can see what you actually do. We build sign maker websites where the visuals do the talking.',
    metaTitle: 'Website Design for Sign Makers & Signwriters | Coltura',
    metaDescription:
      'Modern websites for sign makers, signwriters, and signage companies. Project gallery, service pages, online quote form, and local SEO. Built in 7 days.',
    keywords: [
      'sign maker website design',
      'signwriter website',
      'signage company website',
      'sign maker website designer',
      'sign shop website',
      'local sign maker website',
      'traditional signwriting website',
      'vehicle graphics website',
    ],
    painPoints: [
      'Zero project photos on your website — the single most critical gap for a visual craft where every customer decision is based on seeing your past work',
      'Your best work (gold leaf shopfronts, hand-painted murals, vehicle graphics) is on the street — not searchable on Google — so potential clients never discover what you can do',
      'Email address hidden behind JavaScript obfuscation or contact forms only — potential clients cannot reach you directly without solving a puzzle',
      'Documentary-featured work and press mentions buried on inner pages with no images — the most compelling proof of your expertise is invisible',
      'No local landing pages for the towns you serve — a business in Stockport searching for sign makers finds your competitors, not your 40-year track record',
      'No online quote form with photo upload — customers have to describe their sign or vehicle graphics project over the phone without showing you what they want',
    ],
    benefits: [
      'Professional project gallery with categories (shopfronts, gold leaf, vehicle graphics, murals, window graphics, banners) — every photo becomes a sales tool',
      'Your best projects discoverable on Google — the Victorian mural, the gold leaf fascia, the fleet vehicle wrap all show up in image search results',
      'Clear contact information with phone, email, and workshop address — no hidden emails, no contact form-only dead ends',
      'Press and awards page showcasing documentary features, media mentions, and project highlights — proving you are the go-to sign maker in your region',
      'Local landing pages for every town you serve — each with relevant project photos and a quote CTA so you appear in every "sign maker near me" search',
      'Online quote form with file upload so customers can attach photos, sketches, or dimensions — you get pre-qualified enquiries with all the detail you need',
    ],
    features: [
      'Comprehensive project gallery organised by sign type: shopfronts, hand-painted signwriting, gold leaf/gilding, vehicle graphics and wraps, window graphics, banners and displays, murals, interior signage',
      'Before-and-after transformation photos for shopfront and vehicle projects — showing the blank canvas and the finished sign',
      'Dedicated service pages for every offering: traditional hand-painted signwriting, gold leaf and gilding, vehicle graphics and livery, window graphics and manifestations, banners and exhibition displays, shopfront design and manufacturing, interior and wayfinding signage, mural painting',
      'Online quote and enquiry form with file upload for photos, sketches, and dimension drawings — customers submit fully specified requests that land in your inbox',
      'Press, awards, and heritage page with documentary screenshots, media mentions, and notable project spotlights',
      'Materials and techniques showcase — gold leaf, enamel paint, vinyl, digital print, sandblasted glass — educating customers and proving your craft range',
      'Local landing pages for every town and region you cover — each with relevant project examples and a quote CTA',
      'Google review integration with schema markup for star ratings in search results',
      'Team page with photos and craft backgrounds — traditional signwriting is a personal, artisan trade and customers want to know who they are commissioning',
      'Mobile-first design for customers taking photos of competitor signs on the high street and searching for a sign maker on their phone',
    ],
    faqs: [
      {
        question: 'I am a traditional signwriter — my work speaks for itself. Why do I need a website with a gallery?',
        answer:
          'Your work does speak for itself — but only to people walking past it on the high street. A potential client looking for a sign maker from their desk or phone never sees your best shopfronts, gold leaf work, or vehicle graphics. A proper project gallery puts your work in front of every person searching "sign maker near me" on Google — and in Google Image search results where visual trades get discovered. Your Victorian mural featured in documentaries deserves to be found by more people than those walking past it on Ducie Street.',
      },
      {
        question: 'Can customers request a quote and send me photos of what they need?',
        answer:
          'Yes. We build an online quote form where customers describe their project, select the sign type (shopfront, vehicle, window, banner, mural, etc.), attach photos or sketches of what they want, and provide dimensions and preferred materials. Every enquiry lands in your inbox with all the detail you need to quote accurately. This catches customers who want to enquire outside your working hours and prefer not to call without having their reference images ready.',
      },
      {
        question: 'How do you showcase gold leaf and hand-painted work online?',
        answer:
          'Professional photography of your best projects — close-up detail shots of gold leaf lettering, wide-angle photos of completed shopfronts, before-and-after comparisons of vehicle graphics, and documentation of murals in situ. The gallery is organised by sign type so customers looking specifically for traditional hand-painted signwriting or gold leaf work find those projects immediately. Each photo is optimised for fast loading while retaining the detail that sells your work.',
      },
      {
        question: 'Will people find my website when they search for sign makers in my area?',
        answer:
          'Yes. We build dedicated local landing pages for every town and region you cover — each optimised for searches like "sign maker Macclesfield," "signwriter Stockport," "vehicle graphics Manchester," and "shopfront signs [town]." Each page features relevant project photos from that area and a clear quote CTA. Combined with your Google Business Profile optimisation, you appear in both the map pack and organic search results for every location in your service area.',
      },
      {
        question: 'Can you fix my hidden email address and make it easy for customers to contact me?',
        answer:
          'Yes. Many sign maker websites hide their email behind JavaScript obfuscation (often done by older builders to reduce spam, but it also hides it from genuine visitors). We display your phone number, email address, and workshop address clearly on every page — with spam-protected mailto links that work for real people. We also add a contact form for those who prefer to submit an enquiry directly, so every customer finds their preferred way to reach you.',
      },
    ],
    relatedTrades: ['painters-decorators', 'welders-fabricators', 'joiners', 'photographers-videographers'],
    ctaText: 'Get a Sign Maker Website',
  },
  {
    slug: 'driveways',
    name: 'Driveway Installers',
    plural: 'Driveway & Paving Contractors',
    headline: 'Websites for Driveway Installers That Pave the Way to More Jobs',
    subheadline:
      'Homeowners researching new driveways compare portfolios before they call. A gallery of your best block paving, resin, tarmac, and gravel work with clear pricing wins the quote before a competitor even picks up the phone.',
    metaTitle: 'Website Design for Driveway Installers | Coltura',
    metaDescription:
      'Portfolio websites for driveway and paving contractors with project galleries, material guides, and local SEO. Built in 7 days.',
    keywords: [
      'driveway installer website design',
      'paving contractor website',
      'block paving website',
      'resin driveway website',
      'website for driveway companies',
      'local driveway installer website',
    ],
    painPoints: [
      'No project gallery — homeowners cannot see your block paving, resin, or tarmac work before calling',
      'Multiple microsites for different towns cannibalising your SEO and confusing customers',
      'Zero contact info on some location pages — traffic lands and bounces with no way to enquire',
      'No online quote form — every enquiry needs a phone call, losing evening and weekend browsers',
      'Missing "driveway installer near me" and "block paving [town]" searches despite doing great work',
    ],
    benefits: [
      'Before/after project gallery organised by material — resin, block paving, tarmac, gravel, imprinted concrete',
      'Single consolidated website replacing multiple microsites — all SEO power in one domain',
      'Clear pricing guide or quote form with photo upload for accurate estimates',
      'Customer testimonials with project photos showing real transformations',
      'Rank for local driveway, paving, and landscaping searches across every town you cover',
    ],
    features: [
      'Before/after project gallery with material filters',
      'Services pages by material (block paving, resin, tarmac, gravel, imprinted concrete)',
      'Online quote form with photo upload',
      'Local landing pages for every town covered',
      'Customer testimonials with project photos',
      'Video gallery for drone or walkaround footage',
      'Insurance and guarantee display',
      'Driveway-specific local SEO',
    ],
    faqs: [
      {
        question: 'Can I show my driveway installations by material type?',
        answer:
          'Yes. We build galleries organised by material — block paving, resin-bound, tarmac, gravel, and imprinted concrete — with before/after comparisons so homeowners see exactly what each finish looks like on real Cheshire driveways. Each photo is properly compressed for fast loading while retaining the detail needed to sell your work.',
      },
      {
        question: 'I have multiple microsites for different towns — can you consolidate them?',
        answer:
          'Absolutely. Running separate websites for Macclesfield, Stockport, and other towns splits your SEO authority across domains and confuses Google. We build one fast, authoritative site with dedicated local landing pages for every town you cover — each optimised for town-specific searches, with town-specific project photos, reviews, and a clear contact section. All your SEO power on one domain.',
      },
      {
        question: 'Can customers request a quote and send me photos of their driveway?',
        answer:
          'Yes. We build an online quote form where homeowners describe their project, select the material they are interested in, upload photos of their existing driveway, and provide dimensions. Every enquiry lands in your inbox with everything you need to quote accurately — including reference images so you can see the site before visiting.',
      },
      {
        question: 'Will people find my driveway business when they search locally?',
        answer:
          'Yes. We build dedicated local landing pages for every town you cover, each optimised for searches like "driveway installer Macclesfield," "block paving Stockport," "resin driveway Wilmslow," and "tarmac driveways [town]." Each page features projects from that area and a clear quote CTA. Combined with your Google Business Profile optimisation, you appear in the map pack and organic results for every location.',
      },
      {
        question: 'Can you add a video gallery for drone and walkaround footage?',
        answer:
          'Yes. If you have drone footage or walkaround videos of completed driveways, we embed them in a dedicated video gallery section — perfect for showcasing the scale and finish of larger projects that static photos cannot fully capture.',
      },
    ],
    relatedTrades: ['landscapers', 'builders', 'groundworkers'],
    ctaText: 'Get a Driveway Installer Website',
  },
  {
    slug: 'piling',
    name: 'Piling Contractors',
    plural: 'Piling & Foundation Engineering',
    headline: 'Websites for Piling Contractors That Bring in Foundation Enquiries',
    subheadline:
      'Most piling contractors are invisible online — builders and architects searching for piling, underpinning, and foundation repairs cannot find you. A proper website with project case studies, accreditation badges, and local landing pages changes that.',
    metaTitle: 'Website Design for Piling & Foundation Contractors | Coltura',
    metaDescription:
      'Technical websites for piling, mini piling, screw piling, and foundation engineering contractors. Project case studies, accreditation badges, local SEO, and online quote forms. Built in 7 days.',
    keywords: [
      'piling contractor website design',
      'mini piling website',
      'foundation engineering website',
      'screw piling website',
      'underpinning contractor website',
      'ground engineering website',
      'subsidence repair website',
    ],
    painPoints: [
      'No Google Business Profile — piling contractors work across multiple counties but are invisible in local search packs for every town they serve',
      'Reviews invisible to Google — Trustindex or other JS-only widgets keep genuine 5★ reviews hidden from Google search results with no aggregateRating schema',
      'Contact pages that are broken or blank — builders and architects trying to get a foundation quote hit dead pages',
      'No project case studies visible — piling is highly technical work (ring beams, mini piling rigs, underpinning) that needs photographic proof',
      'Industry accreditations missing — CHAS, Constructionline, CSCS, and other B2B badges that matter to main contractors are absent or buried',
    ],
    benefits: [
      'Rank in local search for every town you cover, not just your office postcode',
      'Turn your existing reviews into Google-visible stars with proper schema markup',
      'Showcase your technical expertise with case study pages builders can reference before calling',
      'Capture qualified enquiries with a quote form designed for foundation work',
      'Establish B2B credibility with accreditation badges and named team profiles',
    ],
    features: [
      'Project case study pages with real photos — piling rigs, ring beams, mini piling, underpinning, each with a description of the ground conditions and solution',
      'CHAS, Constructionline, CSCS, and other industry accreditation badges displayed prominently',
      'Online quote request form with photo upload for foundation plans, structural engineer drawings, and site photos',
      'Detailed service pages for each piling method: driven piles, bored piles, screw piles, mini piles, sheet piles, underpinning, and ground beams',
      'Local landing pages for every county and town you cover — each with area-specific project examples and a quote CTA',
      'Google review integration with proper aggregateRating schema so your stars appear in search results',
      'Team profile page with photos and biographies — foundation work is high-trust B2B, and your people are your differentiator',
      'Educational content section — explain piling methods, when mini piling is needed vs traditional foundations, build-over agreements, and subsidence signs',
      'Mobile-responsive design that loads fast on site — builders and surveyors check credentials on their phone in the van',
    ],
    faqs: [
      {
        question: 'Can you showcase our piling project case studies?',
        answer:
          'Yes. We build dedicated case study pages for your best projects — each with real site photos of piling rigs, ring beams, mini piling installations, underpinning work, and completed foundations. Every case study includes the ground conditions, the solution you specified, and the outcome.',
      },
      {
        question: 'Will our Google reviews actually show up in search results?',
        answer:
          'Yes. If your reviews are stuck in a Trustindex or other JavaScript widget (Google cannot read JS-rendered content), we implement proper JSON-LD aggregateRating schema so your star rating and review count appear directly in Google search results — the gold stars your competitors with schema already have.',
      },
      {
        question: 'Can builders send us foundation plans through the website?',
        answer:
          'Yes. We build a quote request form designed for piling enquiries — it accepts file uploads for foundation plans, structural engineer drawings, site photos, and boundary maps. Every enquiry arrives in your inbox with everything needed to quote accurately without a site visit.',
      },
      {
        question: 'How do we rank across all the counties we cover?',
        answer:
          'We build dedicated local landing pages for every county and major town in your coverage area — each page optimised for searches like "piling contractor Cheshire," "mini piling Manchester," and "underpinning [town]." Every page features area-specific project examples and a clear quote CTA.',
      },
      {
        question: 'Can you add our CHAS and Constructionline accreditations?',
        answer:
          'Absolutely. We display your CHAS, Constructionline, CSCS, and any other industry body badges prominently in your site header, footer, and dedicated accreditations section. For B2B piling work, main contractors actively look for these before inviting you to tender — making them invisible is costing you work.',
      },
    ],
    relatedTrades: ['groundworkers', 'builders', 'demolition-excavation', 'driveways', 'landscapers'],
    ctaText: 'Get a Piling Contractor Website',
  },
  {
    slug: 'garage-doors',
    name: 'Garage Door Companies',
    plural: 'Garage Door Companies',
    headline: 'Websites for Garage Door Companies That Open More Than Just Doors',
    subheadline:
      '40+ years installing and repairing garage doors across Cheshire — but potential customers cannot see a single photo of your work. We build garage door websites where your decades of craftsmanship, manufacturer partnerships, and hundreds of happy customers are visible from the first click.',
    metaTitle: 'Website Design for Garage Door Companies | Coltura',
    metaDescription:
      'Modern websites for garage door companies. Product catalogues, manufacturer accreditation displays, project galleries, and local SEO. Built in 7 days.',
    keywords: [
      'garage door website design',
      'garage door company website',
      'website for garage door companies',
      'garage door repair website',
      'roller garage door website',
      'sectional door website',
      'automated garage door website',
    ],
    painPoints: [
      'Zero project photos of installed doors after decades in business — every garage door sale depends on customers visualising their own home with your product',
      'Manufacturer partnerships (Hörmann, Garador, Alluguard, Cardale, Seceglide) mentioned in text only — no official badges to transfer brand trust to your company',
      'Dated early-2000s design that looks abandoned — customers searching in 2026 assume a site that looks 20 years old means a company no longer trading',
      'No online quote or enquiry form — customers must pick up the phone, losing the 60% who prefer to research and enquire online first',
      'No local landing pages for towns you serve — missing every search like "garage doors Macclesfield," "roller doors Wilmslow," and "garage door repair Alderley Edge"',
    ],
    benefits: [
      'Professional project gallery organised by door type (roller, sectional, up-and-over, side-hinged, automated conversions) with real installation photos',
      'Manufacturer accreditation badges for Hörmann, Garador, Alluguard, Cardale, and Seceglide — instantly establishing trust with every visitor',
      'Online quote form with door type selector, size inputs, and photo upload — pre-qualified enquiries with everything needed to quote',
      'Dedicated local landing pages for every town and postcode area in your coverage — capturing local search traffic that currently goes to competitors',
      'Mobile-first design that converts emergency call-outs — "garage door stuck open" searches happen on phones at 7am when people cannot get their car out',
    ],
    features: [
      'Project gallery organised by door type: roller, sectional, up-and-over, side-hinged, automated conversions — each with before-and-after photos and colour/finish tags',
      'Manufacturer partner showcase with official badge designs for Hörmann, Garador, Alluguard, Cardale, Seceglide',
      'Online quote and enquiry form with door type picker, dimensions, colour preference, and photo upload',
      'Dedicated service pages: garage door installations, repairs, electric conversions, insulated doors, spring replacement, remote programming',
      'Product catalogue with RAL colour options, insulation ratings, security specifications, and warranty details for every door range',
      '10-year warranty badge and insurance-backed guarantee displayed site-wide',
      'Emergency same-day repair call-out with phone numbers visible in a sticky header on every page',
      'Local landing pages for every town in your service area with location-specific imagery and phone numbers',
      'Google review integration with star ratings schema for search results',
      'Same-day and 24/7 emergency service badges prominently displayed',
    ],
    faqs: [
      {
        question: 'How do we show customers we are approved installers for Hörmann, Garador, and Alluguard?',
        answer:
          'We build a dedicated manufacturer partner section with official-style badges for every brand you are approved to install. Instead of plain text links that customers skip past, these badges visually communicate "trusted by the UK\'s top garage door manufacturers." Each badge links to your service pages for that brand\'s doors. This transfers the decades of brand trust from Hörmann, Garador, Alluguard, Cardale, and Seceglide directly to your business.',
      },
      {
        question: 'Can customers get a quote online without calling?',
        answer:
          'Yes. We build an online quote form where customers select their door type (roller, sectional, up-and-over, side-hinged), enter approximate dimensions, pick a colour preference, and optionally upload a photo of their existing garage. Enquiries arrive in your inbox pre-qualified with all the information you need to provide an accurate quote — saving you phone time and letting customers enquire 24/7.',
      },
      {
        question: 'How do you make sure we show up when people search "garage door repair near me"?',
        answer:
          'We build dedicated local landing pages for every town and postcode area in your service territory. Each page is optimised for local search terms like "garage door repair Macclesfield," "roller garage doors Wilmslow," and "electric garage door installer Cheshire." We also integrate your Google reviews with proper schema markup so your star ratings appear in search results — making your listing stand out from competitors with zero reviews.',
      },
      {
        question: 'What about emergency repairs — will the phone number be obvious?',
        answer:
          'Absolutely. Your phone number sits in a sticky header that follows visitors as they scroll on every single page. We add a prominent emergency call-out banner on mobile with a one-tap call button. When someone searches "garage door stuck open" at 7am on their phone because they cannot get their car out for work, they land on your site and can call you with a single tap — no scrolling, no clicking, no hunting for contact details.',
      },
    ],
    relatedTrades: ['garage-door-installers', 'double-glazing', 'window-fitters-glaziers', 'builders', 'locksmiths'],
    ctaText: 'Get a Garage Door Company Website',
  },
  {
    slug: 'window-fitters-glaziers',
    name: 'Window Fitters & Glaziers',
    plural: 'Window Fitting & Glazing Companies',
    headline: 'Websites for Window Fitters That Convert "Get a Quote" Into Real Jobs',
    subheadline:
      'Most window companies rely on word of mouth. A proper website with product galleries, accreditation badges, and local landing pages brings in new customers who are comparing quotes right now.',
    metaTitle: 'Website Design for Window Fitters & Glaziers | Coltura',
    metaDescription:
      'Professional websites for window fitters, glaziers, conservatory installers, and double glazing companies. CERTASS/FENSA badges, product galleries, and local SEO. Built in 7 days.',
    keywords: [
      'window fitter website design',
      'glazier website',
      'double glazing website',
      'website for window installers',
      'CERTASS window company website',
      'FENSA registered website',
      'conservatory installer website',
      'composite door website',
    ],
    painPoints: [
      'Stock photos on every page — 44 years of real projects and zero of them are online',
      'CERTASS or FENSA accreditation buried in text with no badge — invisible to homeowners who are checking credentials',
      'No local landing pages for premium towns like Wilmslow, Alderley Edge, and Knutsford — missing the highest-value searches',
      'Product pages lack galleries — customers want to see real installations of casement windows, sash windows, composite doors, and bifold doors before calling',
      'No online quote request form — every enquiry requires a phone call, losing the 60% of homeowners who prefer to compare prices online first',
    ],
    benefits: [
      'Before-and-after project galleries that prove your workmanship instantly',
      'CERTASS, FENSA, and manufacturer accreditation badges displayed prominently so homeowners trust you over unregistered competitors',
      'Local landing pages for every town you cover — "double glazing Wilmslow" gets you found instead of your competitor',
      'Online quote request form with photo upload so homeowners can show you their property before you arrive',
      'Product showcase pages with real installations — uPVC, composite doors, bifold doors, conservatories, sash windows, casement windows',
    ],
    features: [
      'Product gallery with real project photos (not stock images)',
      'Accreditation badge showcase (CERTASS, FENSA, GGF, DGCOS, TrustMark)',
      'Local landing pages for every town in your service area',
      'Online quote request form with photo upload capability',
      'Product category pages (uPVC windows, composite doors, bifold doors, conservatories, sash windows)',
      'Customer reviews and completed project case studies',
      'Emergency glazier call-out button with one-tap phone call',
      'Mobile-first design — critical for homeowners searching on their phone with a broken window',
    ],
    faqs: [
      {
        question: 'Do you integrate with CERTASS, FENSA, or other accreditation schemes?',
        answer:
          'Yes. We prominently display your CERTASS, FENSA, GGF, DGCOS, TrustMark, or any other accreditation badge on your homepage and every product page. These badges are what homeowners check before calling — and our sites make them impossible to miss. We also link to the official register entry so customers can verify your credentials independently, which builds trust before they even pick up the phone.',
      },
      {
        question: 'How do local landing pages help window companies?',
        answer:
          'If you cover Macclesfield, Wilmslow, Alderley Edge, and Knutsford, we build a dedicated page for each town with local testimonials, area-specific project photos, and SEO-optimised content for searches like "double glazing Wilmslow." Instead of one website competing for one term, you now have five pages each competing for five different local searches — that is how you outrank competitors who only have a single homepage.',
      },
      {
        question: 'Can customers get a quote online instead of calling?',
        answer:
          'Yes. Our quote request forms let homeowners describe what they need, upload photos of their property (so you can see window styles, access, and dimensions before visiting), and select their preferred timeframe. This saves you time on the phone and captures the 60% of homeowners who prefer to enquire online rather than calling. Every enquiry goes straight to your email and can feed into your CRM.',
      },
      {
        question: 'What about emergency glazing — can the site handle urgent calls?',
        answer:
          'Absolutely. We add a persistent phone button that follows the visitor as they scroll, so a homeowner with a smashed window can call you with a single tap. On mobile, we add a sticky emergency banner with your phone number in large text. When someone searches "emergency glazier near me" at 10pm, they land on your site and can call immediately — no scrolling, no clicking through pages, no frustration.',
      },
    ],
    relatedTrades: ['double-glazing', 'fascias-soffits-guttering', 'garage-doors', 'garage-door-installers', 'builders', 'cctv-security-installers'],
    ctaText: 'Get a Window Fitter & Glazier Website',
    avgCpc: '£4.67',
    cpcNote: 'Average CPC for UK double glazing & window company keywords (Google Ads 2025)',
  },
  {
    slug: 'skip-hire',
    name: 'Skip Hire Companies',
    plural: 'Skip Hire & Waste Management',
    headline: 'Websites for Skip Hire Companies That Fill Lorries, Not Voicemails',
    subheadline:
      'Most skip hire companies get business through word of mouth and directory listings. A proper website helps homeowners and builders find you, see your skip sizes, check availability, and book online — even while you are on the road.',
    metaTitle: 'Website Design for Skip Hire Companies | Coltura',
    metaDescription:
      'Modern websites for skip hire, waste management, and aggregate supply companies. Online booking, skip size catalogue, transparent pricing, and local SEO. Built in 7 days.',
    keywords: [
      'skip hire website design',
      'skip hire website',
      'waste management website',
      'skip booking website',
      'skip hire web design',
      'local skip hire website',
    ],
    painPoints: [
      'Phone-only booking — customers have to call during office hours while you are out on jobs',
      'No skip size comparison online — customers ring up just to ask "what size do I need?"',
      'Zero Google reviews visible despite serving thousands of customers',
      'Recycling rates, waste transfer station, and environmental credentials invisible to eco-conscious customers',
      'Aggregate and reclamation yard sales happening purely by chance — no online catalogue or enquiry form',
    ],
    benefits: [
      'Online booking and skip size selector so customers self-serve 24/7',
      'Transparent pricing and skip size comparison to reduce time-wasting phone calls',
      'Google review integration to showcase real customer feedback',
      'Dedicated pages for each service division (skip hire, aggregates, recycling, reclamation)',
      'Local landing pages for every town you cover so you show up for "skip hire near me" searches',
    ],
    features: [
      'Skip size catalogue with dimensions, capacity, and use-case photos (2-yard to 40-yard roll-on/roll-off)',
      'Online quote request form with postcode lookup, skip size selection, waste type, and preferred dates',
      'Service division pages (domestic skip hire, commercial skip hire, aggregates supply, waste recycling, reclamation yard)',
      'Real-time availability calendar or request-a-skip form',
      'Permit information page explaining council permits for on-road skips',
      'Recycling statistics and environmental credentials showcase (landfill diversion rates, waste transfer station photos)',
      'Customer reviews and completed job photos',
      'Local landing pages for every town and borough you serve',
    ],
    faqs: [
      {
        question: 'Can customers actually book a skip through the website?',
        answer:
          'Yes. We build a quote request form that captures the skip size, waste type, postcode, and preferred delivery date. The enquiry goes straight to your email or phone. For high-volume operators, we can integrate with skip hire management software for live availability — but even a simple form capturing the right information saves you hours of phone screening every week. Customers get a response within minutes, and you are not playing phone tag while driving the lorry.',
      },
      {
        question: 'How do I show customers which skip size they need without a phone call?',
        answer:
          'We build a skip size comparison page with every skip from 2-yard mini skips up to 40-yard roll-on/roll-off containers — showing dimensions, capacity (in bin bags), photos of what fits in each size, and typical use cases like "ideal for kitchen renovation" or "suitable for full house clearance." Most homeowners have no idea what size skip they need — this page answers every question without a single phone call and converts browsers into bookings.',
      },
      {
        question: 'What about council permits for skips on the road?',
        answer:
          'We build a dedicated permit information page that explains when a permit is needed, what it costs, and how long it takes. You can even list permit prices for each local council area you cover. For customers hiring a skip for the first time, this is the first thing they worry about. Answering it clearly on your site removes a major conversion blocker — they feel informed rather than intimidated.',
      },
      {
        question: 'Can the website sell aggregates and reclaimed materials too?',
        answer:
          'Definitely. We build dedicated pages for aggregates (sand, gravel, hardcore, MOT type 1, topsoil) and your reclamation yard with product photos, pricing, delivery areas, and an enquiry form. If you have architectural salvage — bricks, slates, beams, flagstones — we build a gallery so builders and homeowners can browse before visiting. These are high-margin revenue streams that most skip companies leave to chance because nobody knows they sell them.',
      },
    ],
    relatedTrades: ['builders', 'groundworkers', 'demolition-excavation', 'landscapers', 'gardeners', 'driveways', 'roofers'],
    ctaText: 'Get a Skip Hire Website',
  },
  {
    slug: 'heating-engineers',
    name: 'Heating Engineers',
    plural: 'Heating Engineers',
    headline: 'Websites for Heating Engineers That Turn Searches into Boiler Jobs',
    subheadline:
      'When a boiler breaks in January, homeowners search "heating engineer near me" and call whoever looks credible first. A professional website with your Gas Safe badge front and centre makes that you.',
    metaTitle: 'Website Design for Heating Engineers | Coltura',
    metaDescription:
      'Professional websites for heating engineers and boiler specialists. Gas Safe badges, service pages, emergency call-out, and local SEO. Built in 7 days.',
    keywords: [
      'heating engineer website design',
      'boiler repair website',
      'website for heating engineers',
      'gas safe engineer website',
      'heating and plumbing website',
      'boiler installation website',
    ],
    painPoints: [
      'No Gas Safe badge visible — potential customers have no way to verify you are qualified',
      'Broken boiler searches go to competitors with better websites',
      'No way to list your full range — boilers, heating, gas fires, underfloor heating, power flushing',
      'Emergency call-out customers cannot find your phone number quickly on mobile',
      'No local landing pages — missing "boiler repair Macclesfield" type searches completely',
    ],
    benefits: [
      'Prominent Gas Safe registration and manufacturer accreditations (Worcester Bosch, Vaillant, Baxi)',
      'Emergency click-to-call button that works instantly on mobile',
      'Full service pages for every heating job — boiler repair, installation, servicing, power flushing, underfloor heating, gas fires',
      'Dedicated local landing pages for every town you cover',
      'Customer reviews and testimonials that build trust before the first call',
    ],
    features: [
      'Gas Safe and manufacturer accreditation display',
      'Emergency call-out button (click-to-call, prominent on mobile)',
      'Full heating service menu with individual pages',
      'Local landing pages for each town',
      'Customer reviews and testimonial showcase',
      'Quote and boiler service request form',
      'Heating-specific local SEO (boiler repair, boiler installation, gas engineer keywords)',
    ],
    faqs: [
      {
        question: 'Can I display my Gas Safe registration?',
        answer:
          'Yes — that is the most important thing on your website. We display your Gas Safe number, logo, and any manufacturer accreditations (Worcester Bosch, Vaillant, Baxi, etc.) so customers know you are qualified before they pick up the phone.',
      },
      {
        question: 'Will customers find me for emergency boiler repairs?',
        answer:
          'Yes. We optimize for "emergency boiler repair" and "heating engineer near me" searches, and add a prominent click-to-call button on mobile so customers with no heating reach you in one tap.',
      },
      {
        question: 'Can I show all my heating services separately?',
        answer:
          'Absolutely. We build individual service pages for boiler repair, boiler installation, annual servicing, power flushing, underfloor heating, gas fires, and radiator installation — so each one ranks for its own set of searches.',
      },
      {
        question: 'Will I get local landing pages for every town I cover?',
        answer:
          'Yes. If you cover Macclesfield, Wilmslow, Congleton, Knutsford, and beyond, we build a dedicated page for each town targeting "boiler repair [town]" and "heating engineer [town]" searches.',
      },
    ],
    relatedTrades: ['plumbers', 'electricians', 'renewable-energy', 'air-conditioning-hvac', 'builders'],
    ctaText: 'Get a Heating Engineer Website',
  },
  {
    slug: 'removal-companies',
    name: 'Removal Companies',
    plural: 'Removal Companies',
    headline: 'Websites for Removal Companies That Book Vans, Not Just Show Them',
    subheadline:
      'Most removal companies rely on third-party directories and word of mouth. A proper website lets customers book your vans directly, see your fleet, and trust you before they hand over their belongings.',
    metaTitle: 'Website Design for Removal Companies | Coltura',
    metaDescription:
      'Modern websites for removal companies and house movers. Online booking, fleet gallery, instant quoting, and local SEO. Built in 7 days.',
    keywords: [
      'removal company website',
      'house removals website',
      'moving company web design',
      'removal website',
      'man and van website',
      'local removal company website',
    ],
    painPoints: [
      'Relying entirely on directories like AnyVan or Checkatrade — paying commission on every job',
      'No online booking system — customers have to call during business hours to check availability',
      'Fleet invisible online — no photos of vans, equipment, or team for customers to trust',
      'No instant quoting tool — losing customers who want a price right now to comparison sites',
      'Google shows directory listings instead of your own site — you do not own your online presence',
    ],
    benefits: [
      'Online booking system that lets customers check availability and book 24/7',
      'Fleet gallery showing every van size, equipment, and team — builds trust before the quote',
      'Instant quote calculator — customers enter rooms and distance, get a price instantly',
      'Google Business Profile integration so you rank for "removal company near me" instead of directories',
      'Review showcase that puts your 5-star testimonials front and centre — not hidden on a third-party site',
    ],
    features: [
      'Online booking calendar with real-time availability and van-size selection',
      'Instant quote calculator with room count, floor levels, and distance inputs',
      'Fleet gallery with photos of every van, truck, and specialist equipment',
      'Service pages for house removals, office moves, packing services, and storage',
      'Team profiles with named staff — customers know who is handling their belongings',
      'Review and testimonial showcase with star ratings and verified customer photos',
      'Local landing pages for every town you serve (Macclesfield, Wilmslow, Congleton, etc.)',
      'Mobile-first click-to-call and WhatsApp button for instant enquiries on the move',
    ],
    faqs: [
      {
        question: 'Can customers book my vans online?',
        answer:
          'Yes. We build an online booking calendar that shows your real availability, lets customers select the right van size, and confirms their slot — working 24/7 while you are on the road or off-duty.',
      },
      {
        question: 'Can customers get an instant quote without calling?',
        answer:
          'Absolutely. We add a quote calculator where customers enter the number of rooms, floor levels, and distance — and get a price immediately. This captures the "I want a price now" customers who would otherwise go to a comparison site.',
      },
      {
        question: 'Will my reviews show on my website?',
        answer:
          'Yes. We embed your Google reviews, Trustpilot, or Checkatrade ratings directly on your site with star ratings and customer photos — so visitors see your track record the moment they land on your homepage.',
      },
      {
        question: 'Can I get local landing pages for every area I cover?',
        answer:
          'Yes. If you cover Macclesfield, Stockport, Manchester, Cheshire, and beyond, we build a dedicated page for each area targeting "removal company [town]" and "man and van [town]" searches so you show up everywhere you serve.',
      },
    ],
    relatedTrades: ['cleaners', 'handyman-property-maintenance', 'painters-decorators', 'builders', 'landscapers'],
    ctaText: 'Get a Removal Company Website',
  },
];

export function getTradeBySlug(slug: string): TradeData | undefined {
  return TRADES.find((t) => t.slug === slug);
}

export function getAllTradeSlugs(): string[] {
  return TRADES.map((t) => t.slug);
}

export function getRelatedTrades(slug: string): TradeData[] {
  const trade = getTradeBySlug(slug);
  if (!trade) return [];
  return trade.relatedTrades
    .map((s) => getTradeBySlug(s))
    .filter((t): t is TradeData => !!t);
}
