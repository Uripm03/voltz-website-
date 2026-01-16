'use client';

import { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash, FaImage, FaSave, FaTimes, FaLock, FaSignOutAlt } from 'react-icons/fa';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image?: string;
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
  });
  const [imagePreview, setImagePreview] = useState<string>('');

  // Contraseña segura - puedes cambiarla aquí
  const ADMIN_PASSWORD = 'voltz2024admin';

  useEffect(() => {
    // Check if already authenticated in session
    const auth = sessionStorage.getItem('voltz_admin_auth');
    if (auth === 'authenticated') {
      setIsAuthenticated(true);
      loadProducts();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('voltz_admin_auth', 'authenticated');
      setLoginError('');
      loadProducts();
    } else {
      setLoginError('Contraseña incorrecta');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('voltz_admin_auth');
    setPassword('');
  };

  const loadProducts = () => {
    const stored = localStorage.getItem('voltz_products');
    if (stored) {
      setProducts(JSON.parse(stored));
    }
  };

  const saveProducts = (newProducts: Product[]) => {
    localStorage.setItem('voltz_products', JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingProduct) {
      const updated = products.map(p =>
        p.id === editingProduct.id
          ? { ...editingProduct, ...formData, image: imagePreview }
          : p
      );
      saveProducts(updated);
    } else {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...formData,
        image: imagePreview,
      };
      saveProducts([...products, newProduct]);
    }

    closeModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
      saveProducts(products.filter(p => p.id !== id));
    }
  };

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.image || '',
      });
      setImagePreview(product.image || '');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    setFormData({ name: '', price: '', category: '', image: '' });
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const categories = [
    'Computación',
    'CCTV y Seguridad',
    'Iluminación',
    'Equipos',
    'Material Eléctrico',
    'Redes',
    'Otros',
  ];

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FaLock className="text-3xl text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
            <p className="text-gray-600">Sistemas Integrales VOLTZ</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Contraseña de Acceso
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <FaTimes /> {loginError}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaLock /> Iniciar Sesión
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Acceso restringido solo para administradores</p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Panel (authenticated)
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="gradient-bg text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Panel de Administración</h1>
            <p className="text-white/80">Gestión de Productos - Sistemas Integrales VOLTZ</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => openModal()}
              className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              <FaPlus /> Agregar Producto
            </button>
            <button
              onClick={handleLogout}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors border border-white/30"
            >
              <FaSignOutAlt /> Salir
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos ({products.length})</h2>

          {products.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-xl mb-2">No hay productos registrados</p>
              <p>Haz clic en "Agregar Producto" para comenzar</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Product Image */}
                  <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaImage className="text-6xl text-gray-300" />
                    )}
                    <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {product.price}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(product)}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-1 transition-colors"
                      >
                        <FaEdit /> Editar
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold flex items-center justify-center gap-1 transition-colors"
                      >
                        <FaTrash /> Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingProduct ? 'Editar Producto' : 'Agregar Producto'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Imagen del Producto
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                  {imagePreview ? (
                    <div className="relative aspect-video">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover rounded"
                      />
                      <button
                        type="button"
                        onClick={() => setImagePreview('')}
                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  ) : (
                    <label className="flex flex-col items-center justify-center cursor-pointer">
                      <FaImage className="text-4xl text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Haz clic para subir una imagen</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre del Producto *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ej: Laptop HP Core i5"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Precio *
                </label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Ej: $12,500"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoría *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaSave /> {editingProduct ? 'Actualizar' : 'Guardar'} Producto
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
