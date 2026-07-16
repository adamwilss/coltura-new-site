import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'How Google Business Profiles Work | Local SEO | Coltura',
  description: 'Understand how Google Business Profiles work and why they are essential for local SEO. Setup, optimisation, and ranking tips for small businesses.',
  keywords: ['google business profile','google my business','how google business profiles work','local seo google','gbp optimisation'],
});

export default function Page() {
  const resource = getResourceBySlug('how-google-business-profiles-work');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
