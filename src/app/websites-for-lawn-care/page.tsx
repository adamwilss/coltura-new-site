import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Lawn Care Companies | Coltura',
  description: 'Modern websites for lawn care, garden maintenance, and landscaping companies. Social media integration, before/after galleries, online booking, and local SEO. Built fast, priced fairly.',
  keywords: ['lawn care website design','garden maintenance website','landscaping website','website for lawn care','gardening website design','local gardener website'],
});

export default function Page() {
  const trade = getTradeBySlug('lawn-care');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
