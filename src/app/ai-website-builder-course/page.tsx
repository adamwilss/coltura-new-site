import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'AI Website Builder Course | Learn AI Skills & Build Your Own Site | Coltura',
  description: 'Learn to run Claude Code directly on your computer. Build websites, automate tasks, and master AI tools that employers pay £80k+ for. 1-on-1 coaching. £3,000. One week.',
  keywords: ['ai website builder course','learn ai tools','claude code training','build website with ai','ai skills course'],
});

export default function Page() {
  const resource = getResourceBySlug('ai-website-builder-course');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
