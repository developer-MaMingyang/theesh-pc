/*
* author: mamingyang@baofeng.com
* date: 2018/10/25
* usage: 注册浮窗
*/

<template>
  <el-dialog
    custom-class="w500"
    center
    title="注册知视"
    :visible.sync="isShow"
    @close="$emit('update:show', false)"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <el-form
      class="w300 center" ref="register" :model="register" :rules="rules" label-position="left">
      <el-form-item label="手机号" prop="phone" label-width="60px">
        <el-input maxlength="13" autocomplete="off" v-model="register.phone"
                  @keypress.enter.native="validateRegister"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="msgVc" label-width="60px">
        <el-input maxlength="8" autocomplete="off" v-model="register.msgVc"
                  @keypress.enter.native="validateRegister"></el-input>
        <VerifyCode class="vc" :disableBtn="true" :np="['phone']" :phone="register.phone" type="register"/>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="60px">
        <el-input maxlength="18" type="password" autocomplete="off" v-model="register.password"
                  @keypress.enter.native="validateRegister"></el-input>
      </el-form-item>
      <el-button class="db btn-register" type="primary" round @click="validateRegister">马上注册</el-button>
    </el-form>
  </el-dialog>
</template>

<script>
import { Message } from 'element-ui';
import { checkPhone, checkMsgVc, checkPwd } from '../../utils/rules';
import { doRegister } from '../../service/public';

export default {
  name: 'Register',
  props: ['show'],
  components: {
    VerifyCode: () => import('../VerifyCode'),
  },
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
        msgVc: [{ validator: checkMsgVc, trigger: 'blur' }],
        password: [{ validator: checkPwd, trigger: 'blur' }],
      },
      register: {
        phone: '',
        msgVc: '',
        password: '',
      },
      imgVc: '',
    };
  },
  methods: {
    validateRegister() {
      this.$refs.register.validate((valid) => {
        if (valid) {
          this.goRegister();
        }
      });
    },
    async goRegister() {
      const { phone, msgVc, password } = this.register;
      const res = await doRegister({
        phone,
        password,
        code: msgVc,
      }, { el: '.btn-register' });
      if (res) {
        this.$store.dispatch('setLoginStatus', { phone }).then(() => {
          Message.success(res.message);
          this.$emit('update:show', false);
          this.$refs.register.resetFields();
        });
      }
    },
    refreshImgVc() {
      this.imgVc = `https://8.baofeng.com/mimosa/client/captcha/getimgvc?t=${new Date().getTime()}`;
    },
  },
  created() {
    this.refreshImgVc();
  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
