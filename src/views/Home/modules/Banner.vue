/*
* author: mamingyang@baofeng.com
* date: 2019/4/24
*/

<template>
  <el-carousel height="370px" arrow="never">
    <el-carousel-item>
      <div class="default-banner"></div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Banner',
  data: () => ({}),
  created() {

  },
  methods: {},
};
</script>

<style lang="scss" scoped>
  .default-banner {
    height: 370px;
    background: url("../../../assets/img/index/default-banner.png") no-repeat center;
    background-size: cover;
  }
</style>
