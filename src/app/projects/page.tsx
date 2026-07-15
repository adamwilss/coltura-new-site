import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import WorkGallery from '@/components/WorkGallery';
import Testimonial from '@/components/Testimonial';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects — Coltura',
  description: 'A selection of recent Coltura work for real local businesses.',
};

export default function ProjectsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Projects"
        title="Work we’re proud of."
        subtitle="A selection of recent Coltura projects for real businesses. Full case studies available on request."
      />
      <WorkGallery />
      <Testimonial withImage />
      <CtaBand />
      <Footer />
    </main>
  );
}
