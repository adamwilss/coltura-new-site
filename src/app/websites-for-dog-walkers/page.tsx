import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Dog Walkers & Pet Services | Coltura',
  description: 'Trust-building websites for dog walkers and pet service providers. Reviews, pricing, insurance credentials, and local SEO. Built fast, priced fairly.',
  keywords: ['dog walker website design','pet services website','dog walking website','website for dog walkers','pet care web design','local dog walker website'],
});

export default function Page() {
  const trade = getTradeBySlug('dog-walkers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
