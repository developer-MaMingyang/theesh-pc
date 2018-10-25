/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
<div class="clearfix">
  <p class="fl mr10 mt3 icon-before"></p>
  <p class="fl fb fz20" v-text="title"></p>
</div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: ['title'],
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
  @import "../../views/Home/styles";

</style>
