/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局侧边栏
*/

<template>
  <div class="sidebar">
    <div class="item-wrap">
      <el-card class="container bgcWhi p20 mb20" shadow="hover" v-for="(item, index) in list" :key="index">
        <div class="fz16 mb10">
          <img :src="item.catPhoto">
          <span>{{item.chnName}}</span>
        </div>
        <div class="link-wrap">
          <router-link class="little-link br2 mr5" :class="[{active: link.id === $route.query.id}]"
                       v-for="(link, idx) in item.categoryList" :key="idx"
                       :to="{name: 'CourseList', query: {id: link.id, title: encodeURIComponent(link.chnName)}}">
            {{link.chnName}}
          </router-link>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SideBar',
  computed: mapState('course/sidebar', {
    list: ({ sidebarList }) => sidebarList,
  }),
  methods: {
    getData() {
      this.$store.dispatch('course/sidebar/getSidebarList', { el: '.item-wrap' });
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
