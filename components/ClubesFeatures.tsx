'use client';

import { motion } from 'framer-motion';
import { UserPlus, Wallet, Receipt, Bell, BarChart3, Smartphone, CreditCard } from 'lucide-react';
import Image from 'next/image';

const features = [
  { text: 'Alta y baja de socios rápida', icon: UserPlus },
  { text: 'Registro de pagos y deudas', icon: Wallet },
  { text: 'Integración oficial con Mercado Pago', icon: CreditCard },
  { text: 'Generación de recibos', icon: Receipt },
  { text: 'Notificaciones automáticas', icon: Bell },
  { text: 'Panel de reportes al instante', icon: BarChart3 },
  { text: 'Acceso desde PC y celular', icon: Smartphone },
];

export default function ClubesFeatures() {
  return (
    <section className="py-24 bg-techphite-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenido / Lista visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Todo lo que necesitás en un solo sistema
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg text-gray-300 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Placeholder Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 to-transparent opacity-50 rounded-lg blur-xl -z-10"></div>
            
            <div className="rounded-lg border border-gray-700 overflow-hidden relative group shadow-2xl bg-gray-900">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer z-20 pointer-events-none"></div>
              <Image
                src="/socioGestionDeCuotas.webp"
                alt="Módulo de pagos o listado de socios"
                width={1200}
                height={800}
                className="w-full h-auto block"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
