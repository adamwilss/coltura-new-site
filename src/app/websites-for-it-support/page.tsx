import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for IT Support & Computer Repair | Coltura',
  description: 'Websites for IT support and computer repair businesses with service catalogues, accreditation badges, customer portals, and local SEO. Built fast, priced fairly.',
  keywords: ['IT support website design','computer repair website','IT company website','tech support website','computer shop website','IT services website','local IT support SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('it-support');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
