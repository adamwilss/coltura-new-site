import { FileText } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

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

          {/* The real PDF */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_28px_56px_-28px_rgba(0,0,0,0.24)]">
              <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Coltura Growth Audit
                </span>
                <span className="ml-auto shrink-0 rounded border border-brand/25 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
                  Real example
                </span>
              </div>
              <iframe
                src="/coltura-sample-growth-audit.pdf#toolbar=0&navpanes=0&view=FitH"
                title="Example Coltura Growth Audit"
                loading="lazy"
                className="h-[500px] w-full bg-white sm:h-[620px]"
              />
            </div>
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
