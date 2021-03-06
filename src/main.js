import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import HighchartsVue from 'highcharts-vue'
import { Datetime } from 'vue-datetime'

import 'vue-datetime/dist/vue-datetime.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Datetime)
Vue.use(HighchartsVue)
Vue.use(BootstrapVue)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
}).$mount('#app')
