import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Cafes | Coltura',
  description: 'Warm, inviting websites for cafes with menus, galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['cafe website design','coffee shop website','cafe web design','website for cafes','local cafe website'],
});

export default function Page() {
  const trade = getTradeBySlug('cafes');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
