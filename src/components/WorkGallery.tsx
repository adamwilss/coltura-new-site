import SectionLabel from './SectionLabel';
import ImagePlaceholder from './ImagePlaceholder';

// Real, already-confirmed Coltura client work — Regenovate is confirmed via
// the named testimonial in Testimonial.tsx; Solar in Sport, Instant Tyre
// Solutions and Build to Retire are confirmed via prior session notes on
// the live site's get-started page / promo footage. Screenshots aren't in
// this repo yet, so these are reserved, honestly-labelled slots rather than
// stock photography standing in for real projects.
const PROJECTS = [
  { name: 'Regenovate', description: 'Corporate site — mergers & acquisitions' },
  { name: 'Solar in Sport', description: 'Lead-generation site & enquiry system' },
  { name: 'Instant Tyre Solutions', description: 'Local trade website rebuild' },
  { name: 'Build to Retire', description: 'Financial services website' },
];

export default function WorkGallery() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel index="III" label="Recent Work" />
        <h2 className="mb-10 max-w-lg font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          Real businesses, real sites.
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <div key={project.name}>
              <ImagePlaceholder label={project.name} />
              <p className="mt-3 text-sm font-semibold text-ink">{project.name}</p>
              <p className="text-sm text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
