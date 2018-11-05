/*
* author: mamingyang@baofeng.com
* date: 2018/11/5
*/

import { $post } from '../utils/request';

export const getPlayAuth = async ({ videoId, el }) => $post({
  url: '/lesson/findAuthByVideoId',
  data: { videoId },
  el,
});
