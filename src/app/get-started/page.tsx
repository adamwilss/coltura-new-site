import type { CSSProperties } from 'react';
import { Phone, Eye, Compass, Smartphone, Zap, ShieldCheck, MousePointerClick, MapPin, Mail, FileText } from 'lucide-react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import Counter from '@/components/Counter';
import AuditForm from '@/components/AuditForm';
import LeadAnalytics from '@/components/LeadAnalytics';
import SpotsLeft from '@/components/SpotsLeft';
import FaqItem from './FaqItem';

import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/lib/whatsapp';
import { generateMetadata as buildMetadata, generateFAQPageSchema, generateLocalBusinessSchema } from '@/lib/seo';

/* ── SEO ──────────────────────────────────────────────────────────────── */
export const metadata = buildMetadata({
  title: 'Free Website Growth Audit for Local Businesses | Coltura',
  description:
    'Get a free, human-reviewed growth audit of your website in 48 hours. Fill in the short form and we’ll show you exactly what’s costing you enquiries — and how to fix it. Normally £99, yours free.',
  keywords: ['free website audit', 'website review', 'growth audit', 'local business website', 'Cheshire web design'],
  canonical: 'https://coltura.uk/get-started',
  ogTitle: 'Is your website costing you customers? Get a free audit.',
  ogDescription: 'A real person reviews your site by hand and emails you clear, practical feedback within 48 hours. Normally £99, yours free.',
});

