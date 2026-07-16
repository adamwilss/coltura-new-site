import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Solar & Renewable Energy Installers | Coltura',
  description: 'High-converting websites for solar panel, heat pump, and renewable energy installers with MCS accreditation, project galleries, and finance calculators. Built fast, priced fairly.',
  keywords: ['solar panel website design','renewable energy installer website','heat pump website design','solar installer web design','MCS accredited installer website'],
});

export default function Page() {
  const trade = getTradeBySlug('renewable-energy');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
