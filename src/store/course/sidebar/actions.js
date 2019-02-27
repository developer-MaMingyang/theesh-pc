/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { getSidebarList } from '../../../service/sidebar';

const actions = {
  async getSidebarList({ commit }, { el }) {
    const { data } = await getSidebarList({ el });
    commit('setSidebarList', data);
  },
};

export default actions;
