<template>
  <div class="todo-input-wrap">
    <v-text-field
      label="What needs to be done?"
      persistent-hint
      rounded
      height="50"
      v-model="newTitle"
      @keyup.enter="addTask(id, newTitle)"
      background-color="rgba(255,255,255,0.8)"
      color="#66b79b"
      class="todo-input px-4 pt-8 ma-0"
    >
    </v-text-field>
    <v-btn icon @click="addTask(is, newTitle)"
      ><v-icon size="30">mdi-plus</v-icon></v-btn
    >
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
      this.newTitle = '';
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
