import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';

// Real content, copied from src/components/ImmediateProof.tsx on the live
// site. The only confirmed real named client is Regenovate — do not add any
// other named business here until Adam confirms which other workspace
// folders are genuine completed client work vs prospect audits.
// Presented as a centred editorial pull-quote (large serif, oversized
// quotation mark) rather than a bordered box — cleaner, and lets the words
// carry the weight.
export default function Testimonial() {
  return (
    <section className="bg-bg">
      <Reveal className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
        <span
          aria-hidden
          className="block font-heading text-6xl leading-none text-brand/25 sm:text-7xl"
        >
          &ldquo;
        </span>

        <blockquote className="-mt-4 font-heading text-[clamp(1.35rem,2.6vw,1.9rem)] font-normal leading-[1.4] text-ink">
          Coltura built our corporate site for Regenovate — a mergers and
          acquisitions firm handling multi-million-pound deals. They balanced
          credibility with clarity, and the site performs flawlessly. Adam
          doesn&apos;t just build websites. He understands what a business needs
          to look like before people trust it with serious money.
        </blockquote>

        <div className="mt-9 flex items-center justify-center gap-3.5">
          <div className="h-11 w-11 shrink-0">
            <ImagePlaceholder label="RW" sublabel="Client photo" shape="circle" ratio="aspect-square" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-ink">Ric Wilson</p>
            <p className="text-xs text-muted">Owner, Regenovate — Mergers &amp; Acquisitions</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
