'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '7731365230';
    const message = `Hola, soy ${formData.name}.\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="gradient-bg rounded-3xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -30, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10">
            {/* Contact Info */}
            <div className="p-12 text-white">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.p
                  className="text-sm font-semibold mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  INICIO / CONTÁCTANOS
                </motion.p>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      "0 0 30px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.3)"
                    ]
                  }}
                  style={{ transition: "text-shadow 2s infinite" }}
                >
                  COTIZA AHORA
                </motion.h2>

                {/* Contact Details */}
                <div className="space-y-6 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-xl font-bold mb-4">NUESTRA DIRECCIÓN</h3>
                    <div className="flex items-start gap-3">
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <FaMapMarkerAlt className="text-2xl mt-1 flex-shrink-0" />
                      </motion.div>
                      <div>
                        <p>Av Reforma No 22</p>
                        <p>Col. Centro</p>
                        <p>Tlahuellipan, Hidalgo, CP: 42780</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="text-xl font-bold mb-4">NUESTRO CONTACTO</h3>
                    <div className="space-y-3">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <FaPhone className="text-xl flex-shrink-0" />
                        </motion.div>
                        <a href="tel:7731365230" className="hover:text-accent transition-colors">
                          773 136 5230
                        </a>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                          }}
                        >
                          <FaEnvelope className="text-xl flex-shrink-0" />
                        </motion.div>
                        <a href="mailto:cotizaciones@sistemasintegralesvoltz.com" className="hover:text-accent transition-colors break-all">
                          cotizaciones@sistemasintegralesvoltz.com
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <h3 className="text-xl font-bold mb-4">REDES SOCIALES</h3>
                    <div className="space-y-3">
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          <FaInstagram className="text-xl flex-shrink-0" />
                        </motion.div>
                        <a href="https://www.instagram.com/voltzsystem?igsh=MW52cjZneGpzYTkzcQ==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          @voltzsystem
                        </a>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.3
                          }}
                        >
                          <FaFacebook className="text-xl flex-shrink-0" />
                        </motion.div>
                        <a href="https://www.facebook.com/share/1834u2zZeY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          Sistemas Integrales VOLTZ
                        </a>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.6
                          }}
                        >
                          <FaWhatsapp className="text-xl flex-shrink-0" />
                        </motion.div>
                        <a href="https://wa.me/7731365230" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                          773 136 5230
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-12"
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Contáctanos
              </motion.h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02, boxShadow: "0 4px 12px rgba(28, 164, 184, 0.2)" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02, boxShadow: "0 4px 12px rgba(28, 164, 184, 0.2)" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    whileFocus={{ scale: 1.02, boxShadow: "0 4px 12px rgba(28, 164, 184, 0.2)" }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                    whileFocus={{ scale: 1.02, boxShadow: "0 4px 12px rgba(28, 164, 184, 0.2)" }}
                  ></motion.textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(28, 164, 184, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                  <span className="relative z-10">Enviar Mensaje</span>
                  <motion.span
                    className="text-2xl relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
