import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

// Compact homepage pricing teaser — starting points only, linking to the full
// breakdown on the Solutions page.
const HIGHLIGHTS = [
  { label: 'Websites', price: 'from £500', note: 'One-off build — you own it outright.' },
  { label: 'Changes & care', price: 'from £75', note: 'Pay per change, or £149/mo unlimited.' },
  { label: 'Ads management', price: 'from £200/mo', note: 'Google & Meta — reduced with a Flagship site.' },
];

export default function PricingTeaser() {
  return (
    <section className="bg-bg">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionLabel label="Pricing" tone="brand" />
          <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
            Simple, honest pricing.
          </h2>
          <p className="mb-7 max-w-md text-lg leading-relaxed text-muted">
            Own your website outright, then keep it growing however suits you. No lock-in, no
            surprises.
          </p>
          <a
            href="/solutions#pricing"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
          >
            See full pricing
            <ArrowUpRight size={15} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="lg:pt-2">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.label}
              className="flex items-baseline justify-between gap-6 border-b border-line py-5 first:border-t"
            >
              <div>
                <p className="font-heading text-lg font-medium text-ink">{h.label}</p>
                <p className="mt-0.5 text-sm text-muted">{h.note}</p>
              </div>
              <p className="shrink-0 font-heading text-xl font-semibold text-brand">{h.price}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
