/*
* author: mamingyang@baofeng.com
* date: 2018/10/24
* usage: 首页接口信息
*/

import { $post } from '../utils/request';

export const getCourses = async ({ el }) => $post({
  url: '/course/recommend/query',
  el,
});
