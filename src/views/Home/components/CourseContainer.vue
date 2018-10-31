/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="course-wrap">
    <div class="item-wrap">
      <TitleBar title="热门课程"/>
      <el-card class="item bgcWhi mt20" shadow="hover">
        <router-link :to="{name: 'CourseDetail', params: {id: 'bbb'}}">
          <div class="clearfix">
            <div class="fl img-wrap"></div>
            <div class="fl"></div>
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseContainer',
  components: {
    TitleBar: () => import('../../../components/TitleBar/index'),
  },
  data() {
    return {};
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
  @import "../styles";
</style>
