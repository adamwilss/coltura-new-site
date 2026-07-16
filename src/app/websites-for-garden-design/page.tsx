import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Garden Designers | Coltura',
  description: 'Stunning portfolio websites for garden designers and landscape architects with 3D render galleries, consultation booking, and local SEO. Built fast, priced fairly.',
  keywords: ['garden design website','garden designer website','landscape architect website','website for garden designers','garden design portfolio','landscape design website'],
});

export default function Page() {
  const trade = getTradeBySlug('garden-design');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
