import Image from 'next/image';

/**
 * Real theme-specific photography — a sunlit plaster archway for light
 * mode, the same composition at dusk with warm lamp light for dark mode.
 * Both stay mounted with opacity swapped by theme so the change is a
 * smooth crossfade rather than a layout jump. `.theme-fade` (globals.css)
 * drops the transition entirely under prefers-reduced-motion.
 *
 * Deliberately NOT a framed photo card: no outer border, no drop shadow
 * lifting it off the page. The mask follows the same arch curve the photo
 * itself depicts, the image is scaled slightly past the opening so it
 * feels like the room continues beyond what's visible, and the only
 * shadow is an inset ring at the opening's edge — as if the page's own
 * surface is the near wall, and the room sits back behind it, not a
 * picture sitting on top of the page.
 *
 * The laptop screen mockup in both photos shows generic placeholder copy
 * and placeholder "client" logos (Huel / Savage x Fenty / Barry's /
 * Represent) generated as part of the reference image — none of these are
 * real Coltura clients. Flagged to Adam: fine as atmosphere/composition
 * reference, but that logo strip needs to be blurred, cropped out, or
 * replaced before this ships, since as-is it reads as a false client claim.
 */
export default function ArchImage() {
  const archRadius = '50% 50% 0 0 / 26% 26% 0 0';

  return (
    <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px]">
      <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ borderRadius: archRadius }}>
        <Image
          src="/images/arch-hero-light.png"
          alt="A laptop showing a Coltura website design on a wooden desk inside a sunlit plaster archway, with a branded gecko mug alongside"
          fill
          priority
          sizes="(min-width: 1024px) 480px, 90vw"
          className="theme-fade absolute inset-0 scale-[1.06] object-cover opacity-100 transition-opacity duration-250 dark:opacity-0"
        />
        <Image
          src="/images/arch-hero-dark.png"
          alt="The same laptop and archway at dusk, lit by warm lamp light"
          fill
          sizes="(min-width: 1024px) 480px, 90vw"
          className="theme-fade absolute inset-0 scale-[1.06] object-cover opacity-0 transition-opacity duration-250 dark:opacity-100"
        />

        {/* Inset shadow ring — reads as the near wall casting shadow into
            the opening, so the room sits behind the page, not on it */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow:
              'inset 0 26px 36px -12px rgba(0,0,0,0.5), inset 0 -20px 32px -20px rgba(0,0,0,0.32), inset 22px 0 30px -22px rgba(0,0,0,0.26), inset -22px 0 30px -22px rgba(0,0,0,0.26)',
          }}
        />
      </div>
    </div>
  );
}
