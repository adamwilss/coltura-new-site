import { Monitor, MapPin, Megaphone, TrendingUp } from 'lucide-react';
import SectionLabel from './SectionLabel';
import RevealGroup from './RevealGroup';
import type { CSSProperties } from 'react';

// The six live-site services, distilled into the reference's four columns.
const SERVICES = [
  { name: 'Web Design', icon: Monitor, description: 'Custom websites that look exceptional and turn visitors into real enquiries.' },
  { name: 'Local SEO', icon: MapPin, description: 'Be visible where it matters — more calls, more visits, more local customers.' },
  { name: 'Paid Ads', icon: Megaphone, description: 'Targeted Google & Meta campaigns that drive quality leads and a strong return.' },
  { name: 'Ongoing Growth', icon: TrendingUp, description: 'We test, measure and optimise — so your site keeps getting better every month.' },
];

export default function Services({ covering = false }: { covering?: boolean }) {
  // `covering` = the homepage stacking treatment (rounded top + upward shadow
  // as it rises over the pinned Statement). Off by default so the section can
  // be reused as a plain block on other pages.
  return (
    <section
      id="services"
      className={`bg-bg-secondary ${
        covering
          ? 'relative z-10 rounded-t-[2rem] shadow-[0_-30px_70px_-35px_rgba(0,0,0,0.32)] sm:rounded-t-[2.75rem]'
          : ''
      }`}
    >
      <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="scroll-reveal mb-12 grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <SectionLabel label="What We Do" />
            <h2 className="max-w-md font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Everything you need to win online.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted sm:text-lg lg:border-l lg:border-line lg:pl-8">
            Practical services for local businesses, built around getting the phone to ring —
            not buzzwords.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-line lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="scroll-reveal border-b border-line py-8 lg:border-b-0 lg:border-l lg:py-2 lg:pl-6 lg:pr-4 lg:[&:first-child]:border-l-0 lg:[&:first-child]:pl-0"
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
              >
                <Icon size={22} strokeWidth={1.5} className="mb-4 text-brand" />
                <h3 className="mb-2 font-heading text-lg font-medium text-ink">{service.name}</h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
            );
          })}
        </div>
      </RevealGroup>
    </section>
  );
}
