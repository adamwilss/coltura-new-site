import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Driveway & Paving Contractors | Coltura',
  description: 'Visual websites for driveway, paving, and resin surfacing contractors with project galleries, material guides, and online quoting. Built fast, priced fairly.',
  keywords: ['driveway contractor website design','paving company website','resin driveway website','block paving website','driveway installation website','local driveway contractor SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('driveways');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
