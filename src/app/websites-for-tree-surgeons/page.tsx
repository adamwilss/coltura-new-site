import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Tree Surgeons | Coltura',
  description: 'Portfolio websites for tree surgeons with certifications, before/after galleries, emergency contact, and local SEO. Built fast, priced fairly.',
  keywords: ['tree surgeon website design','arborist website','tree surgery website','website for tree surgeons','local tree surgeon SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('tree-surgeons');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
