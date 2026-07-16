import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Architects | Coltura',
  description: 'Portfolio-driven websites for RIBA architects and architectural practices. Project case studies, team profiles, local planning expertise, and commission enquiry forms. Built fast, priced fairly.',
  keywords: ['architect website design', 'RIBA architect website', 'architectural practice website', 'architecture portfolio website', 'architect SEO', 'local architect website'],
});

export default function Page() {
  const trade = getTradeBySlug('architects');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
