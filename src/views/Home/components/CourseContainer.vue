/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="course-wrap">
    <div class="item-wrap">
      <TitleBar>热门课程</TitleBar>
      <div class="list">
        <el-card class="item bgcWhi mb20" shadow="hover" v-for="(item, index) in homeCourses" :key="index">
          <router-link :to="{name: 'CourseDetail', params: {id: item.id}}">
            <div class="clearfix">
              <div class="df fl img-wrap">
                <img :src="item.coursePhoto" alt="加载失败">
              </div>
              <div class="fl item-content">
                <div class="title" v-text="item.courseName"></div>
                <div class="summary" v-text="item.courseDesc"></div>
              </div>
            </div>
          </router-link>
        </el-card>
        <div v-if="loaded && !homeCourses.length">
          <p class="mt65 tc">暂无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CourseContainer',
  components: {
    TitleBar: () => import('../../../components/TitleBar/index'),
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: mapState('course/home', ['homeCourses']),
  methods: {
    getData() {
      this.$store.dispatch('course/home/getCourses', { el: '.list' }).then(() => {
        this.loaded = true;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles";
</style>
