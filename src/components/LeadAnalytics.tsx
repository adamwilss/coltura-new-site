'use client';

import { useEffect } from 'react';

/**
 * Page-wide delegated click listener that fires a GA/Google Ads `generate_lead`
 * event on any WhatsApp or phone-call link click. Extracted into a client
 * component so the page it lives on can stay a server component (for metadata).
 * No-ops until `window.gtag` is actually loaded.
 */
export default function LeadAnalytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const method = href.includes('wa.me') ? 'whatsapp' : href.startsWith('tel:') ? 'phone' : null;
      if (!method) return;
      const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', {
          event_category: 'lead',
          event_label: `get-started-${method}`,
          method,
          page_location: window.location.href,
        });
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
