import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coltura.uk';
  const lastModified = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/how-it-works',
    '/projects',
    '/solutions',
    '/industries',
    '/locations',
    '/services',
    '/resources',
  ];

  const tradeRoutes = [
    'accountants','aerial-satellite-installers','air-conditioning-hvac','appliance-repair',
    'architects',
    'barbers','bathroom-fitters','bedroom-fitters','bricklayers','builders',
    'cafes','carpet-cleaners','car-valeting-detailing','catering','cctv-security-installers','chauffeurs',
    'chimney-sweeps','chiropractors','cleaners','commercial-contract-cleaning',
    'damp-proofing','demolition-excavation','dental-clinics','dog-groomers','dog-walkers',
    'double-glazing',
    'driveways','driving-instructors',
    'electrical-contractors','electricians','estate-agents','event-catering',
    'fascias-soffits-guttering','fencing-contractors','flooring','funeral-directors',
    'garage-door-installers','garage-doors','garage-mechanics','garden-design','gardeners','groundworkers',
    'hair-salons','handyman-property-maintenance','heating-engineers',
    'insulation-contractors','interior-designers','it-support',
    'joiners',
    'kitchen-fitters',
    'landscapers','lawn-care','local-shops','locksmiths',
    'mechanics',
    'nail-studios',
    'opticians',
    'painters-decorators','personal-trainers','pest-control','photographers-videographers','physiotherapists',
    'piling','plant-hire','plasterers','plumbers',
    'removal-companies','renderers','renewable-energy',
    'restaurants','roofers',
    'scaffolders','security-services','sheet-metal-fabrication','sign-makers','skip-hire','stonemasons','stove-fireplace-installers','surveyors',
    'takeaways','tattoo-shops','tilers','tree-surgeons','tv-repair-electronics',
    'tyre-fitters','upholsterers',
    'vets',
    'wedding-photographers',
    'welders','welders-fabricators','window-cleaners','window-fitters-glaziers',
  ].map((s) => `/websites-for-${s}`);

  const locationRoutes = [
    'alderley-edge','cheshire','macclesfield','poynton','stockport','wilmslow',
  ].map((s) => `/web-design-${s}`);

  const serviceRoutes = [
    'small-business-website-design','website-redesign-services',
    'seo-websites-for-local-businesses','website-maintenance-plans',
    'google-ads-management-for-trades','google-business-profile-setup',
    'fast-loading-websites','mobile-optimised-websites',
  ].map((s) => `/${s}`);

  const resourceRoutes = [
    'what-makes-a-good-small-business-website','why-most-local-business-websites-fail',
    'why-website-speed-matters','wix-vs-custom-websites',
    'squarespace-vs-hand-coded-websites','local-seo-basics',
    'how-google-business-profiles-work','how-ai-search-is-changing-seo',
    'ai-training-manchester','ai-website-builder-course',
    'website-checklist-for-trades','website-costs-explained',
  ].map((s) => `/${s}`);

  const allRoutes = [
    ...staticRoutes,
    ...tradeRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
