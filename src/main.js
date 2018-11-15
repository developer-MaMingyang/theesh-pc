import Vue from 'vue';
import 'normalize.css';
import 'babel-polyfill';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store';
import router from './router';

Vue.use(ElementUI);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
  window.scrollTo(0, 0);
});

/* eslint-disable no-new */
new Vue({
  el: '#treesh',
  store,
  router,
  components: {
    Theesh: () => import('./Theesh'),
  },
  template: '<Theesh/>',
});
