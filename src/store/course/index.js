/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import sidebar from './sidebar';
import home from './home';
import courseList from './courseList';
import detail from './detail';

const course = {
  namespaced: true,
  modules: {
    sidebar,
    home,
    courseList,
    detail,
  },
};

export default course;
