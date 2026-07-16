import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Gardeners & Garden Maintenance | Coltura',
  description: 'Professional websites for gardeners and garden maintenance services. Before/after photo galleries, instant quote forms, local landing pages, and online booking. Built fast, priced fairly.',
  keywords: ['gardener website design','garden maintenance website','landscape gardener website','garden design website','lawn care website','hedge trimming website'],
});

export default function Page() {
  const trade = getTradeBySlug('gardeners');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
