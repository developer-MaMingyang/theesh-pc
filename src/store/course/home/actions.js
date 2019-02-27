/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { getCourses } from '../../../service/home';

const actions = {
  async getCourses({ commit }, { el }) {
    const { data } = await getCourses({ el });
    commit('setCourses', data);
  },
};

export default actions;
