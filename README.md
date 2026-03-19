# PokéBurger - Restaurant Page

## 🎯 Objetivo del Proyecto

Este proyecto es una práctica intensiva de desarrollo frontend enfocada en la creación de una **Single Page Application (SPA)** pura, utilizando únicamente **Vanilla JavaScript** y **Webpack**, sin depender de frameworks externos (como React o Vue) ni de estructuras HTML estáticas predefinidas.

El requerimiento principal de este ejercicio (típicamente inspirado en currículos como *The Odin Project*) es construir toda la interfaz de usuario de un sitio web de restaurante utilizando **manipulación del DOM**. A excepción de la etiqueta base `<div id="content">` en el archivo `index.html`, **todo el contenido, textos e imágenes de la página se generan dinámicamente** mediante código JavaScript (`document.createElement()`).

### 💡 Objetivos de Aprendizaje Clave:
1. **Dominio de la manipulación del DOM:** Generar una estructura de página completa, aplicar clases CSS y anidar elementos dinámicamente usando JS puro.
2. **Conceptos de SPA (Single Page Application):** Entender cómo funciona la navegación moderna incrustando detectores de eventos (Event Listeners) en pestañas que borran el contenedor actual e inyectan el módulo nuevo, evitando que la página recargue con cada click.
3. **Módulos ES6:** Desarrollar código limpio y modular separando la lógica por vistas y responsabilidades (por ejemplo: `home.js`, `menu.js`, `aboutUs.js`).
4. **Uso y Configuración de Webpack:** Aprender empaquetado moderno de aplicaciones gestionando las importaciones de JavaScript, la inyección directa de archivos de hoja de estilos (CSS) a través de `style-loader` / `css-loader`, y el manejo de assets visuales (`.png`, `.jpg`).
5. **Diseño Responsivo:** Ejercitar la estructuración de la UI (Interfaz de Usuario) usando CSS moderno, incluyendo funciones tipo `clamp()`, `flexbox` y `CSS Grid`, a fin de asegurar que el sitio reacciona de forma fluida a variables de tamaño de vista en todas las pantallas.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** & **CSS3** Avanzado.
- **Vanilla JavaScript** (ES6 Modules, Events).
- **Webpack** (Empaquetador de Módulos, loaders para CSS e imágenes).

## 🚀 Cómo ejecutar localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/IgnacioCastroT/Project-Restaurant-Page.git
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Levanta el proyecto. Si tienes el entorno web de Webpack, corre:
   ```bash
   npx webpack serve
   ```
   O compila los archivos para producción corriendo:
   ```bash
   npm run build
   ```