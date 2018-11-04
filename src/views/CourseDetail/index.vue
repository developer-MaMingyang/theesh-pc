/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 课程详情页
*/

<template>
  <div>
    <div>
      <h3>课程列表</h3>
      <ul>
        <li class="cp" v-for="(item, index) in detail.lessons" :key="index" @click="openVideo" v-text="item.lessonName"></li>
      </ul>
    </div>
    <VideoPlayer :title="video.title" :show="video.show" :cover="video.coverImg" />
  </div>
</template>

<script>
import { getCourseDetail } from '../../service/course-detail';

export default {
  name: 'CourseDetail',
  components: {
    VideoPlayer: () => import('../../components/VideoPlayer'),
  },
  data() {
    return {
      detail: {
        lessons: [],
      },
      video: {
        title: '',
        show: false,
        coverImg: '',
      },
    };
  },
  methods: {
    async getData() {
      const { id } = this.$route.params;
      if (!id) {
        window.location.href = document.referrer;
        return;
      }
      const { data } = await getCourseDetail({
        courseId: id,
      });
      this.detail = data;
    },
    openVideo() {

    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
