'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';

export default function InmobiliariasContact() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Impulsá tu Inmobiliaria
            </h2>
            <p className="text-slate-400 text-lg">
              Dejanos tus datos y nos comunicamos para armar un presupuesto a medida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center p-6 bg-slate-950/50 rounded-2xl border border-white/5">
              <MessageSquare className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="text-white font-medium mb-1">WhatsApp</h3>
              <p className="text-slate-400 text-sm text-center">Respuesta inmediata</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-950/50 rounded-2xl border border-white/5">
              <Phone className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="text-white font-medium mb-1">Llamada</h3>
              <p className="text-slate-400 text-sm text-center">Asesoramiento directo</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-950/50 rounded-2xl border border-white/5">
              <Mail className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="text-white font-medium mb-1">Email</h3>
              <p className="text-slate-400 text-sm text-center">Presupuestos detallados</p>
            </div>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Nombre o Inmobiliaria</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Ej: Inmobiliaria Sur"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Teléfono / WhatsApp</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="+54 9 11 1234-5678"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Mensaje</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                placeholder="Contanos un poco sobre tu inmobiliaria y qué buscás..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 rounded-xl transition-colors"
            >
              Solicitar Presupuesto
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
