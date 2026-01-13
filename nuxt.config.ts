// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.scss'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'JSC Dropshipping - Professional One-Stop Dropshipping Service Platform, offering direct sales, China sourcing, custom packaging, order fulfillment and comprehensive services' },
        { name: 'baidu-site-verification', content: 'codeva-VuCfJ7vOoN' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ],
      title: 'JSC Dropshipping'
    }
  }
})
