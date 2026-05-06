'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Contanos sobre tu negocio',
    description: 'Necesitamos saber tu rubro, qué tipo de productos vendés y qué volumen manejás para adaptar la plataforma.',
  },
  {
    number: '02',
    title: 'Demo con tus productos',
    description: 'Te mostramos una versión de prueba real con algunos de tus productos para que veas cómo funciona antes de decidir.',
  },
  {
    number: '03',
    title: 'Catálogo online en 24hs',
    description: 'Cargamos tu primer lote de inventario. Al día siguiente ya podés empezar a compartir el link y vender.',
  },
];

export default function CatalogosSteps() {
  return (
    <section className="py-24 bg-techphite-darker border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿Cómo empezamos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Implementación súper rápida para que no pierdas ni un día de ventas.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Línea conectora visible en desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-techphite-cyan/30 to-transparent z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-techphite-darker border-4 border-techphite-dark flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,194,168,0.1)] group-hover:border-techphite-cyan transition-colors duration-300">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:from-techphite-cyan group-hover:to-blue-400 transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 px-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
