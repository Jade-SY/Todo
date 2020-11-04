<template>
  <v-row class="home" justify="center">
    <div class="home-container">
      <v-row class="title-wrap" no-gutters justify="center" align="center"
        ><p>ToDo</p></v-row
      >
      <p class="title-task">
        오늘 할 일
        <span class="task-total">{{ filteredTodos.length }}</span
        >건 남았습니다
      </p>
      <todo-input :id="newId" @add-task="addTask"></todo-input>
      <v-card elevation="3">
        <todo-list
          :todos="filteredTodos"
          @edit-task="editTask"
          @delete-todo="deleteTodo"
        ></todo-list>
        <v-divider></v-divider>
        <todo-controll></todo-controll>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
    TodoInput: () => import('@/components/TodoInput.vue'),
    TodoList: () => import('@/components/TodoList.vue'),
    TodoControll: () => import('@/components/TodoControll.vue'),
  },
  data() {
    return {
      newTitle: '',
      filter: '',
    };
  },
  methods: {
    today() {
      new Date().get;
    },
    addTask(id, newTitle) {
      this.$store.commit('addTask', {
        id: id,
        complete: false,
        title: newTitle,
      });
      newTitle = '';
    },
    editTask(task) {
      task.complete = !task.complete;
      this.$store.commit('editTask', task);
    },
    deleteTodo(task) {
      this.$store.commit('deleteTodo', task);
    },
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todos.filter((el) => !el.complete);
        case 'completed':
          return this.todos.filter((el) => el.complete);
        default:
          return this.todos;
      }
    },
    newId() {
      return (
        this.todos.reduce((acc, cur) => {
          return Math.max(acc, cur.id);
        }, 0) + 1
      );
    },
  },
};
</script>
<style lang="scss">
.home-container {
  width: 100%;
  max-width: 550px;
  height: 100vh;
  padding: 20px;
}
.title-wrap {
  width: 55px;
  height: 2rem;
  overflow: hidden;
  font-size: 1rem;
  font-weight: bold;
  background: #333;
  color: #fff;
  border-radius: 10px;
}
.title-task {
  font-size: 14px;
  span {
    font-size: 18px;
  }
}
</style>
