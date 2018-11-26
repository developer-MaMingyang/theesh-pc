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
import './aliplayer-flash.min';

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
      if (!this.videoId) {
        setTimeout(() => {
          this.getAuth();
        }, 500);
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
