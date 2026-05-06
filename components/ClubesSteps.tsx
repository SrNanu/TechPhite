'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Nos contás cómo trabajás hoy',
    description: 'Agendamos una breve charla para entender tus necesidades actuales, qué problemas tenés y cómo manejás tu padrón de socios.',
  },
  {
    number: '02',
    title: 'Te mostramos una demo en vivo',
    description: 'Te enseñamos exactamente cómo funciona el sistema adaptado a tu club. Sin compromisos ni vueltas.',
  },
  {
    number: '03',
    title: 'Migramos tus datos y arrancamos',
    description: 'Nosotros nos encargamos de subir tu Excel o planillas viejas al sistema nuevo. Tu club empieza a operar digitalmente en el mismo día.',
  },
];

export default function ClubesSteps() {
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
            Un proceso simple, transparente y sin dolores de cabeza.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Línea conectora visible en desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-techphite-darker border-4 border-techphite-dark flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.1)] group-hover:border-orange-500 transition-colors duration-300">
                  <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:from-orange-400 group-hover:to-orange-600 transition-colors">
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
