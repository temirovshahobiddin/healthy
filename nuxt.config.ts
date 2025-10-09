import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  debug: false,
  telemetry: false,
  dev: !!parseInt(process.env.APP_DEV!),

  srcDir: "src/",
  compatibilityDate: "2024-04-03",
  spaLoadingTemplate: "./app/ui/app-loading.html",

  dir: {
    layouts: "./app/layouts",
    plugins: "./app/plugins",
    modules: "./app/modules",
    middleware: "./app/middleware",
    public: "../public"
  },
  devtools: { enabled: true },

  components: [
    { path: "./app/ui", pathPrefix: false },
    { path: "./shared/ui", pathPrefix: false }
  ],

  imports: {
    dirs: ["./shared/composables", "./shared/lib", "./shared/constants", "./shared/stores"]
  },

  devServer: {
    port: parseInt(process.env.APP_PORT || "8000", 10),
    host: process.env.APP_HOST || "0.0.0.0"
  },

  runtimeConfig: {
    public: {
      isDev: !!parseInt(process.env.APP_DEV!),
      apiUrl: process.env.APP_API_URL,
      recaptchaKey: process.env.APP_RECAPTCHA_KEY
    }
  },

  routeRules: {
    "/gateway/**": { proxy: process.env.APP_API_URL }
  },

  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" }
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "vue-sonner/nuxt",
    "@zadigetvoltaire/nuxt-gtm"
  ],
  icon: {
    customCollections: [
      {
        prefix: "h-icon",
        dir: "./src/shared/assets/icons"
      }
    ]
  },

  googleFonts: {
    families: {
      Onest: [300, 400, 500, 600, 700, 800, 900],
      Manrope: [300, 400, 500, 600, 700, 800, 900]
    }
  },

  css: [
    "vue3-carousel/carousel.css",
    "floating-vue/dist/style.css",
    "@vuepic/vue-datepicker/dist/main.css",
    "~/shared/assets/css/index.css"
  ],

  i18n: {
    lazy: true,
    defaultLocale: "ru",
    restructureDir: false,
    langDir: "app/locales/",
    compilation: {
      strictMessage: false,
      escapeHtml: false
    },
    bundle: {
      optimizeTranslationDirective: false
    },
    locales: [
      {
        code: "uz",
        language: "uz",
        file: "uz.json",
        name: "O'zbekcha"
      },
      {
        code: "ru",
        language: "ru",
        file: "ru.json",
        name: "Русский"
      }
    ]
  },
  gtm: {
    id: "GTM-WQF86B85",
    debug: true
  },
  vite: {
    plugins: [svgLoader({ defaultImport: "component" })]
  }
})
