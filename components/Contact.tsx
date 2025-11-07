'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('¡Mensaje enviado!', {
      description: 'Nos pondremos en contacto contigo pronto.',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5493416912227?text=Hola, estoy interesado en sus servicios', '_blank');
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-techphite-darker"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Hablemos de tu </span>
            <span className="text-techphite-cyan">Proyecto</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estamos listos para ayudarte a impulsar tu presencia digital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass-effect p-4 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                    <a href="tel:+5493416912227" className="text-gray-400 hover:text-techphite-cyan transition-colors">
                      +54 9 341 691-2227
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass-effect p-4 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a href="mailto:contacto@techphite.com" className="text-gray-400 hover:text-techphite-cyan transition-colors">
                      contacto@techphite.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 glass-effect p-4 rounded-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                    <p className="text-gray-400">Rosario, Argentina</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div>
              <a href="https://wa.me/5493416912227?text=Hola, estoy interesado en sus servicios" target="_blank" rel="noopener noreferrer">
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-6 text-lg"
                size="lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
              </a>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-white font-semibold mb-4">Horario de Atención</h4>
              <div className="space-y-2 text-gray-400">
              <p>Lunes - Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: 10:00 AM - 2:00 PM</p>
              <p className="text-techphite-cyan font-semibold">¡Respuesta en 24 horas!</p>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
