import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Wilmslow | Local Business Websites | Coltura',
  description: 'Professional web design for Wilmslow businesses. Fast, mobile-friendly websites built in 7 days. Local SEO included.',
  keywords: ['web design wilmslow','website design wilmslow','web designer wilmslow','local business website wilmslow','wilmslow web design'],
});

export default function Page() {
  const location = getLocationBySlug('wilmslow');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
