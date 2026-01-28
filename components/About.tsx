'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Resultados',
    description: 'Enfocados en entregar soluciones que impactan directamente en tu crecimiento',
  },
  {
    icon: Users,
    title: 'Colaboración',
    description: 'Trabajamos contigo de cerca para entender y superar tus expectativas',
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Excelencia en cada proyecto, desde el diseño hasta la implementación',
  },
  {
    icon: Zap,
    title: 'Innovación',
    description: 'Tecnología de punta y tendencias actuales para mantenerte competitivo',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-techphite-dark via-techphite-darker to-techphite-dark"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Sobre </span>
              <span className="text-techphite-cyan">TechPhite</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Somos una agencia digital especializada en transformar ideas en experiencias web
              impactantes. Con más de 3 años de experiencia, ayudamos a empresas de todos los
              tamaños a establecer y fortalecer su presencia en línea.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Combinamos creatividad, tecnología y estrategia para
              desarrollar soluciones personalizadas que no solo se ven bien, sino que generan
              resultados medibles para tu negocio.
            </p>

            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Nuestra Misión</h3>
                  <p className="text-gray-400">
                    Empoderar a las empresas con soluciones digitales innovadoras que impulsen su
                    crecimiento y les permitan destacar en el mundo digital.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-techphite-cyan/20 to-blue-500/20"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-techphite-darker via-transparent to-transparent"></div>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-effect rounded-xl p-6 neon-glow"
            >
              <div className="text-3xl font-bold text-techphite-cyan mb-1">100%</div>
              <div className="text-sm text-gray-400">Satisfacción del cliente</div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Nuestros <span className="text-techphite-cyan">Valores</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center hover:border-techphite-cyan/30 transition-all"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center mx-auto mb-4"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
