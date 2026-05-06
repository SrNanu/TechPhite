'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function CatalogosContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-techphite-dark relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,194,168,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
            >
              Llevá tus productos online
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-400"
            >
              Dejanos tus datos y nos contactamos a la brevedad para armarte la demo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-techphite-cyan/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-gray-300 ml-1">Tu Nombre</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className="w-full bg-techphite-darker border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-techphite-cyan focus:ring-1 focus:ring-techphite-cyan transition-colors"
                      placeholder="Ej. Martín García"
                    />
                  </div>
                </div>

                {/* Empresa y Rubro */}
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-medium text-gray-300 ml-1">Empresa y Rubro</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      id="empresa"
                      required
                      className="w-full bg-techphite-darker border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-techphite-cyan focus:ring-1 focus:ring-techphite-cyan transition-colors"
                      placeholder="Ej. Autosur (Concesionaria)"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Correo Electrónico</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-techphite-darker border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-techphite-cyan focus:ring-1 focus:ring-techphite-cyan transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-gray-300 ml-1">Teléfono / WhatsApp</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      className="w-full bg-techphite-darker border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-techphite-cyan focus:ring-1 focus:ring-techphite-cyan transition-colors"
                      placeholder="+54 9 ..."
                    />
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-gray-300 ml-1">¿Qué tipo de productos vendés y aprox. cuántos son?</label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    className="w-full bg-techphite-darker border border-gray-700 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-techphite-cyan focus:ring-1 focus:ring-techphite-cyan transition-colors resize-none"
                    placeholder="Contanos brevemente sobre tu catálogo..."
                  ></textarea>
                </div>
              </div>

              {/* Mensaje de Éxito Simulado */}
              {isSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-xl flex items-center justify-center text-sm font-medium"
                >
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </motion.div>
              )}

              {/* Botón */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-lg rounded-xl transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Quiero mi catálogo online
                    <Send className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
