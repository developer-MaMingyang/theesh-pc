/*
* author: mamingyang@baofeng.com
* date: 2018/11/1
* usage: 公用接口请求
*/

import { $post } from '../utils/request';

export const getUserInfo = (ignore = 'all') => $post({
  url: '/user/checkLogin',
  ignore,
});

export const login = (data, { el }) => $post({
  url: '/user/login',
  data,
  el,
});

export const logout = ({ el }) => $post({
  url: '/user/logout',
  el,
});

export const register = (data, { el }) => $post({
  url: '/user/register',
  data,
  el,
});

export const sendVc = (data) => $post({
  url: '/user/sendMessage',
  data,
  ignore: 'all',
});
