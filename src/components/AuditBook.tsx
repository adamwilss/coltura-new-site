'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * The audit as a real book. Desktop gets a two-page spread with genuine 3D
 * page turns — a flipping leaf with a front and a back face rotating around
 * the spine, exactly like paper. Mobile gets a single page with swipe. Pages
 * are pre-rendered JPEGs (the PDF iframe this replaces often never loaded).
 * Click a page to read it full-screen. Reduced motion swaps turns for cuts.
 */
export default function AuditBook({
  basePath,
  pageCount,
  label = 'Coltura Growth Audit',
  pdfHref,
}: {
  basePath: string;
  pageCount: number;
  label?: string;
  pdfHref?: string;
}) {
  const reduced = useReducedMotion();
  const src = useCallback(
    (i: number) => `${basePath}/page-${String(i + 1).padStart(2, '0')}.jpg`,
    [basePath],
  );

  // ── Spread model (desktop) ────────────────────────────────────────────
  // Spread s shows page 2s-1 on the left and page 2s on the right
  // (0-indexed images; spread 0 is the cover alone on the right).
  const spreadCount = Math.floor(pageCount / 2) + 1;
  const [spread, setSpread] = useState(0);
  const [flip, setFlip] = useState<null | { dir: 1 | -1; from: number }>(null);
  const [zoom, setZoom] = useState<number | null>(null);

  const leftPage = (s: number) => (s === 0 ? null : 2 * s - 1 < pageCount ? 2 * s - 1 : null);
  const rightPage = (s: number) => (2 * s < pageCount ? 2 * s : null);

  const turn = useCallback(
    (dir: 1 | -1) => {
      if (flip) return;
      const target = spread + dir;
      if (target < 0 || target > spreadCount - 1) return;
      if (reduced) {
        setSpread(target);
        return;
      }
      setFlip({ dir, from: spread });
    },
    [flip, spread, spreadCount, reduced],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') turn(1);
      if (e.key === 'ArrowLeft') turn(-1);
      if (e.key === 'Escape') setZoom(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [turn]);

  useEffect(() => {
    if (zoom === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [zoom]);

  // Preload every page lazily after mount — they're small.
  const preload = useMemo(() => Array.from({ length: pageCount }, (_, i) => src(i)), [pageCount, src]);

  const PageFace = ({ index, roundedSide, priority = false }: { index: number | null; roundedSide: 'l' | 'r'; priority?: boolean }) => (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#171213] ${
        roundedSide === 'l' ? 'rounded-l-xl' : 'rounded-r-xl'
      }`}
    >
      {index !== null && index < pageCount && (
        <Image
          src={src(index)}
          alt={`${label} — page ${index + 1} of ${pageCount}`}
          fill
          sizes="440px"
          className="select-none object-cover"
          draggable={false}
          priority={priority}
        />
      )}
      {/* spine shading so pages read as bound paper */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            roundedSide === 'r'
              ? 'linear-gradient(90deg, rgba(0,0,0,0.32) 0%, transparent 9%)'
              : 'linear-gradient(270deg, rgba(0,0,0,0.32) 0%, transparent 9%)',
        }}
      />
    </div>
  );

  // During a forward flip from spread s: the leaf's front is right page of s,
  // its back is left page of s+1. Backward from s: front = left page of s,
  // back = right page of s-1.
  const leaf =
    flip &&
    (flip.dir === 1
      ? { front: rightPage(flip.from), back: leftPage(flip.from + 1), origin: 'left' as const }
      : { front: leftPage(flip.from), back: rightPage(flip.from - 1), origin: 'right' as const });

  // Static pages visible under/around the flipping leaf.
  const shownSpread = flip ? (flip.dir === 1 ? flip.from + 1 : flip.from - 1) : spread;
  const staticLeft = flip ? (flip.dir === 1 ? leftPage(flip.from) : leftPage(flip.from - 1)) : leftPage(spread);
  const staticRight = flip ? (flip.dir === 1 ? rightPage(flip.from + 1) : rightPage(flip.from)) : rightPage(spread);

  const current = flip ? shownSpread : spread;

  // ── Mobile single-page state ──────────────────────────────────────────
  const [mPage, setMPage] = useState(0);
  const [mDir, setMDir] = useState(1);
  const mGo = (d: number) => {
    setMDir(d);
    setMPage((p) => Math.max(0, Math.min(pageCount - 1, p + d)));
  };

  return (
    <div className="relative">
      {/* ── Desktop: the spread ────────────────────────────────────────── */}
      <div className="hidden sm:block">
        <div className="relative mx-auto max-w-[880px]" style={{ perspective: '2400px' }}>
          {/* stage glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[115%] -translate-x-1/2 -translate-y-1/2"
            style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgb(var(--brand) / 0.13) 0%, transparent 70%)' }}
          />

          <div className="relative mx-auto aspect-[1414/1000] w-full" style={{ transformStyle: 'preserve-3d' }}>
            {/* page-stack edges */}
            <div aria-hidden className="absolute -bottom-1 left-1 right-1 top-1 rounded-xl bg-white/10" />
            <div aria-hidden className="absolute -bottom-0.5 left-0.5 right-0.5 top-0.5 rounded-xl bg-black/40" />

            {/* static halves */}
            <div className="absolute inset-y-0 left-0 w-1/2 shadow-[0_45px_80px_-35px_rgba(0,0,0,0.7)]">
              {staticLeft !== null ? (
                <button type="button" className="block h-full w-full cursor-zoom-in" onClick={() => setZoom(staticLeft)} aria-label={`Read page ${staticLeft + 1} full screen`}>
                  <PageFace index={staticLeft} roundedSide="l" />
                </button>
              ) : (
                <div className="h-full w-full rounded-l-xl bg-transparent" />
              )}
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 shadow-[0_45px_80px_-35px_rgba(0,0,0,0.7)]">
              {staticRight !== null ? (
                <button type="button" className="block h-full w-full cursor-zoom-in" onClick={() => setZoom(staticRight)} aria-label={`Read page ${staticRight + 1} full screen`}>
                  <PageFace index={staticRight} roundedSide="r" priority />
                </button>
              ) : (
                <div className="h-full w-full rounded-r-xl bg-transparent" />
              )}
            </div>

            {/* the turning leaf */}
            <AnimatePresence>
              {leaf && (
                <motion.div
                  key={`${flip!.from}-${flip!.dir}`}
                  className={`absolute inset-y-0 z-10 w-1/2 ${leaf.origin === 'left' ? 'right-0' : 'left-0'}`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: leaf.origin === 'left' ? 'left center' : 'right center',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: flip!.dir === 1 ? -180 : 180 }}
                  transition={{ duration: 0.75, ease: [0.45, 0, 0.2, 1] }}
                  onAnimationComplete={() => {
                    setSpread(flip!.from + flip!.dir);
                    setFlip(null);
                  }}
                >
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden' }}>
                    <PageFace index={leaf.front} roundedSide={leaf.origin === 'left' ? 'r' : 'l'} />
                  </div>
                  <div className="absolute inset-0" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <PageFace index={leaf.back} roundedSide={leaf.origin === 'left' ? 'l' : 'r'} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* click zones for turning */}
            <button
              type="button"
              onClick={() => turn(-1)}
              disabled={current === 0 || !!flip}
              aria-label="Previous pages"
              className="absolute -left-16 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/80 text-ink shadow-lg backdrop-blur transition enabled:hover:scale-105 enabled:hover:border-brand/40 disabled:opacity-25"
            >
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => turn(1)}
              disabled={current === spreadCount - 1 || !!flip}
              aria-label="Next pages"
              className="absolute -right-16 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/80 text-ink shadow-lg backdrop-blur transition enabled:hover:scale-105 enabled:hover:border-brand/40 disabled:opacity-25"
            >
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>

          {/* footer: dots + hint */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <div className="flex gap-1.5">
              {Array.from({ length: spreadCount }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to spread ${i + 1}`}
                  onClick={() => !flip && setSpread(i)}
                  className={`h-[5px] rounded-full transition-all duration-300 ${
                    i === current ? 'w-5 bg-brand' : 'w-[5px] bg-ink/25 hover:bg-ink/50'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-muted">turn the pages · click a page to read it</span>
          </div>
        </div>
      </div>

      {/* ── Mobile: single page, swipe ─────────────────────────────────── */}
      <div className="sm:hidden">
        <div className="relative mx-auto aspect-[1400/1981] w-full max-w-[380px] overflow-hidden rounded-xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]">
          <AnimatePresence mode="popLayout" custom={mDir} initial={false}>
            <motion.div
              key={mPage}
              custom={mDir}
              initial={reduced ? {} : { x: mDir * 56, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduced ? {} : { x: mDir * -56, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              drag={reduced ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) mGo(1);
                else if (info.offset.x > 60) mGo(-1);
              }}
              className="absolute inset-0"
              onClick={() => setZoom(mPage)}
            >
              <Image
                src={src(mPage)}
                alt={`${label} — page ${mPage + 1} of ${pageCount}`}
                fill
                sizes="100vw"
                className="select-none object-contain"
                draggable={false}
                priority={mPage === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4">
          <button type="button" onClick={() => mGo(-1)} disabled={mPage === 0} aria-label="Previous page" className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card/80 text-ink disabled:opacity-25">
            <ChevronLeft size={16} strokeWidth={2} />
          </button>
          <span className="text-xs tabular-nums text-muted">
            {mPage + 1} / {pageCount} · swipe
          </span>
          <button type="button" onClick={() => mGo(1)} disabled={mPage === pageCount - 1} aria-label="Next page" className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card/80 text-ink disabled:opacity-25">
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {pdfHref && (
        <p className="mt-4 text-center">
          <a href={pdfHref} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink">
            Prefer the PDF? Open it here
          </a>
        </p>
      )}

      {/* invisible preloads */}
      <div aria-hidden className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
        {preload.map((s) => (
          <Image key={s} src={s} alt="" width={44} height={62} />
        ))}
      </div>

      {/* full-screen reader — portalled so ancestor transforms can't trap it */}
      {zoom !== null &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setZoom(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${label} — page ${zoom + 1} full screen`}
          >
            <button type="button" onClick={() => setZoom(null)} aria-label="Close" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
              <X size={20} strokeWidth={2} />
            </button>
            <div className="relative h-full max-h-[92vh] w-full max-w-[66vh]" onClick={(e) => e.stopPropagation()}>
              <Image src={src(zoom)} alt={`${label} — page ${zoom + 1}, full screen`} fill sizes="66vh" className="object-contain" />
              <button
                type="button"
                onClick={() => setZoom(Math.max(0, zoom - 1))}
                disabled={zoom === 0}
                aria-label="Previous page"
                className="absolute -left-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:flex"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => setZoom(Math.min(pageCount - 1, zoom + 1))}
                disabled={zoom === pageCount - 1}
                aria-label="Next page"
                className="absolute -right-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:flex"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs tabular-nums text-white/60">
                {zoom + 1} / {pageCount}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
