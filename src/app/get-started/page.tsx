'use client';

import { useEffect } from 'react';
import Nav from '@/components/Nav';
import ArchImage from '@/components/ArchImage';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import { Phone, Eye, Compass, Smartphone, Zap, ShieldCheck, MousePointerClick, MapPin, Mail, FileText } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/lib/whatsapp';
import FaqItem from './FaqItem';
import type { CSSProperties } from 'react';

function StarRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="h-4 w-4" fill="#e0a53f" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* Branded audit PDF mockup */
function AuditMockup() {
  return (
    <div className="rounded-2xl border border-line bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_40px_-20px_rgba(0,0,0,0.16)]">
      <div className="mb-4 h-1 rounded-full bg-brand" />
      <div className="mb-5 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/20 bg-brand/10">
          <span className="font-heading text-sm font-bold text-brand">C</span>
        </div>
        <div>
          <span className="font-heading text-sm font-bold tracking-wide text-ink">COLTURA</span>
          <p className="text-[10px] leading-none text-muted">Website Audit Report</p>
        </div>
      </div>
      <div className="mb-4 space-y-2">
        {[75, 100, 83, 66, 80, 60].map((w, i) => (
          <div key={i} className="h-1.5 rounded bg-line" style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="mb-4 h-px w-full bg-gradient-to-r from-brand/20 to-transparent" />
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-muted">Overall Score</span>
        <span className="font-heading text-lg font-bold text-brand">72<span className="text-xs text-muted">/100</span></span>
      </div>
      <div className="mt-3 space-y-1.5">
        {['Speed', 'Design', 'SEO', 'Mobile'].map((cat, ci) => (
          <div key={ci} className="flex items-center gap-2">
            <span className="w-10 text-right text-[10px] text-muted">{cat}</span>
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-brand/60" style={{ width: `${65 + ci * 8}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Data */
const TESTIMONIALS = [
  { name: 'Ric Wilson', role: 'Owner, Regenovate — Mergers & Acquisitions', url: 'https://www.regenovate.co.uk/', displayUrl: 'regenovate.co.uk', quote: "Coltura built our corporate site for Regenovate, a mergers and acquisitions firm handling multi-million-pound deals. They balanced credibility with clarity, and the site performs flawlessly. Adam doesn't just build websites. He understands what a business needs to look like before people trust it with serious money." },
  { name: 'ERPExperts', role: 'ERP Implementation & Support', url: '', displayUrl: '', quote: "Coltura built our website and it has been a game changer for how we present ourselves online. The site is fast, professional, and actually brings in enquiries. Adam understood exactly what we needed and delivered it quickly." },
  { name: 'David Hargraves', role: 'Build to Retire', url: '', displayUrl: '', quote: "Coltura built a clean, professional website for Build to Retire that perfectly captures what we do. The process was straightforward, the turnaround was fast, and the result is a site we are proud to send people to." },
  { name: 'Solar in Sport', role: 'Cheaper electricity for grassroots sports clubs', url: 'https://solarinsport.uk/', displayUrl: 'solarinsport.uk', quote: "We built the website for Solar in Sport, a service that helps grassroots sports clubs switch to solar energy with zero upfront cost. The site explains a complex offer clearly, builds trust with clubs, and drives enquiries across the UK." },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Send your site on WhatsApp', desc: 'Tap the button, paste your web address and tell us what you do. Takes 30 seconds — no forms, no hold music.' },
  { step: '02', title: 'A real person reviews it', desc: 'Not a bot. We go through your homepage, service and contact pages and your mobile experience by hand.' },
  { step: '03', title: 'You get a branded PDF', desc: 'Within 48 hours: a clear, branded audit showing what works, what doesn’t, and what to fix first.' },
  { step: '04', title: 'No pushy sales call', desc: 'If it only needs small fixes, we’ll tell you — free. If a rebuild makes sense, we’ll show you what we’d build. No pressure.' },
];

const WHAT_WE_CHECK = [
  { icon: Eye, title: 'First impression', desc: 'What a visitor sees in the first 3 seconds — is it clear what you do?' },
  { icon: Compass, title: 'Clarity of offer', desc: 'Can someone understand your service and why to choose you within seconds?' },
  { icon: Smartphone, title: 'Mobile experience', desc: 'Over 70% of local searches happen on phones. Does your site work on them?' },
  { icon: Zap, title: 'Speed & usability', desc: 'Slow sites lose customers. We check load time and how easy it is to get around.' },
  { icon: ShieldCheck, title: 'Trust signals', desc: 'Reviews, accreditations, real photos, contact details — does it look trustworthy?' },
  { icon: MousePointerClick, title: 'Calls to action', desc: 'Is it obvious what to do next? Call, book, enquire, visit?' },
  { icon: MapPin, title: 'Local visibility', desc: 'Can customers find you on Google? We check your local SEO foundations.' },
  { icon: Mail, title: 'Easy to enquire', desc: 'Is the form working? Is the number easy to find? Do enquiries get through?' },
];

const WEBSITE_PROBLEMS = [
  { issue: 'No clear call to action above the fold', impact: "Visitors land, scan, and leave because they don't know what to do next. Every second they have to think is a lost enquiry." },
  { issue: 'Slow loading on mobile', impact: '53% of mobile visitors leave if a site takes longer than 3 seconds to load. Google also ranks slow sites lower.' },
  { issue: 'No trust signals visible', impact: "If visitors can't see reviews, accreditations or real photos of your work, they assume you have none to show." },
  { issue: 'Contact form asks too many questions', impact: 'Every extra field drops your completion rate. Long forms feel like an interrogation.' },
  { issue: 'Unclear what you actually do', impact: "If a visitor can't understand your service in under 5 seconds, they leave. Jargon and vague headlines kill conversions." },
];

const FAQS = [
  { q: 'Is the review really free?', a: 'Yes. No cost, no obligation, no hidden charges. We review your site and send you honest feedback. That is it.' },
  { q: 'Do I need to fill in a form?', a: 'No forms. Just tap the WhatsApp button, send us your website link, and we take it from there. You can also call if you prefer.' },
  { q: 'How long does the review take?', a: 'We aim to send your review within 48 hours of receiving your website link.' },
  { q: 'Will you try to sell me something?', a: 'No. The review is genuinely free and useful on its own. If your site needs a rebuild, we will explain why and what it would cost. If it only needs small fixes, we will tell you that too.' },
  { q: 'Do I need a new website?', a: 'Not necessarily. Many businesses just need small improvements. We will tell you honestly whether a rebuild makes sense or whether tweaks will do the job.' },
  { q: 'How much does a new website cost?', a: 'From £495 for a single-page site up to £1,495 for an 8-page build with full SEO. You own the site. Ongoing care from £99/mo if you want it.' },
];

export default function GetStartedPage() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const method = href.includes('wa.me') ? 'whatsapp' : href.startsWith('tel:') ? 'phone' : null;
      if (!method) return;
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { event_category: 'lead', event_label: `get-started-${method}`, method, page_location: window.location.href });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <main className="relative">
      <Nav />

      {/* ── HERO — copy left, arch "window" image right ────────────────── */}
      <section className="relative overflow-hidden bg-bg lg:h-[620px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: 'linear-gradient(180deg, rgb(var(--card) / 0.7) 0%, transparent 100%)' }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[720px] lg:block">
          <ArchImage shapeClassName="hero-shape-desktop" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:flex lg:h-full lg:items-center lg:py-0">
          <div className="lg:max-w-[50%]">
            <div className="reveal-1">
              <SectionLabel label="Free Growth Audit" tone="brand" />
            </div>
            <h1 className="reveal-2 mb-5 text-balance font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Is your website costing you <span className="text-brand">customers?</span>
            </h1>
            <p className="reveal-3 mb-7 max-w-[34rem] text-lg leading-relaxed text-muted">
              Message your website on WhatsApp and a real person sends back a clear, honest
              audit within 48 hours — showing exactly what’s costing you enquiries and how to
              fix it. <span className="font-medium text-ink">Normally £99. Yours free.</span>
            </p>
            <div className="reveal-4 mb-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton label="Get My Free Audit" className="w-full sm:w-auto" />
              <a
                href="tel:+447958394808"
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
              >
                <Phone size={15} strokeWidth={1.75} />
                Or call {PHONE_DISPLAY}
              </a>
            </div>
            <div className="reveal-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
              <span className="flex items-center gap-1.5"><StarRow /> Trusted by Cheshire businesses</span>
              {['Free, no obligation', 'Reviewed by a human', 'Back in 48 hours'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile: arch image beneath the copy */}
          <div className="relative mx-auto mt-12 aspect-[4/5] w-full max-w-[420px] lg:hidden">
            <ArchImage shapeClassName="hero-shape-mobile" />
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS — timeline ────────────────────────────────────── */}
      <section className="bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
            <div>
              <SectionLabel label="How It Works" />
              <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
                From WhatsApp to a clear plan.
              </h2>
            </div>
            <ol className="relative grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:gap-x-8">
              {PROCESS_STEPS.map((stage, i) => (
                <li
                  key={stage.step}
                  className="scroll-reveal relative pl-14"
                  style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand font-heading text-xs font-semibold text-on-brand ring-4 ring-bg-secondary"
                  >
                    {stage.step}
                  </span>
                  <h3 className="mb-1.5 text-base font-semibold text-ink">{stage.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{stage.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </RevealGroup>
      </section>

      {/* ── WHAT YOU GET — audit example (asymmetric) ──────────────────── */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <SectionLabel label="What You Get" />
              <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
                A real, branded audit — not an automated report.
              </h2>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">
                This is exactly what lands back in your WhatsApp. Every review covers these eight areas:
              </p>
              <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                {WHAT_WE_CHECK.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Icon size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-brand" />
                      <div>
                        <h4 className="mb-0.5 text-sm font-semibold text-ink">{item.title}</h4>
                        <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 lg:sticky lg:top-28 lg:self-start">
              <div className="w-full max-w-[300px]">
                <AuditMockup />
              </div>
              <a
                href="/coltura-sample-site-audit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText size={18} strokeWidth={2} />
                See a real example audit
              </a>
              <p className="text-center text-[11px] text-muted">Opens a real PDF — exactly what you’ll receive</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section className="bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal mb-12 max-w-2xl">
            <SectionLabel label="Trusted by Cheshire Businesses" tone="brand" />
            <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Real businesses. Real websites. Real results.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="scroll-reveal flex flex-col rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_34px_-18px_rgba(0,0,0,0.14)] sm:p-8"
                style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}
              >
                <StarRow className="mb-4" />
                <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-ink/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 border-t border-line pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 font-heading text-sm font-bold text-brand">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs leading-tight text-muted">{t.role}</p>
                    {t.url && (
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs text-brand transition-colors hover:underline">
                        {t.displayUrl}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── COMMON PROBLEMS — editorial index ──────────────────────────── */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10">
            <SectionLabel label="Why Sites Don’t Convert" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Most sites lose customers for the <span className="text-brand">same few reasons.</span>
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              These are the ones we find again and again. If any sound familiar, your free audit will catch them.
            </p>
          </div>
          <div className="border-t border-line">
            {WEBSITE_PROBLEMS.map((item, i) => (
              <div key={i} className="flex items-baseline gap-5 border-b border-line py-6 md:gap-8">
                <span className="w-8 shrink-0 font-heading text-sm tabular-nums text-brand/70">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-1 font-heading text-lg font-medium text-ink">{item.issue}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-muted">
            Not sure which is hurting you?{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
              Send us your site on WhatsApp
            </a>{' '}
            and we’ll tell you.
          </p>
        </Reveal>
      </section>

      {/* ── BUG PROMISE ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <Reveal className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel label="Bug Free Care" />
            <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.05] tracking-tight text-ink">
              We eat website bugs <span className="text-brand">for breakfast.</span>
            </h2>
            <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
              Geckos eat bugs. We do too — broken buttons, dead forms, slow pages, all handled.
            </p>
            <p className="max-w-md font-heading text-lg font-medium leading-snug text-ink">
              Find a bug in the first 30 days? We fix it free.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
            <video autoPlay muted loop playsInline poster="/videos/bug-eating-poster.png" className="h-auto w-full">
              <source src="/videos/bug-eating-transparent.webm" type="video/webm" />
              <source src="/videos/bug-eating.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8">
            <SectionLabel label="FAQ" />
            <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Frequently asked questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <CtaBand
        title="Ready to find out what your website is missing?"
        note="Send us your website on WhatsApp now. Honest feedback within 48 hours — no pressure, no jargon, no obligation."
      />

      <Footer />

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line/70 bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-[2] items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-on-brand transition-transform active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.304-1.654a11.9 11.9 0 005.723 1.457h.005c6.581 0 11.94-5.359 11.943-11.893a11.82 11.82 0 00-3.48-8.413z" />
            </svg>
            Free Audit on WhatsApp
          </a>
          <a
            href="tel:+447958394808"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line py-3 text-sm font-semibold text-ink"
          >
            <Phone size={15} strokeWidth={1.75} />
            Call
          </a>
        </div>
      </div>
    </main>
  );
}
