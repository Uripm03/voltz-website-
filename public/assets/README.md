# Carpeta de Assets - Imágenes

Esta carpeta contiene todas las imágenes y recursos gráficos del sitio web.

## Estructura de Carpetas

```
assets/
├── logos/          # Logos de la empresa (logo principal, logo blanco, etc.)
├── images/         # Imágenes generales del sitio
├── brands/         # Logos de marcas que manejan
└── products/       # Imágenes de productos (opcional, también se pueden subir desde admin)
```

## Cómo Subir Imágenes

### 1. Logo Principal

Para agregar el logo de VOLTZ:

1. Guarda tu logo en: `public/assets/logos/logo-voltz.png`
   - Formatos recomendados: PNG con fondo transparente, SVG
   - Tamaño recomendado: 200-300px de ancho

2. Si tienes una versión blanca del logo para el navbar transparente:
   - Guarda como: `public/assets/logos/logo-voltz-white.png`

### 2. Imágenes de Servicios

Para las fotos de los servicios (cámaras, instalaciones, etc.):

1. Guarda las imágenes en: `public/assets/images/`
2. Nombres sugeridos:
   - `security-cameras.jpg`
   - `installation.jpg`
   - `smart-lights.jpg`
   - `electric-fence.jpg`

### 3. Logos de Marcas

Para los logos de las marcas que manejan:

1. Guarda cada logo en: `public/assets/brands/`
2. Nombres sugeridos:
   - `faac.png`
   - `altai.png`
   - `hikvision.png`
   - etc.

### 4. Imágenes de Productos

Tienes dos opciones:

**Opción A**: Desde el Panel de Administración
- Ve a http://localhost:3000/admin
- Sube las imágenes directamente al agregar/editar productos

**Opción B**: Guardar en carpeta
- Guarda las imágenes en: `public/assets/products/`
- Usa nombres descriptivos como: `laptop-hp-i5.jpg`

## Formatos Recomendados

- **Logos**: PNG (con transparencia) o SVG
- **Fotos**: JPG o WebP
- **Iconos**: PNG o SVG

## Tamaños Recomendados

- **Logo**: 200-400px de ancho
- **Productos**: 800x800px (cuadrado)
- **Servicios**: 1200x800px
- **Marcas**: 200-300px de ancho

## Optimización

Para mejor rendimiento, optimiza las imágenes antes de subirlas:
- Comprime los JPG a 80-85% de calidad
- Usa herramientas como TinyPNG o Squoosh
- Considera convertir fotos grandes a WebP
