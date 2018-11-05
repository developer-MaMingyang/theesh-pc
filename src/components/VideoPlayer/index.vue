/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 封装阿里视频播放组件
*/

<template>
  <div class="player-wrap">
    <Player width="1290px" height="725px" :vid="videoId" :cover="cover"
            :playauth="playAuth" useH5Prism />
  </div>
</template>

<script>
import { getPlayAuth } from '../../service/play';

export default {
  name: 'VideoPlayer',
  components: {
    Player: () => import('vue-aliplayer'),
  },
  props: {
    title: String,
    cover: String,
    videoId: String,
  },
  data() {
    return {
      playAuth: '',
    };
  },
  methods: {
    async getAuth() {
      const { data } = await getPlayAuth({
        videoId: this.videoId,
        el: '.player-wrap',
      });
      if (data) {
        this.playAuth = data;
      }
    },
  },
  mounted() {
    this.getAuth();
  },
};
</script>

<style lang="scss" scoped>
  @import "./styles";
</style>
