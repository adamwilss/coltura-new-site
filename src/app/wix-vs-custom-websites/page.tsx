import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Wix vs Custom Websites | Small Business Guide | Coltura',
  description: 'Compare Wix and custom-built websites for small businesses. Speed, SEO, flexibility, cost, and long-term value explained.',
  keywords: ['wix vs custom website','wix vs professional website','should I use wix','custom website vs website builder','wix for small business'],
});

export default function Page() {
  const resource = getResourceBySlug('wix-vs-custom-websites');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
