import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Fencing Contractors | Coltura',
  description: 'Portfolio websites for fencing contractors with project galleries, material showcases, and local SEO. Built fast, priced fairly.',
  keywords: ['fencing contractor website design','fencing company website','garden fence website','website for fencing contractors','local fencing website'],
});

export default function Page() {
  const trade = getTradeBySlug('fencing-contractors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
