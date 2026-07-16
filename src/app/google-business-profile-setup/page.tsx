import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Google Business Profile Setup | Local SEO | Coltura',
  description: 'Professional Google Business Profile setup and optimisation for local businesses. Rank higher in local searches.',
  keywords: ['google business profile setup','google my business setup','local seo setup','gbp optimisation','google business profile service'],
});

export default function Page() {
  const service = getServiceBySlug('google-business-profile-setup');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
