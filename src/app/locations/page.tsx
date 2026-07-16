import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';
import { getAllLocationSlugs } from '@/data/locations';
import { LOCATIONS } from '@/data/locations';

export const metadata = generateMetadata({
  title: 'Locations We Serve | Coltura Website Design',
  description: 'Web design services across Cheshire and Greater Manchester. Poynton, Macclesfield, Wilmslow, Stockport, and more. Local SEO included for every area.',
  keywords: ['locations we serve', 'web design cheshire', 'web design greater manchester', 'local web designer', 'areas covered'],
});

export default function LocationsPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Locations"
        title="Web Design Across Cheshire and Beyond"
        subtitle="We build websites for local businesses across Cheshire and Greater Manchester. Every site includes local SEO setup."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel label="Our Locations" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc) => (
              <a
                key={loc.slug}
                href={`/web-design-${loc.slug}`}
                className="group rounded-xl border border-line bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_0_20px_rgba(223,44,50,0.08)]"
              >
                <h3 className="mb-2 font-heading text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                  {loc.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-2">{loc.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {loc.areas.slice(0, 3).map((area) => (
                    <span key={area} className="rounded-full border border-line bg-bg-secondary px-2 py-0.5 text-[10px] text-muted">
                      {area}
                    </span>
                  ))}
                </div>
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
