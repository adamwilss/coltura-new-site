import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Removal Companies | Coltura',
  description: 'Conversion-focused websites for removal companies, man-and-van services, and house clearance specialists. Online quoting with inventory form, availability calendar, and local SEO. Built fast, priced fairly.',
  keywords: ['removal company website design', 'house removal website', 'man and van website', 'removals web design', 'house clearance website', 'moving company website', 'furniture removals website'],
});

export default function Page() {
  const trade = getTradeBySlug('removal-companies');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
