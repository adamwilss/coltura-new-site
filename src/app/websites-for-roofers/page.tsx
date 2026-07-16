import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Roofers | Coltura',
  description: 'Trust-building websites for roofers with insurance, project galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['roofer website design','roofing company website','roof repair website','website for roofers','local roofer website'],
});

export default function Page() {
  const trade = getTradeBySlug('roofers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
