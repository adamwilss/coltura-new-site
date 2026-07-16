'use client';

import { useState } from 'react';
import type { ResourceData } from '@/data/resources';
import { getResourceBySlug } from '@/data/resources';
import { ChevronDown, Lightbulb, Mail } from 'lucide-react';
import PageHeader from './PageHeader';
import SectionLabel from './SectionLabel';
import CtaBand from './CtaBand';
import Reveal from './Reveal';
import RevealGroup from './RevealGroup';
import Nav from './Nav';
import Footer from './Footer';

function isPullquote(text: string): boolean {
  if (text.length < 100) return true;
  if (/\d+%|\d+\s+(per\s+(day|month|year)|daily|yearly|hourly|seconds|minutes|hours|week)/.test(text)) return true;
  return false;
}

function isNumberedItem(text: string): { number: string; rest: string } | null {
  const match = text.match(/^(\d+)\.\s+(.*)$/);
  if (match) return { number: match[1], rest: match[2] };
  return null;
}

function getFirstSentence(text: string, maxLen = 110): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  const sentence = m ? m[0] : text;
  if (sentence.length > maxLen) return sentence.slice(0, maxLen).trim() + '…';
  return sentence;
}

function KeyTakeaway({ text }: { text: string }) {
  return (
    <div className="my-8 rounded-xl border border-brand/20 bg-brand/[0.04] p-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
        <div>
          <p className="mb-1 text-xs font-heading font-semibold uppercase tracking-wider text-brand">Key Takeaway</p>
          <p className="text-sm leading-relaxed text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
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

function splitContent(content: string[]) {
  const total = content.length;
  const introEnd = Math.max(1, Math.min(2, Math.ceil(total * 0.25)));
  const keyEnd = Math.max(introEnd + 1, Math.min(introEnd + 3, Math.ceil(total * 0.65)));
  return {
    intro: content.slice(0, introEnd),
    keyPoints: content.slice(introEnd, keyEnd),
    whatThisMeans: content.slice(keyEnd),
  };
}

export default function ResourcePageTemplate({
  resource,
  date = '2025-01-15',
}: {
  resource: ResourceData;
  date?: string;
}) {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const { intro, keyPoints, whatThisMeans } = splitContent(resource.content);

  const renderParagraphs = (paragraphs: string[], startIndex: number) => {
    const nodes: React.ReactNode[] = [];
    paragraphs.forEach((text, localIdx) => {
      const globalIdx = startIndex + localIdx;
      const numbered = isNumberedItem(text);

      if (!text.trim()) return; // skip empty strings

      if (numbered) {
        nodes.push(
          <div key={`p-${globalIdx}`} className="flex gap-4 items-start text-lg leading-relaxed text-ink">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 text-sm font-heading font-bold text-brand">{numbered.number}</span>
            <p>{numbered.rest}</p>
          </div>
        );
      } else if (isPullquote(text)) {
        nodes.push(
          <blockquote key={`p-${globalIdx}`} className="relative my-8 border-l-2 border-brand pl-6 md:pl-8">
            <p className="font-heading text-xl font-medium italic leading-snug text-ink">"{text}"</p>
          </blockquote>
        );
      } else {
        nodes.push(
          <p key={`p-${globalIdx}`} className="text-lg leading-relaxed text-ink">{text}</p>
        );
      }

      if ((globalIdx + 1) % 3 === 0 && globalIdx < resource.content.length - 1) {
        nodes.push(<KeyTakeaway key={`kt-${globalIdx}`} text={getFirstSentence(text)} />);
      }
    });
    return nodes;
  };

  const related = resource.relatedResources
    .map((slug) => getResourceBySlug(slug))
    .filter(Boolean) as ResourceData[];

  return (
    <main className="relative">
      <Nav />
      {/* Hero */}
      <PageHeader
        eyebrow={resource.title}
        title={resource.headline}
        subtitle={resource.excerpt}
      />

      {/* Meta */}
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 pt-0 pb-4 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              <span>{formattedDate}</span>
              <span className="text-line">·</span>
              <span>{resource.readTime}</span>
              <span className="text-line">·</span>
              <span>Coltura Team</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-8 sm:px-8 sm:py-16">
          <Reveal>
            <SectionLabel label="Introduction" />
            <div className="space-y-8">{renderParagraphs(intro, 0)}</div>
          </Reveal>

          <Reveal className="mt-16">
            <SectionLabel label="Key Points" />
            <div className="space-y-8">{renderParagraphs(keyPoints, intro.length)}</div>
          </Reveal>

          <Reveal className="mt-16">
            <SectionLabel label="What This Means for You" />
            <div className="space-y-8">{renderParagraphs(whatThisMeans, intro.length + keyPoints.length)}</div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <div className="text-center">
              <SectionLabel label="FAQ" />
              <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                Common Questions
              </h2>
            </div>
          </Reveal>
          <RevealGroup className="space-y-4">
            {resource.faqs.map((faq, i) => (
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

      {/* Related Resources */}
      {related.length > 0 && (
        <section className="bg-bg">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <Reveal>
              <div className="text-center">
                <SectionLabel label="Keep Reading" />
                <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,2.25rem)] font-medium text-ink">
                  Read Next
                </h2>
              </div>
            </Reveal>
            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((res, i) => (
                <a
                  key={res.slug}
                  href={`/${res.slug}`}
                  className="scroll-reveal group flex gap-4 rounded-xl border border-line bg-card p-4 transition-all hover:border-brand/20 hover:shadow-[0_0_20px_rgba(223,44,50,0.06)]"
                  style={{ '--sr-delay': `${i * 80}ms` } as React.CSSProperties}
                >
                  <div className="flex w-20 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <Mail className="h-8 w-8 text-brand/40" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-brand">Resource</span>
                      <span className="text-line">·</span>
                      <span className="text-[10px] text-muted">{res.readTime}</span>
                    </div>
                    <h3 className="truncate text-sm font-heading font-semibold text-ink transition-colors group-hover:text-brand">
                      {res.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-xs text-muted">{res.excerpt}</p>
                  </div>
                </a>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBand />
      <Footer />
    </main>
  );
}
