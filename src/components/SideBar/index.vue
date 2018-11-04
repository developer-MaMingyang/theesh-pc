/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局侧边栏
*/

<template>
  <div class="sidebar">
    <el-card class="container bgcWhi p20 mb20" shadow="hover" v-for="(item, index) in list" :key="index">
      <div class="fz16 mb10">
        <img class="vab" :src="item.catPhoto">
        <span>{{item.chnName}}</span>
      </div>
      <div class="link-wrap">
        <router-link class="little-link br2 mr5" v-for="(link, idx) in item.categoryList" :key="idx" :to="{name: 'CourseList', params: {id: link.id, title: link.chnName}}">
          {{link.chnName}}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getSidebarList } from '../../service/sidebar';

export default {
  name: 'SideBar',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getData() {
      const { data } = await getSidebarList();
      this.list = data;
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
