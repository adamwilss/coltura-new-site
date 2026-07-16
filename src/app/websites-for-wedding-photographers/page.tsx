import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Wedding Photographers & Videographers | Coltura',
  description: 'Beautiful websites for wedding photographers and videographers with portfolio galleries, transparent pricing, venue pages, and online booking. Built fast, priced fairly.',
  keywords: ['wedding photographer website design','wedding videographer website','photography portfolio website','wedding photography website','videographer website design'],
});

export default function Page() {
  const trade = getTradeBySlug('wedding-photographers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
