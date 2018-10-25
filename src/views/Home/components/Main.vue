/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
<div class="course-wrap">
  <div class="item-wrap">
    <TitleBar title="热门课程"/>
    <transition name="fadeRight" tag="div">
      <el-card class="item bgcWhi mt20" shadow="hover" key="0" v-show="show0">
        <div class="clearfix">
          <div class="fl"></div>
          <div class="fl"></div>
        </div>
      </el-card>
    </transition>
    <transition name="fadeRight" tag="div">
      <el-card class="item bgcWhi mt20" shadow="hover" key="0" v-show="show1">
        <div class="clearfix">
          <div class="fl"></div>
          <div class="fl"></div>
        </div>
      </el-card>
    </transition>
    <transition name="fadeRight" tag="div">
      <el-card class="item bgcWhi mt20" shadow="hover" key="0" v-show="show2">
        <div class="clearfix">
          <div class="fl"></div>
          <div class="fl"></div>
        </div>
      </el-card>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    TitleBar: () => import('../../../components/TitleBar/index')
  },
  data () {
    return {
      show0: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    initAnimate () {
      setTimeout(() => {
        this.show0 = true
        setTimeout(() => {
          this.show1 = true
          setTimeout(() => {
            this.show2 = true
          }, 500)
        }, 500)
      }, 500)
    }
  },
  created () {
    this.initAnimate()
  }
}
</script>

<style lang="scss" scoped>
@import "../styles";
</style>
