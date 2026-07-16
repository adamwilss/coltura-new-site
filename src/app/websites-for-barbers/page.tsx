import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Barbers | Coltura',
  description: 'Modern websites for barbers and barbershops. Online booking, gallery, pricing, and local SEO. Built fast, priced fairly.',
  keywords: ['barber website design','barbershop website','website for barbers','barber booking website','barber web design','local barber website'],
});

export default function Page() {
  const trade = getTradeBySlug('barbers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
