import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteBasicSslPlugin from '@vitejs/plugin-basic-ssl'
import vitePluginWASM from 'vite-plugin-wasm'

import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'

const projectRootDir = resolve(__dirname)

export default defineConfig(() => ({
  build: {
    outDir: './docs',
    commonjsOptions: { transformMixedEsModules: true },
  },
  base: './',
  plugins: [react(), viteBasicSslPlugin(), vitePluginWASM()],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(projectRootDir, './src'),
      '@components': resolve(projectRootDir, './src/components'),
      '@constants': resolve(projectRootDir, './src/constants'),
      '@utils': resolve(projectRootDir, './src/utils'),
      '@api': resolve(projectRootDir, './src/api'),
    },
  },
}))
