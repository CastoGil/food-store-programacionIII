import { defineConfig } from "vite"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  appType: "mpa",

  build: {
    rollupOptions: {
      input: {
        main: resolve(
          __dirname,
          "index.html"
        ),

        login: resolve(
          __dirname,
          "src/pages/auth/login/login.html"
        ),

        registro: resolve(
          __dirname,
          "src/pages/auth/registro/registro.html"
        ),

        admin: resolve(
          __dirname,
          "src/pages/admin/admin.html"
        ),

        client: resolve(
          __dirname,
          "src/pages/client/client.html"
        ),

        clientHome: resolve(
          __dirname,
          "src/pages/client/home/home.html"
        ),

        clientCart: resolve(
          __dirname,
          "src/pages/client/cart/cart.html"
        )
      }
    }
  },

  base: "./"
})