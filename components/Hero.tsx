'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    value: '3+',
    label: 'Años de Experiencia',
    icon: <TrendingUp size={18} className="text-orange-400" />,
  },
  {
    value: '24/7',
    label: 'Soporte Dedicado',
    icon: <Clock size={18} className="text-sky-400" />,
  },
];

// Stagger container variant
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const BlurText = ({ text, className = "", delayOffset = 0 }: { text: string; className?: string; delayOffset?: number }) => {
  const words = text.split(" ");
  return (
    <span className="inline-block">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: delayOffset + index * 0.05, ease: 'easeOut' }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          <span className={className}>{word}</span>
        </motion.span>
      ))}
    </span>
  );
};

const ShinyText = ({ text, className = "", variants }: { text: string; className?: string; variants?: any }) => {
  return (
    <>
      <style>{`
        @keyframes shine-hero-text {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
      <motion.p
        variants={variants}
        className={`text-transparent bg-clip-text ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg, #94a3b8 40%, #ffffff 50%, #94a3b8 60%)',
          backgroundSize: '200% auto',
          animation: 'shine-hero-text 4s linear infinite',
        }}
      >
        {text}
      </motion.p>
    </>
  );
};

const MagneticButton = ({ children, onClick, className, id }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <motion.button
        id={id}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        onClick={onClick}
        className={className}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['CLUB', 'INSTITUCIÓN', 'PYME', 'NEGOCIO', 'EMPRESA'];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* ── Background: subtle grid ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* ── Background: ambient glow blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-center blue blob */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-900/25 blur-[120px]" />
        {/* Bottom-left orange hint */}
        <div className="absolute bottom-0 -left-24 w-[420px] h-[340px] rounded-full bg-orange-900/15 blur-[100px]" />
        {/* Bottom-right violet hint */}
        <div className="absolute bottom-0 -right-24 w-[380px] h-[300px] rounded-full bg-violet-900/15 blur-[100px]" />
      </div>

      {/* ── Content ── */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-slate-400 font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Transformación digital · Soluciones reales
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          >
            <BlurText text="TechPhite" className="text-slate-50" />
            <br />
            <span className="inline-flex flex-wrap justify-center items-center">
              <BlurText 
                text="el motor de tu" 
                className="text-slate-50"
                delayOffset={0.3}
              />
              <span className="relative inline-flex items-center ml-2">
                {/* Invisible template to reserve space for the longest word */}
                <span className="opacity-0 pointer-events-none select-none font-extrabold">
                  INSTITUCIÓN
                </span>
                
                {/* Absolutely positioned animators */}
                <span className="absolute inset-0 overflow-hidden flex items-center justify-start">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={words[wordIndex]}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="bg-gradient-to-r from-orange-500 via-orange-400 to-rose-500 text-transparent bg-clip-text font-extrabold text-left"
                    >
                      {words[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <ShinyText
            variants={itemVariants}
            className="text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-center"
            text="Encontrá la solución exacta para tu rubro. Sistemas de gestión, catálogos online y páginas web diseñadas para hacer crecer tu negocio."
          />

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <MagneticButton
              id="hero-cta-btn"
              onClick={() =>
                document.getElementById('industrias')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
                group inline-flex items-center gap-2.5
                bg-orange-500 hover:bg-orange-600
                text-white font-semibold text-base
                px-8 py-3.5 rounded-full
                shadow-[0_0_20px_rgba(249,115,22,0.3)]
                hover:shadow-[0_0_32px_rgba(249,115,22,0.5)]
                hover:scale-105 active:scale-100
                transition-all duration-300
              "
            >
              Ver Soluciones
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>
          </motion.div>

          {/* ── Stats cards ── */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pb-24 flex flex-wrap justify-center gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  flex flex-col items-center gap-2
                  bg-slate-900/50 backdrop-blur-md
                  border border-white/10
                  rounded-2xl p-6 min-w-[160px]
                  hover:border-white/20 hover:bg-slate-900/70
                  transition-all duration-300
                "
              >
                <span className="flex items-center gap-1.5">{stat.icon}</span>
                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                <span className="text-xs text-slate-400 text-center leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-slate-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}