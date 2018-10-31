/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
*/

<template>
  <VideoPlayer source="//player.alicdn.com/video/aliyunmedia.mp4"/>
</template>

<script>
export default {
  name: 'Play',
  components: {
    VideoPlayer: () => import('../../components/VideoPlayer'),
  },
  data() {
    return {

    };
  },
  methods: {

  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
