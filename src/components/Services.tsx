import SectionLabel from './SectionLabel';
import Reveal from './Reveal';

// Real services, from Hero.tsx on the live site. Presented as a numbered
// editorial index (hairline-separated rows) rather than a grid of identical
// cards — the card-grid read as generic/"vibe coded"; a typographic index
// reads as a considered document and lets the service names carry weight.
const SERVICES = [
  { name: 'Websites', description: 'Fast, mobile-first sites built to convert visitors into calls and enquiries.' },
  { name: 'Landing Pages', description: 'Focused single-offer pages built for paid traffic and campaigns.' },
  { name: 'SEO', description: 'Local search visibility, so you get found before a competitor does.' },
  { name: 'Google Ads', description: 'Campaigns aimed at real leads, not just clicks.' },
  { name: 'Meta Ads', description: 'Facebook and Instagram campaigns built around what actually converts.' },
  { name: 'Continuous Optimisation', description: 'Ongoing testing and refinement, month after month.' },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary">
      <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/*
          Asymmetric header (label+heading left, description as a separate
          right-hand column on desktop) rather than the stacked-and-centred
          pattern every other section uses — per the frontend-design skill's
          rule that no two consecutive sections should share a layout.
        */}
        <div className="mb-12 grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionLabel label="What We Do" />
            <h2 className="max-w-xl font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Everything you need to win online.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted sm:text-lg lg:self-end lg:border-l lg:border-line lg:pl-8">
            Practical services for local businesses, built around getting the phone to ring — not
            buzzwords.
          </p>
        </div>

        <ol className="border-t border-line">
          {SERVICES.map((service, i) => (
            <li
              key={service.name}
              className="group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-4 border-b border-line py-6 transition-colors sm:grid-cols-[3.5rem_minmax(0,7fr)_minmax(0,9fr)] sm:gap-x-8 sm:py-7"
            >
              <span className="font-heading text-sm tabular-nums text-brand/70">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="font-heading text-xl font-medium leading-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                {service.name}
              </h3>

              <p className="col-start-2 mt-2 max-w-md text-base leading-relaxed text-muted sm:col-start-3 sm:mt-0">
                {service.description}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
