'use client';

import { motion } from 'framer-motion';
import { MonitorSmartphone, FileInput, Palette } from 'lucide-react';

const offerings = [
  {
    title: 'Página Web Profesional',
    description: 'Un sitio web moderno donde tus clientes pueden encontrar toda tu información, trayectoria y el detalle de las coberturas que ofrecés.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Cotizaciones Integradas',
    description: 'Formularios estratégicamente ubicados para que los visitantes puedan solicitar cotizaciones de forma rápida y sencilla.',
    icon: FileInput,
  },
  {
    title: 'Diseño a Medida',
    description: 'Adaptamos los colores, tipografías y el estilo visual para que coincida con tu imagen personal o la de las aseguradoras con las que trabajás.',
    icon: Palette,
  },
];

export default function SegurosOfferings() {
  return (
    <section className="py-24 bg-techphite-dark relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿Qué ofrecemos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Las herramientas digitales que necesitás para destacar en un mercado competitivo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-effect border border-gray-800 hover:border-emerald-500/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-emerald-500/10 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
                <offering.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{offering.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
