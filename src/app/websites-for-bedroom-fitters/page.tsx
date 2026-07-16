import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Bedroom Fitters | Coltura',
  description: 'Professional websites for fitted bedroom specialists. 3D design gallery, material showcase, finance calculator, local SEO. Built fast, priced fairly.',
  keywords: ['bedroom fitter website design', 'fitted bedroom website', 'bespoke bedroom design website', 'fitted wardrobes web design', 'walk-in wardrobe website', 'bedroom furniture website design'],
});

export default function Page() {
  const trade = getTradeBySlug('bedroom-fitters');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
