import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Plasterers | Coltura',
  description: 'Portfolio websites for plasterers with galleries, finishes, and local SEO. Built fast, priced fairly.',
  keywords: ['plasterer website design','plastering website','skimming website','website for plasterers','local plasterer website'],
});

export default function Page() {
  const trade = getTradeBySlug('plasterers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
