const path = require('path')
const webpack = require('webpack')

module.exports = {
  /**
   * Headers of the page
   */
  head: {
    title: 'Nuxt Boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt Playground' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /**
   * Customize the progress bar color
   */
  loading: { color: '#000' },
  /**
   * Custom plugins
   */
  plugins: [
    //
  ],
  /**
   * Build configuration (webpack extension)
   */
  build: {
    babel: {
      presets: ['vue-app'],
      plugins: [
        [
          'component',
          [
            {
              libraryName: 'element-ui',
              styleLibraryName: 'theme-chalk'
            }
          ]
        ]
      ],
      comments: false
    },

    postcss: [
      require('autoprefixer')(),
      require('postcss-clean')()
    ],

    plugins: [
      new webpack.NormalModuleReplacementPlugin(
        /element-ui[/\\]lib[/\\]locale[/\\]lang[/\\]zh-CN/,
        'element-ui/lib/locale/lang/en'
      )
    ],

    extend (config, { isDev, isClient }) {
      // SASS loader pipeline for Vue single file components
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({includePaths: [path.resolve(__dirname), 'node_modules']})

      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    dir: 'dist'
  }
}
