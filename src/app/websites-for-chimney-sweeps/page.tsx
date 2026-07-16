import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Chimney Sweeps | Coltura',
  description: 'Trust-building websites for chimney sweeps with certifications, online booking, seasonal content, and local SEO. Built fast, priced fairly.',
  keywords: ['chimney sweep website design','chimney sweep web design','website for chimney sweeps','chimney sweep SEO','local chimney sweep website'],
});

export default function Page() {
  const trade = getTradeBySlug('chimney-sweeps');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
