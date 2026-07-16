import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Tattoo Shops | Coltura',
  description: 'Portfolio websites for tattoo shops and artists. Galleries, artist profiles, booking, and local SEO. Built fast, priced fairly.',
  keywords: ['tattoo shop website design','tattoo artist website','tattoo studio website','website for tattoo shops','tattoo portfolio website'],
});

export default function Page() {
  const trade = getTradeBySlug('tattoo-shops');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
