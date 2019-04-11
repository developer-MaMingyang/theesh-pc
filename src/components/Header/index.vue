/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局header
*/

<template>
  <el-header class="bgcWhi miw1200" height="90px">
    <div class="wrap-box clearfix">
      <div class="fl logo-wrap">
        <router-link :to="{name: 'Home'}">
          <img :src="img.logo">
        </router-link>
      </div>
      <nav class="fl nav lh70">
        <router-link class="cBla" :to="{name: 'Home'}">首页</router-link>
        <!--<router-link class="cBla" :to="{name: 'Home'}">教程</router-link>-->
      </nav>
      <div class="fr">
        <div class="fz16 lh70 account-wrap fr" v-if="userInfo.phone">
          <span>您好，{{userInfo.phone}}</span>
          <span>|</span>
          <span class="m5 cp" @click="logout">安全退出</span>
        </div>
        <div class="fz16 lh70 account-wrap fr" v-else>
          <span class="m5 cp" @click="dialog.login=true">登录</span>
          <span>|</span>
          <span class="m5 cp" @click="dialog.register=true">注册</span>
        </div>
        <div class="fz16 lh70 fr">
          <el-popover
            placement="bottom"
            trigger="hover">
            <canvas ref="canvas"></canvas>
            <span class="m5 cp" slot="reference">下载APP</span>
          </el-popover>
          <span>|</span>
        </div>
      </div>
    </div>
    <Login :show.sync="dialog.login"/>
    <Register :show.sync="dialog.register"/>
  </el-header>
</template>

<script>
import QRCode from 'qrcode';
import { mapState } from 'vuex';
import { Message } from 'element-ui';
import logo from '../../assets/img/public/logo-top.png';

export default {
  name: 'Header',
  components: {
    QRCode,
    Login: () => import('../Login'),
    Register: () => import('../Register'),
  },
  computed: {
    ...mapState('global', ['userInfo']),
  },
  data() {
    return {
      aaa: true,
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
    async logout() {
      this.$store.dispatch('account/doLogout').then(() => {
        Message.success('您已安全退出登录');
      });
    },
    initQRCode() {
      QRCode.toCanvas(this.$refs.canvas, 'https://www.theesh.com/theesh-android.apk');
    },
  },
  mounted() {
    this.initQRCode();
  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
