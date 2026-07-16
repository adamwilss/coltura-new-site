'use client';

import { useState } from 'react';
import type { TradeData } from '@/data/trades';
import { getRelatedTrades } from '@/data/trades';
import { ChevronDown, ArrowRight, Check, AlertTriangle, CheckCircle2 } from 'lucide-react';
import PageHeader from './PageHeader';
import SectionLabel from './SectionLabel';
import CtaBand from './CtaBand';
import Reveal from './Reveal';
import RevealGroup from './RevealGroup';

const DEFAULT_FIXES = [
  'Your new website solves this from day one.',
  'We turn this weakness into a competitive edge.',
  'Built-in automation handles this automatically.',
  'Our design eliminates this problem entirely.',
  'You will never worry about this again.',
];

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

export default function TradePageTemplate({ trade }: { trade: TradeData }) {
  const relatedTrades = getRelatedTrades(trade.slug);

  return (
    <main className="relative">
      {/* Hero */}
      <PageHeader
        eyebrow={`Websites for ${trade.plural}`}
        title={trade.headline}
        subtitle={trade.subheadline}
      />

      {/* Pain Points — Before vs After */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="The Problem & The Fix" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Why Most {trade.plural} Lose Customers Online
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-5">
            {trade.painPoints.map((point, i) => {
              const fixText = trade.benefits[i] ?? DEFAULT_FIXES[i % DEFAULT_FIXES.length];
              return (
                <div
                  key={i}
                  className="scroll-reveal grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]"
                  style={{ '--sr-delay': `${i * 100}ms` } as React.CSSProperties}
                >
                  <div className="rounded-xl border border-red-500/10 bg-red-500/[0.03] p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <AlertTriangle className="h-4 w-4 text-red-500" />
                      <p className="text-xs font-heading font-semibold uppercase tracking-wider text-red-500">The Problem</p>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{point}</p>
                  </div>
                  <div className="hidden items-center justify-center md:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                      <ArrowRight className="h-5 w-5 text-brand" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-brand/10 bg-brand/[0.03] p-5">
                    <div className="mb-2 flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-brand" />
                      <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand">The Fix</p>
                    </div>
                    <p className="text-sm leading-relaxed text-ink">{fixText}</p>
                  </div>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="The Solution" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                What a Proper Website Does for {trade.plural}
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trade.benefits.map((benefit, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-xl border border-line bg-card p-6 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand/10">
                  <Check className="h-5 w-5 text-brand" />
                </div>
                <p className="text-sm leading-relaxed text-muted">{benefit}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Features */}
      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="Features" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                What You Get
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="flex flex-wrap justify-center gap-3">
            {trade.features.map((feature, i) => (
              <div
                key={i}
                className="scroll-reveal flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 transition-all hover:border-brand/20"
                style={{ '--sr-delay': `${i * 50}ms` } as React.CSSProperties}
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span className="text-sm text-ink">{feature}</span>
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
                Common Questions About {trade.name} Websites
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-4">
            {trade.faqs.map((faq, i) => (
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

      {/* Related Trades */}
      {relatedTrades.length > 0 && (
        <section className="bg-bg">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <div className="text-center">
                <SectionLabel label="Explore More" />
                <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                  We Build Websites For Every Trade
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTrades.map((related, i) => (
                <a
                  key={related.slug}
                  href={`/websites-for-${related.slug}`}
                  className="scroll-reveal group flex items-center justify-between rounded-xl border border-line bg-card p-5 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                  style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
                >
                  <span className="font-heading font-semibold text-ink transition-colors group-hover:text-brand">
                    Websites for {related.name}
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
                </a>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBand
        title={`Ready to Get Your ${trade.name} Website?`}
        note="Tell us about your business and what you need. We will put together a proposal that makes sense for you — no templates, no surprises."
      />
    </main>
  );
}
