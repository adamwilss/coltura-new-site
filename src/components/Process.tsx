import SectionLabel from './SectionLabel';
import ImagePlaceholder from './ImagePlaceholder';

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
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel index="IV" label="How It Works" />
        <h2 className="mb-12 max-w-lg font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          A straightforward process, start to finish.
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STAGES.map((stage) => (
            <div key={stage.step}>
              <p className="mb-3 font-heading text-2xl font-medium text-brand">{stage.step}</p>
              <h3 className="mb-2 text-base font-semibold text-ink">{stage.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{stage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ImagePlaceholder label="Where the work happens" ratio="aspect-[21/9]" />
        </div>
      </div>
    </section>
  );
}
