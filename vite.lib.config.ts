import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/lib/index.ts'),
      name: 'OrbitUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `orbit-ui.${format === 'es' ? 'js' : 'cjs'}`,
      cssFileName: 'orbit-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
})
