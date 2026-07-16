import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Car Valeting & Detailing | Coltura',
  description: 'Professional websites for car valeting and detailing businesses. Before/after galleries, service menus, booking, and local SEO. Built fast, priced fairly.',
  keywords: ['car valeting website','car detailing website','mobile valeting website','auto detailing website','car cleaning website','valeting business website'],
});

export default function Page() {
  const trade = getTradeBySlug('car-valeting-detailing');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
