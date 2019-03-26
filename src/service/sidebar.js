/*
* author: mamingyang@baofeng.com
* date: 2018/11/1
* usage: 侧边栏接口信息
*/

import { $post } from '../utils/request';

export const getSidebarList = async ({ el }) => $post({
  url: '/category/findAll',
  el,
});
