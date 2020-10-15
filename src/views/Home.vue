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
