/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 封装阿里视频播放组件
*/

<template>
<div class="player-wrap">
  <Player :source="source" width="1200px" height="675px" />
</div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    source: String,
  },
  components: {
    Player: () => import('vue-aliplayer'),
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
