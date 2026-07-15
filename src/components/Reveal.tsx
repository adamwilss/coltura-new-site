'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right' | 'zoom';

const VARIANT_CLASS: Record<Variant, string> = {
  up: '',
  left: 'sr-left',
  right: 'sr-right',
  zoom: 'sr-zoom',
};

/**
 * Settles a block into place once it scrolls into view (one-shot). Pairs with
 * the `.scroll-reveal` CSS in globals.css, which no-ops under
 * prefers-reduced-motion. `variant` sets the travel direction; `delay` staggers
 * it against neighbours.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  delay?: number;
}) {
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
      { threshold: 0.15, rootMargin: '0px 0px -70px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${VARIANT_CLASS[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={{ '--sr-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
