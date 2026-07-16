import { generateMetadata } from '@/lib/seo';
import { getTradeBySlug } from '@/data/trades';
import TradePageTemplate from '@/components/TradePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Design for Double Glazing Companies | Coltura',
  description: 'Conversion-focused websites for double glazing installers and window companies. Product showcase, FENSA/CERTASS badges, project galleries, finance calculator, and instant quote forms. Built fast, priced fairly.',
  keywords: ['double glazing website design', 'window company website', 'glazing installer website', 'FENSA registered website', 'conservatory website', 'replacement windows website'],
});

export default function Page() {
  const trade = getTradeBySlug('double-glazing');
  if (!trade) return null;
  return <TradePageTemplate trade={trade} />;
}
