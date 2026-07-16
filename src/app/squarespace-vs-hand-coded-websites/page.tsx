import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Squarespace vs Hand Coded Websites | Coltura',
  description: 'Compare Squarespace and hand-coded websites. Design, speed, SEO, flexibility, and total cost of ownership for small businesses.',
  keywords: ['squarespace vs custom website','squarespace vs hand coded','website builder vs custom','squarespace for small business','hand coded website benefits'],
});

export default function Page() {
  const resource = getResourceBySlug('squarespace-vs-hand-coded-websites');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
