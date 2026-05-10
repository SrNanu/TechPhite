
import Footer from '@/components/Footer';
import CatalogosHero from '@/components/CatalogosHero';
import CatalogosProblems from '@/components/CatalogosProblems';
import CatalogosSolutions from '@/components/CatalogosSolutions';
import CatalogosFeatures from '@/components/CatalogosFeatures';
import CatalogosSteps from '@/components/CatalogosSteps';
import CatalogosContact from '@/components/CatalogosContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite Catálogos | Catálogos Online para Comercios y Mayoristas',
  description: 'Tu negocio abierto 24/7. Exhibí tus productos, recibí pedidos y actualizá precios en tiempo real. Ideal para comercios, distribuidores y mayoristas.',
};

export default function CatalogosPage() {
  return (
    <main className="min-h-screen bg-slate-950 relative">
      {/* Ambient glow blob */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-orange-900/10 blur-[120px]" />

      <CatalogosHero />
      <CatalogosProblems />
      <CatalogosSolutions />
      <CatalogosFeatures />
      <CatalogosSteps />
      <CatalogosContact />
      <Footer />
    </main>
  );
}
