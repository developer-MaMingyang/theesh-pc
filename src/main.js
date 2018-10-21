import Vue from 'vue'
import Theesh from './Theesh'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#pc',
  router,
  components: { Theesh },
  template: '<Theesh/>'
})
