/*
* author: mamingyang@baofeng.com
* date: 2019/4/15
*/

import { $post } from '../utils/request';

export const contactTeacher = ({ phone, name, tId }) => $post({
  url: '/user/sign',
  data: { phone, name, tId },
  el: '.contact-form',
});
