'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Phone, Star, ChevronsLeftRight } from 'lucide-react';

/**
 * A renovation you can drag. Two versions of the same imaginary plumber's
 * website built entirely in DOM — 2003 on the left, Coltura on the right —
 * split by a draggable squeegee. No screenshots, no mockup images: the
 * transformation is the demo. (Deliberately a made-up example business, so
 * it never reads as a real client's before.)
 */
export default function BeforeAfter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPct(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (dragging.current) setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={wrapRef}
      className="relative h-[430px] w-full select-none overflow-hidden rounded-2xl border border-line shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]"
      style={{ touchAction: 'pan-y' }}
      onPointerDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      role="slider"
      aria-label="Drag to compare the same business before and after a Coltura rebuild"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pct)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPct((p) => Math.max(0, p - 5));
        if (e.key === 'ArrowRight') setPct((p) => Math.min(100, p + 5));
      }}
    >
      {/* ── AFTER (base layer): the Coltura version ─────────────────────── */}
      <div className="absolute inset-0 bg-bg">
        <div className="flex items-center justify-between border-b border-line bg-card px-5 py-3">
          <span className="font-heading text-sm font-semibold tracking-wide text-ink">BRAMHALL PLUMBING &amp; HEATING</span>
          <span className="hidden items-center gap-2 rounded-lg bg-brand px-3.5 py-1.5 text-xs font-bold text-on-brand sm:inline-flex">
            <Phone size={11} strokeWidth={2.5} /> 0161 000 0000
          </span>
        </div>
        <div className="px-6 pt-8 sm:px-9">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">Gas Safe registered · Bramhall &amp; South Manchester</p>
          <h3 className="mb-3 max-w-[24rem] font-heading text-[clamp(1.4rem,3vw,2.1rem)] font-medium leading-[1.08] text-ink">
            Boiler fixed today — or you don&rsquo;t pay a call-out fee.
          </h3>
          <p className="mb-5 max-w-[22rem] text-sm leading-relaxed text-muted">
            Same-day emergency repairs, honest fixed quotes, and a tidy job every time.
          </p>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-bold text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)]">
              <Phone size={13} strokeWidth={2.5} /> Call now — free quote
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <span className="flex gap-0.5" aria-hidden>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={12} fill="#e0a53f" strokeWidth={0} />
                ))}
              </span>
              4.9 · 120+ local reviews
            </span>
          </div>
          <div className="flex gap-2.5" aria-hidden>
            {['Emergency repairs', 'Boiler installs', 'Bathrooms'].map((s) => (
              <span key={s} className="rounded-full border border-line bg-card px-3 py-1 text-[11px] text-muted">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BEFORE (clipped top layer): the 2003 version ────────────────── */}
      <div className="reno-overlay absolute inset-0" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <div style={{ background: '#d4d0c8', borderBottom: '2px solid #808080', padding: '5px 10px', fontSize: 12 }}>
          <span className="reno-link" style={{ marginRight: 10 }}>Home</span>
          <span className="reno-link" style={{ marginRight: 10 }}>Services</span>
          <span className="reno-link" style={{ marginRight: 10 }}>Photo&rsquo;s</span>
          <span className="reno-link">Contact Us!!</span>
        </div>
        <div className="reno-marquee" style={{ background: '#ffff00', padding: '2px 0', fontSize: 12, fontWeight: 700 }}>
          <span>☎️ NO JOB TOO SMALL!!! CALL TODAY FOR FREE QUOTE ☎️ EST. 1998 ☎️</span>
        </div>
        <div style={{ padding: '26px 18px', textAlign: 'center' }}>
          <h3 style={{ color: '#000080', fontSize: 'clamp(1rem,2.6vw,1.5rem)', fontWeight: 700, marginBottom: 8 }}>
            WELCOME TO BRAMHALL PLUMBING AND HEATING WEBSITE
          </h3>
          <p className="reno-blink" style={{ color: '#ff0000', fontWeight: 700, fontSize: 13, marginBottom: 14 }}>
            *** 24 HOUR&rsquo;S EMERGENCY&rsquo;S ***
          </p>
          <p style={{ fontSize: 13, marginBottom: 16, lineHeight: 1.5 }}>
            We do all plumbing. Boilers, taps, bathrooms + more!!
            <br />
            Ring Dave on the number below. If no answer please try again later.
          </p>
          <button type="button" className="reno-btn" style={{ fontSize: 13, marginBottom: 16 }}>
            ➤ Click Here For Photo&rsquo;s ➤
          </button>
          <p style={{ fontSize: 11, color: '#555' }}>
            You are visitor No. 000842 · Site made by Dave&rsquo;s nephew · Last updated 2011
          </p>
        </div>
      </div>

      {/* ── The squeegee ────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-y-0 z-10 w-[3px] bg-brand shadow-[0_0_18px_4px_rgb(223_44_50/0.5)]" style={{ left: `${pct}%` }}>
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-card text-brand shadow-lg">
          <ChevronsLeftRight size={18} strokeWidth={2.5} />
        </span>
      </div>

      {/* corner labels — fade out when their side is swiped away, so a full
          sweep to either edge shows one clean, uninterrupted site */}
      <span
        className="pointer-events-none absolute left-3 top-[54px] z-10 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white transition-opacity duration-200"
        style={{ opacity: pct < 9 ? 0 : 1 }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-3 top-[54px] z-10 rounded bg-brand px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white transition-opacity duration-200"
        style={{ opacity: pct > 91 ? 0 : 1 }}
      >
        After
      </span>
    </div>
  );
}
