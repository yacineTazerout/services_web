import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://tygen.com'),
  title: 'TYGEN - Strategic Business Consulting',
  description: 'Transform your business through strategic consulting, process optimization, and operational excellence. Helping entrepreneurs and companies achieve sustainable growth.',
  keywords: 'business consulting, strategy development, process auditing, operations management, sales marketing',
  authors: [{ name: 'TYGEN' }],
  creator: 'TYGEN',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'TYGEN - Strategic Business Consulting',
    description: 'Transform your business through strategic consulting and operational excellence.',
    siteName: 'TYGEN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TYGEN - Strategic Business Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TYGEN - Strategic Business Consulting',
    description: 'Transform your business through strategic consulting and operational excellence.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}