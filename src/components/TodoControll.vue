<template>
  <div class="todo-controll-wrap">
    <v-row
      class="todo-footer-extension"
      justify="center"
      align="center"
      no-gutters
    >
      <v-btn text small :outlined="filter === 'all'" @click="filter = 'all'"
        >All</v-btn
      >
      <v-btn
        text
        small
        :outlined="filter === 'active'"
        @click="filter = 'active'"
        >Active</v-btn
      >
      <v-btn
        text
        small
        :outlined="filter === 'completed'"
        @click="filter = 'completed'"
        >Completed</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn text small @click="filter = 'completed'">Clear</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TodoControll',
  data() {
    return {
      filter: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-footer-extension {
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 5px;
  p {
    font-size: 14px;
    margin-left: 20px;
    font-size: 1rem;
  }
}
</style>
