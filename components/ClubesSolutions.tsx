'use client';

import { motion } from 'framer-motion';
import { Database, CheckCircle, BellRing } from 'lucide-react';

const solutions = [
  {
    title: 'Datos Centralizados y Seguros',
    description: 'Un único lugar en la nube con la información de todos tus socios siempre actualizada y accesible desde cualquier PC o celular.',
    icon: Database,
  },
  {
    title: 'Control Automático de Cuotas',
    description: 'Visualizá al instante el estado de cuenta de cada socio. Registrá pagos con un clic y generá recibos automáticos.',
    icon: CheckCircle,
  },
  {
    title: 'Comunicaciones Inteligentes',
    description: 'El sistema envía recordatorios de vencimiento de forma automática. Vos te enfocás en hacer crecer el club.',
    icon: BellRing,
  },
];

export default function ClubesSolutions() {
  return (
    <section className="py-24 bg-techphite-darker relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(0,194,168,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Con <span className="text-transparent bg-clip-text bg-gradient-to-r from-techphite-cyan to-blue-400">TechPhite Clubes</span>, esto cambia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Te damos una herramienta profesional diseñada para simplificar tu día a día.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-effect border border-gray-800 hover:border-techphite-cyan/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-techphite-cyan/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-techphite-cyan/10 transition-colors"></div>
              
              <div className="w-14 h-14 rounded-xl bg-techphite-cyan/10 flex items-center justify-center mb-6 text-techphite-cyan">
                <solution.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
