import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util';
module.exports = {
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

// Polyfill para TextEncoder y TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as unknown as { new(label?: string, options?: TextDecoderOptions): TextDecoder };