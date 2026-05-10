
import Footer from '@/components/Footer';
import ClubesHero from '@/components/ClubesHero';
import ClubesProblems from '@/components/ClubesProblems';
import ClubesSolutions from '@/components/ClubesSolutions';
import ClubesFeatures from '@/components/ClubesFeatures';
import ClubesSteps from '@/components/ClubesSteps';
import ClubesContact from '@/components/ClubesContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite Clubes | Gestión de Socios para Instituciones',
  description: 'Olvidate de las planillas. Gestioná socios, cuotas, pagos y comunicaciones de tu club desde un solo lugar.',
};

export default function ClubesPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Ambient glow blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-orange-900/10 blur-[120px]" />

      <ClubesHero />
      <ClubesProblems />
      <ClubesSolutions />
      <ClubesFeatures />
      <ClubesSteps />
      <ClubesContact />
      <Footer />
    </main>
  );
}
