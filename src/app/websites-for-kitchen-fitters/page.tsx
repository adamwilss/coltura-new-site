import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Kitchen Fitters | Coltura',
  description: 'Bespoke websites for kitchen fitters and joiners. Workshop galleries, project portfolios, named client references, and local SEO. Built fast, priced fairly.',
  keywords: ['kitchen fitter website design','kitchen showroom website','bespoke kitchen website','fitted kitchen website','website for kitchen fitters','kitchen installation web design'],
});

export default function Page() {
  const trade = getTradeBySlug('kitchen-fitters');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
