'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'DesignStudio', logo: 'DS' },
  { name: 'WebSolutions', logo: 'WS' },
  { name: 'Digital Agency', logo: 'DA' },
  { name: 'StartupLab', logo: 'SL' },
  { name: 'Creative Co', logo: 'CC' },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-techphite-dark"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Confían en <span className="text-techphite-cyan">nosotros</span>
          </h3>
          <p className="text-gray-400">Empresas que transformaron su presencia digital</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-lg p-6 flex items-center justify-center aspect-square"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-techphite-cyan mb-2">{client.logo}</div>
                <div className="text-xs text-gray-500">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
