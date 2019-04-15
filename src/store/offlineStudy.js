/*
* author: mamingyang@baofeng.com
* date: 2019/4/15
*/

import { contactTeacher } from '../service/offline-study';

const offlineStudy = {
  namespaced: true,
  state: {

  },
  actions: {
    async contactTeacher(_, { payload }) {
      const res = await contactTeacher(payload);
      return res;
    },
  },
};

export default offlineStudy;
