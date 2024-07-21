import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl'

import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

export default defineConfig(() => ({
  build: {
    outDir: './build',
    rollupOptions: {
      external: './src',
    },
  },
  plugins: [react(), viteBasicSslPlugin()],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, './src'),
      '@components': resolve(projectRootDir, './src/components'),
      '@constants': resolve(projectRootDir, './src/constants'),
      '@utils': resolve(projectRootDir, './src/utils'),
    },
  },
}))
