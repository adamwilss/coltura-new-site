import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Maintenance Plans | Care & Updates | Coltura',
  description: 'Monthly website maintenance plans for local businesses. Updates, backups, security, and support included.',
  keywords: ['website maintenance plans','website care plan','website support','website updates service','monthly website maintenance'],
});

export default function Page() {
  const service = getServiceBySlug('website-maintenance-plans');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
