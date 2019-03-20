/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home'),
    },
    {
      path: '/course/list',
      name: 'CourseList',
      component: () => import('@/views/CourseList'),
    },
    {
      path: '/course/detail/:id',
      name: 'CourseDetail',
      component: () => import('@/views/CourseDetail'),
    },
    {
      path: '/play',
      name: 'Play',
      component: () => import('@/views/Play'),
    },
  ],
});

export default router;
