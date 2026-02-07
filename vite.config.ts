import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html;
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (fileName.endsWith('.css') && chunk.type === 'asset') {
            const css = typeof chunk.source === 'string'
              ? chunk.source
              : new TextDecoder().decode(chunk.source);
            const linkRegex = new RegExp(
              `<link[^>]+href="[^"]*${fileName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^>]*>`,
            );
            html = html.replace(linkRegex, `<style>${css}</style>`);
            delete bundle[fileName];
          }
        }
        return html;
      },
    },
  };
}

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  plugins: [react(), tailwindcss(), inlineCssPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
