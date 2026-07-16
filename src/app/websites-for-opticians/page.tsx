import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Opticians | Coltura',
  description: 'Boutique websites for independent opticians with frame galleries, online booking, and NHS/private service pages. Built fast, priced fairly.',
  keywords: ['optician website design','independent optician website','optometry website design','eye clinic website','local optician web design'],
});

export default function Page() {
  const trade = getTradeBySlug('opticians');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
