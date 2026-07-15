import type { Metadata } from 'next';
import { Newsreader, Fraunces } from 'next/font/google';
import ThemeInit from '@/components/ThemeInit';
import './globals.css';

// Body copy runs in this optical-size serif rather than a UI sans — Inter/
// system-ui reads as generic app chrome, and a full serif system (Newsreader
// for text, Fraunces for display) is what actually sells "editorial, ancient
// document, ultra premium" rather than "React dashboard."
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coltura — Stop paying for clicks that never become customers.',
  description:
    'A website should do more than look good. It should bring in calls and jobs. Coltura builds sites that turn clicks into real customers.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <ThemeInit />
      </head>
      <body className="bg-bg font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
