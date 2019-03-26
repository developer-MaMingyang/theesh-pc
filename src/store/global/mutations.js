/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

const mutations = {
  setLoginStatus(state, payload) {
    state.userInfo = payload;
  },
};

export default mutations;
