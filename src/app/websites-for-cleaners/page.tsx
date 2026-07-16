import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Cleaners | Coltura',
  description: 'Trust-building websites for domestic and commercial cleaners. Services, pricing, reviews, and local SEO. Built fast, priced fairly.',
  keywords: ['cleaner website design','cleaning business website','domestic cleaner website','commercial cleaning website','website for cleaners'],
});

export default function Page() {
  const trade = getTradeBySlug('cleaners');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
