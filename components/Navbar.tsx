'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Productos', href: '#productos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center gap-3">
              {/* Logo Image más grande */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <Image
                  src="/assets/logos/weblogo.png"
                  alt="VOLTZ Logo"
                  width={96}
                  height={96}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="text-xl md:text-2xl font-bold">
                <span className="text-gray-900">
                  SISTEMAS INTEGRALES
                </span>
                <span className="text-primary"> VOLTZ</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Cotiza Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <FaTimes className="text-2xl text-gray-900" />
            ) : (
              <FaBars className="text-2xl text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 bg-primary text-white rounded-md font-medium text-center"
            >
              Cotiza Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
