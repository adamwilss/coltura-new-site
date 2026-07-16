import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Electricians | Coltura',
  description: 'Professional websites for electricians with qualifications, services, and local SEO. Built fast, priced fairly.',
  keywords: ['electrician website design','electrical contractor website','sparky website','website for electricians','local electrician website'],
});

export default function Page() {
  const trade = getTradeBySlug('electricians');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
