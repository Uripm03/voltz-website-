'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  category: string;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Load products from Firebase
    const loadProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData: Product[] = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() } as Product);
        });

        if (productsData.length > 0) {
          // Show only first 4 products as featured
          setProducts(productsData.slice(0, 4));
        } else {
          // Default sample products if none exist
          const sampleProducts: Product[] = [
          {
            id: '1',
            name: 'Laptop HP Core i5',
            price: '$12,500',
            category: 'Computación',
          },
          {
            id: '2',
            name: 'Monitor LED 24"',
            price: '$3,200',
            category: 'Computación',
          },
          {
            id: '3',
            name: 'Cámara IP 1080p',
            price: '$1,500',
            category: 'CCTV y Seguridad',
          },
          {
            id: '4',
            name: 'UPS 1000VA',
            price: '$2,800',
            category: 'Equipos',
          },
        ];
          setProducts(sampleProducts);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  const handleWhatsAppQuote = (product: Product) => {
    const phoneNumber = '7731365230';
    const message = `Hola, me interesa el producto: ${product.name} - ${product.price}. Me gustaría solicitar una cotización.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos Destacados
          </h2>
          <p className="text-xl text-gray-600">
            Equipos de cómputo, iluminación, CCTV y más
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden group cursor-pointer"
              style={{ perspective: 1000 }}
            >
              {/* Product Image */}
              <div className="h-32 md:h-40 bg-white flex items-center justify-center relative overflow-hidden p-2">
                {product.image ? (
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    whileHover={{
                      filter: "brightness(1.1)",
                      y: -5
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div
                    className="flex items-center justify-center"
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
                    <FaShoppingCart className="text-5xl md:text-6xl text-gray-400" />
                  </motion.div>
                )}
                <motion.div
                  className="absolute top-2 right-2 bg-primary text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  {product.category}
                </motion.div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
              </div>

              {/* Product Info */}
              <div className="p-3">
                <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 line-clamp-2">
                  {product.name}
                </h3>
                <motion.div
                  className="text-lg md:text-xl font-bold text-primary mb-2"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(28, 164, 184, 0)",
                      "0 0 10px rgba(28, 164, 184, 0.5)",
                      "0 0 0px rgba(28, 164, 184, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {product.price}
                  <span className="text-xs text-gray-500 font-normal ml-1">MXN</span>
                </motion.div>

                {/* Actions */}
                <div className="space-y-1.5">
                  <motion.button
                    onClick={() => handleWhatsAppQuote(product)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm transition-colors flex items-center justify-center gap-1.5 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaWhatsapp className="text-base md:text-lg" />
                    <span className="hidden sm:inline">Cotizar por WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-primary hover:bg-primary-dark text-white py-1.5 md:py-2 rounded-lg font-semibold text-xs md:text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Detalles
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/productos"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Ver Todos los Productos
          </a>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
              >
                <FaTimes className="text-xl text-gray-700" />
              </button>

              {/* Product Image */}
              <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <FaShoppingCart className="text-8xl text-gray-400" />
                )}
                <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {selectedProduct.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>

                <div className="text-4xl font-bold text-primary mb-6">
                  {selectedProduct.price}
                  <span className="text-lg text-gray-500 font-normal ml-2">MXN</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Producto de alta calidad disponible en Sistemas Integrales VOLTZ.
                    Contamos con las mejores marcas y garantía en todos nuestros productos.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Características</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Garantía del fabricante
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Instalación profesional disponible
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Soporte técnico especializado
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      Precios competitivos
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleWhatsAppQuote(selectedProduct)}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="text-2xl" />
                    Cotizar por WhatsApp
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-4 rounded-lg font-semibold text-lg transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cerrar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
