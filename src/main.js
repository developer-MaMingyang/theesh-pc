import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Theesh from './Theesh'
import router from './router'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#treesh',
  router,
  components: { Theesh },
  template: '<Theesh/>'
})
