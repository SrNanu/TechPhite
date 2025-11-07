'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  // Array de estadísticas para que sea más fácil de añadir más en el futuro
  const stats = [
    { value: '3+', label: 'Años de Experiencia' },
    { value: '24/7', label: 'Soporte Dedicado' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* --- Fondo con gradiente y partículas animadas --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-techphite-darker via-techphite-dark to-techphite-darker">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-techphite-cyan rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* --- Efecto de luz radial --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,168,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Sparkles className="w-4 h-4 text-techphite-cyan" />
            <span className="text-sm text-gray-300">Soluciones digitales a medida</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Potenciamos tu</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-techphite-cyan to-blue-400">
              presencia digital
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Transformamos tus ideas en experiencias digitales impactantes. Diseño web, SEO y marketing
            que impulsan tu negocio al siguiente nivel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5493416912227&text=Hola+TechPhite%21+Quiero+hacer+una+consulta', '_blank')}
              size="lg"
              className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white font-semibold px-8 py-6 text-lg group neon-glow"
            >
              Empezar ahora
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>

          {/* --- SECCIÓN DE ESTADÍSTICAS CENTRADA --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            // Clases para centrar horizontalmente con Flexbox
            className="mt-20 flex justify-center items-center gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="glass-effect p-4 rounded-lg flex flex-col items-center min-w-[140px]" // Ancho mínimo para consistencia
              >
                <div className="text-3xl font-bold text-techphite-cyan mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Indicador de scroll --- */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-techphite-cyan rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-techphite-cyan rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}