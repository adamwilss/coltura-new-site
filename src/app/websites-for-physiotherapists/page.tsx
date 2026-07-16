import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Physiotherapists | Coltura',
  description: 'Evidence-based websites for physiotherapy clinics with condition pages, clinician profiles, and online booking. Built fast, priced fairly.',
  keywords: ['physiotherapist website design','physiotherapy clinic website','physio website','sports injury clinic website','local physiotherapist website'],
});

export default function Page() {
  const trade = getTradeBySlug('physiotherapists');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
