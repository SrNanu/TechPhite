'use client';

import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 translate-y-[-50%] w-[500px] h-[500px] rounded-full bg-orange-950/10 blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-blue-950/15 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          
          {/* Visual card column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-rose-500 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000" />
            <div className="relative bg-slate-900/80 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">TechPhite Core</h4>
                  <p className="text-xs text-slate-400">Rosario, Argentina</p>
                </div>
              </div>

              <blockquote className="text-slate-300 italic leading-relaxed text-lg mb-6">
                "No solo programamos; entendemos el dolor de ver un negocio perder recursos por falta de optimización y creamos la solución exacta para resolverlo."
              </blockquote>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                <div>
                  <p className="text-2xl font-bold text-white">2</p>
                  <p className="text-xs text-slate-400 mt-1">Fundadores Apasionados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-400">100%</p>
                  <p className="text-xs text-slate-400 mt-1">Enfoque en Soluciones</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-orange-400 font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              Quiénes Somos
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Tecnología diseñada para{' '}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 text-transparent bg-clip-text">
                dar valor
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Somos dos apasionados por la tecnología y la resolución de problemas. Un día nos preguntamos: <strong>¿por qué no unir ambas pasiones?</strong>
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Así nació <strong>TechPhite</strong>, como una idea de brindar soluciones reales a empresas y negocios que pierden dinero y tiempo todos los días debido a procesos ineficientes. Diseñamos, planificamos y creamos sistemas y páginas web que realmente aporten valor a tu negocio.
            </p>

            <div className="pt-4">
              <a
                href="https://www.instagram.com/techphite/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold py-3.5 px-7 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                Conocenos un poco más
                <ArrowUpRight className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
