import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import Process from '@/components/Process';
import AuditExample from '@/components/AuditExample';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How It Works — Coltura',
  description:
    'From the first free audit to a site that keeps improving — a clear, straightforward process with real results.',
};

export default function HowItWorksPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="How It Works"
        title="Simple to work with. Serious about results."
        subtitle="From the first free audit to a site that keeps improving month after month — here is exactly how we work together."
      />
      <Process />
      <AuditExample />
      <CtaBand />
      <Footer />
    </main>
  );
}
