'use client';

import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  Calendar, 
  MessageSquare, 
  Shield, 
  TrendingUp,
  Activity,
  UserCheck
} from 'lucide-react';

const features = [
  {
    title: 'Recaudación Imparable',
    description: 'Automatizá los cobros y reducí la morosidad drásticamente con un sistema que trabaja por vos las 24 horas.',
    icon: TrendingUp,
    color: 'text-green-400',
    bg: 'bg-green-400/10'
  },
  {
    title: 'Experiencia del Socio 2.0',
    description: 'Brindá una imagen moderna y profesional. Tus socios reciben recordatorios por WhatsApp y estados de cuenta claros.',
    icon: UserCheck,
    color: 'text-techphite-cyan',
    bg: 'bg-techphite-cyan/10'
  },
  {
    title: 'Cero Estrés Administrativo',
    description: 'Olvidate de las planillas Excel. La liquidación mensual es automática y se genera en segundos el día 1 de cada mes.',
    icon: Calendar,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10'
  },
  {
    title: 'Control de Caja Blindado',
    description: 'Cada peso cuenta. Gestioná ingresos y egresos con una transparencia total que garantiza la confianza de la comisión.',
    icon: Shield,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10'
  },
  {
    title: 'WhatsApp de Próxima Generación',
    description: 'Comunicación directa y efectiva. Envío masivo de avisos de deuda y notificaciones de pago en un solo clic.',
    icon: MessageSquare,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Crecimiento Basado en Datos',
    description: 'Dashboards inteligentes que te muestran exactamente dónde está tu club y cómo llevarlo al siguiente nivel.',
    icon: Activity,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10'
  },
  {
    title: 'Múltiples Disciplinas, Una Gestión',
    description: 'Centralizá todas las actividades: Fútbol, Básquet, Gimnasio y más. Todo bajo el mismo techo administrativo.',
    icon: Users,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10'
  },
  {
    title: 'Cobranza en la Palma de tu Mano',
    description: 'Diseñado para ser usado desde cualquier dispositivo. El cobrador registra pagos desde el celular en el momento.',
    icon: CreditCard,
    color: 'text-red-400',
    bg: 'bg-red-400/10'
  }
];

export default function ClubesFeatures() {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-techphite-dark">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Impulsá tu club hacia el <span className="text-techphite-cyan">futuro</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">
            No es solo un software, es el aliado estratégico que tu club necesita para 
            optimizar tiempos, evitar errores y maximizar la satisfacción del socio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl border border-white/5 hover:border-techphite-cyan/30 transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-techphite-cyan/5 blur-[120px] -z-10 rounded-full"></div>
    </section>
  );
}
