import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Piling & Foundation Contractors | Coltura',
  description: 'Technical websites for piling, mini piling, and foundation engineering contractors with project case studies, accreditation badges, and local SEO. Built fast, priced fairly.',
  keywords: ['piling contractor website design','mini piling website','foundation engineering website','screw piling website','underpinning contractor website','ground engineering website','subsidence repair website'],
});

export default function Page() {
  const trade = getTradeBySlug('piling');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
