import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Plumbers | Coltura',
  description: 'Fast, professional websites for plumbers with emergency call buttons, services, and local SEO. Built fast, priced fairly.',
  keywords: ['plumber website design','plumbing website','emergency plumber website','website for plumbers','local plumber website'],
});

export default function Page() {
  const trade = getTradeBySlug('plumbers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
