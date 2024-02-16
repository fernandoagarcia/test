import './styles/app.scss'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Open Sans:300,400,600,800']
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
