/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 课程详情页
*/

<template>
  <div class="wrap-box">
    <div class="desc clearfix">
      <div class="fl img-wrap">
        <img :src="detail.coursePhoto" alt="加载失败">
      </div>
      <div class="fl">
        <h3 v-text="detail.courseName"></h3>
        <p v-text="detail.courseDesc"></p>
      </div>
    </div>
    <div class="detail">
      <h3>课程列表</h3>
      <ul class="clearfix">
        <li class="cp fl" v-for="(item, index) in detail.lessons" :key="index">
          <router-link :to="{name: 'Play', query: {title: encodeURIComponent(item.lessonName), cover: item.coverUrl, videoId: item.videoId}}">
            {{`${index+1}、${item.lessonName}`}}
          </router-link>
        </li>
        <li v-if="loaded && !detail.lessons.length">
          <p class="mt65 tc">暂无数据</p>
        </li>
      </ul>
    </div>
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
      loaded: false,
      detail: {
        lessons: [],
      },
      video: {
        title: '',
        coverImg: '',
        videoId: '',
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
      this.loaded = true;
      this.detail = data;
    },
    openVideo(item) {
      const { lessonName, coverUrl, videoId } = item;
      this.video.title = lessonName;
      this.video.coverImg = coverUrl;
      this.video.videoId = videoId;
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
