<template>
  <header>
    <h1>My Todo List</h1>
    <p class="date">{{ currtime }}</p>
  </header>
</template>

<script>
import getDate from "../../assets/js/getDate.js"
export default {
  name: 'CoreHead',
  data() {
    return {
      currtime: '',
    };
  },
  created() {
    this.currtime = getDate().month + '/' + getDate().date + '/' + getDate().week
  },
};
</script>

<style lang="scss" scoped>
header{
  width:50%;
}
h1{
  font-weight: normal;
  font-size: 1rem;
}
p{
  font-size: 3rem;
}
</style>
