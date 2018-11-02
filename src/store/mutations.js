/*
* author: mamingyang@baofeng.com
* date: 2018/10/25
*/

const mutations = {
  setLoginStatus(state, payload) {
    state.userInfo = payload;
  },
};

export default mutations;
