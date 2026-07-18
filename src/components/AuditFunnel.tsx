'use client';

import { useEffect, useState } from 'react';
import AuditFunnelModal from './AuditFunnelModal';

/**
 * Mounts the multi-step audit funnel modal. Opens two ways:
 *  - any click on an element carrying `data-audit-funnel` (event delegation,
 *    so server-rendered trigger buttons work anywhere on the page);
 *  - a `coltura:open-funnel` CustomEvent — the UrlScanner dispatches this
 *    with the visitor's website so the modal opens pre-filled at step 2.
 */
export default function AuditFunnel() {
  const [state, setState] = useState<{ open: boolean; website: string }>({ open: false, website: '' });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest?.('[data-audit-funnel]');
      if (!trigger) return;
      e.preventDefault();
      // If they already typed their website this session (scanner or a
      // previous attempt), don't make them type it twice — open at step 2.
      let website = '';
      try {
        website = sessionStorage.getItem('coltura-lead-website') || '';
      } catch {}
      setState({ open: true, website });
    };
    const onOpen = (e: Event) => {
      const website = (e as CustomEvent<{ website?: string }>).detail?.website ?? '';
      setState({ open: true, website });
    };
    document.addEventListener('click', onClick);
    window.addEventListener('coltura:open-funnel', onOpen);
    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('coltura:open-funnel', onOpen);
    };
  }, []);

  return state.open ? (
    <AuditFunnelModal initialWebsite={state.website} onClose={() => setState({ open: false, website: '' })} />
  ) : null;
}
