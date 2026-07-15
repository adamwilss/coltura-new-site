import Image from 'next/image';

/**
 * Real theme-specific photography (finally) — a sunlit plaster archway for
 * light mode, the same composition at dusk with warm lamp light for dark
 * mode. Both images are ~4:5 already, so object-cover barely crops
 * anything, and both stay mounted with opacity swapped by theme so the
 * change is a smooth crossfade rather than a layout jump. `.theme-fade`
 * (globals.css) drops the transition entirely under prefers-reduced-motion.
 *
 * The laptop screen mockup in both photos shows generic placeholder copy
 * and placeholder "client" logos (Huel / Savage x Fenty / Barry's /
 * Represent) generated as part of the reference image — none of these are
 * real Coltura clients. Flagged to Adam: fine as atmosphere/composition
 * reference, but that logo strip needs to be blurred, cropped out, or
 * replaced before this ships, since as-is it reads as a false client claim.
 */
export default function ArchImage() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[2.5rem] border border-line/60 shadow-[0_32px_60px_-20px_rgba(0,0,0,0.28)] sm:max-w-[480px]">
      <Image
        src="/images/arch-hero-light.png"
        alt="A laptop showing a Coltura website design on a wooden desk inside a sunlit plaster archway, with a branded gecko mug alongside"
        fill
        priority
        sizes="(min-width: 1024px) 480px, 90vw"
        className="theme-fade absolute inset-0 object-cover opacity-100 transition-opacity duration-250 dark:opacity-0"
      />
      <Image
        src="/images/arch-hero-dark.png"
        alt="The same laptop and archway at dusk, lit by warm lamp light"
        fill
        sizes="(min-width: 1024px) 480px, 90vw"
        className="theme-fade absolute inset-0 object-cover opacity-0 transition-opacity duration-250 dark:opacity-100"
      />
    </div>
  );
}
