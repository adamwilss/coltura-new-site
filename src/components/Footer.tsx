import Logo from './Logo';
import { PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/whatsapp';

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="mb-10 flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We build websites that become local business assets, not digital
              business cards.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted">
              Navigate
            </p>
            {LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted">
              Get In Touch
            </p>
            <a href="tel:+447958394808" className="text-sm text-muted transition-colors hover:text-ink">
              {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              Get My Free Audit (WhatsApp)
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>coltura.uk</p>
          <p>&copy; {new Date().getFullYear()} Coltura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
