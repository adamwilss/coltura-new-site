import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Event Catering Companies | Coltura',
  description: 'Event catering websites that convert enquiries into bookings. Gallery by event type, sample menus, transparent pricing, and direct booking. Built fast, priced fairly.',
  keywords: ['event catering website design','catering website design','wedding caterer website','corporate catering website','catering web design','private party caterer website'],
});

export default function Page() {
  const trade = getTradeBySlug('event-catering');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
