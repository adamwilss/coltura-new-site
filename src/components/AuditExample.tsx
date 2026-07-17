import { FileText } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';
import AuditBook from './AuditBook';

// Shows the REAL sample Growth Audit PDF (the actual document a prospect
// receives) rather than a mocked-up card. The 18 areas are real content from
// the live site.
const AUDIT_AREAS = [
  'Website performance', 'Mobile experience', 'Loading speed', 'SEO fundamentals',
  'Google Business Profile', 'Local SEO', 'Service page quality', 'Calls to action',
  'Trust signals', 'Reviews', 'Competitor comparison', 'Offer positioning',
  'Google Ads readiness', 'Meta Ads readiness', 'Landing page opportunities',
  'Conversion bottlenecks', 'AI Search readiness', 'Prioritised action plan',
];

export default function AuditExample() {
  return (
    <section className="bg-bg-secondary">
      <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Copy + the 18 areas */}
          <div className="lg:pt-4">
            <SectionLabel label="What A Free Audit Uncovers" />
            <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Small problems like these cost local businesses jobs every month.
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted">
              This is a real Coltura Growth Audit — the exact document that lands back in your
              WhatsApp within 48 hours. No jargon, no obligation, just a clear, practical plan.
            </p>
            <p className="mb-4 text-sm font-medium text-ink">
              Every audit covers <span className="text-brand">18 areas</span>, including:
            </p>
            <ul className="flex flex-wrap gap-2">
              {AUDIT_AREAS.map((area) => (
                <li key={area} className="rounded-full border border-line bg-card px-3 py-1 text-xs text-muted">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* The real audit, as a book you can flick through (the PDF iframe
              was too heavy and often never loaded — page images always do). */}
          <div>
            <AuditBook basePath="/images/growth-audit-pages" pageCount={8} label="Coltura Growth Audit" />
            <a
              href="/coltura-sample-growth-audit.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText size={18} strokeWidth={2} />
              Open the full example audit
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
