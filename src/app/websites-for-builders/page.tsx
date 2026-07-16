import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Builders | Coltura',
  description: 'Professional websites for builders with project galleries, accreditations, and local SEO. Built fast, priced fairly.',
  keywords: ['builder website design','building company website','construction website','website for builders','local builder website'],
});

export default function Page() {
  const trade = getTradeBySlug('builders');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
