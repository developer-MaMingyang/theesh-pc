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
      path: '/offline-study',
      name: 'OfflineStudy',
      component: () => import('@/views/OfflineStudy'),
    },
    {
      path: '/introduce-us',
      name: 'Introduce',
      component: () => import('@/views/Introduce'),
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
    {
      path: '/download',
      name: 'Download',
      component: () => import('@/views/Download'),
    },
    {
      path: '/h5',
      name: 'H5',
      component: () => import('@/views/H5'),
      children: [{
        path: '/h5/course',
        name: 'H5Course',
        component: () => import('@/views/H5/Course'),
        children: [{
          path: '/h5/course/list/:courseId',
          name: 'H5CourseList',
          component: () => import('@/views/H5/Course/List'),
        }]
      }],
    },
    {
      path: '*',
      redirect: { name: 'Home' },
    },
  ],
});

export default router;
