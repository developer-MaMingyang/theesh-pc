/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
<div class="fl">
  <div class="course-wrap">
    <TitleBar title="热门课程"/>
    <el-card class="course bgcWhi mt20" shadow="hover">
      <div class="clearfix">
        <div class="fl"></div>
        <div class="fl"></div>
      </div>
    </el-card>
  </div>
</div>
</template>

<script>
import TitleBar from './TitleBar'

export default {
  name: 'Main',
  components: {
    TitleBar
  },
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
@import "../styles";
</style>
