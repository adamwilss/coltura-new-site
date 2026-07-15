'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Fades + rises a section's content in once it scrolls into view (one-shot —
 * disconnects after firing). Pairs with the `.scroll-reveal` / `.is-visible`
 * CSS in globals.css, which itself no-ops under prefers-reduced-motion.
 */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  );
}
