'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const categories = ['Todos', 'E-commerce', 'Corporativo', 'Landing Page', 'Blog'];

const projects = [
  {
    id: 1,
    title: 'Tienda Fashion Pro',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Plataforma de e-commerce moderna con carrito de compras y pasarela de pago integrada.',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    results: ['300% aumento en ventas', '50% más conversiones', '4.8/5 satisfacción'],
    link: '#',
  },
  {
    id: 2,
    title: 'Studio Creativo',
    category: 'Corporativo',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sitio corporativo elegante para agencia de diseño con portfolio interactivo.',
    tech: ['React', 'Framer Motion', 'Node.js'],
    results: ['500+ visitas/día', '40% más leads', 'Top 3 en Google'],
    link: '#',
  },
  {
    id: 3,
    title: 'FitLife Landing',
    category: 'Landing Page',
    image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Landing page de alta conversión para aplicación de fitness y nutrición.',
    tech: ['TypeScript', 'React', 'Analytics'],
    results: ['65% tasa conversión', '1000+ registros/mes', '2 seg carga'],
    link: '#',
  },
  {
    id: 4,
    title: 'Blog Gastronómico',
    category: 'Blog',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Blog optimizado para SEO con sistema de recetas y comentarios.',
    tech: ['WordPress', 'PHP', 'MySQL'],
    results: ['10K visitas/mes', 'Top 5 keywords', '200+ suscriptores'],
    link: '#',
  },
  {
    id: 5,
    title: 'TechStore Pro',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Marketplace de tecnología con sistema de búsqueda avanzado.',
    tech: ['Vue.js', 'PostgreSQL', 'Redis'],
    results: ['$100K ventas/mes', '5000+ productos', '98% uptime'],
    link: '#',
  },
  {
    id: 6,
    title: 'Consultora Legal',
    category: 'Corporativo',
    image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sitio profesional para bufete de abogados con sistema de citas.',
    tech: ['Next.js', 'MongoDB', 'Calendar API'],
    results: ['80% más consultas', '30 min tiempo respuesta', 'Top 1 local'],
    link: '#',
  },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = selectedCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? 'bg-techphite-cyan text-white'
                    : 'glass-effect text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-techphite-darker via-techphite-darker/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <span className="text-xs text-techphite-cyan font-semibold mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-techphite-cyan" />
                  <span className="text-sm text-techphite-cyan">Ver detalles</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl bg-techphite-dark border-techphite-cyan/20 text-white">
          {selectedProject && (
            <div className="space-y-6">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
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
                      <div className="w-2 h-2 rounded-full bg-techphite-cyan mr-3"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-techphite-cyan hover:bg-techphite-cyan/90 text-white w-full"
              >
                Quiero un proyecto así
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
