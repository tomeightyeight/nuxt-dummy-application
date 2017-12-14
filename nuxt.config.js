const path = require('path')

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
   *
   */
  plugins: [
    //
  ],
  /**
   * Build configuration (webpack extension)
   */
  build: {
    /**
     * Babel
     */
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

    extend(config, ctx) {
      // SASS loader pipeline for Vue single file components
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader');
      vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({includePaths: [path.resolve(__dirname), 'node_modules']});

      // Run ESLint on save
      if (ctx.dev && ctx.isClient) {
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
    dir: 'public'
  }
}
