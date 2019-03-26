/*
* author: mamingyang@baofeng.com
* date: 2018/11/1
* usage: 公用接口请求
*/

import { $post } from '../utils/request';

export const login = async (data, { el }) => $post({
  url: '/user/login',
  data,
  el,
});

export const logout = async ({ el }) => $post({
  url: '/user/logout',
  el,
});

export const register = async (data, { el }) => $post({
  url: '/user/register',
  data,
  el,
});

export const sendVc = async (data) => $post({
  url: '/user/sendMessage',
  data,
  ignore: 'all',
});
