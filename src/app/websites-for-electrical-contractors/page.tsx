import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Electrical Contractors | Coltura',
  description: 'Professional websites for electrical contractors with NICEIC certification badges, commercial project portfolios, and local SEO. Built fast, priced fairly.',
  keywords: ['electrical contractor website','commercial electrician website','NICEIC electrical website','electrical contractor web design','industrial electrician website','electrical services website'],
});

export default function Page() {
  const trade = getTradeBySlug('electrical-contractors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
