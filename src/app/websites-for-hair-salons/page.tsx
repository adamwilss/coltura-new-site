import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Hair Salons | Coltura',
  description: 'Beautiful websites for hair salons with online booking, galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['hair salon website design','salon website','hairdresser website','beauty salon web design','salon booking website','website for hairdressers'],
});

export default function Page() {
  const trade = getTradeBySlug('hair-salons');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
