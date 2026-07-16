import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Upholsterers | Coltura',
  description: 'Portfolio websites for furniture upholsterers with before-and-after galleries, fabric guides, and local SEO. Built fast, priced fairly.',
  keywords: ['upholsterer website design','furniture restoration website','upholstery web design','re-upholstery portfolio website','furniture upholstery SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('upholsterers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
