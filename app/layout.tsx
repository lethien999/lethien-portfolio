import type { Metadata } from 'next';
import { Karla, Pacifico, Source_Sans_3, Ubuntu_Mono } from 'next/font/google';
import './globals.css';

const karla = Karla({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-display',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '400',
  display: 'swap',
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Le Anh Thien | macOS Playground Portfolio',
  description:
    'A macOS-inspired interactive portfolio of Le Anh Thien.',
  keywords: [
    'Lê Anh Thiện',
    'Le Thien',
    'Software Engineer',
    'Backend Developer',
    'Fullstack Developer',
    'DevOps',
    'Portfolio',
    'HUTECH',
  ],
  authors: [{ name: 'Lê Anh Thiện' }],
  openGraph: {
    title: 'Le Anh Thien | macOS Playground Portfolio',
    description:
      'A macOS-inspired interactive portfolio of Le Anh Thien.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${sourceSans.variable} ${pacifico.variable} ${ubuntuMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
