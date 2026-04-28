'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, Users, CreditCard } from 'lucide-react';
import Image from 'next/image';

export default function ClubesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* --- Background with gradient and particles --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-techphite-darker via-techphite-dark to-techphite-darker">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-techphite-cyan rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* --- Radial light effect --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,168,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
              <ShieldCheck className="w-4 h-4 text-techphite-cyan" />
              <span className="text-sm text-gray-300">Liderá la transformación de tu institución</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Profesionalizá tu club con</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-techphite-cyan to-blue-400">
                tecnología de élite
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-xl">
              Recuperá el control total, aumentá la recaudación y brindá una experiencia moderna a tus socios. 
              La solución definitiva para clubes que buscan crecer.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5493416912227&text=Hola+TechPhite%21+Quiero+consultar+por+el+sistema+para+clubes', '_blank')}
                size="lg"
                className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white font-semibold px-8 py-6 text-lg group neon-glow w-full sm:w-auto"
              >
                Solicitar Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-techphite-dark bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Users className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
                <div className="pl-4 flex flex-col justify-center">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Usado por</span>
                  <span className="text-sm text-white font-bold">Clubes de toda la región</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
               {/* Usamos una imagen de placeholder para el dashboard */}
               <div className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  <Image 
                    src="/dashboard-preview.png" 
                    alt="Club Management Dashboard Mockup" 
                    width={800} 
                    height={450}
                    className="object-cover"
                  />
               </div>
            </div>
            
            {/* --- Floating Elements --- */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Cobro Reciente</div>
                  <div className="text-sm font-bold text-white">$4.500,00</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-techphite-cyan/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-techphite-cyan" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Nuevos Socios</div>
                  <div className="text-sm font-bold text-white">+12 este mes</div>
                </div>
              </div>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-techphite-cyan/20 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
