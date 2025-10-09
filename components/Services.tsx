'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Search, Wrench, TrendingUp, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.',
    features: ['Diseño responsive', 'Optimización SEO', 'Alta performance', 'Seguridad avanzada'],
  },
  {
    icon: Palette,
    title: 'Diseño Web',
    description: 'Diseños únicos y personalizados que reflejan la identidad de tu marca.',
    features: ['UI/UX profesional', 'Branding coherente', 'Experiencia premium', 'Mobile-first'],
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Mantén tu sitio actualizado, seguro y funcionando perfectamente 24/7.',
    features: ['Actualizaciones', 'Backups diarios', 'Monitoreo continuo', 'Soporte técnico'],
  },
  {
    icon: Search,
    title: 'SEO Avanzado',
    description: 'Posiciona tu negocio en los primeros resultados de Google y atrae más clientes.',
    features: ['Análisis de keywords', 'Optimización técnica', 'Link building', 'Reportes mensuales'],
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias integrales para aumentar tu visibilidad y ventas en línea.',
    features: ['Social Media', 'Campañas ads', 'Email marketing', 'Analítica web'],
  },
  {
    icon: Globe,
    title: 'Presencia Digital',
    description: 'Construye una marca sólida en redes sociales y plataformas digitales.',
    features: ['Gestión de redes', 'Contenido estratégico', 'Community management', 'Branding'],
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
            Soluciones completas para llevar tu negocio al mundo digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-techphite-cyan mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="ghost"
                  className="text-techphite-cyan hover:text-techphite-cyan hover:bg-techphite-cyan/10 w-full"
                >
                  Saber más
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white font-semibold px-8"
          >
            Consulta gratuita
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
