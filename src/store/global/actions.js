/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { sendVc } from '../../service/public';

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
};

export default actions;
