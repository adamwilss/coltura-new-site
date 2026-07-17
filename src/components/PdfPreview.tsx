'use client';

import { useState } from 'react';

/**
 * Framed PDF embed that shows a branded loading state until the document
 * renders, so it never flashes an empty white box. Falls back gracefully — the
 * spinner just sits behind the frame until the iframe's load event fires.
 */
export default function PdfPreview({
  src,
  title,
  label = 'Coltura Growth Audit',
}: {
  src: string;
  title: string;
  label?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-card shadow-[0_1px_2px_rgba(0,0,0,0.04),0_28px_56px_-28px_rgba(0,0,0,0.24)]">
      <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
        <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">{label}</span>
        <span className="ml-auto shrink-0 rounded border border-brand/25 bg-brand/10 px-1.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide text-brand">
          Real example
        </span>
      </div>
      <div className="relative h-[500px] w-full bg-white sm:h-[620px]">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card">
            <span
              className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand"
              aria-hidden
            />
            <span className="text-xs font-medium text-muted">Loading your sample audit…</span>
          </div>
        )}
        <iframe
          src={src}
          title={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
