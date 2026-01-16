'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Juan Pérez',
    company: 'Empresa Constructora XYZ',
    text: 'Excelente servicio de instalación de cámaras de seguridad. El equipo fue muy profesional y el sistema funciona perfectamente. Muy recomendable.',
    rating: 5,
    image: '', // Puedes agregar rutas de imágenes después
  },
  {
    id: 2,
    name: 'María González',
    company: 'Hogar Familiar',
    text: 'Instalaron un sistema de alarma en mi casa y quedé muy satisfecha. El servicio fue rápido, profesional y a buen precio. ¡Gracias VOLTZ!',
    rating: 5,
    image: '',
  },
  {
    id: 3,
    name: 'Roberto Martínez',
    company: 'Comercial La Esperanza',
    text: 'Implementaron un sistema completo de videovigilancia en mi negocio. La calidad de los equipos es excelente y el soporte técnico siempre está disponible.',
    rating: 5,
    image: '',
  },
  {
    id: 4,
    name: 'Ana Sánchez',
    company: 'Residencial Los Pinos',
    text: 'Instalaron cercas eléctricas y control de acceso en nuestro fraccionamiento. Trabajo impecable y muy buen trato. Los recomiendo ampliamente.',
    rating: 5,
    image: '',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2">TESTIMONIOS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden h-full">
                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  ></motion.div>

                  <div className="relative z-10">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: 'spring' }}
                    >
                      <FaQuoteLeft className="text-5xl text-primary/20 mb-6" />
                    </motion.div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <FaStar className="text-yellow-400 text-xl" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <motion.p
                      className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>

                    {/* Author Info */}
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-primary">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="text-xl" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="bg-white hover:bg-primary hover:text-white text-primary p-4 rounded-full shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
