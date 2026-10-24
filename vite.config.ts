import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import {defineConfig} from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

function resolveBase(): string {
  // 1. Explicit override if specified
  if (process.env.VITE_BASE_PATH) {
    const raw = process.env.VITE_BASE_PATH.trim();
    if (raw === '/' || raw === '') return '/';
    return raw.startsWith('/') ? (raw.endsWith('/') ? raw : `${raw}/`) : `/${raw}/`;
  }

  // 2. Cloudflare Pages build environment
  if (process.env.CF_PAGES === '1') {
    return '/';
  }

  // 3. GitHub Actions workflow for GitHub Pages
  if (process.env.GITHUB_ACTIONS === 'true' && process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    if (repo && !repo.endsWith('.github.io')) {
      return `/${repo}/`;
    }
  }

  // 4. Default for local development and root domains
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
