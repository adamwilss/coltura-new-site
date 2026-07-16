import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Wedding Photographers & Videographers | Coltura',
  description: 'Portfolio websites for wedding photographers and videographers with pricing pages, couple galleries, venue showcases, and booking integration. Built fast, priced fairly.',
  keywords: ['wedding photographer website design','wedding videographer website','photography portfolio website','wedding photography web design','photographer website','local wedding photographer SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('photographers-videographers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
