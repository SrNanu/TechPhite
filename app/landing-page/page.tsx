import Footer from '@/components/Footer';
import LandingPageHero from '@/components/LandingPageHero';
import LandingPageOfferings from '@/components/LandingPageOfferings';
import LandingPageBenefits from '@/components/LandingPageBenefits';
import LandingPageComingSoon from '@/components/LandingPageComingSoon';
import LandingPageContact from '@/components/LandingPageContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite | Diseño de Landing Pages para Negocios y Emprendedores',
  description: 'Presencia digital que transmite confianza. Landing pages profesionales diseñadas para captar clientes, automatizar consultas y potenciar tu marca.',
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Ambient glow blob - blue tone */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-sky-900/10 blur-[120px]" />

      <LandingPageHero />
      <LandingPageOfferings />
      <LandingPageBenefits />
      <LandingPageComingSoon />
      <LandingPageContact />
      <Footer />
    </main>
  );
}
