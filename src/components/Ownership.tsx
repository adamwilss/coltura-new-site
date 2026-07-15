import Reveal from './Reveal';

// NEEDS ADAM'S SIGN-OFF before this ships: the brief asked for a dedicated
// ownership section (domain/hosting/ad-account ownership, no lock-in), which
// is a strong trust signal for cautious buyers — but nothing in the live
// site content confirms the exact terms, so the specific claims below are
// flagged with a visible "confirm before shipping" tag rather than presented
// as fact. Edit DRAFT_CLAIMS once Adam confirms the real terms, then remove
// the tag.
const DRAFT_CLAIMS = [
  'The site is built on your own hosting and domain.',
  'Your Google Ads and Meta Ads accounts stay in your name.',
  'You can walk away from the relationship at any point — support continues only as long as you want it.',
];

export default function Ownership() {
  return (
    <section className="bg-bg">
      <Reveal className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="h-px w-8 shrink-0 bg-brand/55" />
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted">
            Ownership
          </p>
          <span className="rounded border border-dashed border-brand/40 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
            Draft — confirm before shipping
          </span>
        </div>
        <h2 className="mb-8 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          Your website. Your business.
        </h2>
        <ul className="space-y-4">
          {DRAFT_CLAIMS.map((claim) => (
            <li key={claim} className="flex items-start gap-3 text-base leading-relaxed text-ink">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
              {claim}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
