import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'How AI Search Is Changing SEO | Local Business Guide | Coltura',
  description: 'AI search engines like ChatGPT, Perplexity, and Google SGE are changing SEO. Learn what local businesses need to know and how to adapt.',
  keywords: ['ai search seo','ai search changing seo','chatgpt search','perplexity seo','future of local seo','ai search engines'],
});

export default function Page() {
  const resource = getResourceBySlug('how-ai-search-is-changing-seo');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
