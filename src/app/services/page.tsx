import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';
import { SERVICES } from '@/data/services';

export const metadata = generateMetadata({
  title: 'Services | Coltura Website Design',
  description: 'Website design, redesign, SEO, maintenance, and speed optimisation for local businesses. Built in 7 days, maintained monthly.',
  keywords: ['website services', 'web design services', 'seo services', 'website maintenance'],
});

export default function ServicesPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Services"
        title="What We Can Build for You"
        subtitle="From brand-new websites to SEO, speed optimisation, and ongoing maintenance — everything your business needs to succeed online."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel label="Our Services" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="group rounded-xl border border-line bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_0_20px_rgba(223,44,50,0.08)]"
              >
                <h3 className="mb-2 font-heading text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                  {service.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-3">{service.subheadline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
