import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for HVAC & Air Conditioning Companies | Coltura',
  description: 'Modern websites for air conditioning, refrigeration, and heat pump installers. F-Gas certified, project galleries, and commercial sector landing pages. Built fast, priced fairly.',
  keywords: [
    'HVAC website design',
    'air conditioning website',
    'refrigeration website design',
    'heat pump installer website',
    'commercial HVAC website',
    'FGAS registered HVAC website',
  ],
});

export default function Page() {
  const trade = getTradeBySlug('air-conditioning-hvac');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
