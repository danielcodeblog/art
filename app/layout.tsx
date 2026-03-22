import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Israel Amedu | Video Editor Portfolio',
  description: 'Boutique post-production portfolio showcasing visual narratives, music videos, and commercial work.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-sky-50 text-[#0A0A0A] antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
