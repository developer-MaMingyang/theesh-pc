/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { getCourseList } from '../../../service/course-list';

const actions = {
  async getCourseList({ commit }, { id, el }) {
    const { data } = await getCourseList({ id, el });
    commit('setCourseList', data);
  },
};

export default actions;
