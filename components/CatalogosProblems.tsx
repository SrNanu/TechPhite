'use client';

import { motion } from 'framer-motion';
import { FileDown, ImageOff, TimerOff } from 'lucide-react';

const problems = [
  {
    title: 'Catálogos PDF Obsoletos',
    description: 'Enviás un PDF pesado que queda desactualizado al día siguiente. Los clientes te preguntan precios de productos que ya no tenés.',
    icon: FileDown,
  },
  {
    title: 'Ventas Desordenadas',
    description: 'Tus vendedores mandan fotos sueltas por WhatsApp. La información se pierde en el chat y el cliente se enfría.',
    icon: ImageOff,
  },
  {
    title: 'Pérdida de Tiempo',
    description: 'Cada vez que cambia un precio o entra stock, tenés que actualizarlo manualmente en Facebook, Instagram y listas de papel.',
    icon: TimerOff,
  },
];

export default function CatalogosProblems() {
  return (
    <section className="py-24 bg-techphite-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿Te pasa esto?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Vender productos no debería ser caótico. Si dependés de fotos sueltas y PDFs, estás perdiendo ventas.
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
              className="p-8 rounded-2xl bg-techphite-darker border border-red-900/30 hover:border-red-500/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-red-500/10 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 text-red-500">
                <problem.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
