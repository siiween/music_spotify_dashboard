# Music Spotify Dashboard 🎵

[![Deploy on Vercel](https://img.shields.io/badge/deploy-Vercel-000?style=flat-square&logo=vercel)](https://music-spotify-dashboard.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/github-repo-181717?style=flat-square&logo=github)](https://github.com/siiween/music_spotify_dashboard)

**Music Spotify Dashboard** es una aplicación web basada en la **API de Spotify** que te permite explorar artistas, álbumes, y recomendaciones, con análisis detallados y visualizaciones gráficas. Con un diseño moderno y modular, la aplicación asegura una experiencia de usuario fluida e intuitiva.

---

## 🌟 Funcionalidades

### 📋 Página Principal (/home)

- **Lista de Artistas**: Más de mil artistas fijados, con opción de cargar más a través del botón _"Load More"_.
- **Top Playlists**: Lista dinámica que carga automáticamente nuevas playlists gracias a un **custom hook de Infinite Scroll**.

### 🔍 Página de Artista (/artist)

- **Información del Artista**: Panel lateral (minimizable) con datos detallados del artista, con preferencias guardadas en `localStorage` gracias al customHook de sidebar.
- **Visualizaciones**: Gráficos de canciones y álbumes del artista generados con **Chart.js**.
- **Listado de Álbumes**: Explora todos los álbumes disponibles del artista.

### 💡 Recomendaciones (/recommendations)

- Obtén álbumes recomendados por Spotify con **paginación** integrada para navegar fácilmente.

### 🌓 Soporte de Temas (Claro y Oscuro)

- Implementado con **next-themes** y gestionado por un contexto global.
- Cambia entre temas con un switcher ubicado en el sidebar.

### 🗂 Sidebar Personalizable

- Sidebar que se puede expandir o compactar, con preferencias guardadas en `localStorage` gracias al customHook de sidebar.

### 🧩 Playground (/playground)

- Página de desarrollo para probar componentes del **UI Kit**.
- Incluye pruebas funcionales del cambio de temas.

---

## 🛠️ Tecnologías y Herramientas

### Frameworks y Librerías

- **Next.js**: Manejo avanzado de rutas, server actions y optimización del frontend.
- **Tailwind CSS**: Desarrollo del UI Kit, proporcionando un diseño moderno y responsivo.
- **Atomic Design**: Arquitectura modular para componentes reutilizables.
- **Chart.js**: Visualización interactiva de datos.

### Lógica y Datos

- **Spotify API**: Datos detallados sobre artistas, álbumes, listas y recomendaciones.
- **Axios**: Configuración centralizada para simplificar las llamadas a la API.
- **Server Actions**: Todas las llamadas API están centralizadas en el archivo `actions/spotifyActions`, optimizadas para evitar duplicación de lógica.

### Tipado

- **Types**: Todos los tipos de objetos de la API de Spotify están definidos en la carpeta `/types`.

### Testing

- **React Testing Library**: Tests unitarios para la mayoría de los componentes, no se pudo hacer mas por falta de tiempo.
- **Cypress**: Pruebas E2E. Aunque no se logró implementar login en Spotify ya que no hay documentación y cypress-social-logins no tiene soporte para spotify, se probaron funcionalidades clave como el cambio de tema en `/playground`.

---

## 📂 Arquitectura del Proyecto

La aplicación sigue el enfoque **Atomic Design**, donde los componentes están organizados en niveles jerárquicos:

1. **Átomos**: Componentes básicos e independientes, como botones o inputs. (Carpeta: `components/atoms`)
2. **Moléculas**: Combinaciones de átomos que forman elementos funcionales, como formularios o listas. (Carpeta: `components/molecules`)
3. **Organismos**: Conjuntos más complejos de moléculas que forman secciones completas de la interfaz. (Carpeta: `components/organisms`)

**Carpetas principales**:

src/  
├── actions/ # Llamadas centralizadas a la API de Spotify y lógica asociada  
├── app/ # Rutas principales y sus correspondientes páginas  
│   ├── api/ # Configuración y manejo de la API (endpoints)  
│   ├── artist/ # Página de detalle de artista  
│   ├── home/ # Página principal (inicio)  
│   ├── playground/ # Página de pruebas para componentes  
│   └── recommendations/ # Página de recomendaciones de álbumes  
├── components/ # Componentes organizados según Atomic Design  
│   ├── atoms/ # Componentes básicos e independientes (botones, inputs, etc.)  
│   ├── molecules/ # Conjuntos de átomos que forman elementos funcionales (formularios, tarjetas, etc.)  
│   └── organisms/ # Conjuntos de moléculas que forman secciones completas de la UI (headers, sidebars, etc.)  
├── context/ # Gestión del estado global y contextos (e.g., temas claro/oscuro)  
├── hooks/ # Custom hooks reutilizables (e.g., manejo de sidebar, Infinite Scroll)  
├── lib/ # Configuración de librerías y utilidades auxiliares  
├── types/ # Definición de tipos TypeScript para los datos de la API de Spotify  
├── utils/ # Funciones utilitarias generales (e.g., helpers de formato o validaciones)  
├── middleware.ts # Configuración de middleware para manejo de rutas o autenticación  
└── ...  



## ⚙️ Instalación y Configuración

Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu máquina local.

### 1️⃣ Instalar dependencias
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior). Luego, instala las dependencias del proyecto ejecutando:
```bash
npm install
```

### 2️⃣ Configurar variables de entorno
Crea un archivo .env.local en la raíz del proyecto con las siguientes variables de entorno:
```bash
JWT_SECRET=tu_secret
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
NEXTAUTH_SECRET=tu_secret
NEXTAUTH_URL=http://localhost:3000
```

### 3️⃣ Ejecutar la aplicación
Inicia el servidor de desarrollo con el siguiente comando:
```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.


### 4️⃣ Build para producción
Para crear una versión optimizada para producción, ejecuta:
```bash
npm run build
```
Luego, ejecuta el servidor de producción:
```bash
npm start
```

## 🧪 Pruebas y Testing
Este proyecto incluye pruebas tanto unitarias como End-to-End (E2E) para garantizar la calidad del código.

### 1️⃣ Pruebas Unitarias

Las pruebas unitarias están desarrolladas con React Testing Library y verifican el comportamiento de los componentes individuales.

Ejecutar las pruebas unitarias:
```bash
npm run test
```

Ejecutar pruebas en modo "watch":
Para monitorear los cambios en tiempo real mientras desarrollas:
```bash
npm run test:watch
```

### 2️⃣ Pruebas End-to-End (E2E)

Las pruebas E2E están desarrolladas con Cypress y cubren el flujo completo de la aplicación.
Configuración previa para pruebas E2E:

Antes de ejecutar las pruebas E2E, asegúrate de que el servidor de desarrollo esté ejecutándose:

```bash
npm run dev
```

Abrir el Test Runner de Cypress:

Ejecuta el siguiente comando para abrir el panel interactivo de Cypress:

```bash
npx cypress open
```
Selecciona el test que deseas ejecutar desde el panel.

Ejecutar pruebas E2E en modo headless:
Para ejecutar las pruebas sin una interfaz gráfica:
```bash
npx cypress run
```

Nota: Actualmente, las pruebas E2E no incluyen el flujo de login en Spotify debido a limitaciones técnicas. Sin embargo, se ha testeado funcionalidad clave en /playground.



## 🚀 Flujo de Trabajo Recomendado

Sigue estos pasos para trabajar en el proyecto:

1. Configura las variables de entorno en .env.local.
2. Usa npm run dev para iniciar el servidor de desarrollo.
3. Durante el desarrollo:
    - Ejecuta npm run test para validar los componentes con pruebas unitarias.
    - Usa npx cypress open para validar flujos completos de la aplicación.
4. Antes de desplegar:
    - Ejecuta npm run build para preparar el proyecto para producción.
    - Usa npm start para servir la aplicación en el entorno de producción.