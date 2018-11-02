/*
* author: mamingyang@baofeng.com
* date: 2018/10/24
* usage: 登录浮窗
*/

<template>
  <el-dialog
    custom-class="w500"
    center
    title="登陆知视"
    :visible.sync="isShow"
    @close="$emit('closeModal', 'login')"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form class="w300 center" ref="login" :model="login" :rules="rules" label-position="left">
      <el-form-item label="手机号" prop="phone" label-width="60px">
        <el-input maxlength="13" autocomplete="off" v-model="login.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd" label-width="60px">
        <el-input maxlength="18" type="password" autocomplete="off" v-model="login.pwd"></el-input>
      </el-form-item>
      <el-button class="db btn-login" type="primary" round @click="validateLogin">马上登陆</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import { Message } from 'element-ui';
import { checkPhone, checkPwd } from '../../utils/rules';
import { doLogin } from '../../service/public';

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
        pwd: [{ validator: checkPwd, trigger: 'blur' }],
      },
      login: {
        phone: '',
        pwd: '',
      },
    };
  },
  methods: {
    validateLogin() {
      this.$refs.login.validate((valid) => {
        if (valid) {
          this.goLogin();
        }
      });
    },
    async goLogin() {
      // this.$store.dispatch('setLoginStatus', {
      //   phone: this.login.phone,
      // }).then(() => {
      //   Message.success('登录成功');
      //   this.$emit('closeModal', 'login');
      //   this.$refs.login.resetFields();
      // });
      // return;
      const data = await doLogin({
        phone: this.login.phone,
        password: this.login.pwd,
      });
      if (data) {
        this.$store.dispatch('setLoginStatus', {
          phone: this.login.phone,
        }).then(() => {
          Message.success('登录成功');
          this.$emit('closeModal', 'login');
          this.$refs.login.resetFields();
        });
      }
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
