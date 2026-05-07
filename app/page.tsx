
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import WhyTechPhite from '@/components/WhyTechPhite';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-techphite-darker">

      <Hero />
      <Industries />
      <WhyTechPhite />
      <Footer />
    </main>
  );
}
