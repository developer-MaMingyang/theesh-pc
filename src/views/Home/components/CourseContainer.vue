/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="course-wrap">
    <div class="item-wrap">
      <TitleBar title="热门课程"/>
      <el-card class="item bgcWhi mt20" shadow="hover" v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'CourseDetail', params: {id: item.id}}">
          <div class="clearfix">
            <div class="fl img-wrap">
              <img :src="item.photoUrl" alt="加载失败">
            </div>
            <div class="fl item-content">
              <div class="title" v-text="item.title"></div>
              <div class="summary" v-text="item.description"></div>
            </div>
          </div>
        </router-link>
      </el-card>
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
      list: [{
        photoUrl: '//www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super',
        id: 1,
        title: '我是标题',
        description: '我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。我是一段比较长的内容。',
      }, {
        photoUrl: '//www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super',
        id: 1,
        title: '我是标题',
        description: '我是内容',
      }],
    };
  },
  methods: {
    async getData() {
      const { data } = await getCourses();
      this.list = data;
    },
  },
  mounted() {
    // this.getData();
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles";
</style>
