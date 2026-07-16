import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Landscapers | Coltura',
  description: 'Stunning portfolio websites for landscapers and gardeners with galleries, services, and local SEO. Built fast, priced fairly.',
  keywords: ['landscaper website design','landscaping website','gardener website','website for landscapers','local landscaper website'],
});

export default function Page() {
  const trade = getTradeBySlug('landscapers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
