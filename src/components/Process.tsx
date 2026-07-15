import SectionLabel from './SectionLabel';
import ImagePlaceholder from './ImagePlaceholder';
import RevealGroup from './RevealGroup';
import Reveal from './Reveal';
import type { CSSProperties } from 'react';

const STAGES = [
  {
    step: '01',
    name: 'Audit & discovery',
    description: 'We review your current website, audience and goals — and where you’re losing jobs.',
  },
  {
    step: '02',
    name: 'Strategy',
    description: 'We define the pages, message and conversion path that will actually move the needle.',
  },
  {
    step: '03',
    name: 'Design & build',
    description: 'We build the site, keeping you involved and informed at every stage.',
  },
  {
    step: '04',
    name: 'Launch & improve',
    description: 'We launch, then measure and keep improving what’s working.',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bg-secondary">
      <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="scroll-reveal">
          <SectionLabel label="How It Works" />
          <h2 className="mb-16 max-w-lg font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
            A straightforward process, start to finish.
          </h2>
        </div>

        {/*
          A connected timeline: a vertical rail with stops on mobile, a
          horizontal rail with stops on desktop. Each node is a filled brand
          dot ringed in the section colour so it cleanly "cuts" the rail. The
          rail stays put; the stops slide into place in sequence.
        */}
        <ol className="relative grid grid-cols-1 gap-y-11 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 left-[8px] top-2 w-px bg-gradient-to-b from-transparent via-line to-transparent lg:hidden"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-2 right-2 top-[9px] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />

          {STAGES.map((stage, i) => (
            <li
              key={stage.step}
              className="scroll-reveal relative pl-11 lg:pl-0 lg:text-center"
              style={{ '--sr-delay': `${i * 110}ms` } as CSSProperties}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0.5 h-[18px] w-[18px] rounded-full bg-brand ring-4 ring-bg-secondary lg:static lg:mx-auto lg:mb-7 lg:block"
              />
              <p className="mb-1.5 font-heading text-sm font-medium tracking-wide text-brand">
                Step {stage.step}
              </p>
              <h3 className="mb-2 text-base font-semibold text-ink">{stage.name}</h3>
              <p className="text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[15rem]">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>

        <Reveal variant="zoom" className="mt-16">
          <ImagePlaceholder label="Where the work happens" ratio="aspect-[21/9]" />
        </Reveal>
      </RevealGroup>
    </section>
  );
}
