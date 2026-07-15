'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import WhatsAppButton from './WhatsAppButton';

// Real nav pages on the live site: Home, Solutions, Get Started, About, Contact.
// This prototype is a single homepage, so these link to in-page sections
// rather than routes that don't exist in this standalone build.
const LINKS = [
  { label: 'Solutions', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Contact', href: '#footer' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Hysteresis so a scroll position hovering around the threshold can't
    // flip the state back and forth (that flicker was the "wobble"). The
    // header height is now constant — only the backdrop/border/shadow
    // fade in — so toggling this never shifts layout.
    let state = false;
    function onScroll() {
      const y = window.scrollY;
      if (!state && y > 24) {
        state = true;
        setScrolled(true);
      } else if (state && y < 6) {
        state = false;
        setScrolled(false);
      }
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled
          ? 'border-line/70 bg-bg/85 shadow-[0_1px_20px_-8px_rgba(0,0,0,0.18)] backdrop-blur-md'
          : 'border-transparent bg-bg/0'
      }`}
    >
      {/* Constant vertical padding — no height animation, so the header
          never changes size on scroll and cannot wobble. */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Left cluster: brand + primary nav, grouped as one unit */}
        <div className="flex items-center gap-10">
          <a href="/" aria-label="Coltura home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right cluster: utilities + CTA, grouped as a second unit */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />
          <WhatsAppButton label="Get My Free Audit" className="hidden !min-h-10 !px-5 sm:inline-flex" />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:text-ink md:hidden"
          >
            {menuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line/70 bg-bg px-5 py-5 sm:px-8 md:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <WhatsAppButton label="Get My Free Audit" className="mt-5 w-full" />
        </div>
      )}
    </header>
  );
}
