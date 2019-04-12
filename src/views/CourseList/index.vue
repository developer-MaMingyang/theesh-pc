/*
* author: mamingyang@baofeng.com
* date: 2018/10/25
* usage: 课程列表页
*/

<template>
  <div class="wrap-box mt42 df">
    <SideBar/>
    <CourseContainer />
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  components: {
    SideBar: () => import('../../components/SideBar'),
    CourseContainer: () => import('./modules/CourseContainer'),
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
