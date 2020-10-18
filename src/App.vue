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
  background:linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color:#fafafa;
  padding:20px;
  min-width: 350px;
  max-width: 480px;
  margin:0 auto;
}

</style>