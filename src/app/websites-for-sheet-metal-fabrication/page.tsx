import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Sheet Metal Fabricators | Coltura',
  description: 'Industrial websites for sheet metal fabrication, laser cutting, and CNC welding companies. Project galleries, ISO certification badges, and online RFQ with CAD file upload. Built fast, priced fairly.',
  keywords: ['sheet metal fabrication website','laser cutting website','metal fabrication website design','CNC welding website','industrial fabrication web design','engineering website design','sheet metalwork website'],
});

export default function Page() {
  const trade = getTradeBySlug('sheet-metal-fabrication');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
