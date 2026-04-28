'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClubesHero from '@/components/ClubesHero';
import ClubesFeatures from '@/components/ClubesFeatures';
import ClubesRules from '@/components/ClubesRules';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function ClubesPage() {
  return (
    <main className="min-h-screen bg-techphite-darker">
      <Header />
      
      <ClubesHero />
      
      <div id="features">
        <ClubesFeatures />
      </div>
      
      <ClubesRules />
      
      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto glass-effect p-12 rounded-[2rem] border border-white/10 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Llevá tu club al próximo nivel
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Unite a las instituciones que ya transformaron su realidad con TechPhite. 
              El orden, la recaudación y el futuro de tu club empiezan acá.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5493416912227&text=Hola+TechPhite%21+Quiero+una+demo+del+sistema+para+clubes', '_blank')}
                size="lg"
                className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white font-semibold px-10 py-7 text-xl group neon-glow w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 w-6 h-6" />
                Contactar por WhatsApp
              </Button>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-[2rem]">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,168,0.2),transparent_70%)]"></div>
            </div>
          </div>
        </div>
        
        {/* Animated background blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-techphite-cyan/10 blur-[100px] -z-10 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] -z-10 rounded-full"></div>
      </section>

      <Footer />
    </main>
  );
}
