import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Window Fitters & Glaziers | Coltura',
  description: 'Professional websites for window fitters, glaziers, conservatory installers, and double glazing companies. CERTASS/FENSA badges, product galleries, and local SEO. Built fast, priced fairly.',
  keywords: ['window fitter website design','glazier website','double glazing website','website for window installers','CERTASS window company website','FENSA registered website','conservatory installer website','composite door website'],
});

export default function Page() {
  const trade = getTradeBySlug('window-fitters-glaziers');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
