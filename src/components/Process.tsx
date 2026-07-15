import SectionLabel from './SectionLabel';
import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';

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
      <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel label="How It Works" />
        <h2 className="mb-14 max-w-lg font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          A straightforward process, start to finish.
        </h2>

        {/*
          A connected timeline rather than four detached blocks: a vertical
          rail with stops on mobile, a horizontal rail with stops on desktop.
          Each node's fill matches the section background so it "cuts" the
          rail cleanly. Rails fade at both ends so they read as intentional,
          not clipped.
        */}
        <ol className="relative grid grid-cols-1 gap-y-9 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0">
          {/* Vertical rail — mobile / tablet */}
          <span
            aria-hidden
            className="pointer-events-none absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-transparent via-line to-transparent lg:hidden"
          />
          {/* Horizontal rail — desktop */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
          />

          {STAGES.map((stage) => (
            <li key={stage.step} className="relative pl-10 lg:pl-0 lg:text-center">
              <span
                aria-hidden
                className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full border-2 border-brand bg-bg-secondary lg:static lg:mx-auto lg:mb-6 lg:block"
              />
              <p className="mb-1 font-heading text-sm font-medium text-brand">{stage.step}</p>
              <h3 className="mb-2 text-base font-semibold text-ink">{stage.name}</h3>
              <p className="text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[15rem]">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14">
          <ImagePlaceholder label="Where the work happens" ratio="aspect-[21/9]" />
        </div>
      </Reveal>
    </section>
  );
}
