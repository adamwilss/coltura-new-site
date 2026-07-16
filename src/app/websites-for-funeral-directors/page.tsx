import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Funeral Directors | Coltura',
  description: 'Dignified, compassionate websites for independent funeral directors with transparent pricing, memorial pages, and local trust-building. Built fast, priced fairly.',
  keywords: ['funeral director website design','funeral home website','independent funeral director web design','funeral services website','bereavement website design'],
});

export default function Page() {
  const trade = getTradeBySlug('funeral-directors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
