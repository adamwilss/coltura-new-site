import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Local SEO Basics | Small Business Guide | Coltura',
  description: 'Learn local SEO basics for small businesses. Google Business Profile, local keywords, reviews, and citations explained simply.',
  keywords: ['local seo basics','local seo guide','how to rank locally','near me seo','small business local seo'],
});

export default function Page() {
  const resource = getResourceBySlug('local-seo-basics');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
