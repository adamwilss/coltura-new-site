'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

// The real checks, dramatised. Deliberately phrased as QUEUEING work — the
// scan animation never fakes results; a human does the actual audit.
const SCAN_LINES = [
  'first impression — the 3-second test',
  'mobile experience',
  'load speed',
  'clarity of offer',
  'trust signals',
  'calls to action',
  'local visibility on Google',
  'enquiry flow — forms, numbers, WhatsApp',
];

const LINE_MS = 260;

// The placeholder types real-looking local-business domains, one after
// another — a quiet demonstration of who this is for and what to do here.
const SAMPLE_DOMAINS = [
  'yourbusiness.co.uk',
  'smithsplumbing.co.uk',
  'thecornersalon.uk',
  'hartleyroofing.com',
];

/**
 * The hero's hook: type your website, watch the audit checklist queue up
 * against your actual domain, then land in the funnel with your site already
 * filled in — two steps from done before you've decided anything. The theatre
 * is honest: it queues checks, it never invents findings.
 */
export default function UrlScanner() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [scanning, setScanning] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const [domain, setDomain] = useState('');
  const [placeholder, setPlaceholder] = useState(SAMPLE_DOMAINS[0]);
  const [focused, setFocused] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Typewriter placeholder: type a domain, hold, delete, next. Pauses while
  // the field is focused or filled; static under reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let d = 0; // domain index
    let c = SAMPLE_DOMAINS[0].length; // char cursor (start fully typed)
    let deleting = false;
    let t: ReturnType<typeof setTimeout>;
    let active = true;

    const tick = () => {
      if (!active) return;
      const word = SAMPLE_DOMAINS[d];
      let delay = deleting ? 28 : 62;
      if (deleting) {
        c -= 1;
        if (c === 0) {
          deleting = false;
          d = (d + 1) % SAMPLE_DOMAINS.length;
          delay = 350;
        }
      } else {
        c += 1;
        if (c >= word.length) {
          c = word.length;
          deleting = true;
          delay = 1700;
        }
      }
      setPlaceholder(SAMPLE_DOMAINS[d].slice(0, Math.max(1, c)));
      t = setTimeout(tick, delay);
    };
    t = setTimeout(tick, 1700);
    return () => {
      active = false;
      clearTimeout(t);
    };
  }, []);

  const normalise = (v: string) => (/^https?:\/\//i.test(v.trim()) ? v.trim() : `https://${v.trim()}`);

  const start = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError('Type your website first — that’s all we need');
      return;
    }
    let host = '';
    try {
      const url = new URL(normalise(trimmed));
      if (!url.hostname.includes('.')) throw new Error('invalid');
      host = url.hostname.replace(/^www\./, '');
    } catch {
      setError('That doesn’t look like a web address — try yourbusiness.co.uk');
      return;
    }
    setError('');
    setDomain(host);
    setScanning(true);
    setLineCount(0);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const perLine = reduced ? 0 : LINE_MS;
    SCAN_LINES.forEach((_, i) => {
      timers.current.push(setTimeout(() => setLineCount(i + 1), 350 + i * perLine));
    });
    timers.current.push(
      setTimeout(
        () => {
          setScanning(false);
          window.dispatchEvent(
            new CustomEvent('coltura:open-funnel', { detail: { website: normalise(trimmed) } }),
          );
        },
        reduced ? 500 : 350 + SCAN_LINES.length * perLine + 900,
      ),
    );
  }, [value]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  return (
    <>
      <div className="flex w-full max-w-[34rem] flex-col gap-2 sm:flex-row">
        <input
          type="text"
          inputMode="url"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (error) setError('');
          }}
          onKeyDown={(e) => e.key === 'Enter' && start()}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={focused || value ? 'yourbusiness.co.uk' : placeholder}
          aria-label="Your website address"
          className="input-beckon min-h-14 flex-1 rounded-lg border border-line bg-card px-5 font-mono text-base text-ink placeholder:text-muted/50 focus:border-brand/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
        />
        <button
          type="button"
          onClick={start}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-brand px-7 text-sm font-bold tracking-[0.01em] text-on-brand shadow-[0_10px_24px_-8px_rgba(223,44,50,0.45)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Review it free
          <ArrowRight size={15} strokeWidth={2.5} />
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-brand">{error}</p>}

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {scanning && (
              <motion.div
                className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ y: 22, scale: 0.97 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#151312] shadow-2xl"
                >
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand" />
                    <span className="font-mono text-xs text-white/70">
                      coltura audit — {domain}
                    </span>
                  </div>
                  <div className="space-y-2 px-5 py-5 font-mono text-[13px]">
                    {SCAN_LINES.map((line, i) => (
                      <div
                        key={line}
                        className={`flex items-center gap-2.5 transition-opacity duration-200 ${
                          i < lineCount ? 'opacity-100' : 'opacity-25'
                        }`}
                      >
                        {i < lineCount ? (
                          <Check size={13} strokeWidth={3} className="shrink-0 text-brand" />
                        ) : (
                          <span className="h-[13px] w-[13px] shrink-0" />
                        )}
                        <span className="text-white/85">{line}</span>
                        {i < lineCount && <span className="ml-auto text-[11px] text-white/40">queued</span>}
                      </div>
                    ))}
                    <div
                      className={`pt-3 text-white/60 transition-opacity duration-300 ${
                        lineCount >= SCAN_LINES.length ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      ✓ 8 checks queued. A human does the rest — by hand.
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
