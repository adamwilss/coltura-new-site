import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for CCTV & Security Installers | Coltura',
  description: 'Professional websites for CCTV, access control, burglar alarm, and security system installers. Accreditation display, project galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['CCTV installer website design','security system installer website','access control website','burglar alarm installer website','CCTV website design','local security installer SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('cctv-security-installers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
