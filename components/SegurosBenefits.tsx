'use client';

import { motion } from 'framer-motion';
import { UserX, ShieldAlert, TrendingDown } from 'lucide-react';

const problems = [
  {
    title: 'Pérdida de Prospectos',
    description: 'Cuando alguien busca seguros en tu ciudad y no encontrás con una web profesional, ese prospecto se lo lleva la competencia que sí la tiene.',
    icon: UserX,
  },
  {
    title: 'Clientes que Dudan de tu Solidez',
    description: 'Sin un sitio web propio, tus prospectos te perciben como informal. Un link profesional (ej. tunombreseguros.com) genera más confianza que un perfil de red social.',
    icon: ShieldAlert,
  },
  {
    title: 'Alta Competencia ya Digitalizada',
    description: 'Otros productores ya tienen web, SEO y formularios. Cada día que pasa sin tu presencia digital, perdés terreno frente a colegas que ya se digitalizaron.',
    icon: TrendingDown,
  },
];

export default function SegurosBenefits() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿Por qué tener tu propia web?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            El mercado cambió. Hoy la primera impresión de un cliente sobre tu trabajo ocurre en internet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:-translate-y-1 hover:border-white/10 transition-all duration-300"
            >
              <div className="bg-red-500/10 p-3 rounded-xl w-fit mb-6">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
