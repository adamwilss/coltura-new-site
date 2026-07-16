import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Nail Studios | Coltura',
  description: 'Beautiful portfolio websites for nail studios and technicians. Galleries, pricing, booking, and local SEO. Built fast, priced fairly.',
  keywords: ['nail studio website design','nail technician website','nail salon website','website for nail studios','local nail studio website'],
});

export default function Page() {
  const trade = getTradeBySlug('nail-studios');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
