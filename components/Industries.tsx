'use client';

import { motion } from 'framer-motion';
import { Users, Store, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    title: 'Clubes e Instituciones',
    description:
      'Gestión de socios, cuotas y actividades deportivas desde un solo lugar. Olvidate de las planillas.',
    icon: Users,
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-400/10',
    link: '/clubes',
    image: '/dashboardGestionDeCuotas.webp',
    accentColor: 'group-hover:shadow-[0_8px_40px_rgba(56,189,248,0.12)]',
    arrowColor: 'text-sky-400',
  },
  {
    title: 'Catálogos de Productos',
    description:
      'Exhibí tus productos online para cualquier rubro comercial. Actualizaciones en tiempo real.',
    icon: Store,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-400/10',
    link: '/catalogos',
    image: '/catalogo.webp',
    accentColor: 'group-hover:shadow-[0_8px_40px_rgba(251,146,60,0.12)]',
    arrowColor: 'text-orange-400',
  },
  {
    title: 'Productores de Seguros',
    description:
      'Presencia digital profesional para asegurar tu futuro. Captá clientes con una web a tu medida.',
    icon: Shield,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10',
    link: '/seguros',
    image: '/seguros.webp',
    accentColor: 'group-hover:shadow-[0_8px_40px_rgba(52,211,153,0.12)]',
    arrowColor: 'text-emerald-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function Industries() {
  return (
    <section id="industrias" className="relative py-28 bg-slate-950 overflow-hidden">
      {/* Subtle top separator glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
            Nuestras industrias
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-50 leading-tight tracking-tight mb-4"
          >
            ¿En qué industria estás?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-slate-400 text-base sm:text-lg"
          >
            Encontrá la solución diseñada específicamente para tus necesidades
          </motion.p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`
                group relative flex flex-col
                bg-slate-900/40 backdrop-blur-sm
                border border-white/5
                rounded-2xl overflow-hidden
                transition-all duration-300
                hover:-translate-y-2
                hover:border-white/10
                hover:bg-slate-900/60
                ${industry.accentColor}
              `}
            >
              {/* ── Image container ── */}
              <div className="overflow-hidden rounded-t-2xl relative">
                {/* Dark overlay to keep image cohesive in dark mode */}
                <div className="absolute inset-0 z-10 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={800}
                  height={450}
                  className="w-full h-auto block opacity-85 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 group-hover:scale-105 transform"
                />
              </div>

              {/* ── Content ── */}
              <div className="p-7 flex flex-col flex-grow">
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${industry.iconBg} ${industry.iconColor}`}
                >
                  <industry.icon className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-2 leading-snug">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                  {industry.description}
                </p>

                {/* CTA link */}
                <Link
                  href={industry.link}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${industry.arrowColor} hover:opacity-80 transition-opacity`}
                >
                  Explorar solución
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </Link>
              </div>

              {/* Bottom accent line (appears on hover) */}
              <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
