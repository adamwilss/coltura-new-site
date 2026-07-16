import { generateMetadata } from '@/lib/seo';
import { getServiceBySlug } from '@/data/services';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata = generateMetadata({
  title: 'Google Ads Management for Trades | Lead Generation Service | Coltura',
  description: 'Done-for-you Google Ads management for UK tradespeople. We run your ads, track your leads, and send you customers — starting at £199/month + ad spend.',
  keywords: ['google ads management for trades','trades google ads service','ppc management trades','google ads for plumbers','google ads for roofers','google ads for electricians','trades lead generation','google ads agency trades'],
});

export default function Page() {
  const service = getServiceBySlug('google-ads-management-for-trades');
  if (!service) return null;
  return <ServicePageTemplate service={service} />;
}
