'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';

const rules = [
  {
    title: 'Transparencia que Genera Confianza',
    description: 'El sistema protege al socio y a la institución manteniendo un registro histórico inalterable. Los socios valoran la claridad en sus cuentas, lo que reduce los conflictos y mejora la relación con el club.',
    icon: ShieldCheck,
    badge: 'Confianza'
  },
  {
    title: 'Orden Contable Sin Errores',
    description: 'Nuestras reglas de pagos exactos eliminan las deudas fraccionadas "fantasma". Tu caja siempre cierra perfecta, ahorrando horas de auditoría y brindando paz mental a la tesorería.',
    icon: CheckCircle2,
    badge: 'Claridad'
  },
  {
    title: 'Incentivos Inteligentes',
    description: 'Potenciá la participación en todas las áreas del club con descuentos automáticos para socios activos. Un sistema que premia la lealtad y fomenta el uso de todas las instalaciones.',
    icon: Zap,
    badge: 'Crecimiento'
  },
  {
    title: 'Escalabilidad sin Límites',
    description: 'Crecé tanto como quieras. Agregá nuevas actividades, sedes o categorías en segundos. El sistema se adapta a tu ritmo, no al revés.',
    icon: AlertCircle,
    badge: 'Futuro'
  }
];

export default function ClubesRules() {
  return (
    <section className="py-24 relative bg-techphite-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Diseñado para el <br />
                <span className="text-techphite-cyan">Éxito Institucional</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Entendemos los desafíos de las instituciones deportivas. Por eso creamos una 
                lógica de trabajo que prioriza el crecimiento y la sostenibilidad a largo plazo.
              </p>
              
              <div className="space-y-6">
                {rules.map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <rule.icon className="w-6 h-6 text-techphite-cyan" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-white text-lg">{rule.title}</h3>
                        <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded bg-techphite-cyan/20 text-techphite-cyan font-bold">
                          {rule.badge}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="glass-effect p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50 inline-block mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50 inline-block mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50 inline-block"></div>
                </div>
                
                <div className="space-y-6 mt-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-xs text-techphite-cyan font-mono mb-2">// Business Logic: Immutable Prices</div>
                    <div className="text-sm text-gray-300 font-mono">
                      if (quota.generated_at &lt; current_price.updated_at) {'{'} <br />
                      &nbsp;&nbsp;return quota.price_snapshot; <br />
                      {'}'}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <div>
                      <div className="text-xs text-green-500 font-bold uppercase mb-1">Estado de Socio</div>
                      <div className="text-xl font-bold text-white">ACTIVO</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">Deuda actual</div>
                      <div className="text-lg font-bold text-white">$0.00</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-techphite-cyan">100%</div>
                      <div className="text-[10px] text-gray-400 uppercase">Auditabilidad</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-center">
                      <div className="text-2xl font-bold text-techphite-cyan">0%</div>
                      <div className="text-[10px] text-gray-400 uppercase">Errores de caja</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-techphite-cyan/20 blur-[60px] -z-10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[60px] -z-10 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
