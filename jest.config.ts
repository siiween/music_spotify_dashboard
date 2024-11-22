import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^jose": require.resolve("jose"),
    "^@panva/hkdf": require.resolve("@panva/hkdf"),
    "^preact-render-to-string": require.resolve("preact-render-to-string"),
    "^preact": require.resolve("preact"),
    "^uuid": require.resolve("uuid"),
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};

export default createJestConfig(config);
