'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    value: '3+',
    label: 'Años de Experiencia',
    icon: <TrendingUp size={18} className="text-orange-400" />,
  },
  {
    value: '24/7',
    label: 'Soporte Dedicado',
    icon: <Clock size={18} className="text-sky-400" />,
  },
];

// Stagger container variant
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* ── Background: subtle grid ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* ── Background: ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center blue blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-900/25 blur-[120px]" />
        {/* Bottom-left orange hint */}
        <div className="absolute bottom-0 -left-24 w-[420px] h-[340px] rounded-full bg-orange-900/15 blur-[100px]" />
        {/* Bottom-right violet hint */}
        <div className="absolute bottom-0 -right-24 w-[380px] h-[300px] rounded-full bg-violet-900/15 blur-[100px]" />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-slate-400 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Transformación digital · Soluciones reales
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          >
            <span className="text-slate-50">Transformación digital</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-rose-500 text-transparent bg-clip-text">
              para negocios reales
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Encontrá la solución exacta para tu rubro. Sistemas de gestión, catálogos online y
            páginas web diseñadas para hacer crecer tu negocio.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <button
              id="hero-cta-btn"
              onClick={() =>
                document.getElementById('industrias')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
                group inline-flex items-center gap-2.5
                bg-orange-500 hover:bg-orange-600
                text-white font-semibold text-base
                px-8 py-3.5 rounded-full
                shadow-[0_0_20px_rgba(249,115,22,0.3)]
                hover:shadow-[0_0_32px_rgba(249,115,22,0.5)]
                hover:scale-105 active:scale-100
                transition-all duration-300
              "
            >
              Ver Soluciones
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* ── Stats cards ── */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pb-24 flex flex-wrap justify-center gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex flex-col items-center gap-2
                  bg-slate-900/50 backdrop-blur-md
                  border border-white/10
                  rounded-2xl p-6 min-w-[160px]
                  hover:border-white/20 hover:bg-slate-900/70
                  transition-all duration-300
                "
              >
                <span className="flex items-center gap-1.5">{stat.icon}</span>
                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-400 text-center leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}