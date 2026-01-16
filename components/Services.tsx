'use client';

import { motion } from 'framer-motion';
import { FaCamera, FaBell, FaLightbulb, FaBolt, FaPlug, FaWifi, FaShoppingCart } from 'react-icons/fa';

const mainServices = [
  {
    title: 'SEGURIDAD ELECTRÓNICA Y AUTOMATIZACIÓN',
    description: 'Proporcionamos servicios personalizados para instalar, mantener y optimizar sistemas de seguridad electrónica. Nuestro equipo garantiza soluciones efectivas para hogares y negocios.',
    image: '/assets/brands/instalacion.jpg',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'VENTA DE EQUIPO',
    description: 'Ofrecemos una amplia gama de equipos de seguridad, como cámaras, alarmas y sistemas de control de acceso. Todos nuestros productos cumplen con estándares de calidad y tecnología de punta.',
    image: '/assets/brands/venta.jpg',
    gradient: 'from-blue-500 to-purple-500',
  },
];

const detailedServices = [
  {
    title: 'Cámaras de Videovigilancia',
    description: 'Instalamos y configuramos sistemas de CCTV de última generación para la protección de tu hogar o empresa.',
    icon: FaCamera,
  },
  {
    title: 'Alarmas',
    description: 'Sistemas de alarmas inteligentes que protegen tu propiedad 24/7 con monitoreo remoto.',
    icon: FaBell,
  },
  {
    title: 'Luces Inteligentes',
    description: 'Soluciones para automatizar y personalizar la iluminación en tu hogar o empresa, optimizando el consumo energético.',
    icon: FaLightbulb,
  },
  {
    title: 'Cercas Eléctricas',
    description: 'Instalación de cercas eléctricas confiables para incrementar la seguridad perimetral en tus instalaciones.',
    icon: FaBolt,
  },
  {
    title: 'Material Eléctrico',
    description: 'Amplia selección de materiales eléctricos de calidad para todas tus necesidades de instalación y reparación en proyectos residenciales o comerciales.',
    icon: FaPlug,
  },
  {
    title: 'Redes de Voz y Datos',
    description: 'Implementación de redes de comunicación robustas para empresas y hogares, asegurando conectividad óptima.',
    icon: FaWifi,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Services */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Nuestros Servicios Principales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Soluciones completas para tu seguridad y comodidad
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.02,
                y: -10,
                boxShadow: "0 20px 60px rgba(28, 164, 184, 0.3)"
              }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${service.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
              ></motion.div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
              </div>

              {/* Service Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}></div>
              </div>

              <div className="p-6 md:p-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Services */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Soluciones de Seguridad y Tecnología
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            NUESTROS SERVICIOS
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{
                y: -15,
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(28, 164, 184, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl shadow-lg p-6 cursor-pointer relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.5 }}
              ></motion.div>

              <div className="flex flex-col items-center text-center relative z-10">
                <motion.div
                  className="bg-primary/10 p-4 rounded-full mb-4 relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <service.icon className="text-4xl text-primary" />
                  </motion.div>
                  {/* Pulse ring effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.2
                    }}
                  ></motion.div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <motion.button
                  className="mt-4 text-primary font-semibold hover:text-primary-dark transition-colors flex items-center gap-1 group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEER MÁS
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    +
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
