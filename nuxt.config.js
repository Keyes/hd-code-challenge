import path from 'path'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'github-checkup',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'https://www.homeday.de/assets/images/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        href:
          'https://www.homeday.de/assets/images/icons/icon_hdfavicon_64px.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/font-awesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-route-meta',
  ],

  styleResources: {
    scss: ['@/assets/scss/includes.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias[
        '../node_modules/@your-window/ui-kit/node_modules/@juliankern'
      ] = path.join(__dirname, 'node_modules/@juliankern')

      const allRules = config.module.rules
      const scssRule = allRules.find((rule) =>
        rule.test.toString().includes('scss')
      )

      scssRule.oneOf.forEach((one) => {
        const sassLoader = one.use.find((_) => _.loader.includes('sass-loader'))

        sassLoader.options.implementation = require('node-sass')
      })
    },
    loaders: {
      scss: {
        sassOptions: {
          includePaths: ['/node_modules/@juliankern'],
        },
      },
    },
  },
}
