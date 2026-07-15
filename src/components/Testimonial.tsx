import Image from 'next/image';
import Reveal from './Reveal';

// Real content — the only confirmed named client is Regenovate. Presented as
// a dark, full-width band for contrast against the warm light sections, with
// the quote on the left and attribution on the right. Colours are fixed dark
// (not theme tokens) so the band stays dark in both themes.
export default function Testimonial() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#1b1815' }}>
      {/* Warm ambiance on the right: a soft brand glow + a faint gecko mark.
          (Deliberately not a photo — the desk shot would repeat the hero and
          its dark variant carries a placeholder client-logo strip.) */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(120% 95% at 88% 50%, rgba(240,74,79,0.12) 0%, transparent 62%)' }}
        />
        <Image
          src="/images/gecko-mark-light.png"
          alt=""
          width={564}
          height={570}
          className="absolute right-[-70px] top-1/2 w-[360px] -translate-y-1/2 opacity-[0.06]"
        />
      </div>

      <Reveal className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:pr-[38%]">
        <div className="lg:flex-1">
          <span aria-hidden className="mb-2 block font-heading text-5xl leading-none text-brand/60">
            &ldquo;
          </span>
          <blockquote className="-mt-3 text-[clamp(1.15rem,2vw,1.5rem)] font-normal leading-[1.5] text-white/90">
            Coltura built our corporate site for Regenovate — a mergers and acquisitions
            firm handling multi-million-pound deals. They balanced credibility with
            clarity, and the site performs flawlessly. Adam doesn&apos;t just build
            websites. He understands what a business needs to look like before people
            trust it with serious money.
          </blockquote>
        </div>

        <div className="flex items-center gap-3.5 lg:w-52 lg:flex-col lg:items-start lg:gap-4">
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
