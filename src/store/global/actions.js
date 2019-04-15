/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { sendVc, getUserInfo, logout } from '../../service/public';

const actions = {
  setLoginStatus({ commit }, payload) {
    commit('setLoginStatus', payload);
  },
  async sendVc(_, { phone, type }) {
    const { code, message } = await sendVc({ phone, type });
    if (code) {
      throw message;
    }
  },
  async getUserInfo({ commit }) {
    const { data = {} } = await getUserInfo();
    commit('setLoginStatus', data);
  },
  async doLogout({ dispatch }) {
    await logout({ el: '.account-wrap' });
    dispatch('setLoginStatus', {});
  },
};

export default actions;
