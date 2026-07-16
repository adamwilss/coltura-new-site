import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Window Cleaners | Coltura',
  description: 'Simple, effective websites for window cleaners. Pricing, areas covered, and local SEO. Built fast, priced fairly.',
  keywords: ['window cleaner website','window cleaning website design','website for window cleaners','local window cleaner website'],
});

export default function Page() {
  const trade = getTradeBySlug('window-cleaners');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
