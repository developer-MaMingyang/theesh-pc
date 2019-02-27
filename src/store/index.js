/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/
import Vue from 'vue';
import vuex from 'vuex';
import global from './global';
import account from './account';
import course from './course';

Vue.use(vuex);

const store = new vuex.Store({
  modules: {
    global,
    account,
    course,
  },
});

export default store;
