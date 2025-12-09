import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'
import { Vuetify3Resolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = { ...import.meta.env, ...loadEnv(mode, '.') }

  console.log(env)

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
      port: Number.parseInt(env.VITE_PORT || '3000'),
      host: env.VITE_HOST ? (env.VITE_HOST === 'true' ? true : env.VITE_HOST) : undefined,
      allowedHosts: env.VITE_ALLOWED_HOSTS ? (env.VITE_ALLOWED_HOSTS === 'true' ? true : env.VITE_ALLOWED_HOSTS.split(',')) : undefined
    }
  })
}
