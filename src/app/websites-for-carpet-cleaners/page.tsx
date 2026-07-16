import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Carpet & Upholstery Cleaners | Coltura',
  description: 'Websites for carpet & upholstery cleaners. Online booking, before/after gallery, stain removal guides, local SEO. Built fast, priced fairly.',
  keywords: ['carpet cleaner website design', 'upholstery cleaning website', 'carpet cleaning web design', 'website for carpet cleaners', 'local carpet cleaner website', 'stain removal website'],
});

export default function Page() {
  const trade = getTradeBySlug('carpet-cleaners');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
