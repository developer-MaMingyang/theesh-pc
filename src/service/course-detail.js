/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

import { $post } from '../utils/request';

export const getCourseDetail = async ({ courseId, el }) => $post({
  url: '/lesson/findByCourseId',
  data: { courseId },
  el,
});
