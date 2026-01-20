'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center gradient-bg overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/brands/fondoo.jpeg"
          alt="Background"
          className="w-full h-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-primary-dark/50"></div>
      </div>

      {/* Animated Background Elements con movimiento */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              ¿SOLUCIONES INTEGRALES EN
              <br />
              <motion.span
                className="text-accent inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(36, 201, 222, 0.5)",
                    "0 0 40px rgba(36, 201, 222, 0.8)",
                    "0 0 20px rgba(36, 201, 222, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                SEGURIDAD ELECTRÓNICA Y
              </motion.span>
              <br />
              <motion.span
                className="text-accent inline-block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(36, 201, 222, 0.5)",
                    "0 0 40px rgba(36, 201, 222, 0.8)",
                    "0 0 20px rgba(36, 201, 222, 0.5)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                AUTOMATIZACIÓN?
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Tenemos precios competitivos para tus proyectos
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#servicios"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-xl flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">CONOCE MÁS</span>
                <motion.span
                  className="text-xl relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contacto"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Solicitar Cotización</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Section con animaciones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "10+", label: "Años de Experiencia", delay: 0 },
              { number: "500+", label: "Proyectos Completados", delay: 0.1 },
              { number: "100%", label: "Clientes Satisfechos", delay: 0.2 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + stat.delay }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                <motion.div
                  className="text-4xl font-bold text-white mb-2"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.3)",
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 10px rgba(255,255,255,0.3)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: stat.delay }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Desliza para más</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
