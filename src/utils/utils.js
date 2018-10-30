/*eslint-disable*/
/*
* author: mamingyang@baofeng.com
* date: 2018/10/24
* usage: 公用函数
*/

// 将对象转换成带参数的形式 &a=1&b=2
export const buildQueryUrl = (url, param) => {
  let x = url;
  let ba = true;
  if (x.indexOf('?') !== -1) {
    if (x.indexOf('?') === url.length - 1) {
      ba = false;
    } else {
      ba = true;
    }
  } else {
    x += '?';
    ba = false;
  }
  let builder = '';
  for (const i in param) {
    const p = `&${i}=`;
    if (param[i]) {
      const v = param[i];
      if (Object.prototype.toString.call(v) === '[object Array]') {
        for (let j = 0; j < v.length; j++) {
          builder = builder + p + encodeURIComponent(v[j]);
        }
      } else if (typeof (v) === 'object' && Object.prototype.toString.call(v).toLowerCase() === '[object object]' && !v.length) {
        builder = builder + p + encodeURIComponent(JSON.stringify(v));
      } else {
        builder = builder + p + encodeURIComponent(v);
      }
    }
  }
  if (!ba) {
    builder = builder.substring(1);
  }
  return x + builder;
};

// 获取浏览器URL参数
export const parseUrlParam = (url) => {
  const urlParam = {};
  if (url.indexOf('?') < 0) {
    return urlParam;
  }
  const params = url.substring(url.indexOf('?') + 1).split('&');
  for (let i = 0; i < params.length; i++) {
    const k = params[i].substring(0, params[i].indexOf('='));
    let v = params[i].substring(params[i].indexOf('=') + 1);
    if (v.indexOf('#') > 0) {
      v = v.substring(0, v.indexOf('#'));
    }
    try {
      urlParam[k] = decodeURIComponent(v);
    } catch (error) {
      urlParam[k] = v;
    }
    // urlParam[k] = decodeURIComponent(v);
  }
  return urlParam;
};

// 获取浏览器URL参数的值
export const getQueryString = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
};
