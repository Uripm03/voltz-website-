'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaShoppingCart, FaSearch, FaFilter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Product {
  id: string;
  name: string;
  price: string;
  image?: string;
  category: string;
}

const categories = [
  'Todos',
  'CCTV y Seguridad',
  'Computación',
  'Equipos',
  'Iluminación',
  'Redes y Comunicaciones'
];

export default function ProductosPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Load products from Firebase
    const loadProducts = async () => {
      try {
        console.log('[ProductosPage] Loading from Firebase...');
        const querySnapshot = await getDocs(collection(db, 'products'));
        const productsData: Product[] = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() } as Product);
        });
        console.log('[ProductosPage] Loaded', productsData.length, 'products from Firebase');

        if (productsData.length > 0) {
          setProducts(productsData);
          setFilteredProducts(productsData);
        } else {
          // Default sample products if none exist
          console.log('[ProductosPage] No products in Firebase, using samples');
          const sampleProducts: Product[] = [
            { id: '1', name: 'Laptop HP Core i5', price: '$12,500', category: 'Computación' },
            { id: '2', name: 'Monitor LED 24"', price: '$3,200', category: 'Computación' },
            { id: '3', name: 'Cámara IP 1080p', price: '$1,500', category: 'CCTV y Seguridad' },
            { id: '4', name: 'UPS 1000VA', price: '$2,800', category: 'Equipos' },
          ];
          setProducts(sampleProducts);
          setFilteredProducts(sampleProducts);
        }
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };

    loadProducts();
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const handleWhatsAppQuote = (product: Product) => {
    const phoneNumber = '7731365230';
    const message = `Hola, me interesa el producto: ${product.name} - ${product.price}. Me gustaría solicitar una cotización.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestros Productos
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Equipos de cómputo, iluminación, CCTV y más
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaSearch className="inline mr-2" />
                Buscar Productos
              </label>
              <input
                type="text"
                placeholder="Buscar por nombre o categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <FaFilter className="inline mr-2" />
                Filtrar por Categoría
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </motion.div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-gray-600">
            Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  delay: index * 0.05,
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
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  {product.image ? (
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.4 }}
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
                      <FaShoppingCart className="text-6xl text-gray-400" />
                    </motion.div>
                  )}
                  <motion.div
                    className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.05 + 0.3, type: "spring" }}
                  >
                    {product.category}
                  </motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  {product.price && (
                    <motion.div
                      className="text-2xl font-bold text-primary mb-4"
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
                      <span className="text-sm text-gray-500 font-normal ml-1">MXN</span>
                    </motion.div>
                  )}

                  {/* Actions */}
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => handleWhatsAppQuote(product)}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-xl" />
                      Cotizar por WhatsApp
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <FaSearch className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-6">
              Intenta cambiar los filtros o el término de búsqueda
            </p>
            <motion.button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchTerm('');
              }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Limpiar filtros
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary to-primary-dark py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Contáctanos y con gusto te ayudaremos a encontrar el producto perfecto para tus necesidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contacto">
                <motion.button
                  className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contactar Ahora
                </motion.button>
              </Link>
              <Link href="/">
                <motion.button
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Volver al Inicio
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
