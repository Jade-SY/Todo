<template>
  <div class="home">
    <core-head></core-head>
    <core-view></core-view>
    <core-footer></core-footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CoreHead: () => import('@/components/core/TodoHead.vue'),
    CoreView: () => import('@/components/core/View.vue'),
    CoreFooter: () => import('@/components/core/TodoFooter.vue'),
  },
};
</script>
<style lang="scss" scoped>
.home{
  position: relative;
    width:480px;
    height: 100%;
    padding:20px;
  min-width: 350px;
  margin:0 auto;
  overflow: hidden;
}
</style>