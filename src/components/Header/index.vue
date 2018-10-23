/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <el-header class="bgcWhi clearfix" height="70px">
    <div class="wrap-box">
      <div class="fl logo-wrap">
        <router-link to="/">
          <img :src="img.logo">
        </router-link>
      </div>
      <nav class="fl nav lh70">
        <router-link class="cBla" to="/">教程</router-link>
        <router-link class="cBla" to="/">知识库</router-link>
      </nav>
      <div class="fr fz16 lh70 account-wrap">
        <router-link class="cBla m5" to="/">登录</router-link>
        <span>|</span>
        <router-link class="cBla m5" to="/">注册</router-link>
      </div>
    </div>
  </el-header>
</template>

<script>
import logo from '../../assets/img/public/logo-top.png'

export default {
  name: 'Header',
  data () {
    return {
      img: {
        logo
      }
    }
  },
  methods: {},
  created () {

  }
}
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
