import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Mechanics | Coltura',
  description: 'Professional websites for mechanics and garages with services, MOT info, and local SEO. Built fast, priced fairly.',
  keywords: ['mechanic website design','garage website','car repair website','MOT garage website','website for mechanics'],
});

export default function Page() {
  const trade = getTradeBySlug('mechanics');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
