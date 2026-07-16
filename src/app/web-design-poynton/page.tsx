import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Poynton | Local Business Websites | Coltura',
  description: 'Professional web design for Poynton businesses. Fast, mobile-friendly websites built in 7 days. Local SEO included.',
  keywords: ['web design poynton','website design poynton','web designer poynton','local business website poynton','poynton web design'],
});

export default function Page() {
  const location = getLocationBySlug('poynton');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
