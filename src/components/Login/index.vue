/*
* author: mamingyang@baofeng.com
* date: 2018/10/24
* usage: 登录浮窗
*/

<template>
  <el-dialog
    custom-class="w500"
    center
    title="登录知视"
    :visible="show"
    @close="$emit('update:show', false)"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form class="w300 center" ref="login" :model="login" :rules="rules" label-position="left">
      <el-form-item label="手机号" prop="phone" label-width="60px">
        <el-input maxlength="13" autocomplete="off" v-model="login.phone"
                  @keypress.enter.native="validateLogin"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="60px">
        <el-input maxlength="18" type="password" autocomplete="off" v-model="login.password"
                  @keypress.enter.native="validateLogin"></el-input>
      </el-form-item>
      <el-button class="db btn-login" type="primary" round @click="validateLogin">马上登录</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import { Message } from 'element-ui';
import { checkPhone, checkPwd } from '../../utils/rules';

export default {
  name: 'Login',
  props: ['show'],
  watch: {
    show(nv) {
      this.isShow = nv;
    },
  },
  data() {
    return {
      isShow: false,
      rules: {
        phone: [{ validator: checkPhone, trigger: 'blur' }],
        password: [{ validator: checkPwd, trigger: 'blur' }],
      },
      login: {
        phone: '',
        password: '',
      },
    };
  },
  methods: {
    validateLogin() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          const { phone, password } = this.login;
          this.$store.dispatch('account/doLogin', { phone, password, el: '.btn-login' }).then(() => {
            Message.success('登录成功');
            this.$emit('update:show', false);
            this.$refs.login.resetFields();
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
