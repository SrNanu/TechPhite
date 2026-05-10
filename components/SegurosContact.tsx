'use client';

import { motion } from 'framer-motion';
import { Send, Shield, User, Mail, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function SegurosContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: '', aseguradora: '', email: '', telefono: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rubro: `Seguros — ${form.aseguradora}` }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error ?? 'Error desconocido');
      setIsSuccess(true);
      setForm({ nombre: '', aseguradora: '', email: '', telefono: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'No se pudo enviar. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-slate-950/50 border border-white/10 text-slate-200 rounded-xl py-3 pl-12 pr-4 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200";

  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.08),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Llevá tu productora al siguiente nivel
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-slate-400">
              Dejanos tus datos y te asesoramos sobre cómo mejorar tu imagen digital.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-slate-900/40 border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-400" />
                <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                <p className="text-slate-400 max-w-sm">Recibimos tu consulta. Nos ponemos en contacto a la brevedad.</p>
                <button onClick={() => setIsSuccess(false)} className="mt-4 text-sm text-slate-500 hover:text-slate-300 transition-colors">Enviar otro mensaje</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="text-sm font-medium text-slate-300 ml-1">Tu Nombre / Productora</label>
                    <div className="relative"><div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><User className="h-5 w-5 text-slate-500" /></div>
                      <input type="text" id="nombre" required value={form.nombre} onChange={handleChange} className={inputClasses} placeholder="Ej. Laura Gómez Seguros" /></div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="aseguradora" className="text-sm font-medium text-slate-300 ml-1">Aseguradora/s principal/es</label>
                    <div className="relative"><div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Shield className="h-5 w-5 text-slate-500" /></div>
                      <input type="text" id="aseguradora" required value={form.aseguradora} onChange={handleChange} className={inputClasses} placeholder="Ej. Sancor, San Cristóbal, etc." /></div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Correo Electrónico</label>
                    <div className="relative"><div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Mail className="h-5 w-5 text-slate-500" /></div>
                      <input type="email" id="email" required value={form.email} onChange={handleChange} className={inputClasses} placeholder="tu@email.com" /></div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="text-sm font-medium text-slate-300 ml-1">Teléfono / WhatsApp</label>
                    <div className="relative"><div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"><Phone className="h-5 w-5 text-slate-500" /></div>
                      <input type="tel" id="telefono" value={form.telefono} onChange={handleChange} className={inputClasses} placeholder="+54 9 ..." /></div>
                  </div>
                </div>
                {error && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />{error}
                  </motion.div>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold text-lg py-4 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_32px_rgba(14,165,233,0.5)] hover:scale-[1.02] active:scale-100 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100">
                  {isSubmitting ? <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>Enviando...</span>
                    : <span className="flex items-center gap-2">Quiero más información<Send className="w-5 h-5" /></span>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
