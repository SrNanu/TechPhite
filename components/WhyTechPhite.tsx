'use client';

import { motion } from 'framer-motion';
import { Headset, Code2, Briefcase, Zap } from 'lucide-react';

// ─── Orden y span del Bento Grid ──────────────────────────────────────────────
// Fila 1: [Sistemas a Medida (2 cols)] [Simplicidad de Uso (1 col)]
// Fila 2: [Soporte Local (1 col)]     [Experiencia en el Rubro (2 cols)]
const bentoItems = [
  {
    title: 'Sistemas a Medida',
    description:
      'No te adaptás al sistema, el sistema se adapta a tu forma de trabajar. Soluciones 100% personalizadas para cada tipo de negocio.',
    icon: Code2,
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Simplicidad de Uso',
    description:
      'Interfaces limpias y modernas. Sistemas fáciles de usar para que vos y tu equipo no pierdan tiempo.',
    icon: Zap,
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Soporte Local y Cercano',
    description:
      'No hablás con un bot. Tenés línea directa con el equipo de desarrollo para cualquier consulta o ajuste.',
    icon: Headset,
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Experiencia en el Rubro',
    description:
      'Entendemos los problemas reales de clubes, vendedores y productores. Hablamos tu mismo idioma y sabemos lo que necesitás antes de que lo pidas.',
    icon: Briefcase,
    colSpan: 'md:col-span-2',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function WhyTechPhite() {
  return (
    <section className="relative py-28 bg-slate-950 overflow-hidden">
      {/* ── Top separator ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Ambient glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-orange-900/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Section header ── */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3"
          >
            Nuestras ventajas
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-50 leading-tight tracking-tight mb-4"
          >
            ¿Por qué{' '}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text">
              TechPhite
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Nos enfocamos en resolver problemas reales con tecnología accesible, moderna y fácil de
            usar.
          </motion.p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`
                group relative overflow-hidden
                bg-gradient-to-br from-slate-900 to-slate-900/40
                border border-white/5 backdrop-blur-sm
                rounded-[2rem] p-8 md:p-10
                transition-all duration-500
                hover:-translate-y-1
                hover:border-orange-500/20
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.3)]
                ${item.colSpan}
              `}
            >
              {/* Subtle corner glow on hover */}
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-orange-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5 shadow-inner w-fit mb-6">
                <item.icon className="w-7 h-7 text-orange-500" />
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-slate-100 mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
