import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Fast Loading Websites | Speed Optimisation | Coltura',
  description: 'Lightning-fast websites for local businesses. Under 1-second load times, 90+ PageSpeed scores, and better conversions. Built fast, priced fairly.',
  keywords: ['fast loading websites','website speed optimisation','fast website design','page speed improvement','speed optimised website'],
});

export default function Page() {
  const service = getServiceBySlug('fast-loading-websites');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
