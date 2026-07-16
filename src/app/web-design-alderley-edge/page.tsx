import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Alderley Edge | Local Business Websites | Coltura',
  description: 'Professional web design for Alderley Edge businesses. Fast, mobile-friendly websites built in 7 days. Local SEO included.',
  keywords: ['web design alderley edge','website design alderley edge','web designer alderley edge','local business website alderley edge','alderley edge web design'],
});

export default function Page() {
  const location = getLocationBySlug('alderley-edge');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
