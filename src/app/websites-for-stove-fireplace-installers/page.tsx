import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Stove & Fireplace Installers | Coltura',
  description: 'Modern websites for HETAS-registered stove and fireplace installers. Installation galleries, online survey booking, credential badges, and local SEO. Built fast, priced fairly.',
  keywords: ['stove installer website design','fireplace installer website','website for stove fitters','HETAS stove installer website','wood burning stove website','multi-fuel stove installer web design'],
});

export default function Page() {
  const trade = getTradeBySlug('stove-fireplace-installers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
