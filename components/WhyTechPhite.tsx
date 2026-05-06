'use client';

import { motion } from 'framer-motion';
import { Headset, Code2, Briefcase, Zap } from 'lucide-react';

const differentiators = [
  {
    title: 'Soporte Local y Cercano',
    description: 'No hablás con un bot. Tenés línea directa con el equipo de desarrollo para cualquier consulta o ajuste.',
    icon: Headset,
  },
  {
    title: 'Sistemas a Medida',
    description: 'No te adaptás al sistema, el sistema se adapta a tu forma de trabajar. Soluciones 100% personalizadas.',
    icon: Code2,
  },
  {
    title: 'Experiencia en el Rubro',
    description: 'Entendemos los problemas reales de clubes, vendedores y productores. Hablamos tu mismo idioma.',
    icon: Briefcase,
  },
  {
    title: 'Simplicidad de Uso',
    description: 'Interfaces limpias y modernas. Sistemas fáciles de usar para que vos y tu equipo no pierdan tiempo.',
    icon: Zap,
  },
];

export default function WhyTechPhite() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondo y efectos */}
      <div className="absolute inset-0 bg-techphite-dark"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(249,115,22,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿Por qué <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">TechPhite</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Nos enfocamos en resolver problemas reales con tecnología accesible, moderna y fácil de usar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-effect border border-gray-800 hover:border-orange-500/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-orange-500/10 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-xl bg-gray-900 border border-gray-700 flex items-center justify-center mb-6 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <diff.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{diff.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
