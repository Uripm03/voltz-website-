# Sistemas Integrales VOLTZ - Sitio Web

Sitio web moderno y responsive para Sistemas Integrales VOLTZ, especializado en seguridad electrónica y automatización.

## Características

- **Diseño Moderno y Responsive**: Se adapta perfectamente a teléfonos, tablets y computadoras
- **Colores de Marca**: Utiliza los colores corporativos de VOLTZ (turquesa/cyan)
- **Animaciones Suaves**: Experiencia de usuario mejorada con Framer Motion
- **Panel de Administración**: Gestión fácil de productos con subida de imágenes
- **Cotización por WhatsApp**: Los clientes pueden cotizar productos directamente por WhatsApp
- **Secciones Completas**:
  - Hero Section con llamado a la acción
  - Servicios principales
  - Productos destacados
  - Marcas que manejan
  - Quiénes somos
  - Contacto con formulario

## Tecnologías Utilizadas

- **Next.js 16** - Framework de React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos modernos
- **Framer Motion** - Animaciones
- **React Icons** - Iconos

## Instalación y Ejecución

### 1. Navegar al directorio del proyecto

```bash
cd voltz-website
```

### 2. Instalar dependencias (solo la primera vez)

```bash
npm install
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:3000**

### 4. Compilar para producción

```bash
npm run build
npm start
```

## Panel de Administración

### Acceso

El panel de administración está disponible en: **http://localhost:3000/admin**

### Funcionalidades

- **Agregar Productos**: Añade nuevos productos con imagen, nombre, precio y categoría
- **Editar Productos**: Modifica la información de productos existentes
- **Eliminar Productos**: Elimina productos que ya no estén disponibles
- **Subida de Imágenes**: Las imágenes se guardan como base64 (no requiere servidor de archivos)

### Categorías Disponibles

- Computación
- CCTV y Seguridad
- Iluminación
- Equipos
- Material Eléctrico
- Redes
- Otros

## Estructura del Proyecto

```
voltz-website/
├── app/
│   ├── admin/          # Panel de administración
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx        # Página de inicio
│   └── globals.css     # Estilos globales
├── components/
│   ├── Navbar.tsx      # Barra de navegación
│   ├── Hero.tsx        # Sección hero
│   ├── Services.tsx    # Servicios
│   ├── Products.tsx    # Productos
│   ├── Brands.tsx      # Marcas
│   ├── About.tsx       # Quiénes somos
│   ├── Contact.tsx     # Contacto
│   └── Footer.tsx      # Footer
└── public/             # Archivos estáticos

```

## Personalización

### Cambiar Información de Contacto

Edita los siguientes archivos:

- `components/Contact.tsx` - Formulario de contacto
- `components/Footer.tsx` - Footer con información de contacto
- `components/Products.tsx` - Número de WhatsApp para cotizaciones (línea 70)

### Colores de Marca

Los colores están definidos en `app/globals.css`:

```css
--primary: #00BCD4;        /* Turquesa principal */
--primary-dark: #0097A7;   /* Turquesa oscuro */
--accent: #00E5FF;         /* Cyan para acentos */
```

## Almacenamiento de Datos

Actualmente, los productos se guardan en **localStorage** del navegador. Esto significa:

- ✅ No requiere base de datos
- ✅ Fácil de implementar
- ⚠️ Los datos se guardan solo en el navegador donde se administran

### Para Producción (Futuro)

Si necesitas que los productos estén disponibles en todos los dispositivos, se recomienda:

1. Implementar una base de datos (MongoDB, PostgreSQL, etc.)
2. Crear API routes en Next.js para CRUD de productos
3. Servicio de almacenamiento de imágenes (AWS S3, Cloudinary, etc.)

## Despliegue

### Opción 1: Vercel (Recomendado)

1. Sube tu código a GitHub
2. Conecta tu repositorio a [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y lo desplegará

### Opción 2: Netlify

1. Sube tu código a GitHub
2. Conecta tu repositorio a [Netlify](https://netlify.com)
3. Configura el comando de build: `npm run build`

## Soporte

Para cualquier duda o problema:

- **Email**: cotizaciones@sistemasintegralesvoltz.com
- **Teléfono**: 773 136 5230
- **WhatsApp**: 773 136 5230

## Licencia

© 2026 Sistemas Integrales VOLTZ. Todos los derechos reservados.
