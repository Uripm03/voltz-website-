import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configuración para imágenes
    remotePatterns: [],
    // Desactivar optimización de imágenes para desarrollo más rápido
    unoptimized: process.env.NODE_ENV === 'development',
  },
};

export default nextConfig;
