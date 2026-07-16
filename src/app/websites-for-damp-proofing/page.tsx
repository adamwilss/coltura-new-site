import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Damp Proofing Companies | Coltura',
  description: 'Trust-building websites for damp proofing and timber treatment specialists with PCA accreditation, case studies, guarantees, and local SEO. Built fast, priced fairly.',
  keywords: ['damp proofing website design','damp proofing company website','rising damp specialist website','wet rot treatment website','damp survey website','PCA damp proofing website'],
});

export default function Page() {
  const trade = getTradeBySlug('damp-proofing');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
