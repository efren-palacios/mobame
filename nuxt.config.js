const pkg = require('./package')
const base = 'gh-pages' === process.env.NODE_ENV ? '/mobame/' : '/'

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/tailwind.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  serverMiddleware: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/moment'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxyHeaders: false,
    credentials: false
    // See https://github.com/nuxt-community/axios-module#options
  },

  server: {
    port: 8000,
    host: '172.31.82.183'
  },

  /*
  ** Build configuration
  */
  build: {
    publicPath: '/mobame',
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  router: {
    base
  }
}
