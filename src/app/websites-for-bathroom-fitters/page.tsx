import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Bathroom Fitters | Coltura',
  description: 'Showcase websites for bathroom fitters with project galleries, 3D design previews, supplier brand pages, and online quoting. Built fast, priced fairly.',
  keywords: ['bathroom fitter website design','bathroom installation website','bathroom renovation website','bathroom showroom website','bathroom fitter web design','local bathroom fitter SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('bathroom-fitters');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
