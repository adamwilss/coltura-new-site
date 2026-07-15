import Image from 'next/image';

// Real brand assets (copied from C:\Users\Fen\coltura-repo\public\ — the
// live coltura.uk source of truth), not a hand-drawn approximation. Two
// PNGs, swapped by theme: light-theme-full-logo.png (solid black/red
// wordmark, for light backgrounds) and dark-theme-full-logo.png (white
// outline wordmark, only legible on a dark surface).
export default function Logo() {
  return (
    <>
      <Image
        src="/images/coltura-logo-light.png"
        alt="Coltura"
        width={1395}
        height={264}
        priority
        className="h-7 w-auto dark:hidden"
      />
      <Image
        src="/images/coltura-logo-dark.png"
        alt="Coltura"
        width={1395}
        height={264}
        priority
        className="hidden h-7 w-auto dark:block"
      />
    </>
  );
}
