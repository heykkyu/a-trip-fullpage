import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/vendors/scrolloverflow'

Vue.config.productionTip = false
Vue.use(VueFullPage)

Vue.create = ((options) => {
  return new Vue(options)
})({
  el: '#app',
  render: h => h(App)
})
