import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast'

Vue.config.productionTip = false

Vue.use(toast)

Vue.prototype.$bus = new Vue()

FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/home/lazyLoad.gif')
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
