import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'Why Website Speed Matters | SEO & Conversions | Coltura',
  description: 'Website speed directly impacts Google rankings, conversions, and user experience. Learn why fast websites win and how to speed yours up.',
  keywords: ['why website speed matters','website speed importance','fast website benefits','page speed seo','website loading time'],
});

export default function Page() {
  const resource = getResourceBySlug('why-website-speed-matters');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
