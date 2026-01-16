'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

export default function Map() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-2">UBICACIÓN</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Encuéntranos
          </h2>
          <p className="text-xl text-gray-600">
            Visítanos en nuestra ubicación en Tlahuellipan, Hidalgo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-primary/10 p-4 rounded-full flex-shrink-0"
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dirección</h3>
                  <p className="text-gray-600">
                    Av Reforma No 22<br />
                    Col. Centro<br />
                    Tlahuellipan, Hidalgo<br />
                    CP: 42780
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-primary/10 p-4 rounded-full flex-shrink-0"
                  animate={{
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaPhone className="text-2xl text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                  <a href="tel:7731365230" className="text-gray-600 hover:text-primary transition-colors">
                    773 136 5230
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="bg-primary/10 p-4 rounded-full flex-shrink-0"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <FaClock className="text-2xl text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Horario</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                    Sábado: 9:00 AM - 2:00 PM<br />
                    Domingo: Cerrado
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl h-full min-h-[500px] relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              ></motion.div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.8!2d-99.2374!3d20.1305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35f7c8b8b8b8b%3A0x1234567890!2sAv.%20Reforma%2022%2C%20Centro%2C%2042780%20Tlahuellipan%2C%20Hgo.!5e0!3m2!1ses-419!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Directions Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <motion.a
            href="https://www.google.com/maps/dir//Av.+Reforma+22,+Centro,+42780+Tlahuellipan,+Hgo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(28, 164, 184, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMapMarkerAlt className="text-xl" />
            Cómo llegar
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
