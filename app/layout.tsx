import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lê Anh Thiện | Software Engineer',
  description:
    'Portfolio of Lê Anh Thiện — Software Engineering student at HUTECH. Fullstack Developer with a Backend & DevOps orientation.',
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
    title: 'Lê Anh Thiện | Software Engineer',
    description:
      'Fullstack Developer with a Backend & DevOps orientation. Building reliable, scalable systems.',
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
