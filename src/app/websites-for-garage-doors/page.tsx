import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Garage Door Installers | Coltura',
  description: 'Websites for garage door companies with product catalogues, brand accreditation displays, project galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['garage door website design','garage door company website','garage door installer website','roller door website','sectional door website','local garage door SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('garage-doors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
