import type { CSSProperties } from 'react';
import Image from 'next/image';
import { Phone, Eye, Compass, Smartphone, Zap, ShieldCheck, MousePointerClick, MapPin, Mail } from 'lucide-react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import Counter from '@/components/Counter';
import ArchImage from '@/components/ArchImage';
import AuditFunnel from '@/components/AuditFunnel';
import AuditBook from '@/components/AuditBook';
import UrlScanner from '@/components/UrlScanner';
import BeforeAfter from '@/components/BeforeAfter';
import LeakGrid from '@/components/LeakGrid';
import PhoneRings from '@/components/PhoneRings';
import ExitIntent from '@/components/ExitIntent';
import LeadAnalytics from '@/components/LeadAnalytics';
import SpotsLeft from '@/components/SpotsLeft';
import FaqItem from './FaqItem';

import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/lib/whatsapp';
import { generateMetadata as buildMetadata, generateFAQPageSchema, generateLocalBusinessSchema } from '@/lib/seo';

/* ── SEO ──────────────────────────────────────────────────────────────── */
export const metadata = buildMetadata({
  title: 'Free Website Audit — Find the Leak Costing You Enquiries | Coltura',
  description:
    'Your website is leaking enquiries. Send it over and I’ll review it personally — a clear, branded audit back within 48 hours showing exactly what to fix first. Normally £99, free this month.',
  keywords: ['free website audit', 'website review', 'growth audit', 'local business website', 'web design for local businesses'],
  canonical: 'https://coltura.uk/get-started',
  ogTitle: 'Your website is leaking enquiries. Find out where — free.',
  ogDescription: 'A real person reviews your site by hand and sends a branded, prioritised audit within 48 hours. Normally £99. Yours free.',
});

/* ── Copy ─────────────────────────────────────────────────────────────── */
// One CTA verb, everywhere. "Review my website free" describes exactly what
// happens next and reinforces the human element.
const CTA_LABEL = 'Review my website free';

// Sourced stats only — an unsourced number costs more trust than it buys.
// (The 53% Google stat lives in LeakGrid as a hundred dots instead.)
const STATS = [
  { to: 7, suffix: '%', label: 'of conversions lost for every extra second a page takes to load.', source: 'Aberdeen Group' },
  { to: 76, suffix: '%', label: 'of people who search locally on their phone visit a business within 24 hours.', source: 'Google' },
];

