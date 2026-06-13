
import Hero from '@/components/Hero';
import Industries from '@/components/Industries';
import WhyTechPhite from '@/components/WhyTechPhite';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-techphite-darker">

      <Hero />
      <Industries />
      <WhyTechPhite />
      <AboutUs />
      <Footer />
    </main>
  );
}
