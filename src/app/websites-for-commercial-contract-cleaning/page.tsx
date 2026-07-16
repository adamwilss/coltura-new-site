import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Commercial Contract Cleaners | Coltura',
  description: 'B2B websites for commercial contract cleaning, caretaking, and facilities maintenance companies. Accreditation badges, case studies, and tender enquiry forms. Built fast, priced fairly.',
  keywords: ['commercial cleaning website design','contract cleaning website','B2B cleaning company website','facilities maintenance website','caretaking services website','cleaning tender website'],
});

export default function Page() {
  const trade = getTradeBySlug('commercial-contract-cleaning');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
