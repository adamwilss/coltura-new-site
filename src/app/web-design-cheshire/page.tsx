import { generateMetadata } from '@/lib/seo';
import { getLocationBySlug } from '@/data/locations';
import LocationPageTemplate from '@/components/LocationPageTemplate';

export const metadata = generateMetadata({
  title: 'Web Design Cheshire | Modern Websites for Local Businesses | Coltura',
  description: 'Professional web design for Cheshire businesses. Fast, mobile-friendly sites built in 7 days. Serving Poynton, Macclesfield, Wilmslow, Stockport, and all of Cheshire.',
  keywords: ['web design cheshire','website design cheshire','web designer cheshire','local business website cheshire','cheshire web design agency','small business website cheshire'],
});

export default function Page() {
  const location = getLocationBySlug('cheshire');
  if (!location) return null;
  return <LocationPageTemplate location={location} />;
}
