import Image from 'next/image';
import Reveal from './Reveal';

// Real content — the only confirmed named client is Regenovate. A dark,
// full-width band for contrast; the quote sits on the left. On the homepage
// the shared hero/review portal image fills the right (see page.tsx). On other
// pages, pass `withImage` to fill the right with the studio image instead.
export default function Testimonial({ withImage = false }: { withImage?: boolean }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#1b1815' }}>
      {withImage && (
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <Image src="/images/studio-lounge.png" alt="" fill sizes="42vw" className="object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, #1b1815 3%, rgba(27,24,21,0.35) 45%, rgba(27,24,21,0.1) 100%)' }}
          />
        </div>
      )}

      <Reveal className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-40">
        <span aria-hidden className="mb-5 block font-heading text-6xl leading-none text-brand/60">
          &ldquo;
        </span>
        <blockquote className="max-w-3xl text-[clamp(1.3rem,2.2vw,1.75rem)] font-normal leading-[1.55] text-white/90">
          Coltura built our corporate site for Regenovate — a mergers and acquisitions
          firm handling multi-million-pound deals. They balanced credibility with
          clarity, and the site performs flawlessly. Adam doesn&apos;t just build
          websites. He understands what a business needs to look like before people
          trust it with serious money.
        </blockquote>

        <div className="mt-10 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 font-heading text-xs italic text-white/60">
            RW
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Ric Wilson</p>
            <p className="mt-0.5 text-xs leading-relaxed text-white/50">
              Owner, Regenovate — Mergers &amp; Acquisitions
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
