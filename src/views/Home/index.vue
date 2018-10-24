/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
*/

<template>
  <div class="wrap-box mt42 clearfix">
    <Sidebar/>
    <Main/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    Sidebar: () => import('./components/SideBar'),
    Main: () => import('./components/Main')
  },
  data () {
    return {}
  },
  methods: {},
  created () {

  }
}
</script>

<style lang="scss" scoped>

</style>
