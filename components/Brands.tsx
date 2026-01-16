'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'FAAC', subtitle: 'Simply automatic.', logo: 'faac.png' },
  { name: 'ALTAI', subtitle: 'Super WiFi', logo: 'ALTAI.png' },
  { name: 'LinkedPro', subtitle: '', logo: 'linkedpro.png' },
  { name: 'PANDUIT', subtitle: '', logo: 'Panduit.png' },
  { name: 'FiberHome', subtitle: '', logo: 'fiberhome.png' },
  { name: 'LUTRON', subtitle: '', logo: 'Lutron.png' },
  { name: 'TP-Link', subtitle: '', logo: 'Tp-Link.png' },
  { name: 'Ubiquiti', subtitle: '', logo: 'Ubiquiti.png' },
  { name: 'HIKVISION', subtitle: '', logo: 'Hikvision.png' },
  { name: 'TRUPER', subtitle: '', logo: 'truper.svg' },
  { name: 'MERIK', subtitle: '', logo: 'merik.png' },
  { name: 'SIMON', subtitle: '', logo: 'Simon.png' },
  { name: 'GENLIT', subtitle: 'Soluciones Eléctricas', logo: 'gen-lit.png' },
];

export default function Brands() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Marcas que manejamos
          </h2>
          <p className="text-xl text-gray-600">
            Trabajamos con las mejores marcas del mercado
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(28, 164, 184, 0.2)",
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg cursor-pointer relative overflow-hidden group"
              style={{ perspective: 1000 }}
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              ></motion.div>

              {/* Border glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg border-2 border-primary opacity-0 group-hover:opacity-100"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Logo Image */}
              <motion.div
                className="relative w-full h-24 z-10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={`/assets/brands/${brand.logo}`}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                  style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: '100%' }}
                />
              </motion.div>

              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
