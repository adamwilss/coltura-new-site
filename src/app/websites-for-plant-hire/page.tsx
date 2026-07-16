import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Plant Hire Companies | Coltura',
  description: 'Hard-working websites for plant hire and equipment rental companies. Fleet showcase, online booking, spec sheets, and local SEO. Built fast, priced fairly.',
  keywords: ['plant hire website design','equipment rental website','website for plant hire companies','construction equipment website','digger hire website','tool hire web design','local plant hire website'],
});

export default function Page() {
  const trade = getTradeBySlug('plant-hire');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
