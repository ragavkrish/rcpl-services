import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

function resolveBase(): string {
  // 1. Explicit environment override if specified (e.g. VITE_BASE_PATH=/rcpl-services/ for subpath preview)
  if (process.env.VITE_BASE_PATH) {
    const raw = process.env.VITE_BASE_PATH.trim();
    if (raw === '/' || raw === '') return '/';
    return raw.startsWith('/') ? (raw.endsWith('/') ? raw : `${raw}/`) : `/${raw}/`;
  }

  // 2. Custom domain production deployment (rcplservices.com) on GitHub Pages or Cloudflare Pages
  // Assets must ALWAYS be loaded from the root domain ('/')
  return '/';
}

export default defineConfig(() => {
  return {
    base: resolveBase(),
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
