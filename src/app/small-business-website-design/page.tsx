import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Small Business Website Design | Local Business Sites | Coltura',
  description: 'Professional website design for small businesses. Fast, mobile-friendly, SEO-optimised sites built in 7 days.',
  keywords: ['small business website design','website design for small businesses','local business website','small business web design','affordable website design small business'],
});

export default function Page() {
  const service = getServiceBySlug('small-business-website-design');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
