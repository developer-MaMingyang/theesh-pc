/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { login, register, logout } from '../../service/public';

const actions = {
  async doLogin({ dispatch }, { phone, password, el }) {
    await login({ phone, password }, { el });
    dispatch('global/setLoginStatus', { phone }, { root: true });
  },
  async doRegister({ dispatch }, { phone, password, code, el }) {
    const { message } = await register({ phone, password, code }, { el });
    dispatch('global/setLoginStatus', { phone }, { root: true });
    return { message };
  },
  async doLogout({ dispatch }) {
    await logout({ el: '.account-wrap' });
    dispatch('global/setLoginStatus', {}, { root: true });
  },
};

export default actions;
