<template>
  <el-container direction="vertical">
    <Header/>
    <router-view/>
    <Footer/>
  </el-container>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'Theesh',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "./public";
</style>
