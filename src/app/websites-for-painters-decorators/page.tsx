import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Painters & Decorators | Coltura',
  description: 'Portfolio-focused websites for painters and decorators. Before-and-after galleries, review integration, and local SEO. Built fast, priced fairly.',
  keywords: ['painter website design','decorator website','painting and decorating website','website for painters','decorator web design','local painter website'],
});

export default function Page() {
  const trade = getTradeBySlug('painters-decorators');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
