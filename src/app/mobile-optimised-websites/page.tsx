import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Mobile Optimised Websites | Mobile-First Design | Coltura',
  description: 'Mobile-first websites for local businesses. Designed for phones, fast on all devices, and built to convert mobile visitors.',
  keywords: ['mobile optimised websites','mobile first web design','responsive website design','mobile friendly website','phone optimised website'],
});

export default function Page() {
  const service = getServiceBySlug('mobile-optimised-websites');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
