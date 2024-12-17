import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'raw-loader',
          transform(src, id) {
            if (id.endsWith('.txt') || id.endsWith('.tsx')) {
              return {
                code: `export default ${JSON.stringify(src)}`,
                map: null
              }
            }
          }
        }
      ]
    }
  }
});
