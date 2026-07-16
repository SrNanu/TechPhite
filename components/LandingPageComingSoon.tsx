'use client';

import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function LandingPageComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-sky-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-16 text-center relative overflow-hidden backdrop-blur-sm shadow-2xl"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-bold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            Próximamente
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Llevá tu negocio más allá
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Estamos preparando nuevas funcionalidades, integraciones y paneles de administración para que potencies aún más tu presencia en internet.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative">
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-500" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-950/50 border border-white/10 text-slate-200 rounded-xl py-4 pl-12 pr-4 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <button
                  type="submit"
                  className="
                    bg-sky-500 hover:bg-sky-600
                    text-white font-semibold
                    py-4 px-8 rounded-xl
                    shadow-[0_0_15px_rgba(14,165,233,0.3)]
                    hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]
                    transition-all duration-300 whitespace-nowrap
                  "
                >
                  Anotarme
                </button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/50 text-green-400 py-4 px-6 rounded-xl font-medium"
              >
                ¡Excelente! Te avisaremos apenas esté disponible.
              </motion.div>
            )}
            <p className="text-sm text-slate-500 mt-4">
              Anotate gratis para recibir nuestras novedades.
            </p>
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
