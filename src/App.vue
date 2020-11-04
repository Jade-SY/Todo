<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
#app{
  height: 100vh;
  background:linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color:#fafafa; 
}
</style>
