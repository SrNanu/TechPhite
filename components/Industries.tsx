'use client';

import { motion } from 'framer-motion';
import { Users, Store, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const industries = [
  {
    title: 'Clubes e Instituciones',
    description: 'Gestión de socios, cuotas y actividades deportivas.',
    icon: Users,
    link: '/clubes',
    image: '/dashboardGestionDeCuotas.webp',
  },
  {
    title: 'Catálogos de Productos',
    description: 'Para cualquier rubro comercial. Exhibí tus productos.',
    icon: Store,
    link: '/catalogos',
    image: '/catalogo.webp',
  },
  {
    title: 'Productores de Seguros',
    description: 'Presencia digital profesional para asegurar tu futuro.',
    icon: Shield,
    link: '/seguros',
    image: '/seguros.webp',
  },
];

export default function Industries() {
  return (
    <section id="industrias" className="py-24 bg-techphite-darker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            ¿En qué industria estás?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400"
          >
            Encontrá la solución diseñada específicamente para tus necesidades
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-lg overflow-hidden flex flex-col group border border-gray-800 hover:border-orange-500/50 transition-colors"
            >
              {/* Imagen Placeholder */}
              <div className="flex items-center justify-center text-center border-b border-gray-800 relative overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
                <Image
                  src={industry.image}
                  alt={industry.title}
                  width={800}
                  height={450}
                  className="w-full h-auto block"
                />
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
                  <industry.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-gray-400 mb-8 flex-grow">{industry.description}</p>
                
                <Link href={industry.link} passHref legacyBehavior>
                  <Button className="w-full bg-techphite-dark border border-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-gray-300 font-semibold transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 py-6">
                    Ver solución
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
