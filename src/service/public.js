/*
* author: mamingyang@baofeng.com
* date: 2018/11/1
* usage: 公用接口请求
*/

import { $post } from '../utils/request';

export const doLogin = ({ el, data }) => $post({
  url: '/user/login',
  data,
  el,
});

export const doRegister = ({ el, data }) => $post({
  url: '/user/save',
  data,
  el,
});

export const checkVc = ({ el, data }) => $post({
  url: '/user/sendMessage',
  data,
  el,
});
