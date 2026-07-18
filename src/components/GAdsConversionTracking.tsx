'use client';

import { useEffect } from 'react';

// Conversion labels for Google Ads (AW-18203149085) — copied verbatim from
// the live site (campaign V3.4): a click-to-call and a WhatsApp-click
// conversion. Form-funnel leads fire GA4 `generate_lead` (see
// AuditFunnelModal) which can be imported as a conversion in Google Ads.
const CALL_CONVERSION_LABEL = 'AW-18203149085/8lBNCPDaocccEJ2G-OdD';
const WHATSAPP_CONVERSION_LABEL = 'AW-18203149085/N_qRCJytp8ccEJ2G-OdD';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GAdsConversionTracking() {
  useEffect(() => {
    function fire(label: string) {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', { send_to: label });
      }
    }

    function handler(e: MouseEvent) {
      const target = e.target as Element | null;
      if (!target || typeof target.closest !== 'function') return;
      const a = target.closest('a');
      if (!a) return;
      const href = (a.getAttribute('href') || '').toLowerCase();
      if (!href) return;

      if (href.startsWith('tel:')) {
        fire(CALL_CONVERSION_LABEL);
      } else if (
        href.includes('wa.me') ||
        href.includes('api.whatsapp.com') ||
        href.startsWith('whatsapp:')
      ) {
        fire(WHATSAPP_CONVERSION_LABEL);
      }
    }

    document.addEventListener('click', handler, { capture: true });
    return () => document.removeEventListener('click', handler, { capture: true });
  }, []);

  return null;
}
