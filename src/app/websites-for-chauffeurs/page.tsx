import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Chauffeurs & Private Hire | Coltura',
  description: 'Premium websites for chauffeur and private hire services with fleet showcase, airport transfer pages, wedding car galleries, and online booking. Built fast, priced fairly.',
  keywords: ['chauffeur website design','private hire website','taxi company website','airport transfer website','wedding car website','executive travel website'],
});

export default function Page() {
  const trade = getTradeBySlug('chauffeurs');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
