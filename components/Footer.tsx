'use client';

import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0 bg-white/10 rounded-lg p-2">
                <Image
                  src="/assets/logos/weblogo.png"
                  alt="VOLTZ Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold">
                SISTEMAS INTEGRALES <span className="text-primary">VOLTZ</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones integrales de seguridad electrónica y automatización para hogares y empresas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1834u2zZeY/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/voltzsystem?igsh=MW52cjZneGpzYTkzcQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-primary p-3 rounded-full transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://wa.me/7731365230"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-green-500 p-3 rounded-full transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-gray-400 hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-gray-400 hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Av Reforma No 22</li>
              <li>Col. Centro</li>
              <li>Tlahuellipan, Hidalgo</li>
              <li>CP: 42780</li>
              <li className="pt-2">
                <a href="tel:7731365230" className="hover:text-primary transition-colors">
                  773 136 5230
                </a>
              </li>
              <li>
                <a href="mailto:cotizaciones@sistemasintegralesvoltz.com" className="hover:text-primary transition-colors break-all">
                  cotizaciones@sistemasintegralesvoltz.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Sistemas Integrales VOLTZ. Todos los derechos reservados.</p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7731365230"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </footer>
  );
}
