import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Vets | Coltura',
  description: 'Warm, trust-building websites for independent veterinary practices with team profiles, online booking, and pet owner resources. Built fast, priced fairly.',
  keywords: ['vet website design','veterinary practice website','independent vet web design','animal hospital website','local vet website'],
});

export default function Page() {
  const trade = getTradeBySlug('vets');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
