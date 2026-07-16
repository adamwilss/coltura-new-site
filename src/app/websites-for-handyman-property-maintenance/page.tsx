import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Handymen & Property Maintenance | Coltura',
  description: 'Conversion-focused websites for handymen and property maintenance businesses. Service catalogue, before/after gallery, online booking, and local SEO. Built fast, priced fairly.',
  keywords: ['handyman website design','property maintenance website','odd job website','handyman web design Cheshire','property maintenance marketing','local handyman website'],
});

export default function Page() {
  const trade = getTradeBySlug('handyman-property-maintenance');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
