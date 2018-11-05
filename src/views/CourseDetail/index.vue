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
        <li class="cp" v-for="(item, index) in detail.lessons" :key="index">
          <router-link :to="{name: 'Play', query: {title: item.lessonName, cover: item.coverUrl, videoId: item.videoId}}">
            {{`${index+1}、${item.lessonName}`}}
          </router-link>
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
      detail: {
        lessons: [],
      },
      video: {
        title: '',
        show: false,
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
      this.detail = data;
    },
    openVideo(item) {
      const { lessonName, coverUrl, videoId } = item;
      this.video.title = lessonName;
      this.video.coverImg = coverUrl;
      this.video.videoId = videoId;
      this.video.show = true;
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
