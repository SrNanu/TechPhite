'use client';

import { useEffect } from 'react';
import { X, Mail } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

export default function ContactModal({ onClose }: ContactModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Contacto"
    >
      {/* Card — stop click propagation so clicking inside doesn't close */}
      <div
        className="bg-slate-900/90 border border-white/10 rounded-[2rem] p-8 max-w-md w-full relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-orange-900/20 blur-[80px]" />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors duration-200"
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-50 mb-2">
            Hablemos de tu proyecto
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Elegí el canal más rápido para comunicarte con nuestro equipo.
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-4">
          {/* WhatsApp — highlighted */}
          <a
            href="https://wa.me/5493416912227?text=Hola%20TechPhite,%20vengo%20de%20la%20web%20y%20quiero%20m%C3%A1s%20info."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white border border-[#25D366]/20 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Escribinos por WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:contacto@techphite.com"
            className="w-full flex items-center justify-center gap-3 bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            <Mail size={20} className="shrink-0" />
            contacto@techphite.com
          </a>
        </div>
      </div>
    </div>
  );
}
