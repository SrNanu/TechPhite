import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SegurosHero from '@/components/SegurosHero';
import SegurosOfferings from '@/components/SegurosOfferings';
import SegurosBenefits from '@/components/SegurosBenefits';
import SegurosComingSoon from '@/components/SegurosComingSoon';
import SegurosContact from '@/components/SegurosContact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPhite Seguros | Diseño Web para Productores Asesores',
  description: 'Tu productora de seguros, con la imagen digital que merece. Páginas profesionales para productores que quieren captar más clientes online.',
};

export default function SegurosPage() {
  return (
    <main className="min-h-screen bg-techphite-darker">
      <Header />
      <SegurosHero />
      <SegurosOfferings />
      <SegurosBenefits />
      <SegurosComingSoon />
      <SegurosContact />
      <Footer />
    </main>
  );
}
