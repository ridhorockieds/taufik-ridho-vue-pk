import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import swal from 'sweetalert'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  swal,
  render: h => h(App)
}).$mount('#app')
