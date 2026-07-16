import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Dental Clinics | Coltura',
  description: 'Warm, professional websites for dental clinics with services, team profiles, and local SEO. Built fast, priced fairly.',
  keywords: ['dental website design','dentist website','dental clinic website','website for dentists','local dentist website'],
});

export default function Page() {
  const trade = getTradeBySlug('dental-clinics');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
