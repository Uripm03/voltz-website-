# 📸 Guía Completa para Agregar Imágenes

Esta guía te ayudará a agregar todas las imágenes necesarias para el sitio web de VOLTZ.

## 📁 Estructura de Carpetas

Todas las imágenes deben ir en la carpeta `public/assets/`:

```
public/assets/
├── logos/          # Logo de VOLTZ
├── images/         # Imágenes de servicios y secciones
├── brands/         # Logos de marcas
└── products/       # Imágenes de productos (opcional)
```

---

## 🎯 PASO 1: Agregar el Logo de VOLTZ

### Logo Principal

1. **Prepara tu logo**:
   - Formato: PNG con fondo transparente (recomendado) o JPG
   - Tamaño: 200-400px de ancho
   - Nombre del archivo: `logo-voltz.png`

2. **Coloca el logo**:
   ```
   public/assets/logos/logo-voltz.png
   ```

3. **Dónde aparecerá**:
   - ✅ Navbar (barra de navegación superior)
   - ✅ Footer (pie de página)

### Logo Alternativo (Opcional)

Si tienes una versión blanca del logo para fondos oscuros:
```
public/assets/logos/logo-voltz-white.png
```

---

## 🏢 PASO 2: Agregar Logos de Marcas

Las marcas que aparecen en la sección "Marcas que manejamos":

1. **Descarga los logos** de cada marca (preferiblemente PNG con transparencia)

2. **Guárdalos** con estos nombres exactos en `public/assets/brands/`:

   ```
   public/assets/brands/
   ├── faac.png           # FAAC - Simply automatic
   ├── altai.png          # ALTAI - Super WiFi
   ├── linkedpro.png      # LinkedPro
   ├── panduit.png        # PANDUIT
   ├── fiberhome.png      # FiberHome
   ├── lutron.png         # LUTRON
   ├── tplink.png         # TP-Link
   ├── ubiquiti.png       # Ubiquiti
   ├── hikvision.png      # HIKVISION
   ├── truper.png         # TRUPER
   ├── merik.png          # MERIK
   ├── simon.png          # SIMON
   └── genlit.png         # GENLIT
   ```

3. **Tamaño recomendado**: 200-300px de ancho

**Nota**: Si no tienes el logo de alguna marca, solo aparecerá el nombre en texto.

---

## 🖼️ PASO 3: Agregar Imágenes de Servicios (Opcional)

Para hacer la sección de servicios más visual, puedes agregar fotos de tus instalaciones:

```
public/assets/images/
├── security-cameras.jpg      # Foto de cámaras instaladas
├── installation-work.jpg     # Foto de técnico instalando
├── smart-lights.jpg          # Foto de luces inteligentes
├── electric-fence.jpg        # Foto de cerca eléctrica
├── alarm-system.jpg          # Foto de sistema de alarma
└── network-cables.jpg        # Foto de instalación de redes
```

**Tamaño recomendado**: 1200x800px o proporciones similares

---

## 📦 PASO 4: Agregar Imágenes de Productos

Tienes **dos opciones** para agregar imágenes de productos:

### Opción A: Desde el Panel de Administración (Recomendado)

1. Ve a: **http://localhost:3000/admin**
2. Haz clic en "Agregar Producto"
3. Sube la imagen directamente desde el formulario
4. Las imágenes se guardan automáticamente

### Opción B: Guardar en Carpeta

Si prefieres guardarlas como archivos:

```
public/assets/products/
├── laptop-hp-core-i5.jpg
├── monitor-led-24.jpg
├── camara-ip-1080p.jpg
└── ups-1000va.jpg
```

---

## 🛠️ Cómo Subir las Imágenes

### Método 1: Usando Finder (Mac) / Explorador de Archivos (Windows)

1. Abre la carpeta del proyecto:
   ```
   voltz-website/public/assets/
   ```

2. Navega a la subcarpeta correspondiente (logos, brands, images)

3. Arrastra y suelta tus imágenes en la carpeta

### Método 2: Usando la Terminal

```bash
# Copiar una imagen al proyecto
cp /ruta/a/tu/imagen.png voltz-website/public/assets/logos/logo-voltz.png
```

---

## ✅ Verificar que las Imágenes Funcionan

1. **Reinicia el servidor** (si estaba corriendo):
   ```bash
   # Detener: Ctrl + C
   # Iniciar nuevamente:
   npm run dev
   ```

2. **Abre tu navegador**:
   ```
   http://localhost:3000
   ```

3. **Verifica** que aparezcan:
   - Logo en la barra superior
   - Logo en el footer
   - Logos de marcas en la sección "Marcas que manejamos"

---

## 🎨 Consejos para Optimizar las Imágenes

### Antes de Subir:

1. **Comprime las imágenes**:
   - Usa herramientas como [TinyPNG](https://tinypng.com/)
   - Mantén la calidad al 80-85%

2. **Formatos recomendados**:
   - **PNG**: Para logos con transparencia
   - **JPG**: Para fotografías
   - **WebP**: Para mejor rendimiento (opcional)

3. **Tamaños máximos**:
   - Logos: 100-200 KB
   - Fotos de productos: 200-500 KB
   - Fotos de servicios: 300-600 KB

---

## 🐛 Solución de Problemas

### La imagen no aparece:

1. **Verifica el nombre del archivo**:
   - Debe ser exactamente como se indica (minúsculas)
   - Ejemplo: `logo-voltz.png` NO `Logo-Voltz.PNG`

2. **Verifica la ruta**:
   - Debe estar en: `public/assets/logos/logo-voltz.png`
   - NO en: `assets/logos/logo-voltz.png`

3. **Reinicia el servidor**:
   ```bash
   # Detener con Ctrl + C
   npm run dev
   ```

4. **Limpia la caché del navegador**:
   - Presiona `Cmd + Shift + R` (Mac) o `Ctrl + F5` (Windows)

---

## 📝 Resumen Rápido

**Archivos mínimos necesarios**:

```
public/assets/
└── logos/
    └── logo-voltz.png    ← ¡Importante! Logo principal
```

**Archivos opcionales pero recomendados**:

```
public/assets/
├── logos/
│   └── logo-voltz.png
└── brands/
    ├── faac.png
    ├── altai.png
    ├── hikvision.png
    └── ... (otros logos de marcas)
```

---

## 🎯 Ejemplo Completo

Tu estructura final debería verse así:

```
voltz-website/
└── public/
    └── assets/
        ├── logos/
        │   └── logo-voltz.png          ← Tu logo
        ├── brands/
        │   ├── faac.png               ← Logos de marcas
        │   ├── altai.png
        │   ├── hikvision.png
        │   └── ...
        ├── images/
        │   ├── security-cameras.jpg   ← Fotos de servicios (opcional)
        │   └── ...
        └── products/
            └── ...                     ← Productos (opcional, mejor usar admin)
```

---

## 💡 ¿Necesitas Ayuda?

Si tienes problemas para subir las imágenes:

1. Verifica que estés en la carpeta correcta
2. Asegúrate de que los nombres de archivo sean exactos
3. Reinicia el servidor después de agregar imágenes
4. Limpia la caché del navegador

---

## 📞 Contacto

Para soporte técnico:
- **Email**: cotizaciones@sistemasintegralesvoltz.com
- **WhatsApp**: 773 136 5230
