'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function CatalogosHero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-techphite-darker via-techphite-dark to-techphite-darker"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,194,168,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto Principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-2 rounded-full border border-techphite-cyan/30 bg-techphite-cyan/10 text-techphite-cyan text-sm font-medium mb-6">
              Para Comercios, Concesionarias y Distribuidores
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Tu catálogo siempre actualizado. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-techphite-cyan to-blue-400">
                Aumentá tus ventas online.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              Gestioná tus productos online fácilmente. Ahorrá tiempo y multiplicá tus ventas con tu propia tienda digital.
            </p>
            
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg group shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all"
            >
              Quiero mi catálogo
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Placeholder Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-techphite-cyan/20 to-transparent opacity-50 rounded-lg blur-xl -z-10"></div>
            
            <div className="rounded-lg border border-gray-700 overflow-hidden relative group shadow-2xl bg-gray-900">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer z-20 pointer-events-none"></div>
              <Image
                src="/catalogo.webp"
                alt="Catálogo online con productos listados"
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
