import type { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Footer from '@/components/Footer';
import { RESOURCES } from '@/data/resources';

export const metadata = generateMetadata({
  title: 'Resources | Local Business Website Tips | Coltura',
  description: 'Free guides and resources for local businesses. Website tips, SEO basics, cost guides, and industry insights to help you grow online.',
  keywords: ['website tips', 'local business resources', 'seo guides', 'website costs', 'small business advice'],
});

export default function ResourcesPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHeader
        eyebrow="Resources"
        title="Free Guides for Local Businesses"
        subtitle="Practical advice on websites, SEO, and growing your online presence — written for business owners, not developers."
      />

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel label="All Resources" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {RESOURCES.map((resource) => (
              <a
                key={resource.slug}
                href={`/${resource.slug}`}
                className="group rounded-xl border border-line bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_0_20px_rgba(223,44,50,0.08)]"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full border border-brand/20 bg-brand/5 px-2 py-0.5 text-[10px] font-heading font-semibold uppercase tracking-wider text-brand">
                    Resource
                  </span>
                  <span className="text-xs text-muted">{resource.readTime}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-ink transition-colors group-hover:text-brand">
                  {resource.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted line-clamp-2">{resource.excerpt}</p>
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
