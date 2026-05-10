
import Footer from '@/components/Footer';
import SegurosHero from '@/components/SegurosHero';
import SegurosOfferings from '@/components/SegurosOfferings';
import SegurosBenefits from '@/components/SegurosBenefits';
import SegurosComingSoon from '@/components/SegurosComingSoon';
import SegurosContact from '@/components/SegurosContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite Seguros | Diseño Web para Productores Asesores',
  description: 'Presencia digital que transmite confianza. Páginas profesionales para productores de seguros que quieren captar más clientes online.',
};

export default function SegurosPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Ambient glow blob - blue tone for insurance */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-sky-900/10 blur-[120px]" />

      <SegurosHero />
      <SegurosOfferings />
      <SegurosBenefits />
      <SegurosComingSoon />
      <SegurosContact />
      <Footer />
    </main>
  );
}
