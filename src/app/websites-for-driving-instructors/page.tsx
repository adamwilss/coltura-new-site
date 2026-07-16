import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Driving Instructors | Coltura',
  description: 'Professional websites for driving instructors with pricing, areas covered, and local SEO. Built fast, priced fairly.',
  keywords: ['driving instructor website','driving school website design','ADI website','driving lessons website','website for driving instructors'],
});

export default function Page() {
  const trade = getTradeBySlug('driving-instructors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
