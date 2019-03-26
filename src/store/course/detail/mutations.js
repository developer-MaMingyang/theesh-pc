/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

const mutations = {
  setDetail(state, payload) {
    if (!payload) {
      state.detail = {
        lessons: [],
      };
      return;
    }
    state.detail = payload;
  },
};

export default mutations;
