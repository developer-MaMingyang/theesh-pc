/*
* author: mamingyang@baofeng.com
* date: 2018/10/24
*/

// 校验手机号
export const checkPhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  }
  if (!(/^1[34578]\d{9}$/.test(value))) {
    callback(new Error('请输入正确的手机号'))
    return false
  }
  callback()
}

// 校验密码：必填且6-16位非空白字符
export const checkPwd = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  }
  if (/\s/.test(value) || !(/^\S{6,16}$/.test(value))) {
    callback(new Error('密码应为6-16位字母，数字或英文符号组成'))
    return false
  }
  callback()
}

// 校验用户名
export const checkUserName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入用户名'))
  }
  callback()
}
