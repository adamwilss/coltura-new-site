import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Security Companies | Coltura',
  description: 'Professional websites for security guarding, mobile patrol, keyholding, and alarm response companies. SIA licensing, review integration, and service pages. Built fast, priced fairly.',
  keywords: ['security company website design', 'security guarding website', 'CCTV monitoring website', 'keyholding website', 'mobile patrol website', 'security contractor web design'],
});

export default function Page() {
  const trade = getTradeBySlug('security-services');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
