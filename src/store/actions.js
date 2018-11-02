/*
* author: mamingyang@baofeng.com
* date: 2018/10/25
*/

const actions = {
  setLoginStatus({ commit }, payload) {
    commit('setLoginStatus', payload);
  },
  doLogout({ commit }) {
    commit('setLoginStatus', {});
  },
};

export default actions;
