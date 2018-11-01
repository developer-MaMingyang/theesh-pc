/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局侧边栏
*/

<template>
  <div class="sidebar">
    <el-card class="container bgcWhi p20 mb20" shadow="hover" v-for="(item, index) in list" :key="index">
      <div class="fz16 mb10">
        <img class="vab" :src="item.icon">
        <span>{{item.chnName}}</span>
      </div>
      <div class="link-wrap">
        <router-link class="little-link br2 mr5" v-for="(link, idx) in item.categoryList" :key="idx" to="/">
          {{link.chnName}}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import iconMusic from '../../assets/img/index/icon-music.png';
import iconSport from '../../assets/img/index/icon-sports.png';
import { getSidebarList } from '../../service/sidebar';

export default {
  name: 'SideBar',
  data() {
    return {
      list: [{
        id: 0,
        level: 1,
        chnName: '体育',
        icon: iconSport,
        categoryList: [
          {
            id: 0,
            level: 2,
            chnName: '足球',
          }, {
            id: 0,
            level: 2,
            chnName: '篮球',
          }],
      }, {
        id: 1,
        level: 1,
        chnName: '音乐',
        icon: iconMusic,
        categoryList: [
          {
            id: 0,
            level: 2,
            chnName: '钢琴',
          }, {
            id: 0,
            level: 2,
            chnName: '吉他',
          }],
      }],
    };
  },
  methods: {
    async getData() {
      const { data } = await getSidebarList();
      this.list = data;
    },
  },
  mounted() {
    // this.getData();
  },
};
</script>

<style lang="scss" scoped>
@import "./styles";
</style>
