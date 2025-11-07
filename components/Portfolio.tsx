'use client';

// Imports de React y librerías
import { useState, useRef } from 'react';
import Image from 'next/image'; // <-- 1. IMPORTANTE: Usar el componente Image de Next.js
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Imports de componentes UI
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// <-- 2. IMPORTA TUS IMÁGENES LOCALES AQUÍ
// Asegúrate de que los nombres y la ruta sean correctos en tu proyecto
import segurosBurzacoImg from '@/assets/segurosBurzaco.png';
import rymBrokpasImg from '@/assets/rymSeguros.png';
import mandatosDigitalesImg from '@/assets/gestoriaIntegralLilianaDiaz.png';

const categories = ['Todos', 'Landing Page', 'Corporativo'];

// <-- 3. DATOS DEL PORTAFOLIO ACTUALIZADOS
const projects = [
  {
    id: 1,
    title: 'Seguros Burzaco',
    category: 'Landing Page',
    image: segurosBurzacoImg,
    description: 'Landing page profesional para asesores de seguros, enfocada en la confianza y el contacto directo.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    results: ['Diseño limpio y profesional', 'Optimizado para SEO local', 'Integración con WhatsApp'],
    link: 'https://www.segurosburzaco.com.ar/', // Opcional: añade el enlace real
  },
  {
    id: 2,
    title: 'RyM Brokpas',
    category: 'Corporativo',
    image: rymBrokpasImg,
    description: 'Sitio corporativo para productores de seguros, con un enfoque en la familia y la seguridad del hogar.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    results: ['Aumento de la confianza del cliente', 'Navegación intuitiva', 'Formulario de denuncias'],
    link: '#',
  },
  {
    id: 3,
    title: 'Mandatos Digitales',
    category: 'Landing Page',
    image: mandatosDigitalesImg,
    description: 'Plataforma digital para gestoría automotor, notarial y judicial. Simplifica trámites complejos.',
    tech: ['WordPress', 'Elementor', 'PHP', 'CSS'],
    results: ['Claridad en los servicios ofrecidos', 'Fácil acceso a contacto', 'Diseño moderno y accesible'],
    link: '#',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects =
    selectedCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portafolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-techphite-darker"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Nuestro </span>
            <span className="text-techphite-cyan">Portafolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Proyectos exitosos que transformaron negocios
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full transition-all text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-techphite-cyan text-white shadow-lg shadow-techphite-cyan/20'
                    : 'glass-effect text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                {/* <-- 4. USANDO EL COMPONENTE <Image> --> */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="text-xs text-techphite-cyan font-semibold mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-techphite-cyan">
                    <ExternalLink className="w-4 h-4" />
                    <span>Ver detalles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-techphite-dark border-techphite-cyan/20 text-white">
          {selectedProject && (
            <div className="space-y-6 p-2">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {/* <-- 5. USANDO EL COMPONENTE <Image> TAMBIÉN AQUÍ --> */}
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="text-sm text-techphite-cyan font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full glass-effect text-sm text-techphite-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Resultados</h4>
                <ul className="space-y-2">
                  {selectedProject.results.map((result) => (
                    <li key={result} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-techphite-cyan mr-3 flex-shrink-0"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => window.open(selectedProject.link, '_blank')}
                className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white w-full"
                disabled={selectedProject.link === '#'}
              >
                Visitar Sitio Web
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}