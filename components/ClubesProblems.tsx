'use client';

import { motion } from 'framer-motion';
import { FileSpreadsheet, SearchX, Clock } from 'lucide-react';

const problems = [
  {
    title: 'Planillas Desactualizadas',
    description: 'Tenés los datos de socios dispersos en Excel o papel, y nunca sabés cuál es la versión correcta.',
    icon: FileSpreadsheet,
  },
  {
    title: 'Control Manual de Pagos',
    description: 'No sabés quién pagó y quién debe sin tener que revisar recibos o transferencias uno por uno.',
    icon: SearchX,
  },
  {
    title: 'Pérdida de Tiempo',
    description: 'Mandar avisos de vencimiento o recordatorios de pago te lleva horas de trabajo manual cada mes.',
    icon: Clock,
  },
];

export default function ClubesProblems() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
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
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Sabemos que gestionar un club con herramientas viejas es agotador y propenso a errores.
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
              className="bg-gradient-to-br from-slate-900 to-slate-900/40 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:-translate-y-1 hover:border-white/10 transition-all duration-300"
            >
              <div className="bg-red-500/10 p-3 rounded-xl w-fit mb-6">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-slate-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
