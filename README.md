# React + TypeScript + Tailwind + Vite

Este proyecto es una aplicación React moderna construida con TypeScript, Tailwind CSS y Vite. Incluye configuración optimizada de ESLint y soporte completo para desarrollo con Hot Module Replacement (HMR).

## 🚀 Características

- **React 19** con **TypeScript**
- **Tailwind CSS 4** integrado mediante [`@tailwindcss/vite`](vite.config.ts)
- **Vite 7** como bundler ultrarrápido
- **ESLint** configurado con reglas para React y TypeScript
- Configuración de TypeScript con referencias de proyectos
- Estructura de proyecto limpia y escalable
- Tutorial paso a paso `./GUIA-REACT-TYPESCRIPT-TAILWIND-VITE.md`

## 📁 Estructura del proyecto

```
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx                      # Componente principal con sistema de tabs
│   ├── index.css                    # Estilos globales con Tailwind
│   ├── main.tsx                     # Punto de entrada de la aplicación
│   ├── vite-env.d.ts               # Tipos de Vite
│   ├── components/
│   │   └── examples/               # Ejemplos organizados por categoría
│   │       ├── BasicCounterExample.tsx     # useState básico
│   │       ├── CustomHookExample.tsx       # useContador
│   │       ├── LocalStorageExample.tsx     # useLocalStorage
│   │       ├── FetchExample.tsx            # useFetch con API
│   │       └── CombinedExample.tsx         # Combinando hooks
│   └── hooks/                      # Custom hooks reutilizables
│       ├── useContador.tsx         # Contador con useCallback
│       ├── useLocalStorage.tsx     # Persistencia en localStorage
│       └── useFetch.tsx            # Peticiones HTTP
├── eslint.config.js               # Configuración de ESLint
├── index.html                     # Plantilla HTML
├── package.json                   # Dependencias y scripts
├── tsconfig.json                  # Referencias de TypeScript
├── tsconfig.app.json              # Config de TypeScript para la app
├── tsconfig.node.json             # Config de TypeScript para Node
├── vite.config.ts                 # Configuración de Vite
└── GUIA-REACT-TYPESCRIPT-TAILWIND-VITE.md  # Tutorial paso a paso
```

## 🎯 Ejemplos incluidos

La aplicación incluye ejemplos prácticos organizados en tabs para demostrar diferentes patrones de React:

### 📊 **useState básico**
- Contador simple sin persistencia
- Ejemplos de funciones updater
- Comparación entre sintaxis directa vs funcional

### 🔧 **Custom Hook (useContador)**
- Hook personalizado con `useCallback`
- Encapsulación de lógica reutilizable
- Optimización de rendimiento
- Ejemplo perfecto para entender custom hooks

### 💾 **useLocalStorage**
- Persistencia automática en `localStorage`
- Soporte para cualquier tipo de dato (genéricos)
- Manejo de errores JSON
- Ejemplos con strings, números, objetos y arrays

### 🌐 **useFetch**
- Peticiones HTTP con manejo de estados
- Loading, error y data automáticos
- Función refetch manual
- Ejemplo con APIs reales (JSONPlaceholder)

### 🔄 **Combinando hooks**
- Sincronización entre múltiples hooks
- Problemas comunes y soluciones
- Mejores prácticas para hooks complejos
- Ejemplo de `useContador` + `useLocalStorage`

## 🛠️ Scripts disponibles

Ejecuta estos comandos desde la raíz del proyecto:

- **`npm run dev`** – Inicia el servidor de desarrollo en modo HMR
- **`npm run build`** – Genera la build de producción (TypeScript + Vite)
- **`npm run preview`** – Previsualiza la build de producción
- **`npm run lint`** – Ejecuta ESLint sobre todo el código fuente

## ⚡ Inicio rápido

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en [http://localhost:5173](http://localhost:5173).

## 🎨 Configuración de Tailwind CSS

Tailwind CSS está integrado usando el plugin oficial [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite):

- El archivo [`src/index.css`](src/index.css) importa Tailwind con `@import "tailwindcss"`
- La configuración se encuentra en [`vite.config.ts`](vite.config.ts)
- No se requiere archivo `tailwind.config.js` con esta configuración

## 📝 Configuración de TypeScript

El proyecto usa una configuración de referencias de TypeScript:

- [`tsconfig.json`](tsconfig.json) - Configuración principal con referencias
- [`tsconfig.app.json`](tsconfig.app.json) - Configuración para el código de la aplicación
- [`tsconfig.node.json`](tsconfig.node.json) - Configuración para archivos de Node (Vite config)

## 🔧 Configuración de ESLint

ESLint está configurado en [`eslint.config.js`](eslint.config.js) con:

- [`@eslint/js`](https://www.npmjs.com/package/@eslint/js) - Reglas básicas de JavaScript
- [`typescript-eslint`](https://typescript-eslint.io/) - Reglas para TypeScript
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - Reglas para React Hooks
- [`eslint-plugin-react-refresh`](https://www.npmjs.com/package/eslint-plugin-react-refresh) - Reglas para React Fast Refresh

### Expansión de la configuración de ESLint

Para aplicaciones de producción, puedes habilitar reglas con verificación de tipos:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Configuraciones actuales...
      
      // Reemplaza tseslint.configs.recommended con esto:
      ...tseslint.configs.recommendedTypeChecked,
      // O usa esto para reglas más estrictas:
      ...tseslint.configs.strictTypeChecked,
      // Opcionalmente, añade reglas de estilo:
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 🔗 Dependencias principales

### Producción
- [`react`](https://react.dev/) `^19.1.1` - Biblioteca de interfaz de usuario
- [`react-dom`](https://react.dev/) `^19.1.7` - Renderizado DOM para React
- [`@tailwindcss/vite`](https://www.npmjs.com/package/@tailwindcss/vite) `^4.1.13` - Plugin de Tailwind para Vite

### Desarrollo
- [`vite`](https://vitejs.dev/) `^7.1.2` - Bundler y servidor de desarrollo
- [`typescript`](https://www.typescriptlang.org/) `~5.8.3` - Superset tipado de JavaScript
- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react) `^5.0.0` - Plugin de React para Vite
- [`eslint`](https://eslint.org/) `^9.33.0` - Linter de código

## 📚 Recursos útiles

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Guía del proyecto](GUIA-REACT-TYPESCRIPT-TAILWIND-VITE.md)

---

Comienza editando [`src/App.tsx`](src/App.tsx) para ver los cambios en tiempo real.