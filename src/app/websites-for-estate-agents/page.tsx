import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Estate Agents | Coltura',
  description: 'Sleek websites for estate agents with listings, team profiles, and local SEO. Built fast, priced fairly.',
  keywords: ['estate agent website design','letting agent website','property website','website for estate agents','local estate agent website'],
});

export default function Page() {
  const trade = getTradeBySlug('estate-agents');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
