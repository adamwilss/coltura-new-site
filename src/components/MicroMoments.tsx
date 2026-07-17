'use client';

import { useEffect } from 'react';

/**
 * Invisible site-wide charms. No UI of its own.
 *
 * 1. Tab-title tease: when the visitor switches tabs, the page title quietly
 *    becomes the pitch. Restored (with the original title) the moment they
 *    come back — the joke only exists in the tab strip.
 * 2. Console easter egg: for the one business owner in fifty who opens
 *    devtools (or their nephew who "knows computers"), the console is
 *    on-brand too.
 */
export default function MicroMoments() {
  useEffect(() => {
    const original = document.title;
    const onVisibility = () => {
      document.title = document.hidden ? '👀 We saw that.' : original;
    };
    document.addEventListener('visibilitychange', onVisibility);

    // eslint-disable-next-line no-console
    console.log(
      '%cCOLTURA%c\n\nYes, we sweep the console too. No errors here.\n' +
        'If yours is full of red, that’s one of the 18 things a free audit catches:\n' +
        '→ https://coltura.uk/get-started',
      'font-size:28px;font-weight:800;letter-spacing:6px;color:#df2c32;',
      'font-size:12px;color:#888;line-height:1.6;',
    );

    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  return null;
}
