/*
* author: mamingyang@baofeng.com
* date: 2019/3/20
*/

import { $post } from '../utils/request';

export const getCourseList = courseId => $post({
  url: '/lesson/findByCourseId',
  data: { courseId },
});

export const getPlayAuth = ({ videoId, el }) => $post({
  url: '/lesson/findAuthByVideoId',
  data: { videoId },
  el,
});
