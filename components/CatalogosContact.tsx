'use client';

import { motion } from 'framer-motion';
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

  const inputClasses = "w-full bg-slate-950/50 border border-white/10 text-slate-200 rounded-xl py-3 pl-12 pr-4 placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200";

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.08),transparent_50%)]"></div>

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
              className="text-xl text-slate-400"
            >
              Dejanos tus datos y nos contactamos a la brevedad para armarte la demo.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nombre */}
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-slate-300 ml-1">Tu Nombre</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                      type="text"
                      id="nombre"
                      required
                      className={inputClasses}
                      placeholder="Ej. Martín García"
                    />
                  </div>
                </div>

                {/* Empresa y Rubro */}
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-medium text-slate-300 ml-1">Empresa y Rubro</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                      type="text"
                      id="empresa"
                      required
                      className={inputClasses}
                      placeholder="Ej. Autosur (Concesionaria)"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Correo Electrónico</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      required
                      className={inputClasses}
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Teléfono */}
                <div className="space-y-2">
                  <label htmlFor="telefono" className="text-sm font-medium text-slate-300 ml-1">Teléfono / WhatsApp</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                      type="tel"
                      id="telefono"
                      className={inputClasses}
                      placeholder="+54 9 ..."
                    />
                  </div>
                </div>
              </div>

              {/* Mensaje */}
              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium text-slate-300 ml-1">¿Qué tipo de productos vendés y aprox. cuántos son?</label>
                <div className="relative">
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-500" />
                  </div>
                  <textarea
                    id="mensaje"
                    rows={4}
                    required
                    className="w-full bg-slate-950/50 border border-white/10 text-slate-200 rounded-xl py-3 pl-12 pr-4 placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-200 resize-none"
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full inline-flex items-center justify-center gap-2
                  bg-orange-500 hover:bg-orange-600
                  text-white font-bold text-lg
                  py-4 rounded-full
                  shadow-[0_0_20px_rgba(249,115,22,0.3)]
                  hover:shadow-[0_0_32px_rgba(249,115,22,0.5)]
                  hover:scale-[1.02] active:scale-100
                  transition-all duration-300
                  disabled:opacity-70 disabled:hover:scale-100
                "
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
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