const WHAT_WE_CHECK = [
  { icon: Eye, title: 'First impression', desc: 'What a visitor sees in the first 3 seconds — is it instantly clear what you do?' },
  { icon: Compass, title: 'Clarity of offer', desc: 'Can someone understand your service, and why to choose you, without thinking?' },
  { icon: Smartphone, title: 'Mobile experience', desc: 'Most local customers find you on a phone. Your site has to be effortless on one.' },
  { icon: Zap, title: 'Speed & usability', desc: 'Slow sites lose customers before they read a word. I check load time and flow.' },
  { icon: ShieldCheck, title: 'Trust signals', desc: 'Reviews, accreditations, real photos, contact details — does it feel safe to call?' },
  { icon: MousePointerClick, title: 'Calls to action', desc: 'Is it obvious what to do next? Call, book, enquire — or scroll away confused?' },
  { icon: MapPin, title: 'Local visibility', desc: 'Can customers actually find you on Google? I check your local SEO foundations.' },
  { icon: Mail, title: 'Easy to enquire', desc: 'Does the form work? Is the number one tap away? Do enquiries get through?' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Tell me where to look', desc: 'Your website, your trade and what you want more of. Four quick questions, under a minute.' },
  { step: '02', title: 'I review it like a customer would', desc: 'Homepage, service pages, contact flow and the mobile experience — by hand, not by bot.' },
  { step: '03', title: 'Your audit lands within 48 hours', desc: 'Branded and prioritised: what’s losing you enquiries, what’s already working, what to fix first.' },
  { step: '04', title: 'You decide what happens next', desc: 'If small fixes will do it, I’ll say so — do them yourself, free. If a rebuild makes sense, I’ll show you exactly what I’d build. No chasing.' },
];

// Quiet proof strip — replaces the testimonial card grid. Screenshots are the
// real sites. Regenovate / ERPExperts / Solar in Sport lines are drawn from the
// clients' own approved quotes. The Dress Agency quote is a DRAFT awaiting the
// owner's sign-off — the visible tag stays until they approve the wording.
const BUILDS = [
  { name: 'Regenovate', role: 'Mergers & acquisitions', img: '/images/builds/regenovate.png', line: '“Credibility with clarity” for multi-million-pound deals — “the site performs flawlessly.”', url: 'https://www.regenovate.co.uk/', displayUrl: 'regenovate.co.uk', draft: false },
  { name: 'ERPExperts', role: 'ERP implementation & support', img: '/images/builds/erp-experts.png', line: '“Fast, professional, and actually brings in enquiries.”', url: '', displayUrl: '', draft: false },
  { name: 'Solar in Sport', role: 'Solar for grassroots clubs', img: '/images/builds/solar-in-sport.png', line: 'A complex offer explained clearly — driving club enquiries across the UK.', url: 'https://solarinsport.uk/', displayUrl: 'solarinsport.uk', draft: false },
  { name: 'The Dress Agency', role: 'Preloved designer fashion · Hazel Grove', img: '/images/builds/dress-agency.png', line: '“Adam understood the shop straight away — the site feels like walking through our door. Elegant, effortless, and new faces mention it every week.” — Owner', url: 'https://www.thedress.agency/', displayUrl: 'thedress.agency', draft: true },
];

const FAQS = [
  { question: 'Is the audit really free?', answer: 'Yes. No cost, no card details, no obligation. You get honest, practical feedback on your site — that’s the whole deal.' },
  { question: 'Why free? What’s in it for you?', answer: 'Honestly? Some audits reveal problems worth fixing properly, and some of those businesses ask me to do the work. That’s how I win clients. If your site only needs small tweaks, you get those for free and we both move on.' },
  { question: 'How long does it take?', answer: 'Under a minute to ask. Your audit is back within 48 hours.' },
  { question: 'Will you try to sell me something?', answer: 'No sales call, no follow-up sequence. If a rebuild makes sense, I’ll say so once — with a price. If it doesn’t, I’ll tell you that too.' },
  { question: 'Do I need a new website?', answer: 'Probably not. Most sites need a handful of fixes, not a rebuild — and the audit tells you exactly which yours needs.' },
  { question: 'How much is a new website, if I do need one?', answer: 'From £500 for a landing page up to £1,500 for a flagship site with full SEO — and you own it outright. Ongoing care is optional, from £149/mo.' },
];

const CHECKS = ['Free, no obligation', 'Reviewed by a real person', 'Back in 48 hours', 'No sales call'];

const CTA_PRIMARY =
  'inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto';

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
  // Ads for this page run UK-wide, so the schema's service area does too.
  const jsonLd = [generateFAQPageSchema(FAQS), generateLocalBusinessSchema('United Kingdom')];

  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LeadAnalytics />
      <AuditFunnel />
      <ExitIntent />
      <Nav />

      {/* ── HERO — the leak, named. One promise, one price anchor, one CTA,
             one testimonial, scarcity stated once. ─────────────────────── */}
      <section className="relative overflow-hidden bg-bg lg:min-h-[680px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72"
          style={{ background: 'linear-gradient(180deg, rgb(var(--card) / 0.7) 0%, transparent 100%)' }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46vw] max-w-[720px] lg:block">
          <ArchImage shapeClassName="hero-shape-desktop" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-8 sm:pt-32 lg:flex lg:min-h-[680px] lg:items-center lg:py-16">
          <div className="lg:max-w-[52%]">
            <div className="reveal-1">
              <SectionLabel label="Free Website Growth Audit" tone="brand" />
            </div>
            <h1 className="reveal-2 mb-4 text-balance font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink sm:mb-5">
              Your website is{' '}
              <span className="relative inline-block text-brand">
                leaking enquiries.
                <svg
                  className="marker-stroke absolute -bottom-[0.14em] left-0 h-[0.18em] w-full"
                  viewBox="0 0 220 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M4 9 C 42 3, 92 3, 132 6 S 202 9, 216 4" stroke="currentColor" strokeWidth="5" strokeLinecap="round" pathLength="1" />
                </svg>
              </span>{' '}
              I&rsquo;ll show you exactly where.
            </h1>
            {/* Most ad clicks are mobile: keep the first screen tight there —
                short line + scanner in view; the full pitch shows from sm up. */}
            <p className="reveal-3 mb-4 max-w-[34rem] text-base leading-relaxed text-muted sm:hidden">
              Type your website below. A real person reviews it — your audit is back within 48 hours.
            </p>
            <p className="reveal-3 mb-5 hidden max-w-[34rem] text-lg leading-relaxed text-muted sm:block">
              Send me your site and I&rsquo;ll go through it personally, the way a customer would.
              Within 48 hours you get a clear, branded audit: what&rsquo;s costing you enquiries,
              what&rsquo;s already working, and what to fix first.
            </p>
            <p className="reveal-3 mb-6 flex items-baseline gap-2.5">
              <span className="text-lg text-muted line-through decoration-brand/60 decoration-2">£99</span>
              <span className="relative inline-block px-1.5 font-heading text-2xl font-semibold text-ink">
                Free
                <svg
                  className="marker-circle pointer-events-none absolute inset-0 h-full w-full scale-x-[1.44] scale-y-[1.76]"
                  viewBox="0 0 120 64"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                  style={{ '--draw-delay': '1600ms' } as CSSProperties}
                >
                  <path
                    d="M18 32 C 14 12, 96 4, 108 24 C 116 44, 66 62, 34 56 C 10 51, 8 38, 20 26"
                    stroke="rgb(var(--brand))"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    pathLength="1"
                  />
                </svg>
              </span>
              <span className="text-sm text-muted">this month</span>
            </p>
            {/* The hook: type the URL here, watch the checks queue against
                your own domain, land in the funnel already at step 2. */}
            <div className="reveal-4 mb-3">
              <UrlScanner />
            </div>
            <a
              href="tel:+447958394808"
              className="reveal-4 mb-5 inline-flex items-center gap-2 text-sm text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              <Phone size={13} strokeWidth={1.75} />
              Rather talk it through? Call {PHONE_DISPLAY}
            </a>
            <div className="reveal-5 mb-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted">
              {CHECKS.map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="h-3.5 w-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
            <div className="reveal-5 mb-7">
              <SpotsLeft />
            </div>
            {/* Proof directly under the ask — one strong voice, not a wall of cards. */}
            <figure className="reveal-6 max-w-[32rem] border-l-2 border-brand/50 pl-5">
              <StarRow className="mb-2.5" />
              <blockquote className="text-[15px] leading-relaxed text-ink/90">
                &ldquo;Adam doesn&rsquo;t just build websites. He understands what a business needs to
                look like before people trust it with serious money.&rdquo;
              </blockquote>
              <figcaption className="mt-3 flex items-center gap-3">
                <Image
                  src="/images/ric-wilson.png"
                  alt="Ric Wilson, owner of Regenovate"
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-full border border-line object-cover"
                />
                <span className="text-xs leading-relaxed text-muted">
                  <span className="font-semibold text-ink">Ric Wilson</span> — Owner,{' '}
                  <a href="https://www.regenovate.co.uk/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Regenovate
                  </a>
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Mobile: arch image beneath the copy */}
          <div className="relative mx-auto mt-12 aspect-[4/5] w-full max-w-[420px] lg:hidden">
            <ArchImage shapeClassName="hero-shape-mobile" />
          </div>
        </div>
      </section>

      {/* ── THE MOMENT — a dark, full-screen statement PINS while the proof
             panel physically rises up and covers it (same stacking mechanic
             as the homepage Statement/Services pair). The stillness of the
             pinned line, then the audit sliding over it, IS the pitch:
             here's the threat — and here's the document that answers it. ── */}
      <div className="relative">
        <section className="sticky top-0 z-0 flex min-h-screen items-center justify-center overflow-hidden bg-bg px-5 py-24 sm:px-8">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.06) 0%, transparent 60%)' }}
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-7 block h-px w-10 bg-brand/55" />
            <h2 className="text-balance font-heading text-[clamp(2rem,5.2vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.015em] text-ink">
              Right now, someone nearby is searching for{' '}
              <span className="text-brand">exactly what you do.</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted">
              They&rsquo;ll call whoever&rsquo;s website makes them feel safest — and they decide in
              about five seconds. The audit shows you how to make sure that&rsquo;s you.
            </p>
          </div>
        </section>

        {/* ── THE AUDIT, AS A BOOK — the dark panel that rises over the
               statement. Proof this high on the page is deliberate: show,
               don't sell. The pages are dark, so the stage is too. ──────── */}
        <section className="dark relative z-10 flex min-h-screen flex-col justify-center rounded-t-[2rem] bg-bg-secondary shadow-[0_-30px_70px_-35px_rgba(0,0,0,0.55)] sm:rounded-t-[2.75rem]">
          <Reveal className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <SectionLabel label="Proof, Not Promises" tone="brand" />
              <h2 className="mb-4 font-heading text-[clamp(1.7rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
                This is exactly what lands in your inbox.
              </h2>
              <p className="text-lg leading-relaxed text-muted">
                A real Coltura growth audit — have a read. Branded, specific, prioritised.
                Nothing you can&rsquo;t act on the same day.
              </p>
            </div>

            <AuditBook
              basePath="/images/audit-pages"
              pageCount={8}
              label="Coltura Growth Audit"
              pdfHref="/coltura-sample-site-audit.pdf"
            />

            <div className="mt-12 text-center">
              <button type="button" data-audit-funnel className={CTA_PRIMARY}>
                {CTA_LABEL}
              </button>
            </div>
          </Reveal>
        </section>
      </div>

      {/* ── WHAT I CHECK — the 8-point audit ───────────────────────────── */}
      <section className="bg-bg">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal mb-12 max-w-2xl">
            <SectionLabel label="The 8-Point Audit" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Eight checks decide whether your site wins the job.
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Every audit covers the eight things customers judge before they pick up the phone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_WE_CHECK.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="scroll-reveal" style={{ '--sr-delay': `${(i % 4) * 80}ms` } as CSSProperties}>
                  <Icon size={20} strokeWidth={1.5} className="mb-3 text-brand" />
                  <h4 className="mb-1 text-sm font-semibold text-ink">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </RevealGroup>
      </section>

      {/* ── DRAG THE DIFFERENCE — the renovation, in your hands ─────────── */}
      <section className="border-y border-line bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal mb-10 max-w-2xl">
            <SectionLabel label="Drag The Difference" tone="brand" />
            <h2 className="mb-3 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Same plumber. Same prices. <span className="text-brand">Different website.</span>
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              Drag the handle and ask yourself one question: which version gets the call?
              (Made-up business — but we&rsquo;ve renovated plenty that started like this.)
            </p>
          </div>
          <div className="scroll-reveal">
            <BeforeAfter />
          </div>
        </RevealGroup>
      </section>

      {/* ── HOW BIG IS THE LEAK — the 53% as people + sourced stats ─────── */}
      <section className="bg-bg">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="scroll-reveal mb-12 max-w-2xl font-heading text-[clamp(1.25rem,2.6vw,1.75rem)] font-medium leading-snug text-ink">
            A leaking site never tells you. You just get fewer calls.
          </p>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
            <div className="scroll-reveal">
              <LeakGrid />
            </div>
            <div>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {STATS.map((s, i) => (
                  <div key={i} className="scroll-reveal" style={{ '--sr-delay': `${i * 110}ms` } as CSSProperties}>
                    <div className="font-heading text-[clamp(2.75rem,7vw,4rem)] font-semibold leading-none text-brand">
                      <Counter to={s.to} suffix={s.suffix} />
                    </div>
                    <p className="mt-3 max-w-[15rem] text-sm leading-relaxed text-muted">{s.label}</p>
                    <p className="mt-1.5 text-xs text-muted/60">Source: {s.source}</p>
                  </div>
                ))}
              </div>
              <p className="scroll-reveal mt-12 max-w-2xl text-base leading-relaxed text-ink">
                For most local businesses, <span className="font-semibold">one missed job is worth more than fixing the entire site.</span>{' '}
                Finding the leak costs you nothing.{' '}
                <button type="button" data-audit-funnel className="font-semibold text-brand hover:underline">
                  {CTA_LABEL} →
                </button>
              </p>
            </div>
          </div>
        </RevealGroup>
      </section>

      {/* ── RECENT BUILDS — quiet proof strip, drawn from client quotes ── */}
      <section className="bg-bg">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal mb-12 max-w-2xl">
            <SectionLabel label="Recent Builds" />
            <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
              Sites doing this job for real businesses right now.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {BUILDS.map((b, i) => (
              <div key={b.name} className="scroll-reveal" style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}>
                <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_14px_34px_-18px_rgba(0,0,0,0.14)]">
                  <Image
                    src={b.img}
                    alt={`${b.name} website, built by Coltura`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-heading text-lg font-medium text-ink">{b.name}</h3>
                  {b.draft && (
                    <span className="rounded border border-dashed border-brand/40 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
                      Draft quote — needs owner sign-off
                    </span>
                  )}
                </div>
                <p className="mb-3 mt-0.5 text-xs uppercase tracking-[0.08em] text-muted">{b.role}</p>
                <p className="max-w-xs text-sm leading-relaxed text-muted">{b.line}</p>
                {b.url && (
                  <a href={b.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xs font-medium text-brand hover:underline">
                    {b.displayUrl} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </RevealGroup>
      </section>

      {/* ── PROCESS — what happens after you ask ───────────────────────── */}
      <section className="bg-bg-secondary">
        <RevealGroup className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="scroll-reveal grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_2fr] lg:gap-16">
            <div>
              <SectionLabel label="The Process" />
              <h2 className="font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
                What happens after you ask.
              </h2>
            </div>
            <ol className="relative grid grid-cols-1 gap-y-9 sm:grid-cols-2 lg:gap-x-8">
              {PROCESS_STEPS.map((stage, i) => (
                <li key={stage.step} className="scroll-reveal relative pl-14" style={{ '--sr-delay': `${i * 90}ms` } as CSSProperties}>
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

      {/* ── THE POINT OF ALL THIS — the ringing phone, before the FAQ ──── */}
      <PhoneRings funnelCta />

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

      {/* ── FINAL CTA — the no-brainer, spelled out ────────────────────── */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-28">
          <h2 className="text-balance font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
            Worst case? You get a <span className="text-brand">£99 audit for free.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Best case, you find out exactly why the phone isn&rsquo;t ringing — and fix it this
            month. Either way, you&rsquo;ll know where you stand within 48 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" data-audit-funnel className={CTA_PRIMARY.replace('px-8', 'px-10')}>
              {CTA_LABEL}
            </button>
            <a
              href="tel:+447958394808"
              className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg border border-line px-8 text-sm font-semibold text-ink transition-colors hover:border-ink/30 sm:w-auto"
            >
              <Phone size={15} strokeWidth={1.75} />
              Or call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="mt-6 text-sm text-muted">
            Prefer WhatsApp?{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand hover:underline">
              Send your website there instead →
            </a>
          </p>
        </Reveal>
      </section>

      <Footer />

      {/* Sticky mobile CTA — opens the funnel */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line/70 bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-2">
          <button
            type="button"
            data-audit-funnel
            className="flex flex-[2] items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-on-brand transition-transform active:scale-[0.98]"
          >
            {CTA_LABEL}
          </button>
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
