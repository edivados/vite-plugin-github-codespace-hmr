import codespaceHMR from '@edivados/vite-plugin-github-codespace-hmr';
import { getRandomPort } from 'get-port-please';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    hmr: {
      port: await getRandomPort()
    }
  },
  plugins: [
    codespaceHMR(),
    solidPlugin()
  ],
});
