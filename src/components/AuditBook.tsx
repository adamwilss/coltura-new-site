'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

/**
 * The audit as a book you flick through — page images instead of a heavy PDF
 * embed (the iframe routinely failed to load on slow connections). Arrows,
 * swipe, keyboard and click-to-enlarge; adjacent pages preload so a flick
 * never shows a blank page. Swap the JPEGs in /public to update the content.
 */
export default function AuditBook({
  basePath,
  pageCount,
  label = 'Coltura Growth Audit',
  pdfHref,
}: {
  basePath: string; // e.g. "/images/audit-pages" containing page-01.jpg …
  pageCount: number;
  label?: string;
  pdfHref?: string;
}) {
  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const reduced = useReducedMotion();

  const src = useCallback(
    (i: number) => `${basePath}/page-${String(i + 1).padStart(2, '0')}.jpg`,
    [basePath],
  );

  const go = useCallback(
    (delta: number) => {
      setDir(delta);
      setPage((p) => Math.max(0, Math.min(pageCount - 1, p + delta)));
    },
    [pageCount],
  );

  // Keyboard: arrows flip, Escape closes the zoom overlay.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'Escape') setZoomed(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // Lock body scroll while zoomed.
  useEffect(() => {
    if (!zoomed) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [zoomed]);

  const flip = reduced
    ? { initial: {}, animate: {}, exit: {} }
    : {
        initial: (d: number) => ({ x: d * 56, opacity: 0, rotateY: d * 9 }),
        animate: { x: 0, opacity: 1, rotateY: 0 },
        exit: (d: number) => ({ x: d * -56, opacity: 0, rotateY: d * -9 }),
      };

  const pageImage = (
    <AnimatePresence mode="popLayout" custom={dir} initial={false}>
      <motion.div
        key={page}
        custom={dir}
        variants={flip}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        drag={reduced ? false : 'x'}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) go(1);
          else if (info.offset.x > 60) go(-1);
        }}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
        style={{ transformPerspective: 1200 }}
      >
        <Image
          src={src(page)}
          alt={`${label} — page ${page + 1} of ${pageCount}`}
          fill
          sizes="(min-width: 1024px) 620px, 100vw"
          className="select-none object-contain"
          draggable={false}
          priority={page === 0}
        />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_28px_56px_-28px_rgba(0,0,0,0.24)]">
        {/* Branded header bar */}
        <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
          <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
          <span className="ml-auto shrink-0 rounded border border-brand/25 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
            Real example
          </span>
        </div>

        {/* The page */}
        <div className="relative aspect-[1400/1981] max-h-[620px] w-full bg-bg-secondary">
          {pageImage}

          {/* Preload neighbours invisibly so flicking is instant */}
          <div aria-hidden className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0">
            {page > 0 && <Image src={src(page - 1)} alt="" width={64} height={90} />}
            {page < pageCount - 1 && <Image src={src(page + 1)} alt="" width={64} height={90} />}
          </div>

          {/* Flip controls */}
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={page === 0}
            aria-label="Previous page"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink shadow-md backdrop-blur transition enabled:hover:scale-105 enabled:hover:border-brand/40 disabled:opacity-30"
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={page === pageCount - 1}
            aria-label="Next page"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card/90 text-ink shadow-md backdrop-blur transition enabled:hover:scale-105 enabled:hover:border-brand/40 disabled:opacity-30"
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>

          {/* Enlarge */}
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label="Enlarge page"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-card/90 text-muted shadow-md backdrop-blur transition hover:scale-105 hover:text-ink"
          >
            <Maximize2 size={15} strokeWidth={2} />
          </button>
        </div>

        {/* Footer: counter + dots */}
        <div className="flex items-center justify-between border-t border-line px-4 py-3">
          <span className="text-xs tabular-nums text-muted">
            Page <span className="font-semibold text-ink">{page + 1}</span> of {pageCount}
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => {
                  setDir(i > page ? 1 : -1);
                  setPage(i);
                }}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  i === page ? 'w-5 bg-brand' : 'w-[5px] bg-line hover:bg-muted'
                }`}
              />
            ))}
          </div>
          <span className="hidden text-[11px] text-muted/70 sm:block">swipe or use arrows</span>
        </div>
      </div>

      {pdfHref && (
        <a
          href={pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-xs font-medium text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          Prefer the PDF? Open it here
        </a>
      )}

      {/* Zoom lightbox — portalled so ancestor reveal transforms can't trap it */}
      {zoomed &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setZoomed(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`${label} — enlarged page ${page + 1}`}
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={20} strokeWidth={2} />
            </button>
            <div className="relative h-full max-h-[92vh] w-full max-w-[65vh]" onClick={(e) => e.stopPropagation()}>
              <Image
                src={src(page)}
                alt={`${label} — page ${page + 1} of ${pageCount}, enlarged`}
                fill
                sizes="65vh"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => go(-1)}
                disabled={page === 0}
                aria-label="Previous page"
                className="absolute -left-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:flex"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                disabled={page === pageCount - 1}
                aria-label="Next page"
                className="absolute -right-14 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:opacity-30 sm:flex"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
