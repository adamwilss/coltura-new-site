import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Too Slow',
  description: '',
  keywords: [],
});

export default function Page() {
  const resource = getResourceBySlug('why-most-local-business-websites-fail');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
