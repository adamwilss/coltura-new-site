'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RotateCcw } from 'lucide-react';

const HOLD_MS = 1350;
const WIPE_MS = 950;
const SESSION_KEY = 'coltura-reno-played';

type Phase = 'idle' | 'holding' | 'wiping' | 'done';

/**
 * The Renovation — the homepage's opening argument. The visitor lands on a
 * pitch-perfect 2003 website (Times New Roman, marquee, hit counter, Comic
 * Sans button) for about a second, then a brand-red squeegee wipes the whole
 * thing off-screen to reveal the real page that was rendered beneath it all
 * along. A web design agency demonstrating the product in the first two
 * seconds of the visit.
 *
 * Safety rails: the real hero is server-rendered (no-JS and crawlers never
 * see the overlay), reduced-motion skips entirely, a click fast-forwards,
 * scroll is locked only for the ~2s the moment lasts, and it plays once per
 * session — with a replay pill for anyone who wants to see it again.
 */
export default function Renovation() {
  const [phase, setPhase] = useState<Phase>('idle');
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wipeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedRef = useRef(false);

  const finish = useCallback(() => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    if (wipeTimer.current) clearTimeout(wipeTimer.current);
    document.body.style.overflow = '';
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {}
    setPhase('done');
  }, []);

  const play = useCallback(() => {
    if (reducedRef.current) return;
    document.body.style.overflow = 'hidden';
    setPhase('holding');
    holdTimer.current = setTimeout(() => {
      setPhase('wiping');
      document.body.style.overflow = '';
      wipeTimer.current = setTimeout(finish, WIPE_MS + 60);
    }, HOLD_MS);
  }, [finish]);

  // Skip straight to the wipe on click (impatient visitors keep control).
  const skip = useCallback(() => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    document.body.style.overflow = '';
    setPhase('wiping');
    wipeTimer.current = setTimeout(finish, WIPE_MS + 60);
  }, [finish]);

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let played = false;
    try {
      played = sessionStorage.getItem(SESSION_KEY) === '1';
    } catch {}
    if (reducedRef.current) return; // no overlay, no replay pill
    if (played) {
      setPhase('done');
      return;
    }
    play();
    return () => {
      if (holdTimer.current) clearTimeout(holdTimer.current);
      if (wipeTimer.current) clearTimeout(wipeTimer.current);
      document.body.style.overflow = '';
    };
  }, [play]);

  const replay = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    play();
  }, [play]);

  // The overlay must escape the hero: an ancestor's reveal animation keeps a
  // resting `transform`, which would turn `fixed` into "fixed inside that
  // box". Portal to <body> so inset-0 really means the viewport. Portals only
  // render in phases that begin client-side, so document is always available.
  const overlay =
    phase === 'holding' || phase === 'wiping'
      ? createPortal(
          <div
          role="presentation"
          aria-hidden
          onClick={phase === 'holding' ? skip : undefined}
          className={`reno-overlay fixed inset-0 z-[80] overflow-hidden ${phase === 'wiping' ? 'is-wiping' : ''}`}
        >
          {/* Bad nav */}
          <div style={{ background: '#d4d0c8', borderBottom: '2px solid #808080', padding: '6px 12px', fontSize: 14 }}>
            <span className="reno-link" style={{ marginRight: 14 }}>Home</span>
            <span className="reno-link" style={{ marginRight: 14 }}>About Us</span>
            <span className="reno-link" style={{ marginRight: 14 }}>Our Services</span>
            <span className="reno-link" style={{ marginRight: 14 }}>Links</span>
            <span className="reno-link">Contact Us!!</span>
          </div>

          {/* Marquee */}
          <div className="reno-marquee" style={{ background: '#ffff00', borderBottom: '1px solid #808080', padding: '3px 0', fontSize: 14, fontWeight: 700 }}>
            <span>
              🚧 ★★ WELCOME TO THE OFFICIAL COLTURA WEBSITE ★★ BEST WEB DESIGN IN CHESHIRE ★★ CALL NOW FOR FREE QUOTE!!! ★★ 🚧
            </span>
          </div>

          {/* Body */}
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '48px 20px 0', textAlign: 'center' }}>
            <h1 style={{ color: '#000080', fontSize: 'clamp(1.6rem, 4.5vw, 2.6rem)', fontWeight: 700, marginBottom: 10 }}>
              WELCOME TO COLTURA WEB DESIGN!!!
            </h1>
            <p className="reno-blink" style={{ color: '#ff0000', fontWeight: 700, fontSize: 15, marginBottom: 18 }}>
              *** NEW!! We now make website&apos;s for you&apos;re business ***
            </p>
            <p style={{ fontSize: 16, marginBottom: 24, lineHeight: 1.4 }}>
              We are a company that makes websites. Please click the button below to enter our site.
              <br />
              Thankyou for visiting :-)
            </p>
            <button type="button" className="reno-btn" style={{ marginBottom: 28 }}>
              ➤➤ CLICK HERE To Enter Site ➤➤
            </button>
            <table style={{ margin: '0 auto 22px', border: '2px inset #c0c0c0', fontSize: 13 }}>
              <tbody>
                <tr>
                  <td style={{ padding: '4px 10px', background: '#d4d0c8', border: '1px solid #808080' }}>You are visitor No.</td>
                  <td style={{ padding: '4px 10px', background: '#000', color: '#00ff00', fontFamily: 'monospace', letterSpacing: 2 }}>004217</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: '#555' }}>
              This site is best viewed in Internet Explorer 6 at 800×600 resolution.
              <br />
              Last updated: 14th March 2003 · <span className="reno-link">Sign our guestbook!</span>
            </p>
          </div>

          {/* Squeegee bar rides the wipe edge */}
          {phase === 'wiping' && (
            <div
              aria-hidden
              className="reno-bar fixed inset-y-0 w-[5px]"
              style={{ background: 'var(--brand-hex)', boxShadow: '0 0 24px 6px rgb(223 44 50 / 0.55)' }}
            />
          )}
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      {overlay}

      {phase === 'done' && (
        <button
          type="button"
          onClick={replay}
          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] font-medium text-muted transition-colors hover:border-brand/40 hover:text-ink"
        >
          <RotateCcw size={11} strokeWidth={2} />
          Replay: this page renovated itself when you arrived
        </button>
      )}
    </>
  );
}
