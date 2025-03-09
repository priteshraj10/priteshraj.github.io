import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Pritesh Raj | Software Developer',
    template: '%s | Pritesh Raj',
  },
  description: 'Professional portfolio of Pritesh Raj, a skilled software developer specializing in web development, cloud solutions, and more.',
  keywords: ['Pritesh Raj', 'software developer', 'web development', 'portfolio', 'full stack developer', 'React', 'Next.js'],
  authors: [{ name: 'Pritesh Raj' }],
  creator: 'Pritesh Raj',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://priteshraj.github.io/',
    siteName: 'Pritesh Raj Portfolio',
    title: 'Pritesh Raj | Software Developer',
    description: 'Professional portfolio of Pritesh Raj, a skilled software developer specializing in web development, cloud solutions, and more.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pritesh Raj Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pritesh Raj | Software Developer',
    description: 'Professional portfolio of Pritesh Raj, a skilled software developer specializing in web development, cloud solutions, and more.',
    images: ['/images/og-image.jpg'],
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
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
} 