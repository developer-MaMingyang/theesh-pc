/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 首页
*/

<template>
  <div>
    <div class="wrap-box df pr">
      <div class="f1">
        <div class="sidebar-wrapper">
          <SideBar />
        </div>
      </div>
      <div class="f3">
        <Banner />
        <CourseContainer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    SideBar: () => import('../../components/SideBar'),
    Banner: () => import('./modules/Banner'),
    CourseContainer: () => import('./modules/CourseContainer'),
  },
  data() {
    return {};
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
  .sidebar-wrapper {
    position: fixed;
    top: 132px;
  }
</style>
