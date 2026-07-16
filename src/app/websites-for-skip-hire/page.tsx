import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Skip Hire & Waste Management | Coltura',
  description: 'Hard-working websites for skip hire and waste management companies. Online booking, review integration, service pages, and local SEO. Built fast, priced fairly.',
  keywords: ['skip hire website design','waste management website','website for skip hire companies','skip hire web design','waste removal website','local skip hire website'],
});

export default function Page() {
  const trade = getTradeBySlug('skip-hire');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
