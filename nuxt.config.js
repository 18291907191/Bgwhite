const pkg = require('./package')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '狗尾草的博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '狗尾草的前端博客' },
      /*优先使用 IE 最新版本和 Chrome  */
      { name: 'renderer', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      /* iOS 设备 */
      { name: 'author', content: '叶文祥,justyeh@163.com' },
      { name: 'apple-mobile-web-app-title', content: '狗尾草的前端博客' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#263238' },
      /*fullscreen and app mode*/
      { name: 'screen-orientation', content: 'portrait' },
      { name: 'x5-orientation', content: 'portrait' },
      { name: 'full-screen', content: 'yes' },
      { name: 'x5-fullscreen', content: 'true' },
      { name: 'browsermode', content: 'application' },
      { name: 'x5-page-mode', content: 'app' },  
      /*webkit*/
      { name: 'theme-color', content: '#263238' },          
    ],
    link: [
      // 网站icon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // 页面顶部loading效果
  loading: {
    color: '#04acf7',
    height: '4px',
    failedColor: 'red',
    background: 'white'
  },
  /**
   * Transition of the page
   */
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  /**
   * router of the project
   */
  router: { 
  },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/base.less',
    '~/assets/css/skin.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui',    ssr: true},
    { src: '@/plugins/axios', ssr: true },
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vender: ['axios'],
    extend (config, { isDev, isClient }) {
    }
  }
}
