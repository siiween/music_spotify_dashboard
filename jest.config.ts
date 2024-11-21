import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // o 'node' dependiendo de tu entorno de pruebas
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Asegúrate de que se cargue el archivo setup
  preset: 'ts-jest',

  // Añadimos transformaciones específicas para módulos .ts, .tsx y .js


  // Mapeo para tratar módulos que usen exportación ESM
  moduleNameMapper: {
    "^jose": require.resolve("jose"),
    "^@panva/hkdf": require.resolve("@panva/hkdf"),
    "^preact-render-to-string": require.resolve("preact-render-to-string"),
    "^preact": require.resolve("preact"),
    "^uuid": require.resolve("uuid"),
    "^@/(.*)$": "<rootDir>/src/$1",  // O <rootDir>/app/$1 si usas app en lugar de src

  },


  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      useESM: true,  // Indica que queremos usar ESM en ts-jest
    },
  },
}

export default createJestConfig(config)
