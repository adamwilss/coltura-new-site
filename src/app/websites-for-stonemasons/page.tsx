import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Stonemasons | Coltura',
  description: 'Heritage-quality websites for stonemasons. Portfolio galleries, conservation credentials, and local SEO. Built fast, priced fairly.',
  keywords: ['stonemason website design','heritage masonry website','conservation stonemason website','lime mortar website','website for stonemasons','stone restoration web design'],
});

export default function Page() {
  const trade = getTradeBySlug('stonemasons');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
