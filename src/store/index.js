/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/
import Vue from 'vue';
import vuex from 'vuex';
import global from './global';
import account from './account';
import course from './course';
import h5 from './h5';

Vue.use(vuex);

const store = new vuex.Store({
  modules: {
    global,
    account,
    course,
    h5,
  },
});

export default store;
