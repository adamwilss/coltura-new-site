import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Sign Makers | Coltura',
  description: 'Portfolio-first websites for traditional signwriters and vehicle graphics companies. Gallery, local SEO, and instant quote forms. Built fast, priced fairly.',
  keywords: ['sign maker website design','signwriter website','vehicle graphics website','sign shop web design','traditional signwriting portfolio website','van wrapping website'],
});

export default function Page() {
  const trade = getTradeBySlug('sign-makers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
