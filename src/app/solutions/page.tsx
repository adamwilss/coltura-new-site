import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Solutions — Coltura',
  description:
    'Websites, local SEO and paid ads — the full system for turning interest into real enquiries and winning local business.',
};

export default function SolutionsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Solutions"
        title="The complete system behind a site that sells."
        subtitle="From the website itself to the search visibility and paid ads that fill it — everything working together to bring in calls and jobs, not just clicks."
      />
      <Services />
      <Pricing />
      <CtaBand />
      <Footer />
    </main>
  );
}
