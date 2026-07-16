import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Interior Designers | Coltura',
  description: 'Beautiful websites for interior designers and studios. Portfolio galleries, consultation booking, style pages, and local SEO. Built fast, priced fairly.',
  keywords: ['interior designer website design','interior design website','website for interior designers','interior design portfolio website','interior design studio web design','local interior designer website'],
});

export default function Page() {
  const trade = getTradeBySlug('interior-designers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
