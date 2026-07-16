import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Rendering Contractors | Coltura',
  description: 'Conversion-focused websites for rendering, EWI, and external wall finishing contractors. Before/after gallery, accreditation badges, local landing pages, and online quoting. Built fast, priced fairly.',
  keywords: ['rendering contractor website design','house rendering website','external rendering website','silicone render website','EWI contractor website','rendering SEO','website for renderers'],
});

export default function Page() {
  const trade = getTradeBySlug('renderers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
