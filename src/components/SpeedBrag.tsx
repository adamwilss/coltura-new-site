'use client';

import { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

/**
 * A small, honest brag in the footer: the REAL measured time this page took
 * to become interactive, from the browser's own Navigation Timing — because
 * speed is one of the things we sell. Renders nothing if the number wouldn't
 * flatter us (slow connection, cold cache) or isn't available; a brag that
 * needs a footnote isn't a brag.
 */
export default function SpeedBrag() {
  const [ms, setMs] = useState<number | null>(null);

  useEffect(() => {
    const read = () => {
      const [nav] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (!nav || !nav.domContentLoadedEventEnd) return;
      const t = Math.round(nav.domContentLoadedEventEnd - nav.startTime);
      if (t > 0 && t < 1500) setMs(t);
    };
    if (document.readyState === 'complete') read();
    else {
      window.addEventListener('load', read, { once: true });
      return () => window.removeEventListener('load', read);
    }
  }, []);

  if (ms === null) return null;

  return (
    <p className="flex items-center gap-1.5">
      <Zap size={12} strokeWidth={2} className="text-brand" aria-hidden />
      This page was ready in {(ms / 1000).toFixed(2)}s — measured by your browser, just now.
      <span className="text-muted/60">When did yours last do that?</span>
    </p>
  );
}
