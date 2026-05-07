'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  BookOpen,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface DropdownItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const solucionesItems: DropdownItem[] = [
  {
    label: 'Clubes e Instituciones',
    href: '/clubes',
    icon: <Building2 size={18} className="text-sky-400" />,
    description: 'Gestión integral para clubes y entidades deportivas',
  },
  {
    label: 'Catálogos de Productos',
    href: '/catalogos',
    icon: <BookOpen size={18} className="text-violet-400" />,
    description: 'Catálogos digitales interactivos y a medida',
  },
  {
    label: 'Productores de Seguros',
    href: '/seguros',
    icon: <ShieldCheck size={18} className="text-emerald-400" />,
    description: 'Plataformas especializadas para el sector asegurador',
  },
];

// ─── Logo ─────────────────────────────────────────────────────────────────────
function TechPhiteLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="TechPhite – Inicio">
      {/* Hexagon SVG icon */}
      <div className="relative w-9 h-9 flex items-center justify-center">
        <svg
          viewBox="0 0 40 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-9 h-9 transition-transform duration-300 group-hover:rotate-[15deg]"
        >
          <path
            d="M20 1L38 11V35L20 45L2 35V11L20 1Z"
            fill="url(#hexGrad)"
            stroke="url(#hexStroke)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="hexGrad" x1="2" y1="1" x2="38" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="hexStroke" x1="2" y1="1" x2="38" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#7dd3fc" />
            </linearGradient>
          </defs>
          {/* Inner code brackets */}
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="16"
            fontWeight="700"
            fontFamily="monospace"
            fill="#38bdf8"
          >
            {'</>'}
          </text>
        </svg>
      </div>

      {/* Wordmark */}
      <span className="text-xl font-bold tracking-tight select-none">
        <span className="text-white">Tech</span>
        <span className="text-sky-400">Phite</span>
      </span>
    </Link>
  );
}

// ─── Soluciones Dropdown ───────────────────────────────────────────────────────
function SolucionesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        id="soluciones-btn"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium group"
      >
        Soluciones
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 text-slate-400 group-hover:text-sky-400 ${open ? 'rotate-180 text-sky-400' : ''}`}
        />
        {/* Active underline */}
        <span className={`absolute -bottom-1 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${open ? 'w-full' : 'w-0 group-hover:w-full'}`} />
      </button>

      <AnimatePresence>
        {open && (
          // Static wrapper — handles position only, never animated (keeps -translate-x-1/2 intact)
          <div
            className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-80 z-50"
            onMouseLeave={() => setOpen(false)}
          >
            {/* Arrow caret */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-slate-900 border-l border-t border-white/10 z-10" />

            {/* Animated panel — only opacity/y/scale, NO positional transforms */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.16, ease: 'easeOut' }}
              role="menu"
              aria-label="Soluciones"
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            >
              {/* Header accent */}
              <div className="px-4 pt-4 pb-2">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                  Nuestras soluciones
                </p>
              </div>

              <ul className="p-2 flex flex-col gap-1">
                {solucionesItems.map((item) => (
                  <li key={item.href} role="menuitem">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors duration-150 group/item"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800/80 border border-white/5">
                        {item.icon}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-slate-100 group-hover/item:text-white transition-colors">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Footer CTA */}
              <div className="px-4 py-3 border-t border-white/5">
                <Link
                  href="/#contacto"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                  <Zap size={12} />
                  ¿No encontrás lo que buscás? Hablemos
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main NavLink ─────────────────────────────────────────────────────────────
function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm font-medium transition-colors duration-200 group ${
        isActive ? 'text-white' : 'text-slate-300 hover:text-white'
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-sky-400 transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      />
    </Link>
  );
}

// ─── CTA Button ───────────────────────────────────────────────────────────────
function CTAButton({ onClick, className = '' }: { onClick?: () => void; className?: string }) {
  return (
    <button
      id="navbar-cta-btn"
      onClick={
        onClick ??
        (() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }))
      }
      className={`
        relative overflow-hidden
        bg-orange-500 hover:bg-orange-600
        text-white font-semibold text-sm
        px-5 py-2.5 rounded-full
        shadow-[0_0_15px_rgba(249,115,22,0.4)] hover:shadow-[0_0_25px_rgba(249,115,22,0.55)]
        transition-all duration-300
        ${className}
      `}
    >
      {/* Shine effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white/20 skew-x-[-20deg] animate-[shine_3s_ease-in-out_infinite]" />
      </span>
      Empezar ahora
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolucionesOpen, setIsMobileSolucionesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for enhanced glass shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileSolucionesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── Desktop / Main bar ── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 w-full
          bg-slate-950/70 backdrop-blur-md
          border-b border-white/10
          transition-shadow duration-300
          ${scrolled ? 'shadow-[0_4px_32px_rgba(0,0,0,0.5)]' : ''}
        `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16" aria-label="Navegación principal">

            {/* ── Left: Logo ── */}
            <TechPhiteLogo />

            {/* ── Center: Nav links (desktop) ── */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="/" label="Inicio" isActive={pathname === '/'} />
              <SolucionesDropdown />
              <NavLink href="/#nosotros" label="Nosotros" isActive={false} />
              <NavLink
                href="/#contacto"
                label="Contacto"
                isActive={false}
                onClick={() =>
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                }
              />
            </div>

            {/* ── Right: CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <CTAButton />
              </div>

              {/* Mobile hamburger */}
              <button
                id="navbar-mobile-menu-btn"
                aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </nav>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden sticky top-16 z-40 overflow-hidden
              bg-slate-950/95 backdrop-blur-lg
              border-b border-white/10"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">

              {/* Inicio */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Inicio
              </Link>

              {/* Soluciones (accordion in mobile) */}
              <div>
                <button
                  id="mobile-soluciones-btn"
                  aria-expanded={isMobileSolucionesOpen}
                  onClick={() => setIsMobileSolucionesOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Soluciones
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-300 text-slate-400 ${isMobileSolucionesOpen ? 'rotate-180 text-sky-400' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {isMobileSolucionesOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden mt-1 ml-3 flex flex-col gap-1 border-l border-white/10 pl-3"
                    >
                      {solucionesItems.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            <span className="flex-shrink-0">{item.icon}</span>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Nosotros */}
              <Link
                href="/#nosotros"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Nosotros
              </Link>

              {/* Contacto */}
              <Link
                href="/#contacto"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                Contacto
              </Link>

              {/* Mobile CTA */}
              <div className="pt-3 pb-1">
                <CTAButton
                  className="w-full justify-center"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
