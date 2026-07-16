import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Stockport | Local Business Websites | Coltura',
  description: 'Professional web design for Stockport businesses. Fast, mobile-friendly websites built in 7 days. Local SEO included.',
  keywords: ['web design stockport','website design stockport','web designer stockport','local business website stockport','stockport web design','greater manchester web design'],
});

export default function Page() {
  const location = getLocationBySlug('stockport');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
