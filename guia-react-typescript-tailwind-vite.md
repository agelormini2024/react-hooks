# Guía: Crear un proyecto React + TypeScript + Tailwind con Vite

Esta guía te llevará paso a paso para crear un proyecto moderno de React utilizando TypeScript, Tailwind CSS y Vite como bundler.

## Requisitos previos

- Node.js (versión 18 o superior)
- npm instalado
- Un editor de código (recomendado: VS Code)

## Paso 1: Crear el proyecto con Vite

```bash
# Crear el proyecto con plantilla de React + TypeScript
npm create vite@latest mi-proyecto-react -- --template react-ts
```
## Paso 2: Navegar al directorio del proyecto

```bash
cd mi-proyecto-react
```

## Paso 3: Instalar las dependencias

```bash
# Con npm
npm install
```
## Paso 4: Instalar Tailwind CSS

### 4.1 Instalar Tailwind y sus dependencias

```bash
# Con npm
npm install tailwindcss @tailwindcss/vite
```
## Paso 5: Configure the Vite plugin
## Agregar el plugin @tailwindcss/vite a su Vite configuration editando `vite.config.ts`
```javascript

import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss() // <-- Plugin de Tailwind
  ],
})

```
### 5.1 Agregue un @import a su archivo CSS principal que importe Tailwind CSS.
### Edita el archivo `src/index.css` y reemplaza su contenido con:

```javascript

@import "tailwindcss";

```

## Paso 6: Configurar TypeScript (opcional - mejoras adicionales)

El proyecto ya viene con TypeScript configurado, pero puedes personalizar `tsconfig.json` si necesitas configuraciones específicas.
Puedes encontrar información en: `[tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content)`:


## Paso 7: Probar la instalación

### 7.2 Borrar la carpeta `/src/assets` y el archivo `/src/App.css` (inecesarios para nuestra configuración) 

### 7.3 Ejecutar el servidor de desarrollo

```bash
# Con npm
npm run dev

```

El proyecto estará disponible en `http://localhost:5173`

## Paso 8: Estructura del proyecto resultante

```
mi-proyecto-react/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## Extensiones recomendadas para VS Code

1. **ES7+ React/Redux/React-Native snippets** - Para snippets de React
2. **TypeScript Importer** - Para importaciones automáticas
3. **Tailwind CSS IntelliSense** - Para autocompletado de clases de Tailwind
4. **Prettier** - Para formateo de código
5. **ESLint** - Para linting

## Configuraciones adicionales opcionales

### Prettier (formateo de código)

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

Crear `.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## ¡Listo!

El proyecto React con TypeScript y Tailwind CSS usando Vite está completamente configurado y listo para el desarrollo. Puedes comenzar a crear componentes, añadir rutas, gestión de estado y más funcionalidades según las necesidades de tu aplicación.

## Recursos adicionales

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
