/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="course-wrap">
    <div class="item-wrap">
      <TitleBar>热门课程</TitleBar>
      <div class="list">
        <el-card class="item bgcWhi mb20" shadow="hover" v-for="(item, index) in list" :key="index">
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
        <div v-if="loaded && !list.length">
          <p class="mt65 tc">暂无数据</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourses } from '../../../service/home';

export default {
  name: 'CourseContainer',
  components: {
    TitleBar: () => import('../../../components/TitleBar/index'),
  },
  data() {
    return {
      loaded: false,
      list: [],
    };
  },
  methods: {
    async getData() {
      const { data } = await getCourses({
        el: '.list',
      });
      this.loaded = true;
      this.list = data;
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
