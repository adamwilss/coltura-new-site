'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import PageHeader from '@/components/PageHeader';
import SectionLabel from '@/components/SectionLabel';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import WhatsAppButton from '@/components/WhatsAppButton';
import SpotsLeft from '@/components/SpotsLeft';
import Footer from '@/components/Footer';
import { WHATSAPP_LINK, PHONE_DISPLAY } from '@/lib/whatsapp';
import FaqItem from './FaqItem';

/* ── SVG Icons ────────────────────────────────────────────────────────── */
function IconFirstImpression() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconClarity() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}
function IconMobile() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}
function IconSpeed() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconTrust() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconCTA() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function IconLocalSEO() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconEnquire() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function StarRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} className="h-4 w-4" fill="#fbbf24" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ── Branded audit PDF mockup ─────────────────────────────────────────── */
function AuditMockup() {
  return (
    <div className="rounded-2xl border border-line bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.1)] transition-all duration-500">
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
        <div className="h-1.5 w-3/4 rounded bg-line" />
        <div className="h-1.5 w-full rounded bg-line" />
        <div className="h-1.5 w-5/6 rounded bg-line" />
        <div className="h-1.5 w-2/3 rounded bg-line" />
        <div className="h-1.5 w-4/5 rounded bg-line" />
        <div className="h-1.5 w-3/5 rounded bg-line" />
      </div>
      <div className="mb-4 h-px w-full bg-gradient-to-r from-brand/20 to-transparent" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-brand" />
          <span className="text-[10px] font-heading font-semibold uppercase tracking-wider text-muted">Overall Score</span>
        </div>
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

/* ── Data ─────────────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: 'Ric Wilson',
    role: 'Owner, Regenovate',
    subtitle: 'Mergers & Acquisitions',
    url: 'https://www.regenovate.co.uk/',
    displayUrl: 'regenovate.co.uk',
    quote:
      "Coltura built our corporate site for Regenovate, a mergers and acquisitions firm handling multi-million-pound deals. They balanced credibility with clarity, and the site performs flawlessly. Adam doesn't just build websites. He understands what a business needs to look like before people trust it with serious money.",
  },
  {
    name: 'ERPExperts',
    role: 'ERP Implementation & Support',
    subtitle: '',
    url: '',
    displayUrl: '',
    quote:
      "Coltura built our website and it has been a game changer for how we present ourselves online. The site is fast, professional, and actually brings in enquiries. Adam understood exactly what we needed and delivered it quickly. If you run a business and your website is not working for you, get Coltura involved.",
  },
  {
    name: 'David Hargraves',
    role: 'Build to Retire',
    subtitle: '',
    url: '',
    displayUrl: '',
    quote:
      "Coltura built a clean, professional website for Build to Retire that perfectly captures what we do. The process was straightforward, the turnaround was fast, and the result is a site we are proud to send people to. Adam knows how to build websites that actually work for a business.",
  },
  {
    name: 'Solar in Sport',
    role: 'Cheaper electricity for grassroots sports clubs',
    subtitle: '',
    url: 'https://solarinsport.uk/',
    displayUrl: 'solarinsport.uk',
    quote:
      "We built the website for Solar in Sport, a service that helps grassroots sports clubs switch to solar energy with zero upfront cost. The site explains a complex offer clearly, builds trust with clubs, and drives enquiries from sports organisations across the UK.",
  },
];

const WHAT_WE_CHECK = [
  { icon: IconFirstImpression, title: 'First Impression', desc: 'What does a visitor see in the first 3 seconds? Is it clear what you do?' },
  { icon: IconClarity, title: 'Clarity of Offer', desc: 'Can someone understand your service and why they should choose you within seconds?' },
  { icon: IconMobile, title: 'Mobile Experience', desc: 'Over 70% of local searches happen on phones. Does your site work on them?' },
  { icon: IconSpeed, title: 'Speed and Usability', desc: 'Slow sites lose customers. We check load time, navigation, and how easy it is to find what matters.' },
  { icon: IconTrust, title: 'Trust Signals', desc: 'Reviews, accreditations, real photos, contact details. Does your site look trustworthy?' },
  { icon: IconCTA, title: 'Calls to Action', desc: 'Is it obvious what a visitor should do next? Call, book, enquire, visit?' },
  { icon: IconLocalSEO, title: 'Local Search Visibility', desc: 'Can customers find you on Google? We check your local SEO foundations.' },
  { icon: IconEnquire, title: 'Easy to Enquire', desc: 'Is the contact form working? Is the phone number easy to find? Do enquiries actually get through?' },
];

const PROCESS_STEPS = [
  { step: '1', title: 'Send us your website on WhatsApp', desc: 'Tap the WhatsApp button, paste your website link, and tell us what you do. Takes 30 seconds. No forms, no waiting on hold.' },
  { step: '2', title: 'We review your site by hand', desc: 'A real person goes through your homepage, service pages, contact page, and mobile experience. We check speed, design, trust signals, and local SEO.' },
  { step: '3', title: 'You get a branded PDF audit', desc: 'Within 48 hours we send back a professional, branded PDF with clear feedback on what is working, what is not, and what you could improve. No jargon. No obligation.' },
  { step: '4', title: 'No obligation, no pushy sales call', desc: 'We only do full website rebuilds, not small tweaks. If your site needs a rebuild, we will show you what we would build. If it only needs minor fixes, we will tell you that for free. No pressure either way.' },
];

const WEBSITE_PROBLEMS = [
  {
    issue: 'No clear call to action above the fold',
    impact: "Visitors land, scan, and leave because they don't know what to do next. Every second they have to think is a lost enquiry.",
    fix: 'Put your primary CTA in the hero. Make it obvious. "Call Now" or "Get a Quote" works better than "Learn More."',
  },
  {
    issue: 'Slow loading on mobile',
    impact: '53% of mobile visitors leave if a site takes longer than 3 seconds to load. Google also ranks slow sites lower.',
    fix: 'Compress images, remove unused scripts, and lazy-load content below the fold. Most sites can cut load time in half.',
  },
  {
    issue: 'No trust signals visible',
    impact: "If visitors can't see reviews, accreditations, or real photos of your work, they assume you have none to show.",
    fix: 'Put your Google reviews, certifications, and real project photos on the homepage. Social proof converts.',
  },
  {
    issue: 'Contact form asks too many questions',
    impact: 'Every extra field drops your form completion rate. Long forms feel like an interrogation.',
    fix: 'Ask for the essentials only. You can get the rest on the phone or in person.',
  },
  {
    issue: 'Unclear what you actually do',
    impact: "If a visitor can't understand your service in under 5 seconds, they leave. Jargon and vague headlines kill conversions.",
    fix: 'Lead with what you do and who you do it for. "Plumber in Macclesfield" beats "Quality Service Solutions."',
  },
];

const FAQS = [
  { q: 'Is the review really free?', a: 'Yes. No cost, no obligation, no hidden charges. We review your site and send you honest feedback. That is it.' },
  { q: 'How does it work, do I need to fill in a form?', a: 'No forms. Just tap the WhatsApp button, send us your website link, and we take it from there. You can also call if you prefer.' },
  { q: 'How long does the review take?', a: 'We aim to send your review within 48 hours of receiving your website link.' },
  { q: 'What do I get in the review?', a: 'Clear, practical feedback on your website. We cover first impressions, mobile experience, speed, trust signals, calls to action, and local search visibility. You will know what is working and what is not.' },
  { q: 'Will you try to sell me something?', a: 'No. The review is genuinely free and useful on its own. If your site needs a rebuild, we will explain why and what it would cost. If it only needs small fixes, we will tell you that too. No pressure either way.' },
  { q: 'Do I need a new website?', a: 'Not necessarily. Many businesses just need small improvements. We will tell you honestly whether a rebuild makes sense or whether tweaks will do the job.' },
  { q: 'Is this for any type of business?', a: 'Yes. We review websites for all Cheshire businesses: shops, salons, trades, clinics, consultants, accountants, estate agents, startups, and local service companies.' },
  { q: 'How much does a new website cost?', a: 'From £495 for a single-page site up to £1,495 for an 8-page build with full SEO. You own the site. Ongoing care from £99/mo if you want it.' },
];

/* ===========================================================================
   PAGE
   =========================================================================== */
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
        gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: `get-started-${method}`,
          method,
          page_location: window.location.href,
        });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <main className="relative">
      <Nav />

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-bg">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-24 h-[520px] w-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgb(var(--brand) / 0.06) 0%, transparent 68%)' }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
          <div className="mb-8 flex items-center gap-4">
            <Image
              src="/images/gecko-mark.png"
              alt=""
              width={160}
              height={160}
              className="h-16 w-16 rounded-2xl object-contain dark:hidden sm:h-20 sm:w-20"
              priority
            />
            <Image
              src="/images/gecko-mark-light.png"
              alt=""
              width={160}
              height={160}
              className="hidden h-16 w-16 rounded-2xl object-contain dark:block sm:h-20 sm:w-20"
              priority
            />
            <SectionLabel label="Free Growth Audit" />
          </div>
          <h1 className="max-w-3xl text-balance font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
            Is your website costing you customers?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Message us your website on WhatsApp and a real person sends back a clear, honest audit within 48 hours, showing exactly what is costing you customers and how to fix it.{' '}
            <span className="font-medium text-ink">Normally £99. Yours free.</span>
          </p>
        </div>
      </section>

      {/* Hero CTAs + how it works + social proof */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
              <WhatsAppButton label="Get My Free Audit" className="!min-h-14 !px-8 !text-base" />
              <a
                href="tel:+447958394808"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
              >
                <IconPhone />
                or call {PHONE_DISPLAY}
              </a>
            </div>

            <div className="mb-8 inline-block rounded-2xl border border-brand/15 bg-brand/[0.04] px-6 py-5 text-left">
              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <p className="font-heading text-sm font-bold text-ink">
                  Limited free audits this month
                </p>
              </div>
              <p className="text-xs text-muted">
                I personally complete each audit, so I take on a limited number each month.
              </p>
            </div>

            <div className="mb-8">
              <p className="mb-4 text-xs font-heading font-semibold uppercase tracking-[0.2em] text-brand">
                How the free audit works
              </p>
              <ol className="mx-auto max-w-md space-y-4 text-left">
                {[
                  { num: '1', title: 'Message us your website', desc: 'Tap the WhatsApp button and send your web address. Takes 30 seconds.' },
                  { num: '2', title: 'We check it by hand', desc: 'A real person reviews your site — not a bot, not an automated report.' },
                  { num: '3', title: 'You get a clear plan', desc: 'Within 48 hours you get a short PDF showing what to fix first. No obligation.' },
                ].map((step) => (
                  <li key={step.num} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/[0.08] font-heading text-sm font-bold text-brand">
                      {step.num}
                    </span>
                    <div className="pt-0.5">
                      <p className="font-heading text-[15px] font-medium leading-snug text-ink">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-col items-center gap-2.5">
              <div className="flex items-center gap-2.5">
                <StarRow />
                <span className="text-xs text-muted">Trusted by Cheshire businesses</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-muted">
                {['Free, no obligation', 'Reviewed by a human', 'Back in 48 hours'].map((text) => (
                  <span key={text} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. TESTIMONIALS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <SectionLabel label="Trusted by Cheshire Businesses" tone="brand" />
          <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
            What our clients say
          </h2>
          <p className="mb-12 max-w-xl text-lg text-muted">
            Real businesses. Real websites. Real results.
          </p>

          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="scroll-reveal rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] sm:p-9"
                style={{ '--sr-delay': `${i * 100}ms` } as React.CSSProperties}
              >
                <StarRow className="mb-4" />
                <div className="mb-2 font-serif text-5xl leading-none text-brand/25">&ldquo;</div>
                <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-muted sm:text-base lg:text-[15px]">
                  {t.quote}
                </blockquote>
                <div className="mb-5 h-px w-full bg-gradient-to-r from-brand/20 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/20 bg-brand/10 font-heading text-base font-bold text-brand">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-medium text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs leading-tight text-muted">
                      {t.role}{t.subtitle ? `, ${t.subtitle}` : ''}
                    </p>
                    {t.url && (
                      <a href={t.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-brand transition-colors hover:underline">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                        </svg>
                        {t.displayUrl}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </RevealGroup>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. EXAMPLE AUDIT
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 text-center">
            <SectionLabel label="What You Get" />
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
              A real example of the audit we send
            </h2>
            <p className="mx-auto max-w-lg text-lg text-muted">
              This is exactly what lands back in your WhatsApp. Clear, practical, and branded so you can share it with your team.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <p className="mb-5 text-sm text-muted">Every review covers these eight areas:</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {WHAT_WE_CHECK.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-card p-4 transition-all duration-300 hover:border-brand/20"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand/20">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="mb-0.5 font-heading text-xs font-medium text-ink">{item.title}</h4>
                        <p className="text-[11px] leading-relaxed text-muted">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 lg:col-span-2">
              <div className="w-full max-w-[260px]">
                <AuditMockup />
              </div>
              <a
                href="/coltura-sample-site-audit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-brand px-7 py-3.5 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                See a Real Example Audit
              </a>
              <p className="text-center text-[11px] text-muted">
                Opens a real PDF, see exactly what you&apos;ll receive
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. PROCESS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 text-center">
            <SectionLabel label="The Process" />
            <h2 className="font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
              From WhatsApp to audit in 4 simple steps
            </h2>
          </div>

          <div className="space-y-0">
            {PROCESS_STEPS.map((item, i) => (
              <Reveal key={i} delay={i * 100} className="relative flex items-start gap-5 pb-12 last:pb-0">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[23px] top-12 hidden w-0.5 bg-brand/20 sm:block" style={{ bottom: 0 }} />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand/25 bg-brand/[0.08] font-heading text-lg font-bold text-brand transition-all duration-500">
                  {item.step}
                </div>
                <div className="flex-1 rounded-2xl border border-line bg-card p-5">
                  <h4 className="mb-1 font-heading text-sm font-medium text-ink">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppButton label="Get My Free Audit" />
            <a
              href="tel:+447958394808"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
            >
              <IconPhone />
              Or call {PHONE_DISPLAY}
            </a>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. COMMON WEBSITE PROBLEMS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 text-center">
            <SectionLabel label="Why Your Website Might Not Be Converting" />
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,4vw,2.8rem)] font-medium leading-tight tracking-tight text-ink">
              Most sites lose customers for the{' '}
              <span className="text-brand">same few reasons</span>
            </h2>
            <p className="mx-auto max-w-lg text-lg text-muted">
              These are the ones we find again and again. If any sound familiar, your free audit will catch them.
            </p>
          </div>

          <div className="border-t border-line">
            {WEBSITE_PROBLEMS.map((item, i) => (
              <div
                key={i}
                className="group flex items-baseline gap-5 border-b border-line py-6 transition-colors duration-300 hover:bg-bg-secondary/50 md:gap-8"
              >
                <span className="w-10 shrink-0 font-heading text-3xl font-bold leading-none tabular-nums text-transparent md:w-16 md:text-5xl" style={{ WebkitTextStroke: '1px rgb(var(--brand) / 0.35)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 pt-0.5">
                  <h3 className="mb-1.5 font-heading text-base font-medium text-ink transition-colors duration-300 group-hover:text-brand md:text-lg">
                    {item.issue}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-muted">
            Not sure which of these is hurting you?{' '}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="font-medium text-brand transition-colors hover:underline">
              Send us your site on WhatsApp
            </a>{' '}
            and we&apos;ll tell you.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. BUG PROMISE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-bg-secondary">
        <Reveal className="mx-auto grid max-w-4xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel label="Bug Free Care" />
            <h2 className="mb-6 font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-ink">
              We eat website bugs{' '}
              <span className="text-brand">for breakfast.</span>
            </h2>
            <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">
              Geckos eat bugs. We do too. We kill every bug on your site — broken
              buttons, dead forms, slow pages.
            </p>
            <p className="max-w-md text-lg font-heading font-medium leading-snug text-ink">
              Find a bug in the first 30 days? We fix it free.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/bug-eating-poster.png"
              className="h-auto w-full"
            >
              <source src="/videos/bug-eating-transparent.webm" type="video/webm" />
              <source src="/videos/bug-eating.mp4" type="video/mp4" />
            </video>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. GET IN TOUCH CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 text-center">
            <SectionLabel label="If You Do Need a Rebuild" />
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
              Let&apos;s build something brilliant together.
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted">
              Your audit comes first, and it&apos;s free. If it turns out your site needs rebuilding,
              get in touch and we&apos;ll put together a proposal tailored to your business.
            </p>
          </div>

          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-line bg-card p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.1)] sm:p-12">
            <h3 className="mb-4 text-2xl font-heading font-medium text-ink sm:text-3xl">
              Ready to get started?
            </h3>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-muted">
              Tell us about your business and what you need. We&apos;ll put together a
              proposal that makes sense for you — no templates, no surprises.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppButton label="Get in Touch on WhatsApp" />
              <a
                href="tel:+447958394808"
                className="inline-flex items-center gap-2.5 rounded-lg border border-line px-8 py-4 text-base font-heading font-medium text-ink transition-colors hover:bg-bg-secondary"
              >
                <IconPhone />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. ONGOING CARE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg-secondary">
        <Reveal className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 text-center">
            <SectionLabel label="Ongoing Care" />
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
              Keep your site running smoothly
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted">
              After your site goes live, we offer ongoing care packages to keep it fast, secure, and
              improving every month. Get in touch to find the right plan for your business.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-card p-8 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_-12px_rgba(0,0,0,0.1)] sm:p-12">
            <h3 className="mb-4 text-xl font-heading font-medium text-ink sm:text-2xl">
              Not sure what you need?
            </h3>
            <p className="mb-6 text-base leading-relaxed text-muted">
              We offer flexible care plans tailored to your business. From simple hosting and security
              to full ongoing SEO and content updates — we&apos;ll help you pick the right level of support.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <WhatsAppButton label="Ask About Care Plans" />
              <a
                href="tel:+447958394808"
                className="inline-flex items-center gap-2.5 rounded-lg border border-line px-8 py-4 text-base font-heading font-medium text-ink transition-colors hover:bg-bg-secondary"
              >
                <IconPhone />
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          9. FAQ
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-bg">
        <Reveal className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8 text-center">
            <SectionLabel label="FAQ" />
            <h2 className="font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">
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

      {/* ═══════════════════════════════════════════════════════════════════
          10. FINAL CTA
          ═══════════════════════════════════════════════════════════════════ */}
      <CtaBand
        title="Ready to find out what your website is missing?"
        note="Send us your website on WhatsApp now. Honest feedback within 48 hours. No pressure, no jargon, no obligation."
      />

      <Footer />

      {/* ═══════════════════════════════════════════════════════════════════
          STICKY MOBILE CTA BAR
          ═══════════════════════════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line/70 bg-bg/95 p-3 backdrop-blur-md lg:hidden">
        <div className="flex gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] flex items-center justify-center gap-2 rounded-lg bg-brand py-3 text-sm font-bold text-on-brand transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.304-1.654a11.9 11.9 0 005.723 1.457h.005c6.581 0 11.94-5.359 11.943-11.893a11.82 11.82 0 00-3.48-8.413z" />
            </svg>
            Free Audit on WhatsApp
          </a>
          <a
            href="tel:+447958394808"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-line py-3 text-sm font-heading font-medium text-ink transition-colors hover:bg-bg-secondary"
          >
            <IconPhone />
            Call
          </a>
        </div>
      </div>
    </main>
  );
}
