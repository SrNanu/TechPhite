import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600', '700'] });

export const metadata: Metadata = {
  title: 'TechPhite - Potenciamos tu presencia digital',
  description: 'Transformamos tus ideas en sitios web impactantes. Diseño web, SEO, mantenimiento y visibilidad en redes sociales.',
  keywords: 'diseño web, desarrollo web, SEO, marketing digital, mantenimiento web',
  authors: [{ name: 'TechPhite' }],
  openGraph: {
    title: 'TechPhite - Potenciamos tu presencia digital',
    description: 'Transformamos tus ideas en sitios web impactantes',
    type: 'website',
    locale: 'es_ES',
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
      </body>
    </html>
  );
}
