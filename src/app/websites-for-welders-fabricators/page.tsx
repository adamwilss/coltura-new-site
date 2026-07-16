import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Welders & Fabricators | Coltura',
  description: 'Industrial-strength websites for welders and fabricators. Project galleries, material capability pages, and local SEO. Built fast, priced fairly.',
  keywords: ['welder website design','fabrication website','metal fabrication website','welding company website','website for welders','industrial fabrication web design'],
});

export default function Page() {
  const trade = getTradeBySlug('welders-fabricators');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
