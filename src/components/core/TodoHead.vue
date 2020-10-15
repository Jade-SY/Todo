<template>
  <header>
    <h1>My Todo List</h1>
    <p class="date">{{ currtime }}</p>
  </header>
</template>

<script>
export default {
  name: 'CoreHead',
  data() {
    return {
      currtime: '',
    };
  },
  beforeMount() {
    let now = new Date();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let weekList = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
    let week = weekList[now.getDay()];
    this.currtime = month + '/' + date + '/' + week;
  },
};
</script>

<style lang="scss" scoped></style>
