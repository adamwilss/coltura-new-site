import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Restaurants | Coltura',
  description: 'Stunning websites for restaurants with menus, booking, galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['restaurant website design','restaurant web design','website for restaurants','restaurant booking website','local restaurant website'],
});

export default function Page() {
  const trade = getTradeBySlug('restaurants');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
