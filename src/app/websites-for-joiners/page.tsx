import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Joiners & Carpenters | Coltura',
  description: 'Bespoke websites for joiners, carpenters, and woodworkers. Portfolio galleries, conservation credentials, and local SEO. Built fast, priced fairly.',
  keywords: ['joiner website design','carpenter website','joinery website','bespoke furniture website','website for joiners','carpentry web design'],
});

export default function Page() {
  const trade = getTradeBySlug('joiners');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
