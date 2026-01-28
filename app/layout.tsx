import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://techphite.com'),
  title: 'TechPhite - Potenciamos tu presencia digital',
  description: 'Transformamos tus ideas en sitios web impactantes. Diseño web, SEO, mantenimiento y visibilidad en redes sociales.',
  keywords: 'diseño web, desarrollo web, SEO, marketing digital, mantenimiento web, automatización, bots ia',
  authors: [{ name: 'TechPhite' }],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'TechPhite - Potenciamos tu presencia digital',
    description: 'Transformamos tus ideas en sitios web impactantes. Desarrollo Web, Automatización y Sistemas de Gestión.',
    url: 'https://techphite.com',
    siteName: 'TechPhite',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TechPhite Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechPhite - Potenciamos tu presencia digital',
    description: 'Transformamos tus ideas en sitios web impactantes',
    images: ['/logo.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        {children}
        <Toaster />
        <Script 
          src="https://herramientas-umami.i41qxr.easypanel.host/script.js" 
          data-website-id="478861e3-b6f9-4f4a-8989-d32a08d3f6cf" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
