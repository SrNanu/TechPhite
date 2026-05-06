import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CatalogosHero from '@/components/CatalogosHero';
import CatalogosProblems from '@/components/CatalogosProblems';
import CatalogosSolutions from '@/components/CatalogosSolutions';
import CatalogosFeatures from '@/components/CatalogosFeatures';
import CatalogosSteps from '@/components/CatalogosSteps';
import CatalogosContact from '@/components/CatalogosContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite AutoCat | Catálogos Online para Comercios',
  description: 'Cargás el producto una sola vez y se publica en tu web, WhatsApp y redes al instante. Ideal para concesionarias y distribuidores.',
};

export default function CatalogosPage() {
  return (
    <main className="min-h-screen bg-techphite-darker">
      <Header />
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
