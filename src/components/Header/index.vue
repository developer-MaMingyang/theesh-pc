/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局header
*/

<template>
  <el-header class="bgcWhi miw1290" height="90px">
    <div class="wrap-box clearfix">
      <div class="fl logo-wrap">
        <router-link :to="{name: 'Home'}">
          <img :src="img.logo">
        </router-link>
      </div>
      <nav class="fl nav lh70">
        <router-link class="cBla" :to="{name: 'Home'}">首页</router-link>
        <router-link class="cBla" :to="{name: 'Home'}">教程</router-link>
      </nav>
      <div class="fr fz16 lh70 account-wrap" v-if="userInfo.phone">
        <span>您好，{{userInfo.phone}}</span>
        <span>|</span>
        <span class="m5 cp" @click="logout">安全退出</span>
      </div>
      <div class="fr fz16 lh70 account-wrap" v-else>
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
import { mapState } from 'vuex';
import { Message } from 'element-ui';
import logo from '../../assets/img/public/logo-top.png';
import { doLogout } from '../../service/public';

export default {
  name: 'Header',
  components: {
    Login: () => import('../Login'),
    Register: () => import('../Register'),
  },
  computed: {
    ...mapState(['userInfo']),
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
    async logout() {
      doLogout({
        el: '.account-wrap',
      }).then(() => {
        this.$store.dispatch('doLogout');
        Message.success('您已安全退出登录');
      });
    },
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
