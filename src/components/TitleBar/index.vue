/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 首页，产品列表页标题栏
*/

<template>
<div class="clearfix">
  <p class="fl mr10 mt3 icon-before"></p>
  <p class="fl fb fz20">
    <slot></slot>
  </p>
</div>
</template>

<script>
export default {
  name: 'TitleBar',
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {

  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
