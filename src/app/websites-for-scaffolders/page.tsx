import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Scaffolding Companies | Coltura',
  description: 'Professional websites for scaffolding companies with project galleries, certifications, and local SEO. Built fast, priced fairly.',
  keywords: ['scaffolding website design','scaffolder website','scaffolding company website','website for scaffolders','local scaffolder website'],
});

export default function Page() {
  const trade = getTradeBySlug('scaffolders');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
