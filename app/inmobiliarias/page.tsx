import Footer from '@/components/Footer';
import InmobiliariasHero from '@/components/InmobiliariasHero';
import InmobiliariasProblems from '@/components/InmobiliariasProblems';
import InmobiliariasFeatures from '@/components/InmobiliariasFeatures';
import InmobiliariasContact from '@/components/InmobiliariasContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite Inmobiliarias | Plataformas Modernas para Bienes Raíces',
  description: 'Elevá la presentación de tus propiedades. Plataformas inmobiliarias elegantes, funcionales y optimizadas para destacar en el mercado.',
};

export default function InmobiliariasPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Ambient glow blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-amber-900/10 blur-[120px]" />

      <InmobiliariasHero />
      <InmobiliariasProblems />
      <InmobiliariasFeatures />
      <InmobiliariasContact />
      <Footer />
    </main>
  );
}
