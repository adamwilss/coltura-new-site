'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const SHOWN_KEY = 'coltura-exit-shown';
const DONE_KEY = 'coltura-funnel-done';
const WEBSITE_KEY = 'coltura-lead-website';
const MIN_DWELL_MS = 15000;

/**
 * One last chance, offered once. When a desktop cursor bolts for the tab bar
 * after 15+ seconds on the page, a single quiet card restates the whole deal
 * in nine words. Shows once per session, never after a submission, never
 * over the open funnel, and never on touch devices (there's no exit intent
 * to detect on a phone — and the sticky CTA bar already owns that space).
 */
export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let armed = false;
    const armTimer = setTimeout(() => {
      armed = true;
    }, MIN_DWELL_MS);

    const onMouseOut = (e: MouseEvent) => {
      if (!armed || e.relatedTarget || e.clientY > 8) return;
      try {
        if (sessionStorage.getItem(SHOWN_KEY) || sessionStorage.getItem(DONE_KEY)) return;
      } catch {}
      if (document.querySelector('[role="dialog"]')) return; // funnel already open
      try {
        sessionStorage.setItem(SHOWN_KEY, '1');
      } catch {}
      setOpen(true);
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const proceed = () => {
    setOpen(false);
    let website = '';
    try {
      website = sessionStorage.getItem(WEBSITE_KEY) || '';
    } catch {}
    window.dispatchEvent(new CustomEvent('coltura:open-funnel', { detail: { website } }));
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/55 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Before you go"
        >
          <motion.div
            initial={{ y: 26, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-line bg-card p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X size={17} strokeWidth={2} />
            </button>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand">Before you go</p>
            <h3 className="mb-3 font-heading text-2xl font-medium leading-tight text-ink">
              40 seconds. £99 value. <span className="text-brand">Free.</span>
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted">
              That&rsquo;s the whole deal. A real person reviews your website and tells you exactly
              what&rsquo;s costing you enquiries — no card, no call, no catch.
            </p>
            <button
              type="button"
              onClick={proceed}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-lg bg-brand px-8 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Review my website free
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-3 text-xs text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
            >
              No thanks, my website&rsquo;s perfect
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
