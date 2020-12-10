import Vue from 'vue'
import App from './App.vue'
import Vicon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import router from './router'

Vue.config.productionTip = false
Vue.component('v-icon', Vicon)

new Vue({
  router,
  linkExactActiveClass: 'active',
  render: h => h(App),
}).$mount('#app')
