import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Fascias, Soffits & Guttering | Coltura',
  description: 'Professional websites for fascia, soffit, and guttering specialists. Project galleries, review integration, and local SEO. Built fast, priced fairly.',
  keywords: ['fascia website design','soffit website','guttering website','roofline website','website for fascias','roofing fascia web design'],
});

export default function Page() {
  const trade = getTradeBySlug('fascias-soffits-guttering');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
