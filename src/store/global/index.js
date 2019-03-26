/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import actions from './actions';
import mutations from './mutations';

const state = {
  userInfo: {},
};

const global = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default global;
