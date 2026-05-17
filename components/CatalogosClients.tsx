'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import ayelenImg from '@/assets/ayelenfava.png';
import arielImg from '@/assets/arielpiermattei_catalogo.png';

const clients = [
  {
    name: 'Ayelen Fava',
    description: 'Catálogo digital de productos y servicios',
    image: ayelenImg,
    url: 'https://ayelenfava.com/',
  },
  {
    name: 'Ariel Piermattei',
    description: 'Catálogo de repuestos y productos',
    image: arielImg,
    url: 'https://arielpiermattei.com/',
  }
];

export default function CatalogosClients() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Sistemas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Acción</span>
          </h2>
          <p className="text-lg text-slate-400">
            Explora algunos de los catálogos que ya hemos desarrollado y descubre cómo ayudamos a potenciar las ventas de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={client.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <div className="relative bg-slate-900/50 h-full flex flex-col rounded-[2rem] p-4 border border-white/5 hover:border-orange-500/30 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-sm group-hover:-translate-y-2">
                  {/* Subtle hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Image container */}
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[16/10] bg-slate-800 shadow-inner p-2">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Hover overlay icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-slate-950/40 backdrop-blur-[2px]">
                      <div className="bg-orange-500 text-white p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg shadow-orange-500/25">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6 mb-3 px-3 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-slate-400 mt-2 text-base leading-relaxed">
                      {client.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
