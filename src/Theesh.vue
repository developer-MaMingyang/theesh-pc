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
    '$route.query.source': function a(nv) {
      if (nv !== 'app') {
        this.hfVisible = true;
      }
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
      this.minHeight = `${document.documentElement.clientHeight - 300}px`;
    },
  },
  mounted() {
    if (this.$route.query.source !== 'app') {
      this.hfVisible = true;
    }
    this.setMinHeight();
    this.listenResize();
  },
};
</script>

<style lang="scss">
  @import "reset";
</style>
