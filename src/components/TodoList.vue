<template>
  <div class="todo-list">
    <v-row
      align="center"
      class="list-item"
      v-for="(todo, i) in todos"
      :key="i"
      no-gutters
    >
      <div
        :class="{ 'green-border': todo.complete }"
        class="circle"
        @click="editTask(todo)"
      >
        <!-- <div :class="{ 'green-border': todo.complete }"> 
              클래스 바인딩 방법
            <div :style="{ border: (todo.complete ? '1px solid green' : '')}">
              인라인스타일 바인딩 방법 -->
        <v-btn icon x-small color="#66b79b" v-show="todo.complete"
          ><v-icon>mdi-check</v-icon></v-btn
        >
      </div>
      <p :class="{ 'text-complete': todo.complete }">
        {{ todo.title }}
      </p>
      <v-spacer></v-spacer>
      <v-btn icon @click="deleteTodo(todo)"><v-icon>mdi-close</v-icon></v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['todos'],
  data() {
    return {};
  },
  methods: {
    editTask(todo) {
      this.$emit('edit-task', todo);
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 10px 16px;
  border-bottom: 1px dashed #ddd;
  .circle {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    border: 2px solid #ddd;
  }
  .green-border {
    border: 2px solid #66b79b;
  }
}
.list-item:last-of-type {
  border-bottom: none;
}
.text-complete {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
