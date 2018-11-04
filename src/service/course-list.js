/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 课程列表页接口信息
*/

import { $post } from '../utils/request';

export const getCourseList = async ({ id }) => $post({
  url: '/course/findByCategoryId',
  data: { catId: id },
});
