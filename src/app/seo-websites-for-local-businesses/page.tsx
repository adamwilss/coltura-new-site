import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'SEO Websites for Local Businesses | Local SEO | Coltura',
  description: 'SEO-optimised websites for local businesses. Rank higher in local searches with our SEO-focused design and content.',
  keywords: ['seo websites for local businesses','local seo website','seo web design','local business seo','website with seo included'],
});

export default function Page() {
  const service = getServiceBySlug('seo-websites-for-local-businesses');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
