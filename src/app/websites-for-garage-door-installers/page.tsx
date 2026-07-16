import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Garage Door Installers | Coltura',
  description: 'Conversion-focused websites for garage door installers and repair specialists. Product gallery, manufacturer badges, project photos, and instant quote forms. Built fast, priced fairly.',
  keywords: ['garage door website design','garage door installer website','roller garage door website','sectional garage door website','garage door repair website','automated garage door website'],
});

export default function Page() {
  const trade = getTradeBySlug('garage-door-installers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
