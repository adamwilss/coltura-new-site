import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Flooring & Carpet Fitters | Coltura',
  description: 'Visual websites for flooring, carpet, LVT, vinyl, and laminate contractors with project galleries, review integration, and online consultation booking. Built fast, priced fairly.',
  keywords: ['flooring contractor website design','carpet fitter website','LVT flooring website','vinyl flooring website','laminate flooring website','local flooring fitter SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('flooring');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
