'use client';

import { motion } from 'framer-motion';
import { MonitorSmartphone, FileInput, Palette } from 'lucide-react';

const offerings = [
  {
    title: 'Diseño Web que Proyecta Autoridad',
    description: 'Un sitio web moderno y profesional donde tus clientes encuentran tu trayectoria, coberturas y toda la información que necesitan para confiar en vos.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Botones Rápidos para Cotizar',
    description: 'Formularios y botones de WhatsApp estratégicamente ubicados para que los visitantes soliciten cotizaciones de forma rápida y sencilla.',
    icon: FileInput,
  },
  {
    title: 'Tu Marca Personal al Máximo Nivel',
    description: 'Adaptamos los colores, tipografías y el estilo visual para que coincida con tu imagen personal o la de las aseguradoras con las que trabajás.',
    icon: Palette,
  },
];

export default function SegurosOfferings() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-sky-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Con <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">TechPhite Seguros</span>, esto cambia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
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
              className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:-translate-y-1 hover:border-white/10 transition-all duration-300"
            >
              <div className="bg-sky-500/10 p-3 rounded-xl w-fit mb-6">
                <offering.icon className="w-7 h-7 text-sky-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
              <p className="text-slate-400 leading-relaxed">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
