import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    base: './',
    plugins: [
      vue(),
      Components({
        dirs: undefined,
        dts: false,
        resolvers: [Vuetify3Resolver()]
      })
      // checker({
      //   vueTsc: true,
      //   eslint: {
      //     lintCommand: scripts['lint:js']
      //   },
      //   stylelint: {
      //     lintCommand: scripts['lint:css']
      //   }
      // })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: parseInt(process.env.VITE_PORT || '3000'),
      host: process.env.VITE_HOST === 'true',
      allowedHosts: true
    }
  })
}
