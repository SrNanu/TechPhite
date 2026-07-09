'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export default function InmobiliariasHero() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Para Inmobiliarias y Corredores
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
              Tus propiedades <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">
                donde tienen que estar.
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Elevá la presentación de tus inmuebles con una web profesional. Destacá tus propiedades, recibí consultas en tiempo real y cerrá más operaciones.
            </p>
            
            <button
              onClick={scrollToContact}
              className="
                group inline-flex items-center gap-2.5
                bg-amber-600 hover:bg-amber-700
                text-white font-semibold text-lg
                px-8 py-4 rounded-full
                shadow-[0_0_20px_rgba(217,119,6,0.3)]
                hover:shadow-[0_0_32px_rgba(217,119,6,0.5)]
                hover:scale-105 active:scale-100
                transition-all duration-300
              "
            >
              Empezar ahora
              <ArrowDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-50 rounded-[2rem] blur-xl -z-10"></div>
            
            <div className="bg-slate-900/50 p-3 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] overflow-hidden relative">
                <Image
                  src="/inmobiliaria1.webp"
                  alt="Plataforma Inmobiliaria"
                  width={1200}
                  height={800}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
