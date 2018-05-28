// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/materialize.css'
import './assets/js/materialize.js'
import './assets/fonts/Flama Bold.otf'
import VueYouTubeEmbed from 'vue-youtube-embed'
require('./assets/logo.png')

Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
