import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Chiropractors | Coltura',
  description: 'Professional websites for chiropractors with qualifications, treatments, and local SEO. Built fast, priced fairly.',
  keywords: ['chiropractor website design','chiropractic clinic website','back pain website','website for chiropractors','local chiropractor website'],
});

export default function Page() {
  const trade = getTradeBySlug('chiropractors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
