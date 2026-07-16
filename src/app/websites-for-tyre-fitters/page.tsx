import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Tyre Fitters | Coltura',
  description: 'Professional websites for tyre fitters. Fast, mobile-friendly sites that help customers find you and book online. Built in 7 days.',
  keywords: ['tyre fitter website design', 'tyre shop website', 'website for tyre fitters', 'tyre fitting web design'],
});

export default function Page() {
  const trade = getTradeBySlug('tyre-fitters');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
