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
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Con <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">TechPhite Clubes</span>, esto cambia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
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
              className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:-translate-y-1 hover:border-white/10 transition-all duration-300"
            >
              <div className="bg-orange-500/10 p-3 rounded-xl w-fit mb-6">
                <solution.icon className="w-7 h-7 text-orange-500" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
              <p className="text-slate-400 leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
