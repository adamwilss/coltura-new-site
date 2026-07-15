// Reworked from the old "A Recent Audit Found" section. That version
// presented a specific fake domain and an unverified "the calls started
// coming back" outcome as if it were a documented case study — flagged as a
// trust risk (looks fabricated without a named, confirmed client). This
// version is explicitly labelled as a representative example of common
// findings rather than a specific real business, per Adam's rule: don't
// present invented information as real. Swap back to a genuine named case
// study once one is confirmed and approved.
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

const AUDIT_FINDINGS = [
  'Website loading in 6.8 seconds',
  'Missing service pages',
  'No Google Business optimisation',
  'Mobile navigation hiding contact details',
  'Weak calls to action',
];

// The live site states every Growth Audit covers exactly these 18 areas —
// real content, pulled from coltura.uk. Included in full because the
// thoroughness is itself the selling point.
const AUDIT_AREAS = [
  'Website performance',
  'Mobile experience',
  'Loading speed',
  'SEO fundamentals',
  'Google Business Profile',
  'Local SEO',
  'Service page quality',
  'Calls to action',
  'Trust signals',
  'Reviews',
  'Competitor comparison',
  'Offer positioning',
  'Google Ads readiness',
  'Meta Ads readiness',
  'Landing page opportunities',
  'Conversion bottlenecks',
  'AI Search readiness',
  'Prioritised action plan',
];

export default function AuditExample() {
  return (
    <section className="bg-bg-secondary">
      <Reveal className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel label="What A Free Audit May Uncover" />
        <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          Small problems like these cost local businesses jobs every month.
        </h2>
        <p className="mb-10 text-lg text-muted">
          An anonymised example of the kind of issues a Growth Audit typically finds.
        </p>

        <div className="overflow-hidden rounded-2xl border border-line bg-card">
          <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
            <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
              Coltura Growth Audit
            </span>
            <span className="ml-auto shrink-0 rounded border border-line bg-bg-secondary px-1.5 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted">
              Anonymised example
            </span>
          </div>

          <div className="space-y-3.5 p-5 sm:p-8">
            {AUDIT_FINDINGS.map((finding) => (
              <div key={finding} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 rounded border border-brand/25 bg-brand/10 px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-brand">
                  Issue
                </span>
                <span className="text-sm leading-relaxed text-ink sm:text-base">{finding}</span>
              </div>
            ))}

            <div className="flex items-start gap-3 border-t border-line pt-4">
              <span className="mt-0.5 shrink-0 rounded border border-line bg-bg-secondary px-1.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-ink">
                Approach
              </span>
              <span className="text-sm leading-relaxed text-ink sm:text-base">
                These are exactly the kind of fixes your free audit prioritises into a clear,
                practical action plan.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm font-medium text-ink">
            Every Growth Audit covers <span className="text-brand">18 areas</span>, including:
          </p>
          <ul className="flex flex-wrap gap-2">
            {AUDIT_AREAS.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-card px-3 py-1 text-xs text-muted"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
