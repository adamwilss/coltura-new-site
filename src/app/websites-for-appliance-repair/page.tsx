import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Appliance Repair | Coltura',
  description: 'Emergency-ready websites for appliance repair businesses with brand lists, instant contact, and local SEO. Built fast, priced fairly.',
  keywords: ['appliance repair website design','washing machine repair website','appliance repair web design','domestic appliance repair SEO','emergency appliance repair website'],
});

export default function Page() {
  const trade = getTradeBySlug('appliance-repair');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
