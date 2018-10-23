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
import Sidebar from './components/Sidebar'
import Main from './components/Main'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Main
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
