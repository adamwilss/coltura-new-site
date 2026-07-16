import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Heating Engineers | Coltura',
  description: 'Professional websites for heating engineers, boiler installers, and gas-safe central heating specialists. Emergency call-out badges, Gas Safe verification, finance calculators, and local SEO. Built fast, priced fairly.',
  keywords: ['heating engineer website design', 'boiler installation website', 'gas engineer website', 'central heating website design', 'boiler repair website', 'Gas Safe registered website', 'heating and plumbing website'],
});

export default function Page() {
  const trade = getTradeBySlug('heating-engineers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
