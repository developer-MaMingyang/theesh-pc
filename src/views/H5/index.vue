/*
* author: mamingyang@baofeng.com
* date: 2019/3/20
*/

<template>
  <div class="h5-container" :class="{ noMaxWidth: source==='app' }">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'H5',
  computed: {
    ...mapState('h5/global', ['source']),
  },
  watch: {
    '$route.query.source': function a(source) {
      if (source) {
        this.$store.dispatch('h5/global/setSource', { source });
      }
    },
  },
  mounted() {
    if (this.$route.query.source) {
      this.$store.dispatch('h5/global/setSource', { source: this.$route.query.source });
    }
  },
};
</script>

<style lang="scss" scoped>
  .h5-container {
    margin: 0 auto;

    &:not(.noMaxWidth) {
      max-width: 750px;
    }
  }
</style>
