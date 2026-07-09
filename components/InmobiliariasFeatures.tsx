'use client';

import { motion } from 'framer-motion';
import { Building, Filter, Map, Camera, Smartphone, Search } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    title: 'Buscador Avanzado',
    description: 'Filtros por precio, ubicación, habitaciones, tipo de operación y más para que encuentren su hogar ideal rápidamente.',
    icon: Search,
  },
  {
    title: 'Fichas Detalladas',
    description: 'Páginas exclusivas por propiedad con galerías de fotos de alta calidad, características y descripciones completas.',
    icon: Building,
  },
  {
    title: 'Mapas Interactivos',
    description: 'Ubicación exacta de cada inmueble con integración de Google Maps para facilitar la visualización del entorno.',
    icon: Map,
  },
  {
    title: 'Gestión de Multimedia',
    description: 'Carga optimizada de fotos, videos y recorridos virtuales para destacar los mejores ángulos de tus propiedades.',
    icon: Camera,
  },
  {
    title: 'Diseño Mobile First',
    description: 'Experiencia perfecta en celulares, desde donde provienen más del 80% de las consultas inmobiliarias actuales.',
    icon: Smartphone,
  },
  {
    title: 'Categorización Inteligente',
    description: 'Etiquetas personalizadas (Vendido, Reservado, Destacado) y organización por tipo de inmueble o barrio.',
    icon: Filter,
  },
];

export default function InmobiliariasFeatures() {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Todo lo que necesitás
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Una plataforma completa diseñada específicamente para el mercado inmobiliario actual.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent opacity-50 rounded-[2rem] blur-xl -z-10"></div>
          <div className="bg-slate-900/50 p-3 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[1.5rem] overflow-hidden relative">
              <Image
                src="/inmobiliaria2.webp"
                alt="Características Inmobiliarias"
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/5 rounded-2xl p-6 hover:bg-slate-900 transition-colors"
            >
              <div className="bg-amber-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
