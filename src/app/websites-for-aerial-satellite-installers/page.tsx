import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Aerial & Satellite Installers | Coltura',
  description: 'Professional websites for aerial, satellite, Starlink, and CCTV installers. Review integration, project galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['aerial installer website design','satellite installer website','TV aerial website','Starlink installation website','website for aerial installers','local CCTV installer website'],
});

export default function Page() {
  const trade = getTradeBySlug('aerial-satellite-installers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
