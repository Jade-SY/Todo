<template>
  <v-row class="home" justify="center">
    <div class="home-container">
      <h1 class="logo">My Todo list</h1>
      <p class="date-info">{{ today }}</p>
      <p class="title-task">
        오늘 할 일
        <span class="task-total">{{ filteredTodos.length }}</span
        >건 남았습니다
      </p>
      <todo-input :id="newId" @add-task="addTask"></todo-input>
      <v-card elevation="3" class="list-wrapper">
        <todo-list
          :todos="filteredTodos"
          @edit-task="editTask"
          @delete-todo="deleteTodo"
        ></todo-list>
        <p v-if="filteredTodos.length === 0">
          There is no task you have to do!
        </p>
      </v-card>
      <v-row class="mt-3" no-gutters>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn width="60" text v-bind="attrs" v-on="on" color="#66b79b">
              Check
            </v-btn>
          </template>
          <v-list class="ma-0 pa-1" style="display:flex;">
            <v-list-item @click="filter = 'all'">All</v-list-item>
            <v-list-item @click="filter = 'active'">Active</v-list-item>
            <v-list-item @click="filter = 'completed'">Completed</v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn width="90" text v-if="!isClear" @click="isClear = !isClear"
          >Clear All</v-btn
        >
        <v-card color="transparent" flat v-else>
          <v-btn color="error" text @click="clearAll"
            >Are you sure?</v-btn
          ></v-card
        >
      </v-row>
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
  },
  data() {
    return {
      newTitle: '',
      today: '',
      filter: '',
      isClear: false,
    };
  },
  methods: {
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
    clearAll() {
      this.$store.commit('clearAll');
      this.isClear = false;
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
    todayInfo() {
      const month = new Date().getMonth() + 1;
      const date = new Date().getDate();
      const weekList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const day = weekList[new Date().getDay()];
      const dateInfo = month + '/' + date + '/' + day;
      return dateInfo;
    },
  },
  created() {
    this.today = this.todayInfo;
  },
};
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  max-width: 550px;
  height: 100%;
  padding: 20px;
}
.logo {
  font-size: 16px;
}
.date-info {
  font-size: 2.6rem;
  font-weight: 500;
}
.list-wrapper {
  position: relative;
  height: 50vh;
  max-height: 50vh;
  overflow-y: auto;
  p {
    width: 250px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    text-align: center;
    color: #ddd;
  }
}
.title-task {
  font-size: 14px;
  span {
    font-size: 18px;
  }
}
</style>
