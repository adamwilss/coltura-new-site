import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Dog Groomers | Coltura',
  description: 'Friendly websites for dog groomers with service menus, galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['dog groomer website design','pet grooming website','dog grooming web design','website for dog groomers','local dog groomer website'],
});

export default function Page() {
  const trade = getTradeBySlug('dog-groomers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
