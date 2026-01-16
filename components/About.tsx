'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa';

const values = [
  {
    icon: FaShieldAlt,
    title: 'Compromiso con la seguridad',
    description: 'Proteger lo más valioso de nuestros clientes.',
  },
  {
    icon: FaLightbulb,
    title: 'Innovación continua',
    description: 'Adaptarnos a los avances tecnológicos para ofrecer soluciones efectivas.',
  },
  {
    icon: FaHandshake,
    title: 'Confianza y profesionalismo',
    description: 'Brindar servicios de alta calidad con un enfoque serio y responsable.',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <motion.p
              className="text-primary font-semibold mb-2"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              QUIÉNES SOMOS
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Nos enfocamos en aportar valor y resolver desafíos empresariales mediante la entrega de servicios y soluciones de seguridad modernas
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              En Sistemas Integrales Voltz, nos especializamos en ofrecer soluciones de seguridad que combinan tecnología avanzada y un equipo altamente capacitado para proteger lo que más valoras.
            </motion.p>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Nuestro compromiso es brindar seguridad, confianza e innovación a cada cliente.
            </motion.p>
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary-dark transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, gap: "12px" }}
            >
              Descubrir Más
              <motion.span
                className="text-2xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 30px 60px rgba(28, 164, 184, 0.3)"
            }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            <div className="aspect-video bg-gradient-to-br from-primary to-primary-dark rounded-2xl shadow-2xl overflow-hidden relative">
              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>

              <div className="w-full h-full flex items-center justify-center text-white relative z-10">
                <div className="text-center p-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <FaShieldAlt className="text-6xl mb-4 mx-auto opacity-50" />
                  </motion.div>
                  {/* Pulse rings around shield */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ pointerEvents: "none" }}
                  >
                    <motion.div
                      className="w-32 h-32 border-4 border-white/30 rounded-full"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    ></motion.div>
                  </motion.div>
                  <motion.p
                    className="text-xl font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    Tu seguridad es nuestra prioridad
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">NUESTRA MISIÓN</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Proteger lo que más valoras con tecnología avanzada
            </h3>
          </div>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Proporcionamos soluciones integrales de seguridad que brindan tranquilidad, protejan los bienes y fortalezcan la confianza de nuestros clientes.
          </p>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Lo hacemos mediante el uso de tecnología de vanguardia, un servicio técnico especializado y un compromiso constante con la innovación.
          </p>
        </motion.div>

        {/* Values */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-primary font-semibold mb-2">VALORES</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Lo que nos define
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center cursor-pointer"
              >
                <motion.div
                  className="inline-flex p-4 bg-primary/10 rounded-full mb-4 relative"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    backgroundColor: "rgba(28, 164, 184, 0.2)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <value.icon className="text-4xl text-primary" />
                  </motion.div>
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: index * 0.3
                    }}
                  ></motion.div>
                </motion.div>
                <motion.h4
                  className="text-xl font-bold text-gray-900 mb-2"
                  whileHover={{ scale: 1.05, color: "#1ca4b8" }}
                >
                  {value.title}
                </motion.h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
