import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Garages & MOT Centres | Coltura',
  description: 'Professional websites for garages and MOT centres with review integration, service menus, and local SEO. Built fast, priced fairly.',
  keywords: ['garage website design','MOT centre website','car repair website','website for garages','local garage website'],
});

export default function Page() {
  const trade = getTradeBySlug('garage-mechanics');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
