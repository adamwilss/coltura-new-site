import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Bricklayers | Coltura',
  description: 'Professional websites for bricklayers with project galleries, accreditations, and local landing pages. Built fast, priced fairly.',
  keywords: ['bricklayer website design','brickwork website','bricklaying contractor website','garden wall builder website','repointing website','website for bricklayers'],
});

export default function Page() {
  const trade = getTradeBySlug('bricklayers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
