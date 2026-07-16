import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Macclesfield | Local Business Websites | Coltura',
  description: 'Professional web design for Macclesfield businesses. Fast, mobile-friendly websites built in 7 days. Local SEO included.',
  keywords: ['web design macclesfield','website design macclesfield','web designer macclesfield','local business website macclesfield','macclesfield web design'],
});

export default function Page() {
  const location = getLocationBySlug('macclesfield');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
