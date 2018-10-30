/*
* author: mamingyang@baofeng.com
* date: 2018/10/25
*/

<template>
  <div class="wrap-box mt42 df">
    <SideBar/>
    <div class="wrapper">
      <TitleBar title="产品教程"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Course',
  components: {
    SideBar: () => import('../../components/SideBar'),
    TitleBar: () => import('../../components/TitleBar'),
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
  @import url(./style.scss);
</style>
