import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for TV & Electronics Repair | Coltura',
  description: 'Modern websites for TV repair, electronics repair, and appliance fix businesses. Online booking, repair gallery, brand certifications, and local SEO. Built fast, priced fairly.',
  keywords: ['tv repair website design','electronics repair website','website for tv repair shop','tv repair web design','electronics repair SEO','local tv repair website'],
});

export default function Page() {
  const trade = getTradeBySlug('tv-repair-electronics');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
