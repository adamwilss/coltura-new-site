const fs = require('fs');
const path = require('path');
const target = path.join(__dirname, 'src/app/get-started/page.tsx');
fs.mkdirSync(path.dirname(target), { recursive: true });

const content = `'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import Reveal from '@/components/Reveal';
import RevealGroup from '@/components/RevealGroup';
import FaqItem from './FaqItem';
import { PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/whatsapp';

const WA_ICON = <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.304-1.654a11.9 11.9 0 005.723 1.457h.005c6.581 0 11.94-5.359 11.943-11.893a11.82 11.82 0 00-3.48-8.413z" /></svg>;

const PHONE_ICON = <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>;

function StarRow({ className = '' }: { className?: string }) {
  return <div className={\`flex items-center gap-0.5 \${className}\`}>{[1,2,3,4,5].map(n => <svg key={n} className="h-4 w-4" fill="#fbbf24" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}</div>;
}

function CheckIcon() {
  return <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
}

function AuditMockup() {
  return <div className="rounded-2xl border border-line bg-card p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_40px_-24px_rgba(0,0,0,0.18)] transition-all duration-500 hover:shadow-[0_20px_60px_-10px_rgba(223,44,50,0.15)]">
    <div className="mb-4 h-1 rounded-full bg-brand" />
    <div className="mb-5 flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/20 bg-brand/10"><span className="font-heading text-sm font-bold text-brand">C</span></div>
      <div><span className="font-heading text-sm font-bold tracking-wide text-brand">COLTURA</span><p className="text-[10px] leading-none text-muted">Website Audit Report</p></div></div>
    <div className="mb-4 space-y-2">{[75,100,83,67,80,60].map((w,i) => <div key={i} className="h-1.5 rounded bg-ink/[0.06]" style={{width:w+'%'}} />)}</div>
    <div className="mb-4 h-px w-full bg-gradient-to-r from-brand/20 to-transparent" />
    <div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><div className="h-2 w-2 rounded-full bg-brand" /><span className="text-[10px] font-semibold uppercase tracking-wider text-muted">Overall Score</span></div>
      <span className="font-heading text-lg font-bold text-brand">72<span className="text-xs text-muted">/100</span></span></div>
    <div className="mt-3 space-y-1.5">{['Speed','Design','SEO','Mobile'].map((cat,ci) =>
      <div key={ci} className="flex items-center gap-2"><span className="w-10 text-right text-[10px] text-muted">{cat}</span>
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-ink/[0.05]"><div className="h-full rounded-full bg-brand/60" style={{width:(65+ci*8)+'%'}} /></div></div>)}</div></div>;
}

export default function GetStartedPage() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-bg">
        <div className="mx-auto max-w-4xl px-5 pt-28 pb-16 text-center sm:px-8 sm:pt-36">
          <SectionLabel label="Free Growth Audit" tone="brand" />
          <h1 className="mb-6 text-balance font-heading text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-ink">
            Is Your Website <span className="text-brand">Costing You</span> Customers?
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted">
            Message us your website on WhatsApp and a real person sends back a clear, honest audit within 48 hours. <span className="font-semibold text-ink">Normally \u00a399. Yours free.</span>
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-heading font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1fb855] sm:w-auto">
              {WA_ICON} Get My Free Audit
            </a>
            <a href="tel:+447958394808" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink">
              {PHONE_ICON} or call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-12 text-center"><SectionLabel label="What Our Clients Say" tone="brand" />
            <h2 className="mb-4 font-heading text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight text-ink">What Our Clients Say</h2>
            <p className="mx-auto max-w-xl text-lg text-muted">Real businesses. Real websites. Real results.</p></div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { name: 'Ric Wilson', role: 'Owner, Regenovate', quote: "Coltura built our corporate site for Regenovate. They balanced credibility with clarity, and the site performs flawlessly." },
              { name: 'ERPExperts', role: 'ERP Implementation & Support', quote: "Coltura built our website and it has been a game changer for how we present ourselves online." },
              { name: 'David Hargraves', role: 'Build to Retire', quote: "Coltura built a clean, professional website that perfectly captures what we do. The process was straightforward." },
              { name: 'Solar in Sport', role: 'Grassroots sports clubs', quote: "We built the website for Solar in Sport. The site explains a complex offer clearly, builds trust, and drives enquiries." },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-line bg-card p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_18px_40px_-24px_rgba(0,0,0,0.1)] sm:p-9">
                <StarRow className="mb-4" />
                <blockquote className="mb-6 text-sm leading-relaxed text-muted sm:text-base">{t.quote}</blockquote>
                <div className="mb-5 h-px w-full bg-gradient-to-r from-brand/20 to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand/15 bg-brand/[0.06] font-heading text-base font-bold text-brand">{t.name.charAt(0)}</div>
                  <div><p className="font-heading text-sm font-medium text-ink">{t.name}</p><p className="mt-0.5 text-xs leading-tight text-muted">{t.role}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-3 text-center"><SectionLabel label="What You Get" tone="brand" /></div>
          <h2 className="mb-4 text-center font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">A Real Example of the Audit We Send</h2>
          <p className="mx-auto mb-10 max-w-lg text-center text-muted">This is exactly what lands back in your WhatsApp.</p>
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3"><p className="mb-5 text-sm text-muted">Every review covers these eight areas:</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">{[
                {t:'First Impression',d:'What does a visitor see in the first 3 seconds?'},
                {t:'Clarity of Offer',d:'Can someone understand your service within seconds?'},
                {t:'Mobile Experience',d:'Over 70% of local searches happen on phones.'},
                {t:'Speed and Usability',d:'Slow sites lose customers.'},
                {t:'Trust Signals',d:'Reviews, accreditations, real photos.'},
                {t:'Calls to Action',d:'Is it obvious what a visitor should do next?'},
                {t:'Local Search Visibility',d:'Can customers find you on Google?'},
                {t:'Easy to Enquire',d:'Is the contact form working?'},
              ].map((item, i) => <div key={i} className="rounded-xl border border-line bg-card p-4"><h4 className="mb-0.5 font-heading text-xs font-medium text-ink">{item.t}</h4><p className="text-[11px] leading-relaxed text-muted">{item.d}</p></div>)}</div></div>
            <div className="lg:col-span-2 flex flex-col items-center gap-6"><AuditMockup /></div>
          </div>
        </div>
      </section>

      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-3 text-center"><SectionLabel label="The Process" tone="brand" /></div>
          <h2 className="mb-12 text-center font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">From WhatsApp to Audit in 4 Simple Steps</h2>
          <ol className="space-y-0">{[
            { s:'1', t:'Send us your website on WhatsApp', d:'Tap the WhatsApp button, paste your website link, and tell us what you do. Takes 30 seconds.' },
            { s:'2', t:'We review your site by hand', d:'A real person goes through your homepage, service pages, contact page, and mobile experience.' },
            { s:'3', t:'You get a branded PDF audit', d:'Within 48 hours we send back a professional, branded PDF with clear feedback.' },
            { s:'4', t:'No obligation, no pushy sales call', d:'If your site needs a rebuild, we will show you what we would build. If it only needs minor fixes, we will tell you that for free.' },
          ].map((step, i) => <li key={i} className="relative flex items-start gap-5 pb-10 last:pb-0">
            {i < 3 && <div className="absolute left-[23px] top-12 bottom-0 w-px bg-line" />}
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-card font-heading text-lg font-bold text-ink">{step.s}</span>
            <div className="pt-2"><h3 className="font-heading text-sm font-medium text-ink">{step.t}</h3><p className="mt-1 text-sm leading-relaxed text-muted">{step.d}</p></div>
          </li>)}</ol>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-3 text-center"><SectionLabel label="Common Problems" tone="brand" /></div>
          <h2 className="mb-12 text-center font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">Most Sites Lose Customers for the <span className="text-brand">Same Few Reasons</span></h2>
          <div className="border-t border-line">{[
            { issue: 'No clear call to action above the fold', impact: "Visitors land, scan, and leave because they don't know what to do next." },
            { issue: 'Slow loading on mobile', impact: '53% of mobile visitors leave if a site takes longer than 3 seconds to load.' },
            { issue: 'No trust signals visible', impact: "If visitors can't see reviews or real photos, they assume you have none to show." },
            { issue: 'Contact form asks too many questions', impact: 'Every extra field drops your form completion rate.' },
            { issue: 'Unclear what you actually do', impact: "If a visitor can't understand your service in under 5 seconds, they leave." },
          ].map((item, i) => <div key={i} className="flex items-baseline gap-5 py-6 border-b border-line">
            <span className="font-heading font-bold text-3xl leading-none w-10 shrink-0 tabular-nums text-brand/30">{String(i+1).padStart(2,'0')}</span>
            <div><h3 className="font-heading font-medium text-base text-ink mb-1">{item.issue}</h3><p className="text-sm leading-relaxed text-muted">{item.impact}</p></div>
          </div>)}</div>
        </div>
      </section>

      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-3 text-center"><SectionLabel label="Bug Free Care" tone="brand" /></div>
          <h2 className="mb-6 text-center font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">We eat website bugs <span className="text-brand">for breakfast.</span></h2>
          <p className="mx-auto mb-4 max-w-xl text-center text-muted">Geckos eat bugs. We do too. We kill every bug on your site.</p>
          <p className="mx-auto max-w-xl text-center font-heading text-lg font-medium text-ink">Find a bug in the first 30 days? We fix it free.</p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h2 className="mb-4 font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">Ready to Find Out What Your <span className="text-brand">Website Is Missing?</span></h2>
          <p className="mb-8 text-lg text-muted">Send us your website on WhatsApp now. Honest feedback within 48 hours.</p>
          <div className="flex flex-col items-center gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-heading font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#1fb855]">
              {WA_ICON} Get in Touch on WhatsApp
            </a>
            <a href="tel:+447958394808" className="inline-flex items-center gap-2 rounded-lg border border-line px-8 py-4 text-base font-heading font-semibold text-ink transition-colors hover:border-ink/30">
              {PHONE_ICON} Call {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-8"><SpotsLeft /></div>
        </div>
      </section>

      <section className="bg-bg-secondary">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-3 text-center"><SectionLabel label="FAQ" tone="brand" /></div>
          <h2 className="mb-8 text-center font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">Frequently Asked Questions</h2>
          <div className="space-y-3">{[
            { q:'Is the review really free?', a:'Yes. No cost, no obligation, no hidden charges.' },
            { q:'How does it work?', a:'No forms. Just tap the WhatsApp button and send us your website link.' },
            { q:'How long does the review take?', a:'We aim to send your review within 48 hours.' },
            { q:'What do I get in the review?', a:'Clear, practical feedback covering first impressions, mobile experience, speed, trust signals, calls to action, and local search visibility.' },
            { q:'Will you try to sell me something?', a:'No. The review is genuinely free and useful on its own.' },
            { q:'Do I need a new website?', a:'Not necessarily. Many businesses just need small improvements.' },
            { q:'Is this for any type of business?', a:'Yes. We review websites for all Cheshire businesses.' },
            { q:'How much does a new website cost?', a:'From \u00a3495 up to \u00a31,495. Ongoing care from \u00a399/mo.' },
          ].map((faq, i) => <FaqItem key={i} question={faq.q} answer={faq.a} />)}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}`;

fs.writeFileSync(target, content, 'utf8');
console.log('Written', fs.statSync(target).size, 'bytes to', target);
