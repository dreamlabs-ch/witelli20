import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Witelli20 – Website closed',
  description: 'The Witellikerstrasse 20 community website has been closed at the request of WOKO. Visit woko.ch for housing and other concerns.',
  keywords: 'student housing, Zurich, Witellikerstrasse, WOKO',
  openGraph: {
    title: 'Witelli20 – Website closed',
    description: 'The Witellikerstrasse 20 community website has been closed at the request of WOKO.',
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
