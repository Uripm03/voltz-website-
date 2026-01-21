'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: '¿Qué tipos de sistemas de seguridad ofrecen?',
    answer: 'Ofrecemos una amplia gama de sistemas de seguridad incluyendo cámaras de videovigilancia (CCTV), alarmas, control de acceso, cercas eléctricas, sistemas de iluminación inteligente y redes de voz y datos.'
  },
  {
    id: 2,
    question: '¿Cuánto tiempo tarda la instalación?',
    answer: 'El tiempo de instalación depende del proyecto. Una instalación residencial básica puede tomar de 1 a 2 días, mientras que proyectos comerciales más grandes pueden tomar de 3 a 5 días. Te proporcionaremos un cronograma detallado después de evaluar tus necesidades.'
  },
  {
    id: 3,
    question: '¿Ofrecen garantía en sus productos y servicios?',
    answer: 'Sí, todos nuestros productos cuentan con garantía del fabricante que va de 1 a 3 años dependiendo del equipo.'
  },
  {
    id: 4,
    question: '¿Dan soporte técnico después de la instalación?',
    answer: 'Por supuesto. Ofrecemos soporte técnico completo después de la instalación. Puedes contactarnos vía WhatsApp, teléfono o email y nuestro equipo técnico te ayudará a resolver cualquier duda o problema.'
  },
  {
    id: 5,
    question: '¿Trabajan con empresas o solo con particulares?',
    answer: 'Trabajamos tanto con clientes particulares como con empresas. Tenemos experiencia en proyectos residenciales, comerciales e industriales de cualquier tamaño.'
  },
  {
    id: 6,
    question: '¿Hacen mantenimiento preventivo de los sistemas?',
    answer: 'Sí, ofrecemos planes de mantenimiento preventivo para garantizar el correcto funcionamiento de tus sistemas de seguridad. El mantenimiento incluye limpieza de equipos, revisión de conexiones, actualización de firmware y ajustes necesarios.'
  },
  {
    id: 7,
    question: '¿Puedo ver las cámaras desde mi celular?',
    answer: 'Sí, todos nuestros sistemas de videovigilancia modernos incluyen acceso remoto mediante aplicación móvil. Podrás ver tus cámaras en tiempo real desde cualquier lugar con conexión a internet.'
  },
  {
    id: 8,
    question: '¿Realizan cotizaciones sin costo?',
    answer: 'Sí, todas nuestras cotizaciones son completamente gratuitas y sin compromiso. Evaluamos tus necesidades y te proporcionamos una propuesta detallada con los mejores precios del mercado.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaQuestionCircle className="text-5xl text-primary" />
            </motion.div>
          </div>
          <p className="text-primary font-semibold mb-2">PREGUNTAS FRECUENTES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Tienes dudas? Aquí las resolvemos
          </h2>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-left font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <FaChevronDown className="text-primary text-xl" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-2 bg-gray-50">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-700 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-3">¿No encontraste tu respuesta?</h3>
          <p className="mb-6 text-white/90">
            Contáctanos y con gusto resolveremos todas tus dudas
          </p>
          <motion.a
            href="#contacto"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
