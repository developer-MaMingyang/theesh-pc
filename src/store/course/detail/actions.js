/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import { getCourseDetail } from '../../../service/course-detail';

const actions = {
  async getDetail({ commit }, { courseId, el }) {
    const { data } = await getCourseDetail({ courseId, el });
    commit('setDetail', data);
  },
};

export default actions;
