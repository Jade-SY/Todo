<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  background: linear-gradient(-225deg, #e3fdf5 0%, #ffe6fa 100%);
  color: #444;
}
p {
  margin: 0 !important;
}
</style>
