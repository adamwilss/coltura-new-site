import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Groundworkers & Civil Engineers | Coltura',
  description: 'Websites for groundworking and civil engineering contractors with project galleries, capability displays, accreditation badges, and local SEO. Built fast, priced fairly.',
  keywords: ['groundworker website design','groundworks website','civil engineering website','excavation contractor website','drainage website','mini piling website','groundworking contractor SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('groundworkers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
