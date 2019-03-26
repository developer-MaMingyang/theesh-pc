/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <div class="wrap-box">
    <h3 v-text="decodeURIComponent(title)"></h3>
    <VideoPlayer v-if="cover && videoId && show" :cover="cover" :videoId="videoId"/>
  </div>
</template>

<script>
export default {
  name: 'Play',
  components: {
    VideoPlayer: () => import('../../components/VideoPlayer'),
  },
  data() {
    return {
      show: false,
      title: '',
      cover: '',
      videoId: '',
    };
  },
  methods: {
    getData() {
      const { title, cover, videoId } = this.$route.query;
      this.title = title;
      this.cover = cover;
      this.videoId = videoId;
    },
  },
  mounted() {
    this.getData();
    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
