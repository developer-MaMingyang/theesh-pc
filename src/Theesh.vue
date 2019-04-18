<template>
  <el-container direction="vertical">
    <Header v-if="hfVisible" />
    <div :style="{minHeight}">
      <router-view/>
    </div>
    <Footer v-if="hfVisible" />
  </el-container>
</template>

<script>
export default {
  name: 'Theesh',
  components: {
    Header: () => import('./components/Header'),
    Footer: () => import('./components/Footer'),
  },
  watch: {
    $route: function a(nv) {
      this.checkHfVisible(nv);
    },
  },
  data() {
    return {
      minHeight: '0',
      hfVisible: false,
    };
  },
  methods: {
    listenResize() {
      window.onresize = () => {
        this.setMinHeight();
      };
    },
    setMinHeight() {
      this.minHeight = `${document.documentElement.clientHeight - 280}px`;
    },
    checkHfVisible(route) {
      if (route.query.source === 'app') {
        this.hfVisible = false;
      } else if (route.query.hfVisible) {
        this.hfVisible = false;
      } else if (route.path === '/download') {
        this.hfVisible = false;
      } else {
        this.hfVisible = true;
      }
    },
  },
  mounted() {
    this.checkHfVisible(this.$route);
    this.setMinHeight();
    this.listenResize();
  },
};
</script>

<style lang="scss">
  @import "reset";
</style>
