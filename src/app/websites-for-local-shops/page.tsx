import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Local Shops | Coltura',
  description: 'Simple, effective websites for local shops and retailers. Opening hours, products, and local SEO. Built fast, priced fairly.',
  keywords: ['shop website design','retail website','local shop website','small business website','website for local shops'],
});

export default function Page() {
  const trade = getTradeBySlug('local-shops');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
