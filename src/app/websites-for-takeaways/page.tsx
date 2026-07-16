import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Takeaways | Coltura',
  description: 'Fast, mouth-watering websites for takeaways with menus, offers, and local SEO. Built fast, priced fairly.',
  keywords: ['takeaway website design','takeaway shop website','food takeaway website','website for takeaways','local takeaway website'],
});

export default function Page() {
  const trade = getTradeBySlug('takeaways');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
