// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
    pageTransition: false,
    layoutTransition: false
  },
  routeRules: {
    '/': { prerender: true }
  },
  modules: ['@pinia/nuxt', "@nuxtjs/tailwindcss"],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ]
})