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
    displayUrl: '',
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

/**
 * The Work, as a street you walk down. On desktop the section pins for four
 * screens of scroll while the four projects travel horizontally past — the
 * same rAF + CSS-custom-property pattern as ParallaxImage/Statement (no
 * scroll-jacking libraries, the scrollbar always behaves). On mobile and
 * under reduced motion it's an honest vertical stack of the same content.
 */
export default function WorkHorizontal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  const n = PROJECTS.length;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;

    function update() {
      ticking = false;
      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;
      // Only the lg+ horizontal variant is in the layout; if it's hidden
      // (mobile), offsetParent is null and there's nothing to drive.
      if (track.offsetParent === null) return;
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const travel = rect.height - vh;
      const p = Math.max(0, Math.min(1, -rect.top / travel));
      track.style.transform = `translate3d(${(-p * (n - 1) * 100).toFixed(3)}vw, 0, 0)`;

      const idx = Math.min(n - 1, Math.round(p * (n - 1)));
      if (counterRef.current) counterRef.current.textContent = String(idx + 1).padStart(2, '0');
      if (dotsRef.current) {
        Array.from(dotsRef.current.children).forEach((d, i) => {
          (d as HTMLElement).style.opacity = i === idx ? '1' : '0.25';
          (d as HTMLElement).style.transform = i === idx ? 'scaleX(2.4)' : 'scaleX(1)';
        });
      }
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [n]);

  return (
    <section className="border-y border-line bg-bg">
      {/* ── Desktop: pinned horizontal travel ─────────────────────────── */}
      <div ref={wrapRef} className="hidden motion-safe:lg:block" style={{ height: `${n * 100 + 40}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Header chrome stays put while the street moves */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-end justify-between px-10 pt-24">
            <SectionLabel label="Recent Work" />
            <p className="font-heading text-sm tabular-nums text-muted">
              <span ref={counterRef} className="text-ink">01</span> / {String(n).padStart(2, '0')}
            </p>
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
                  className="pointer-events-none absolute left-8 top-1/2 -translate-y-1/2 select-none font-heading text-[26rem] font-semibold leading-none text-ink/[0.045]"
                >
                  {i + 1}
                </span>
                <div className="relative mx-auto grid w-full max-w-6xl grid-cols-[0.9fr_1.1fr] items-center gap-16 px-10">
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
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card shadow-[0_60px_100px_-50px_rgba(0,0,0,0.45)] ${
                      i % 2 === 0 ? 'rotate-[1.2deg]' : '-rotate-[1.2deg]'
                    }`}
                  >
                    <Image src={p.img} alt={`${p.name} website, built by Coltura`} fill sizes="55vw" className="object-cover object-top" />
                  </div>
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
              <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl border border-line bg-card shadow-[0_14px_34px_-18px_rgba(0,0,0,0.2)]">
                <Image src={p.img} alt={`${p.name} website, built by Coltura`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover object-top" />
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
