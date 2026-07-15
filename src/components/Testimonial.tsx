import ImagePlaceholder from './ImagePlaceholder';

// Real content, copied from src/components/ImmediateProof.tsx on the live
// site. The only confirmed real named client is Regenovate — do not add any
// other named business here until Adam confirms which other workspace
// folders are genuine completed client work vs prospect audits.
// Moved higher up the page (was buried near the bottom) so real proof
// appears before the pitch is fully made.
export default function Testimonial() {
  return (
    <section className="bg-bg">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 px-5 py-14 sm:flex-row sm:items-center sm:px-8 sm:py-20">
        <div className="w-20 shrink-0 sm:w-24">
          <ImagePlaceholder label="Ric" sublabel="Client photo" shape="circle" ratio="aspect-square" />
        </div>
        <div className="space-y-3 border-l-2 border-brand/40 pl-6">
          <p className="text-base italic leading-relaxed text-ink sm:text-lg">
            &ldquo;Coltura built our corporate site for Regenovate &mdash; a mergers
            and acquisitions firm handling multi-million-pound deals. They
            balanced credibility with clarity, and the site performs flawlessly.
            Adam doesn&apos;t just build websites. He understands what a business
            needs to look like before people trust it with serious money.&rdquo;
          </p>
          <p className="pt-1 text-sm font-semibold text-ink">Ric Wilson</p>
          <p className="text-xs text-muted">
            Owner, Regenovate &mdash; Mergers &amp; Acquisitions &middot; regenovate.com
          </p>
        </div>
      </div>
    </section>
  );
}
