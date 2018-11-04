/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="course-wrap">
    <div class="item-wrap">
      <TitleBar :title="$route.params.title"/>
      <el-card class="item bgcWhi mt20" shadow="hover" v-for="(item, index) in list" :key="index">
        <router-link :to="{name: 'CourseDetail', params: {id: item.id}}">
          <div class="clearfix">
            <div class="fl img-wrap">
              <img :src="item.coursePhoto" alt="加载失败">
            </div>
            <div class="fl item-content">
              <div class="title" v-text="item.courseName"></div>
              <div class="summary" v-text="item.courseDesc"></div>
            </div>
          </div>
        </router-link>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getCourseList } from '../../../service/course-list';

export default {
  name: 'CourseContainer',
  components: {
    TitleBar: () => import('../../../components/TitleBar/index'),
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      const { id } = this.$route.params;
      if (!id) {
        this.$router.push('/');
      }
      const { data } = getCourseList(id);
      this.list = data;
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  @import "../styles";
</style>
