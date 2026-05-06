'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Clubes', href: '/clubes' },
  { label: 'Catálogos', href: '/catalogos' },
  { label: 'Seguros', href: '/seguros' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/" className="block w-40 relative h-12">
             <Image 
               src="/logo.png" 
               alt="TechPhite Logo" 
               fill 
               className="object-contain object-left"
               priority
             />
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} legacyBehavior passHref>
                <motion.a
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`transition-colors relative group ${
                    isActive ? 'text-techphite-cyan font-semibold' : 'text-gray-300 hover:text-techphite-cyan'
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-techphite-cyan transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </motion.a>
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden md:block"
        >
          <Button
            onClick={() => {
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-orange-500 hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.3)] text-white font-semibold transition-all"
          >
            Empezar ahora
          </Button>
        </motion.div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect"
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} legacyBehavior passHref>
                  <a
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`transition-colors py-2 ${
                      isActive ? 'text-techphite-cyan font-semibold' : 'text-gray-300 hover:text-techphite-cyan'
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              );
            })}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 hover:bg-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.3)] text-white font-semibold w-full transition-all"
            >
              Empezar ahora
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
