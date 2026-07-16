import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Website Checklist for Trades | Builders, Plumbers, Electricians | Coltura',
  description: 'Essential website checklist for tradespeople. What to include, what to avoid, and how to turn your website into a lead generation tool.',
  keywords: ['website checklist for trades','tradesman website essentials','builder website checklist','plumber website checklist','trade business website'],
});

export default function Page() {
  const resource = getResourceBySlug('website-checklist-for-trades');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
