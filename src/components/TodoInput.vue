<template>
  <div class="todo-input-wrap">
    <v-text-field
      label="What needs to be done?"
      persistent-hint
      flat
      height="50"
      v-model="newTitle"
      @keyup.enter="addTask(id, newTitle)"
      background-color="transparent"
      color="#333"
      class="todo-input px-4"
    >
    </v-text-field>
    <v-btn icon @click="addTask(is, newTitle)"><v-icon>mdi-plus</v-icon></v-btn>
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  props: ['id'],
  data() {
    return {
      newTitle: '',
    };
  },
  methods: {
    addTask(id, newTitle) {
      this.$emit('add-task', id, newTitle);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-input-wrap {
  width: 100%;
  display: flex;
  align-items: center;
}
.todo-input {
  width: 100%;
  padding: 10px;
}
.v-btn {
  font-size: 30px;
}
</style>
