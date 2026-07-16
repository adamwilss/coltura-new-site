import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Demolition & Excavation Contractors | Coltura',
  description: 'Industrial-grade websites for demolition, excavation, and groundworks contractors with fleet galleries, accreditations, recycling credentials, and local SEO. Built fast, priced fairly.',
  keywords: ['demolition contractor website design','excavation company website','groundworks website','civil engineering contractor website','plant hire website','site clearance website'],
});

export default function Page() {
  const trade = getTradeBySlug('demolition-excavation');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
