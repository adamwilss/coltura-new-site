import SectionLabel from './SectionLabel';
import RevealGroup from './RevealGroup';
import type { CSSProperties } from 'react';

// Real services, from Hero.tsx on the live site. A numbered editorial index
// (hairline-separated rows) rather than a grid of identical cards. Rows are
// vertically centred with a fixed name column and a minimum height, so every
// row reads the same size whether or not the description wraps.
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
    <section
      id="services"
      className="relative z-10 rounded-t-[2rem] bg-bg-secondary shadow-[0_-30px_70px_-35px_rgba(0,0,0,0.32)] sm:rounded-t-[2.75rem]"
    >
      <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/*
          Asymmetric header (label+heading left, description as a separate
          right-hand column on desktop) — per the frontend-design skill's rule
          that no two consecutive sections should share a layout.
        */}
        <div className="scroll-reveal mb-12 grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-[1.2fr_1fr]">
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
              className="scroll-reveal grid grid-cols-[2.25rem_1fr] items-center gap-x-4 gap-y-1 border-b border-line py-5 sm:min-h-[96px] sm:grid-cols-[3.5rem_17rem_minmax(0,1fr)] sm:gap-x-8"
              style={{ '--sr-delay': `${i * 70}ms` } as CSSProperties}
            >
              <span className="font-heading text-sm tabular-nums text-brand/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl font-medium leading-tight text-ink sm:whitespace-nowrap">
                {service.name}
              </h3>
              <p className="col-start-2 max-w-md text-base leading-relaxed text-muted sm:col-start-3">
                {service.description}
              </p>
            </li>
          ))}
        </ol>
      </RevealGroup>
    </section>
  );
}
