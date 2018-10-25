/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="sidebar">
    <el-card class="container bgcWhi mb20" shadow="hover" v-for="(item, index) in list" :key="index">
      <div class="fz16 mb10">
        <img class="vab" :src="item.icon">
        <span>{{item.name}}</span>
      </div>
      <div class="link-wrap">
        <router-link class="little-link br2 mr5" v-for="(link, idx) in item.categoryList" :key="idx" to="/">
          {{link.name}}
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import iconMusic from '../../assets/img/index/icon-music.png'
import iconSport from '../../assets/img/index/icon-sports.png'

export default {
  name: 'SideBar',
  data () {
    return {
      list: [{
        'id': 0,
        'level': 1,
        'name': '体育',
        'icon': iconSport,
        'parentId': 0,
        'categoryList': [
          {
            'id': 0,
            'level': 2,
            'name': '足球',
            'parentId': 0,
            'categoryList': null
          }, {
            'id': 0,
            'level': 2,
            'name': '篮球',
            'parentId': 0,
            'categoryList': null
          }]
      }, {
        'id': 0,
        'level': 1,
        'name': '音乐',
        'icon': iconMusic,
        'parentId': 0,
        'categoryList': [
          {
            'id': 0,
            'level': 2,
            'name': '钢琴',
            'parentId': 0,
            'categoryList': null
          }, {
            'id': 0,
            'level': 2,
            'name': '吉他',
            'parentId': 0,
            'categoryList': null
          }]
      }]
    }
  },
  methods: {},
  created () {

  }
}
</script>

<style lang="scss" scoped>
@import "../../views/Home/styles";
</style>
