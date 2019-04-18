/*
* author: mamingyang@baofeng.com
* date: 2019/4/18
*/

<template>
<div></div>
</template>

<script>
export default {
  name: 'Download',
  data: () => ({

  }),
  created() {
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      alert('敬请期待！');
      return;
    }
    window.location.href = 'https://www.theesh.com/theesh-android.apk';
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>
