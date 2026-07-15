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
  const [spots, setSpots] = useState(MONTHLY_QUOTA - 1);
  const [month, setMonth] = useState('');

  useEffect(() => {
    const now = new Date();
    setSpots(getSpotsLeft(now));
    setMonth(MONTH_NAMES[now.getMonth()]);
  }, []);

  return (
    <p className={`text-xs text-muted ${className}`}>
      I personally complete each audit, so I take on {MONTHLY_QUOTA} businesses a month.{' '}
      <span className="font-medium text-ink">
        {spots} space{spots === 1 ? '' : 's'} remain{month ? ` for ${month}` : ''}.
      </span>
    </p>
  );
}
