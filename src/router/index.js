import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
    },
    {
      path: '/course',
      component: () => import('@/views/Course'),
    },
  ],
});

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

export default router;
