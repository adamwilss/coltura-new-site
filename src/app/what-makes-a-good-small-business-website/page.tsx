import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'What Makes a Good Small Business Website | Coltura',
  description: 'Discover the key elements of a successful small business website. Clear messaging, fast loading, mobile design, local SEO, and trust signals.',
  keywords: ['good small business website','small business website tips','what makes a good website','business website essentials','website best practices'],
});

export default function Page() {
  const resource = getResourceBySlug('what-makes-a-good-small-business-website');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
