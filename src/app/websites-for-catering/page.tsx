import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Catering Companies | Coltura',
  description: 'Mouth-watering websites for caterers with event menus, gallery, and online booking. Built fast, priced fairly.',
  keywords: ['catering website design','caterer website','event catering web design','wedding caterer website','corporate catering website','private party catering SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('catering');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
