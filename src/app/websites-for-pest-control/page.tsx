import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Pest Control Companies | Coltura',
  description: 'Emergency-ready websites for pest control companies with BPCA/NPTA accreditation, review embedding, and local SEO. Built fast, priced fairly.',
  keywords: ['pest control website design','emergency pest control website','website for pest control companies','local pest control web design','pest control SEO','BPCA pest control website'],
});

export default function Page() {
  const trade = getTradeBySlug('pest-control');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
