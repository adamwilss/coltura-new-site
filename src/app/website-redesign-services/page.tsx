import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Redesign Services | Refresh Your Site | Coltura',
  description: 'Professional website redesign services for local businesses. Modern, fast, mobile-friendly redesigns built in 7 days.',
  keywords: ['website redesign services','website refresh','redesign my website','website makeover','local business website redesign'],
});

export default function Page() {
  const service = getServiceBySlug('website-redesign-services');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
