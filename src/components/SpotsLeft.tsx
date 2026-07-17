'use client';

import { useEffect, useState } from 'react';
import { MONTHLY_QUOTA, getSpotsLeft } from '@/lib/whatsapp';

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * Understated scarcity line, matching the approved copy on the live site
 * ("I personally complete each audit...") rather than a countdown-timer
 * gimmick or pulsing status dot. Initial render uses a stable fallback to
 * match server HTML, then updates on mount.
 */
export default function SpotsLeft({ className = '' }: { className?: string }) {
  // Seed from the current date (build time on the server, load time on the
  // client), then refresh on mount so a long-lived tab always shows the right
  // month/spots. suppressHydrationWarning covers the rare build-vs-view month
  // boundary — the effect re-renders it to the current value immediately.
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    setNow(new Date());
  }, []);

  const spots = getSpotsLeft(now);
  const month = MONTH_NAMES[now.getMonth()];

  return (
    <p suppressHydrationWarning className={`text-xs text-muted ${className}`}>
      I personally complete each audit, so I take on {MONTHLY_QUOTA} businesses a month.{' '}
      <span className="font-medium text-ink">
        {spots} space{spots === 1 ? '' : 's'} remain for {month}.
      </span>
    </p>
  );
}
