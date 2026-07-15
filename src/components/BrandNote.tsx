import Image from 'next/image';
import Reveal from './Reveal';

/**
 * A deliberate brand moment: the Coltura mark shown large, an oversized gecko
 * watermark behind for depth, and a short personal note in Adam's voice. It's
 * meant to feel hand-composed and human — the counterpoint to a templated
 * page — and it reinforces the real, already-stated positioning that you work
 * directly with Adam (see TrustPoints), not an agency floor.
 */
export default function BrandNote() {
  return (
    <section className="relative overflow-hidden bg-bg-secondary">
      {/* Oversized gecko watermark, barely there — brand texture, not decoration. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <Image
          src="/images/gecko-mark.png"
          alt=""
          width={564}
          height={570}
          className="w-[125vw] max-w-[760px] opacity-[0.04] dark:hidden"
        />
        <Image
          src="/images/gecko-mark-light.png"
          alt=""
          width={564}
          height={570}
          className="hidden w-[125vw] max-w-[760px] opacity-[0.05] dark:block"
        />
      </div>

      <Reveal variant="zoom" className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:py-32">
        {/* The mark, large. */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/coltura-logo-light.png"
            alt="Coltura"
            width={1395}
            height={264}
            className="h-14 w-auto dark:hidden sm:h-20 lg:h-24"
          />
          <Image
            src="/images/coltura-logo-dark.png"
            alt="Coltura"
            width={1395}
            height={264}
            className="hidden h-14 w-auto dark:block sm:h-20 lg:h-24"
          />
        </div>

        <p className="mx-auto max-w-xl text-balance font-heading text-[clamp(1.5rem,3.2vw,2.15rem)] font-normal leading-[1.35] text-ink">
          Coltura isn&apos;t a big agency. It&apos;s one person who genuinely cares
          whether your phone rings.
        </p>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted">
          When you work with Coltura, you work with me — from the first audit to the
          site that&apos;s still winning jobs a year on. No account managers, no
          hand-offs, no jargon.
        </p>
        <p className="mt-9 font-heading text-lg italic text-ink">— Adam</p>
      </Reveal>
    </section>
  );
}
