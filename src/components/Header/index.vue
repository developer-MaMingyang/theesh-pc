/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局header
*/

<template>
  <el-header class="bgcWhi clearfix" height="70px">
    <div class="wrap-box">
      <div class="fl logo-wrap">
        <router-link :to="{name: 'Home'}">
          <img :src="img.logo">
        </router-link>
      </div>
      <nav class="fl nav lh70">
        <router-link class="cBla" :to="{name: 'CourseList'}">教程</router-link>
        <router-link class="cBla" :to="{name: 'Home'}">知识库</router-link>
      </nav>
      <div class="fr fz16 lh70 account-wrap">
        <span class="m5 cp" @click="dialog.login=true">登录</span>
        <span>|</span>
        <span class="m5 cp" @click="dialog.register=true">注册</span>
      </div>
    </div>
    <Login :show="dialog.login" @closeModal="closeModal"/>
    <Register :show="dialog.register" @closeModal="closeModal"/>
  </el-header>
</template>

<script>
import logo from '../../assets/img/public/logo-top.png';

export default {
  name: 'Header',
  components: {
    Login: () => import('../Login'),
    Register: () => import('../Register'),
  },
  data() {
    return {
      dialog: {
        login: false,
        register: false,
      },
      img: {
        logo,
      },
    };
  },
  methods: {
    closeModal(name) {
      this.dialog[name] = false;
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
