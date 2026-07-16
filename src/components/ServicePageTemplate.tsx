'use client';

import { useState } from 'react';
import type { ServiceData } from '@/data/services';
import { getServiceBySlug } from '@/data/services';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';
import PageHeader from './PageHeader';
import SectionLabel from './SectionLabel';
import CtaBand from './CtaBand';
import Reveal from './Reveal';
import RevealGroup from './RevealGroup';

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

export default function ServicePageTemplate({ service }: { service: ServiceData }) {
  return (
    <main className="relative">
      {/* Hero */}
      <PageHeader
        eyebrow="Service"
        title={service.headline}
        subtitle={service.subheadline}
      />

      {/* Description */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div>
                <SectionLabel label="What This Service Solves" />
                <p className="text-lg leading-relaxed text-muted">
                  {service.description}
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-brand">
                  Key Results
                </p>
                {service.benefits.slice(0, 3).map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-line bg-card p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <p className="text-sm leading-relaxed text-ink">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="What's Included" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Feature Showcase
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-xl border border-line bg-card p-6 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                  <Check className="h-5 w-5 text-brand" />
                </div>
                <p className="text-sm leading-relaxed text-ink">{feature}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Benefits Timeline */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="Results" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Your Journey to Better Results
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-6">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="scroll-reveal flex items-start gap-4"
                style={{ '--sr-delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand font-heading font-bold text-sm">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-sm leading-relaxed text-ink">{benefit}</p>
                </div>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="FAQ" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Questions About {service.name}
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-4">
            {service.faqs.map((faq, i) => (
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

      {/* Related Services */}
      {service.relatedServices.length > 0 && (
        <section className="bg-bg">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <div className="text-center">
                <SectionLabel label="Related" />
                <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                  Complete Your Setup
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedServices.map((slug, i) => {
                const related = getServiceBySlug(slug);
                return (
                  <a
                    key={slug}
                    href={`/${slug}`}
                    className="scroll-reveal group flex items-center gap-4 rounded-xl border border-line bg-card p-5 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                    style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 group-hover:bg-brand/20 transition-colors">
                      <Check className="h-5 w-5 text-brand" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-heading text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                        {related?.name || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                      </h3>
                      <p className="truncate text-xs text-muted">
                        {related?.subheadline || 'Add this service to maximise results.'}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted transition-all group-hover:text-brand" />
                  </a>
                );
              })}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBand
        title={`Ready for ${service.name}?`}
        note="Tell us about your business and what you need. We will put together a proposal that makes sense for you."
      />
    </main>
  );
}
