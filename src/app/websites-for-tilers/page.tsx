import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Tilers | Coltura',
  description: 'Professional websites for tilers and tiling contractors. Portfolio galleries, brand partner badges, reviews, and local SEO. Built fast, priced fairly.',
  keywords: ['tiler website design','tiling contractor website','website for tilers','tiling portfolio website','bathroom tiler website','floor tiling website designer'],
});

export default function Page() {
  const trade = getTradeBySlug('tilers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
