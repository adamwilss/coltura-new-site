import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Chartered Surveyors | Coltura',
  description: 'Professional websites for RICS chartered surveyors with case studies, team profiles, local SEO, and client portal integration. Built fast, priced fairly.',
  keywords: ['chartered surveyor website design','surveyor website','RICS surveyor web design','property surveyor website','building surveyor website','local surveyor SEO'],
});

export default function Page() {
  const trade = getTradeBySlug('surveyors');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
