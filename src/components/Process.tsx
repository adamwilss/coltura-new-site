import Image from 'next/image';
import SectionLabel from './SectionLabel';
import RevealGroup from './RevealGroup';
import type { CSSProperties } from 'react';

const STAGES = [
  { step: '01', name: 'Audit & discovery', description: 'We review your current website, audience and goals — and where you’re losing jobs.' },
  { step: '02', name: 'Strategy', description: 'We define the pages, message and conversion path that will actually move the needle.' },
  { step: '03', name: 'Design & build', description: 'We build the site, keeping you involved and informed at every stage.' },
  { step: '04', name: 'Launch & improve', description: 'We launch, then measure and keep improving what’s working.' },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-bg-secondary">
      {/* Circular image bleeding off the bottom-right corner. */}
      <div className="absolute -bottom-16 -right-14 hidden h-72 w-72 overflow-hidden rounded-full ring-1 ring-line xl:block xl:h-80 xl:w-80">
        <Image
          src="/images/studio-lounge.png"
          alt="A warm, considered studio interior"
          fill
          sizes="20rem"
          className="object-cover"
        />
      </div>

      <RevealGroup className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
          <div className="scroll-reveal">
            <SectionLabel label="How It Works" />
            <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              A clear process. Real results.
            </h2>
          </div>

          <ol className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
            {/* rails */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-3 left-4 top-3 w-px bg-line lg:hidden"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 right-6 top-4 hidden h-px bg-line lg:block"
            />

            {STAGES.map((stage, i) => (
              <li
                key={stage.step}
                className="scroll-reveal relative pl-14 lg:pl-0"
                style={{ '--sr-delay': `${i * 110}ms` } as CSSProperties}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand font-heading text-xs font-semibold text-on-brand ring-4 ring-bg-secondary lg:static lg:mb-6 lg:flex"
                >
                  {stage.step}
                </span>
                <h3 className="mb-2 text-base font-semibold text-ink">{stage.name}</h3>
                <p className="max-w-[15rem] text-sm leading-relaxed text-muted">{stage.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </RevealGroup>
    </section>
  );
}
