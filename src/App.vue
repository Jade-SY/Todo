<template>
  <v-app>
    <transition name="component-fade" mode="out-in"> 
      <router-view></router-view>
    </transition> 
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
  min-width: 400px;
  height: 100vh;
}
p {
  margin: 0 !important;
}
.logo {
  font-size: 16px;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.7s ease;
}
.component-fade-enter, 
.component-fade-leave-to {
    opacity: 0;
}
</style>
