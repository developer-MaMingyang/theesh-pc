/*
* author: mamingyang@baofeng.com
* date: 2018/10/31
* usage: 封装阿里视频播放组件
*/

<template>
<el-dialog class="player-wrap" :visible.sync="show" :title="title">
  <Player :source="source" width="800px" height="450px" :cover="cover" />
</el-dialog>
</template>

<script>
export default {
  name: 'VideoPlayer',
  props: {
    title: String,
    show: Boolean,
    source: String,
    cover: String,
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
