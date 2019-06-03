import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'
import {Workbox} from 'workbox-window'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
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
  css: [
    '~/assets/style/app.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '~/plugins/sw.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-fontawesome',

    ['nuxt-fontawesome', {
      component: 'fa', 
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        
        {
         set:'@fortawesome/free-brands-svg-icons',
         icons: ['fab']
        } 
      ]
    }],
  ],

  axios: {
    // proxyHeaders: false
  },

  manifest: {
    name: 'My Awesome NewsApp',
    crossorigin: 'use-credentials',
    // icons: ['love.png']
  },
  
  // workbox to enable service worker
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://newsapi.org/v2/top-headlines?country=ng&apiKey=af4129710bf14609b57b33cc43239681',
        strategyOptions: {
          cacheName: 'NewsApp',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 300
          }
        }
      }
    ]
 },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }

}