/* ── Data ─────────────────────────────────────────────────────────────── */
const STATS = [
  { to: 53, suffix: '%', label: 'of mobile visitors leave a site that takes over 3 seconds to load.' },
  { to: 7, suffix: '%', label: 'fewer conversions for every 1 second of extra load time.' },
  { to: 70, suffix: '%', label: 'of local searches happen on a phone — where most sites struggle.' },
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

const PROCESS_STEPS = [
  { step: '01', title: 'You send us your site', desc: 'Fill in the short form with your details and web address. Takes under a minute — no back-and-forth.' },
  { step: '02', title: 'A real person reviews it', desc: 'Not a bot. We go through your homepage, service and contact pages and your mobile experience by hand.' },
  { step: '03', title: 'You get a branded PDF', desc: 'Within 48 hours: a clear, branded audit showing what works, what doesn’t, and what to fix first.' },
  { step: '04', title: 'No pushy sales call', desc: 'If it only needs small fixes, we’ll tell you — free. If a rebuild makes sense, we’ll show you what we’d build. No pressure.' },
];

const TESTIMONIALS = [
  { name: 'Ric Wilson', role: 'Owner, Regenovate — Mergers & Acquisitions', url: 'https://www.regenovate.co.uk/', displayUrl: 'regenovate.co.uk', quote: "Coltura built our corporate site for Regenovate, a mergers and acquisitions firm handling multi-million-pound deals. They balanced credibility with clarity, and the site performs flawlessly. Adam doesn't just build websites. He understands what a business needs to look like before people trust it with serious money." },
  { name: 'ERPExperts', role: 'ERP Implementation & Support', url: '', displayUrl: '', quote: "Coltura built our website and it has been a game changer for how we present ourselves online. The site is fast, professional, and actually brings in enquiries. Adam understood exactly what we needed and delivered it quickly." },
  { name: 'David Hargraves', role: 'Build to Retire', url: '', displayUrl: '', quote: "Coltura built a clean, professional website for Build to Retire that perfectly captures what we do. The process was straightforward, the turnaround was fast, and the result is a site we are proud to send people to." },
  { name: 'Solar in Sport', role: 'Cheaper electricity for grassroots sports clubs', url: 'https://solarinsport.uk/', displayUrl: 'solarinsport.uk', quote: "We built the website for Solar in Sport, a service that helps grassroots sports clubs switch to solar energy with zero upfront cost. The site explains a complex offer clearly, builds trust with clubs, and drives enquiries across the UK." },
];

const FAQS = [
  { question: 'Is the audit really free?', answer: 'Yes. No cost, no obligation, no hidden charges. We review your site and send you honest feedback. That is it.' },
  { question: 'How does it work — do I need to fill in a form?', answer: 'Just the short form above: your name, website and what you want more of. It takes under a minute. Prefer WhatsApp or a call? Those work too.' },
  { question: 'How long does the audit take?', answer: 'We aim to send your audit within 48 hours of receiving your details.' },
  { question: 'Will you try to sell me something?', answer: 'No. The audit is genuinely free and useful on its own. If your site needs a rebuild, we will explain why and what it would cost. If it only needs small fixes, we will tell you that too.' },
  { question: 'Do I need a new website?', answer: 'Not necessarily. Many businesses just need small improvements. We will tell you honestly whether a rebuild makes sense or whether tweaks will do the job.' },
  { question: 'How much does a new website cost?', answer: 'From £500 for a landing page up to £1,500 for a flagship site with full SEO — you own it outright. Ongoing care is optional, from £149/mo.' },
];

const CHECKS = ['Free, no obligation', 'Reviewed by a human', 'Back in 48 hours'];

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

export default function GetStartedPage() {
  const jsonLd = [generateFAQPageSchema(FAQS), generateLocalBusinessSchema()];

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadAnalytics />
      <Nav />

      {/* ── HERO — copy left, lead form right (above the fold) ──────────── */}
      <section className="relative overflow-hidden bg-bg">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: 'linear-gradient(180deg, rgb(var(--card) / 0.7) 0%, transparent 100%)' }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.06) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:pb-24">
          {/* Copy */}
          <div>
            <div className="reveal-1">
              <SectionLabel label="Free Growth Audit" tone="brand" />
            </div>
            <h1 className="reveal-2 mb-5 text-balance font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
              Is your website costing you <span className="text-brand">customers?</span>
            </h1>
            <p className="reveal-3 mb-6 max-w-[34rem] text-lg leading-relaxed text-muted">
              Send us your site and a real person reviews it by hand — then emails you a clear,
              honest audit within 48 hours, showing exactly what’s costing you enquiries and how to
              fix it. <span className="font-medium text-ink">Normally £99. Yours free.</span>
            </p>
            <div className="reveal-4 mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-1.5"><StarRow /> Trusted by Cheshire businesses</span>
            </div>
            <ul className="reveal-5 mb-7 space-y-2.5">
              {CHECKS.map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-ink">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <svg className="h-3 w-3 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <div className="reveal-6">
              <SpotsLeft />
            </div>
          </div>

          {/* Lead form */}
          <div className="reveal-3">
            <AuditForm id="audit-form" />
          </div>
        </div>
      </section>

      {/* ── STATS band (animated) ──────────────────────────────────────── */}
      <section className="border-y border-line bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <p className="scroll-reveal mb-10 max-w-2xl font-heading text-[clamp(1.25rem,2.6vw,1.75rem)] font-medium leading-snug text-ink">
            A slow, unclear website quietly bleeds enquiries. The numbers are brutal:
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <div key={i} className="scroll-reveal" style={{ '--sr-delay': `${i * 110}ms` } as CSSProperties}>
                <div className="font-heading text-[clamp(2.75rem,7vw,4rem)] font-semibold leading-none text-brand">
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── WHAT WE CHECK ──────────────────────────────────────────────── */}
      <section className="bg-bg">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal mb-12 max-w-2xl">
            <SectionLabel label="What You Get" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              A real, branded audit — not an automated report.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Every audit is done by hand and covers the eight things that decide whether your site wins enquiries or loses them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_CHECK.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="scroll-reveal"
                  style={{ '--sr-delay': `${(i % 4) * 80}ms` } as CSSProperties}
                >
                  <Icon size={20} strokeWidth={1.5} className="mb-3 text-brand" />
                  <h4 className="mb-1 text-sm font-semibold text-ink">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </RevealGroup>
      </section>

      {/* ── REAL SAMPLE AUDIT (embedded PDF) ───────────────────────────── */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="lg:pt-4">
              <SectionLabel label="See It For Yourself" />
              <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
                This is exactly what lands in your inbox.
              </h2>
              <p className="mb-6 max-w-lg text-lg leading-relaxed text-muted">
                A real Coltura growth audit — clear, branded, and practical. No jargon, no filler.
                Just what’s working, what isn’t, and what to fix first.
              </p>
              <a
                href="#audit-form"
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Get mine free
              </a>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_28px_56px_-28px_rgba(0,0,0,0.24)]">
                <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">Coltura Growth Audit</span>
                  <span className="ml-auto shrink-0 rounded border border-brand/25 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
                    Real example
                  </span>
                </div>
                <iframe
                  src="/coltura-sample-site-audit.pdf#toolbar=0&navpanes=0&view=FitH"
                  title="Example Coltura Growth Audit"
                  loading="lazy"
                  className="h-[500px] w-full bg-white sm:h-[620px]"
                />
              </div>
              <a
                href="/coltura-sample-site-audit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold text-brand transition-colors hover:underline"
              >
                <FileText size={17} strokeWidth={2} />
                Open the full example audit
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── WHY SITES DON'T CONVERT — editorial index ──────────────────── */}
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
            <a href="#audit-form" className="font-medium text-brand hover:underline">Send us your site</a>{' '}
            and we’ll tell you — or{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
              message us on WhatsApp
            </a>.
          </p>
        </Reveal>
      </section>

      {/* ── PROCESS — what happens after you submit ────────────────────── */}
      <section className="bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
            <div>
              <SectionLabel label="The Process" />
              <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
                What happens after you submit.
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

      {/* ── TESTIMONIALS ───────────────────────────────────────────────── */}
      <section className="bg-bg">
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
                style={{ '--sr-delay': `${(i % 2) * 90}ms` } as CSSProperties}
              >
                <StarRow className="mb-4" />
                <blockquote className="mb-6 flex-1 text-[15px] leading-relaxed text-ink/90">&ldquo;{t.quote}&rdquo;</blockquote>
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
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <h2 className="text-balance font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
            Find out what your website is missing.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Send us your site and get honest, practical feedback within 48 hours — no pressure, no jargon, no obligation.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#audit-form"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-brand px-10 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
            >
              Get my free audit
            </a>
            <a
              href="tel:+447958394808"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              <Phone size={15} strokeWidth={1.75} />
              Or call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8">
            <SpotsLeft className="text-center" />
          </div>
        </Reveal>
      </section>

      <Footer />

      {/* Sticky mobile CTA — form is the primary action */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line/70 bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-2">
          <a
            href="#audit-form"
            className="flex flex-[2] items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-on-brand transition-transform active:scale-[0.98]"
          >
            Get my free audit
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
