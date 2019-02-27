/*
* author: mamingyang@baofeng.com
* date: 2019/2/27
*/

import sidebar from './sidebar';
import home from './home';
import couseList from './couseList';
import detail from './detail';

const course = {
  namespaced: true,
  modules: {
    sidebar,
    home,
    couseList,
    detail,
  },
};

export default course;
