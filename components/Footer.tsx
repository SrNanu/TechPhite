'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from 'lucide-react';
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

export default function Footer() {
  return (
    <footer id="contacto" className="relative bg-techphite-dark pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-b from-techphite-darker to-techphite-dark"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-3xl font-bold mb-4 block">
                <span className="text-white">Tech</span>
                <span className="text-techphite-cyan">Phite</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transformamos ideas en experiencias digitales impactantes que impulsan tu negocio.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-techphite-cyan to-blue-500 flex items-center justify-center hover:shadow-lg hover:shadow-techphite-cyan/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <a className="text-gray-400 hover:text-techphite-cyan transition-colors relative group">
                      <span className="inline-block group-hover:translate-x-2 transition-transform">
                        {link.label}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Soluciones</h3>
            <ul className="space-y-3">
              {solutions.map((solution) => (
                <li key={solution.href}>
                  <Link href={solution.href} legacyBehavior passHref>
                    <a className="text-gray-400 hover:text-techphite-cyan transition-colors relative group">
                      <span className="inline-block group-hover:translate-x-2 transition-transform">
                        {solution.label}
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-techphite-cyan flex-shrink-0 mt-1" />
                <a href="mailto:contacto@techphite.com" className="hover:text-techphite-cyan transition-colors">
                  contacto@techphite.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-techphite-cyan flex-shrink-0 mt-1" />
                <a href="tel:+5493416912227" className="hover:text-techphite-cyan transition-colors">
                  +54 9 341 691-2227
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TechPhite. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Diseño y desarrollo con <span className="text-techphite-cyan">♥</span> en Argentina
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
