/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 封装阿里视频播放组件
*/

<template>
  <div id="player-wrap"></div>
</template>

<script>
import { getPlayAuth } from '../../service/play';

export default {
  name: 'VideoPlayer',
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
      await require('https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css'); // eslint-disable-line
      await require('https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js'); // eslint-disable-line
      if (!this.videoId) {
        this.getAuth();
        return;
      }
      const { data } = await getPlayAuth({
        videoId: this.videoId,
        el: '#player-wrap',
      });
      if (data) {
        try {
          new Aliplayer({ // eslint-disable-line
            id: 'player-wrap',
            width: '1200px',
            height: '675px',
            autoplay: false,
            vid: this.videoId,
            playauth: data,
            cover: this.cover,
          });
        } catch (e) {
          console.log(e);
        }
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
