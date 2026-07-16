import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Accountants | Coltura',
  description: 'Professional websites for accountants and accountancy firms. Services, qualifications, and local SEO. Built fast, priced fairly.',
  keywords: ['accountant website design','accountancy firm website','bookkeeper website','website for accountants','local accountant website'],
});

export default function Page() {
  const trade = getTradeBySlug('accountants');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
