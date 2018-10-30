/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <el-footer class="bgcWhi" height="230px">
    <div class="wrap-box clearfix">
      <div class="fl mt50 lh43">
        <div>
          <p class="fz20">
            <router-link class="cBla" to="/">服务条款</router-link>
          </p>
        </div>
        <div>
          <p class="fz16">
            <router-link class="cBla" to="/">售后服务</router-link>
          </p>
        </div>
        <div>
          <p class="fz12">京ICP备15062124号 Copyright© 2016-2021</p>
        </div>
      </div>
      <div class="fr mt65">
        <img :src="img.qrCode">
      </div>
    </div>
  </el-footer>
</template>

<script>
import qrCode from '../../assets/img/public/qr-code1.png';

export default {
  name: 'Footer',
  data() {
    return {
      img: {
        qrCode,
      },
    };
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>

</style>
