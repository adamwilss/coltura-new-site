import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Insulation Contractors | Coltura',
  description: 'Professional websites for loft insulation, cavity wall, underfloor, and spray foam contractors. Before-after galleries, lifetime warranty badges, and local SEO. Built fast, priced fairly.',
  keywords: ['insulation contractor website design','loft insulation website','cavity wall insulation website','insulation installer website','spray foam insulation website','home insulation website designer'],
});

export default function Page() {
  const trade = getTradeBySlug('insulation-contractors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
