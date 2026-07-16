import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Locksmiths | Coltura',
  description: 'Emergency-ready websites for locksmiths with 24/7 call buttons, MLA accreditation display, and local SEO. Built fast, priced fairly.',
  keywords: ['locksmith website design','emergency locksmith website','website for locksmiths','local locksmith web design','locksmith SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('locksmiths');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
