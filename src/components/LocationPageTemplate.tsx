'use client';

import { useState } from 'react';
import type { LocationData } from '@/data/locations';
import { ChevronDown, MapPin, ArrowRight } from 'lucide-react';
import PageHeader from './PageHeader';
import SectionLabel from './SectionLabel';
import CtaBand from './CtaBand';
import Reveal from './Reveal';
import RevealGroup from './RevealGroup';

const DISTANCE_MAP: Record<string, Record<string, string>> = {
  Cheshire: { Poynton: '10 min', Macclesfield: '20 min', Wilmslow: '15 min', Stockport: '25 min' },
  Poynton: { Cheshire: '10 min', Macclesfield: '25 min', Stockport: '15 min' },
  Macclesfield: { Cheshire: '20 min', Poynton: '25 min', Wilmslow: '15 min' },
  Stockport: { Cheshire: '25 min', Poynton: '15 min', Macclesfield: '30 min' },
  Wilmslow: { Cheshire: '15 min', Poynton: '20 min', Macclesfield: '15 min' },
  'Alderley Edge': { Cheshire: '20 min', Wilmslow: '10 min', Macclesfield: '20 min' },
};

function getDistance(from: string, nearbyLabel: string): string {
  const to = nearbyLabel.replace(/^Web Design /, '');
  return DISTANCE_MAP[from]?.[to] || '15 min';
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`rounded-xl border transition-colors ${isOpen ? 'border-brand/30 bg-bg-secondary' : 'border-line bg-card'}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left"
      >
        <span className="pr-4 font-heading text-sm font-semibold text-ink">{question}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5">
          <p className="text-sm leading-relaxed text-muted">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function LocationPageTemplate({ location }: { location: LocationData }) {
  return (
    <main className="relative">
      {/* Hero */}
      <PageHeader
        eyebrow={location.name}
        title={location.headline}
        subtitle={location.subheadline}
      />

      {/* Description */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <SectionLabel label="Why Choose Us" />
            <h2 className="mb-6 max-w-3xl font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight text-ink">
              Local websites that actually bring in customers
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              {location.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="Who We Help" />
              <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Businesses We Serve in {location.name}
              </h2>
              <p className="mx-auto mb-10 max-w-lg text-muted">
                From the high street to industrial estates, we build sites for every type of local business.
              </p>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {[
              { label: 'Builders', href: '/websites-for-builders' },
              { label: 'Plumbers', href: '/websites-for-plumbers' },
              { label: 'Electricians', href: '/websites-for-electricians' },
              { label: 'Roofers', href: '/websites-for-roofers' },
              { label: 'Landscapers', href: '/websites-for-landscapers' },
              { label: 'Hair Salons', href: '/websites-for-hair-salons' },
              { label: 'Barbers', href: '/websites-for-barbers' },
              { label: 'Cafes', href: '/websites-for-cafes' },
              { label: 'Restaurants', href: '/websites-for-restaurants' },
              { label: 'Cleaners', href: '/websites-for-cleaners' },
              { label: 'Mechanics', href: '/websites-for-mechanics' },
              { label: 'Accountants', href: '/websites-for-accountants' },
            ].map((trade, i) => (
              <a
                key={trade.href}
                href={trade.href}
                className="scroll-reveal rounded-xl border border-line bg-card p-3 text-center transition-all hover:border-brand/30 hover:shadow-[0_0_20px_rgba(223,44,50,0.08)]"
                style={{ '--sr-delay': `${i * 60}ms` } as React.CSSProperties}
              >
                <span className="text-xs font-heading font-semibold text-ink transition-colors group-hover:text-brand">
                  {trade.label}
                </span>
              </a>
            ))}
          </RevealGroup>
          <Reveal className="mt-8 text-center">
            <a href="/industries" className="text-sm font-medium text-brand transition-colors hover:text-brand/80">
              See all industries we serve →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="Coverage" />
              <h2 className="mb-4 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Areas We Cover in {location.name}
              </h2>
              <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-line bg-bg-secondary px-4 py-2 text-sm text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-brand" />
                We cover all of {location.name} and surrounding areas
              </div>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {location.areas.map((area, i) => (
              <div
                key={area}
                className="scroll-reveal flex items-center gap-3 rounded-xl border border-line bg-card p-4 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                style={{ '--sr-delay': `${i * 60}ms` } as React.CSSProperties}
              >
                <MapPin className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-sm text-ink">{area}</span>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Nearby Locations */}
      {location.nearby.length > 0 && (
        <section className="bg-bg-secondary">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <div className="text-center">
                <SectionLabel label="Nearby" />
                <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                  Nearby Locations We Serve
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {location.nearby.map((nearby, i) => {
                const slug = nearby.toLowerCase().replace('web design ', '');
                const distance = getDistance(location.name, nearby);
                return (
                  <a
                    key={nearby}
                    href={`/web-design-${slug}`}
                    className="scroll-reveal group flex items-center justify-between rounded-xl border border-line bg-card p-5 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                    style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-heading font-semibold text-ink transition-colors group-hover:text-brand">
                        {nearby}
                      </span>
                      <span className="rounded-full border border-line bg-bg-secondary px-2 py-0.5 text-xs text-muted">
                        {distance}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
                  </a>
                );
              })}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="FAQ" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Questions About {location.name}
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-4">
            {location.faqs.map((faq, i) => (
              <div
                key={i}
                className="scroll-reveal"
                style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <FaqItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title={`Get Your ${location.name} Business Online`}
        note={`Join the local businesses in ${location.name} that trust Coltura with their website.`}
      />
    </main>
  );
}
