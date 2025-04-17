import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProd ? '/porfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths({
      projects: ["tsconfig.app.json"],
    }),
  ],
});