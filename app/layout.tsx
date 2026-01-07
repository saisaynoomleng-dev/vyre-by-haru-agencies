import type { Metadata } from 'next';
import './globals.css';
import { chivoMono, inter } from '@/lib/fonts';
import { SanityLive } from '@/sanity/lib/live';

export const metadata: Metadata = {
  title: {
    template: '%s | VYRE',
    default: 'VYRE',
  },
  description:
    'VYRE BY HARU AGENCIES is a UI/UX design studio based in kingdom of Atlantica.We design and build modern digital experiences with clarity, purpose, and restraint.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${chivoMono.variable} antialiased`}>
        {children}

        <SanityLive />
      </body>
    </html>
  );
}
