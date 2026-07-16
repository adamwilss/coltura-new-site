import { generateMetadata } from '@/lib/seo';
import { getResourceBySlug } from '@/data/resources';
import ResourcePageTemplate from '@/components/ResourcePageTemplate';

export const metadata = generateMetadata({
  title: 'AI Training Manchester | Learn AI Skills In Person | Coltura',
  description: 'Hands-on AI training in Manchester. Learn Claude Code, GitHub & Vercel from someone who uses them daily. 1-on-1 coaching. £3,000 — one week. No experience needed.',
  keywords: ['AI training Manchester', 'learn AI skills Manchester', 'AI course Manchester', 'Claude Code training', 'AI coaching in person', 'build with AI course'],
});

export default function Page() {
  const resource = getResourceBySlug('ai-training-manchester');
  if (!resource) return null;
  return <ResourcePageTemplate resource={resource} />;
}
