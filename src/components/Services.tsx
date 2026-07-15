import { ArrowUpRight, Globe, LayoutTemplate, Search, MousePointerClick, Megaphone, TrendingUp } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Real services, from Hero.tsx on the live site.
const SERVICES = [
  { name: 'Websites', description: 'Fast, mobile-first sites built to convert visitors into calls and enquiries.', icon: Globe },
  { name: 'Landing Pages', description: 'Focused single-offer pages built for paid traffic and campaigns.', icon: LayoutTemplate },
  { name: 'SEO', description: 'Local search visibility, so you get found before a competitor does.', icon: Search },
  { name: 'Google Ads', description: 'Campaigns aimed at real leads, not just clicks.', icon: MousePointerClick },
  { name: 'Meta Ads', description: 'Facebook and Instagram campaigns built around what actually converts.', icon: Megaphone },
  { name: 'Continuous Optimisation', description: 'Ongoing testing and refinement, month after month.', icon: TrendingUp },
];

export default function Services() {
  return (
    <section id="services" className="bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionLabel index="II" label="What We Do" />
        <h2 className="mb-3 max-w-xl font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          Everything you need to win online.
        </h2>
        <p className="mb-10 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          Practical services for local businesses, built around getting the phone to ring — not
          buzzwords.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group flex flex-col justify-between gap-4 rounded-2xl bg-card p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_20px_-12px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_28px_-14px_rgba(0,0,0,0.18)]"
              >
                <div>
                  <Icon size={18} strokeWidth={1.5} className="mb-3 text-brand" />
                  <h3 className="mb-1.5 font-sans text-base font-semibold text-ink">{service.name}</h3>
                  <p className="text-base leading-relaxed text-muted">{service.description}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
