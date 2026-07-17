'use client';

import { useEffect, useState } from 'react';
import AuditFunnelModal from './AuditFunnelModal';

/**
 * Mounts the multi-step audit funnel modal and opens it whenever any element
 * carrying `data-audit-funnel` is clicked. Event delegation means the trigger
 * buttons can live anywhere in the (server-rendered) page — they don't need to
 * be client components themselves.
 */
export default function AuditFunnel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest?.('[data-audit-funnel]');
      if (!trigger) return;
      e.preventDefault();
      setOpen(true);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return open ? <AuditFunnelModal onClose={() => setOpen(false)} /> : null;
}
