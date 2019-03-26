/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import actions from './actions';
import mutations from './mutations';

const state = {
  detail: {
    lessons: [],
  },
};

const detail = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default detail;
