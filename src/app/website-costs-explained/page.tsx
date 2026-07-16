import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Costs Explained | Small Business Guide | Coltura',
  description: 'A clear breakdown of website costs for small businesses. Design, development, hosting, domain, content, and ongoing maintenance explained.',
  keywords: ['website costs','how much does a website cost','small business website price','website pricing explained','website design cost uk'],
});

export default function Page() {
  const resource = getResourceBySlug('website-costs-explained');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
