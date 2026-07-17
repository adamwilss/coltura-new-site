'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

// Real client work only; lines drawn from approved quotes / confirmed facts.
const PROJECTS = [
  {
    name: 'Regenovate',
    tag: 'Mergers & acquisitions',
    line: 'A corporate site trusted with multi-million-pound deals.',
    img: '/images/builds/regenovate.png',
    url: 'https://www.regenovate.co.uk/',
    displayUrl: 'regenovate.co.uk',
  },
  {
    name: 'Solar in Sport',
    tag: 'Solar for grassroots clubs',
    line: 'A complex offer explained clearly — enquiries from clubs across the UK.',
    img: '/images/builds/solar-in-sport.png',
    url: 'https://solarinsport.uk/',
    displayUrl: 'solarinsport.uk',
  },
  {
    name: 'ERPExperts',
    tag: 'ERP implementation & support',
    line: '“Fast, professional, and actually brings in enquiries.”',
    img: '/images/builds/erp-experts.png',
    url: '',
    displayUrl: 'erpexperts',
  },
  {
    name: 'The Dress Agency',
    tag: 'Preloved designer fashion · est. 1994',
    line: 'Thirty years of Hazel Grove retail, finally looking the part online.',
    img: '/images/builds/dress-agency.png',
    url: 'https://www.thedress.agency/',
    displayUrl: 'thedress.agency',
  },
];

/** Browser-chrome frame so each screenshot reads as a live site, not a JPEG. */
function BrowserFrame({ name, displayUrl, img, sizes }: { name: string; displayUrl: string; img: string; sizes: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_50px_90px_-45px_rgba(0,0,0,0.4)]">
      <div className="relative flex items-center border-b border-line bg-bg-secondary/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#f57f6f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f5bf4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </span>
        <span className="absolute left-1/2 -translate-x-1/2 rounded-md bg-bg px-4 py-1 font-mono text-[11px] text-muted">
          {displayUrl}
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={img} alt={`${name} website, built by Coltura`} fill sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}

/**
 * The Work, as a street you walk down. On desktop the section pins for four
 * screens of scroll while the four projects travel horizontally past. The
 * transform chases the scroll position through a small lerp each frame, so
 * the travel feels fluid rather than ratchety — same no-library rAF pattern
 * as the rest of the site. Mobile and reduced motion get a vertical stack.
 */
export default function WorkHorizontal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  const n = PROJECTS.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf: number;
    let current = 0;
    let lastIdx = -1;

    const loop = () => {
      raf = requestAnimationFrame(loop);
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track || track.offsetParent === null) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom < -80 || rect.top > vh + 80) return; // offscreen: skip work
      const travel = rect.height - vh;
      const target = Math.max(0, Math.min(1, -rect.top / travel));
      current += (target - current) * 0.09;
      if (Math.abs(target - current) < 0.0004) current = target;
      track.style.transform = `translate3d(${(-current * (n - 1) * 100).toFixed(4)}vw, 0, 0)`;

      const idx = Math.min(n - 1, Math.round(current * (n - 1)));
      if (idx !== lastIdx) {
        lastIdx = idx;
        if (counterRef.current) counterRef.current.textContent = String(idx + 1).padStart(2, '0');
        if (dotsRef.current) {
          Array.from(dotsRef.current.children).forEach((d, i) => {
            (d as HTMLElement).style.opacity = i === idx ? '1' : '0.25';
            (d as HTMLElement).style.transform = i === idx ? 'scaleX(2.4)' : 'scaleX(1)';
          });
        }
      }
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [n]);

  return (
    <section className="border-y border-line bg-bg">
      {/* ── Desktop: pinned horizontal travel ─────────────────────────── */}
      <div ref={wrapRef} className="hidden motion-safe:lg:block" style={{ height: `${n * 100 + 40}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Header chrome, aligned to the same gutter as the panels */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 pt-24">
            <div className="mx-auto flex max-w-6xl items-end justify-between px-10">
              <SectionLabel label="Recent Work" />
              <p className="font-heading text-sm tabular-nums text-muted">
                <span ref={counterRef} className="text-ink">01</span> / {String(n).padStart(2, '0')}
              </p>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex h-full"
            style={{ width: `${n * 100}vw`, willChange: 'transform' }}
          >
            {PROJECTS.map((p, i) => (
              <div key={p.name} className="relative flex h-full w-screen items-center">
                {/* Ghost numeral looming behind each panel */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 select-none font-heading text-[24rem] font-semibold leading-none text-ink/[0.04]"
                >
                  {i + 1}
                </span>
                <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[0.85fr_1.15fr] items-center gap-14 px-10">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">{p.tag}</p>
                    <h3 className="mb-5 font-heading text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.02] tracking-[-0.015em] text-ink">
                      {p.name}
                    </h3>
                    <p className="mb-6 max-w-md text-lg leading-relaxed text-muted">{p.line}</p>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
                      >
                        {p.displayUrl}
                        <ArrowUpRight size={15} strokeWidth={2} />
                      </a>
                    )}
                  </div>
                  <BrowserFrame name={p.name} displayUrl={p.displayUrl} img={p.img} sizes="60vw" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <div ref={dotsRef} className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {PROJECTS.map((p) => (
              <span
                key={p.name}
                className="h-[3px] w-6 rounded-full bg-ink transition-all duration-300"
                style={{ opacity: 0.25 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile & reduced motion: honest vertical stack ────────────── */}
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 motion-safe:lg:hidden">
        <SectionLabel label="Recent Work" />
        <h2 className="mb-10 max-w-lg font-heading text-[clamp(1.6rem,3.4vw,2.5rem)] font-medium leading-tight text-ink">
          Real businesses, real sites.
        </h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <div key={p.name}>
              <div className="mb-5">
                <BrowserFrame name={p.name} displayUrl={p.displayUrl} img={p.img} sizes="(min-width: 640px) 50vw, 100vw" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{p.tag}</p>
              <h3 className="font-heading text-xl font-medium text-ink">{p.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.line}</p>
              {p.url && (
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-xs font-medium text-brand hover:underline">
                  {p.displayUrl} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
