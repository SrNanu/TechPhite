'use client';

import { motion, Variants } from 'framer-motion';
import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/techphite/', label: 'Instagram' },
];

const quickLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Clubes', href: '/clubes' },
  { label: 'Catálogos', href: '/catalogos' },
  { label: 'Seguros', href: '/seguros' },
  { label: 'Contacto', href: '#contacto' },
];

const solutions = [
  { label: 'Clubes e Instituciones', href: '/clubes' },
  { label: 'Catálogos de Productos', href: '/catalogos' },
  { label: 'Productores de Seguros', href: '/seguros' },
];

const contactItems = [
  {
    icon: Mail,
    href: 'mailto:contacto@techphite.com',
    label: 'contacto@techphite.com',
  },
  {
    icon: Phone,
    href: 'tel:+5493416912227',
    label: '+54 9 341 691-2227',
  },
];

const colVariants = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
});

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-slate-950 border-t border-white/10">
      {/* Ambient glow */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-orange-950/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-16">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <motion.div
            variants={colVariants(0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold mb-4 block">
              <span className="text-white">Tech</span>
              <span className="text-sky-400">Phite</span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm mb-6">
              Transformamos ideas en experiencias digitales impactantes que impulsan tu negocio.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white/5 border border-white/10 text-slate-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 rounded-xl p-3 transition-all duration-300 w-fit"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — Quick links */}
          <motion.div
            variants={colVariants(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-slate-100 font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm inline-block hover:text-orange-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Solutions */}
          <motion.div
            variants={colVariants(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-slate-100 font-semibold mb-6">Soluciones</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link
                    href={solution.href}
                    className="text-slate-400 text-sm inline-block hover:text-orange-500 hover:translate-x-1 transition-all duration-300"
                  >
                    {solution.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contact */}
          <motion.div
            variants={colVariants(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-slate-100 font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              {contactItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-slate-400 text-sm hover:text-orange-500 transition-colors duration-300 group"
                  >
                    <item.icon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-300">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TechPhite. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Diseño y desarrollo con{' '}
            <span className="text-orange-500">♥</span>{' '}
            en Argentina
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
