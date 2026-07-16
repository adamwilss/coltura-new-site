import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Personal Trainers | Coltura',
  description: 'High-converting websites for personal trainers. Results, qualifications, booking, and local SEO. Built fast, priced fairly.',
  keywords: ['personal trainer website design','PT website','fitness coach website','personal trainer web design','website for personal trainers'],
});

export default function Page() {
  const trade = getTradeBySlug('personal-trainers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
