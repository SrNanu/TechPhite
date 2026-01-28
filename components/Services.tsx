'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Bot, Cpu, Database, Code, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos y aplicaciones a medida optimizadas para el rendimiento y la conversión.',
    features: ['Diseño responsive', 'Optimización SEO', 'E-commerce', 'Landing Pages'],
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Optimizamos tus flujos de trabajo conectando aplicaciones para ahorrar tiempo y reducir errores.',
    features: ['Integración de APIs', 'Workflows automáticos', 'Ahorro de costos', 'Eficiencia operativa'],
  },
  {
    icon: Bot,
    title: 'Bots IA',
    description: 'Implementamos asistentes virtuales inteligentes para mejorar la atención al cliente 24/7.',
    features: ['Soporte 24/7', 'IA Generativa', 'Auto-respuestas', 'Calificación de leads'],
  },
  {
    icon: Database,
    title: 'Sistemas de Gestión',
    description: 'Software a medida para la administración integral de tu negocio, stock y clientes.',
    features: ['Paneles de control', 'Gestión de stock', 'CRMs a medida', 'Reportes y métricas'],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-techphite-darker via-techphite-dark to-techphite-darker"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Nuestros </span>
            <span className="text-techphite-cyan">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para escalar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass-effect rounded-xl p-6 h-full hover:border-techphite-cyan/30 transition-all duration-300 group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center mb-4"
                >
                  <service.icon className="w-7 h-7 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-techphite-cyan transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-techphite-cyan mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="ghost"
                  className="text-techphite-cyan hover:text-techphite-cyan hover:bg-techphite-cyan/10 w-full mt-auto"
                >
                  Saber más
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
