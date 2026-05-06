'use client';

import { motion } from 'framer-motion';
import { Search, ShieldCheck, Clock } from 'lucide-react';

const benefits = [
  {
    title: 'Tus clientes te buscan en Google',
    description: 'Cuando alguien busca seguros en tu ciudad, tener una web bien posicionada es la diferencia entre captar a ese cliente o regalárselo a la competencia.',
    icon: Search,
  },
  {
    title: 'Proyectá Confianza Absoluta',
    description: 'Un link profesional propio (ej. tunombreseguros.com) genera muchísima más seguridad al momento de cerrar una póliza que un simple perfil de red social.',
    icon: ShieldCheck,
  },
  {
    title: 'Consultas 24/7',
    description: 'Con formularios de cotización activos todo el tiempo, recibís potenciales clientes en tu casilla de correo incluso mientras estás durmiendo.',
    icon: Clock,
  },
];

export default function SegurosBenefits() {
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
            ¿Por qué tener tu propia web?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            El mercado cambió. Hoy la primera impresión de un cliente sobre tu trabajo ocurre en internet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-techphite-darker border border-gray-800 hover:border-emerald-500/30 transition-colors relative overflow-hidden group"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
