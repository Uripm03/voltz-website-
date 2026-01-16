'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTools, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    image: '/assets/brands/trabajo1.jpeg',
    title: 'Sistema de Iluminación',
    description: 'Sistema de luces inteligentes',

  },
  {
    id: 2,
    image: '/assets/brands/trabajo2.jpeg',
    title: 'Instalación de Sistema de Seguridad',
    description: 'Proyecto completo Control de acceso para empresa',

  },
  
  {
    id: 4,
    image: '/assets/brands/trabajo4jpeg.jpeg',
    title: 'Cerca Eléctrica Perimetral',
    description: 'Seguridad perimetral residencial',
  },
  {
    id: 5,
    image: '/assets/brands/trabajo5.jpeg',
    title: 'Red de Voz y Datos',
    description: 'Cableado estructurado para oficinas',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaTools className="text-3xl text-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proyectos
          </h2>
          <p className="text-xl text-gray-600">
            Conoce algunos de nuestros trabajos realizados
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Main Carousel Container */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setSelectedProject(projects[currentIndex])}
              >
                {/* Project Image */}
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-12 text-white"
                >
                  <motion.h3
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(28, 164, 184, 0.5)",
                        "0 0 20px rgba(28, 164, 184, 0.8)",
                        "0 0 10px rgba(28, 164, 184, 0.5)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {projects[currentIndex].title}
                  </motion.h3>
                  <p className="text-base md:text-lg text-white/90 mb-4">
                    {projects[currentIndex].description}
                  </p>
                  <motion.button
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Detalles
                  </motion.button>
                </motion.div>

                {/* Click to view indicator */}
                <motion.div
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Haz clic para ampliar
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <FaChevronLeft className="text-xl md:text-2xl" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 md:p-4 rounded-full transition-all hover:scale-110 z-10"
              aria-label="Siguiente"
            >
              <FaChevronRight className="text-xl md:text-2xl" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'bg-white w-8 h-3'
                      : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                  } rounded-full`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir a proyecto ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 grid grid-cols-5 gap-3 md:gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-primary shadow-xl scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 border-2 border-primary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[80vh] object-contain bg-black"
                />

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-white/90">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              {/* Navigation in Lightbox */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (currentIndex - 1 + projects.length) % projects.length;
                  setCurrentIndex(newIndex);
                  setSelectedProject(projects[newIndex]);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all"
              >
                <FaChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newIndex = (currentIndex + 1) % projects.length;
                  setCurrentIndex(newIndex);
                  setSelectedProject(projects[newIndex]);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all"
              >
                <FaChevronRight className="text-2xl" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
