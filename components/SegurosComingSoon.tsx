'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function SegurosComingSoon() {
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
    <section className="py-24 bg-techphite-darker relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-techphite-darker to-emerald-900/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-effect rounded-3xl border border-gray-800 p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Luz superior interna */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            Próximamente
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            El futuro de la gestión de cartera
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Estamos desarrollando una herramienta integral para Productores: gestión de pólizas, alertas de renovaciones automáticas y seguimiento de siniestros. Todo en la nube.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative">
            {!isSubscribed ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-techphite-dark border border-gray-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.3)] text-white font-semibold py-4 px-8 rounded-xl transition-all h-auto whitespace-nowrap"
                >
                  Anotarme
                </Button>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/20 border border-green-500/50 text-green-400 py-4 px-6 rounded-xl font-medium"
              >
                ¡Excelente! Te avisaremos apenas esté disponible.
              </motion.div>
            )}
            <p className="text-sm text-gray-500 mt-4">
              Anotate gratis para ser de los primeros en probar la versión Beta.
            </p>
          </form>
          
        </motion.div>
      </div>
    </section>
  );
}
