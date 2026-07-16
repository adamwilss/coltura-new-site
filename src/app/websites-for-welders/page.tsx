import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Welding & Fabrication | Coltura',
  description: 'Portfolio websites for welding and fabrication companies with project galleries, capability showcases, and local SEO. Built fast, priced fairly.',
  keywords: ['welding company website design','fabrication website','metal fabrication website','website for welders','local welding website'],
});

export default function Page() {
  const trade = getTradeBySlug('welders');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
