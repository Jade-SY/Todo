<template>
  <v-row class="home" justify="center">
    <div class="home-container">
      <h1>Todos</h1>
      <v-card elevation="3">
        <v-text-field
          label="What needs to be done?"
          persistent-hint
          flat
          height="50"
          prepend-inner-icon="mdi-chevron-down"
          v-model="newTitle"
          @keyup.enter="addTask"
          background-color="#fff"
          color="rgb(194, 168, 175)"
          class="px-4"
        ></v-text-field>
        <div class="todo-list">
          <v-row
            align="center"
            class="list-item"
            v-for="(todo, i) in filteredTodos"
            :key="i"
            @mouseover="todo.isMouseOver = true"
            @mouseleave="todo.isMouseOver = false"
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
              <v-btn icon color="green" v-show="todo.complete"
                ><v-icon>mdi-check</v-icon></v-btn
              >
            </div>
            <p :class="{ 'text-complete': todo.complete }">{{ todo.title }}</p>
            <v-spacer></v-spacer>
            <v-btn icon @click="deleteTodo(todo)"
              ><v-icon>mdi-close</v-icon></v-btn
            >
          </v-row>
        </div>
        <v-divider></v-divider>
        <v-row
          class="todo-footer-extension"
          justify="center"
          align="center"
          no-gutters
        >
          <p>{{ todos.length }} items left</p>
          <v-spacer></v-spacer>
          <v-btn text small outlined>All</v-btn>
          <v-btn text small>Active</v-btn>
          <v-btn text small @click="findComplete">Completed</v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import _ from 'lodash';
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      newTitle: '',
    };
  },
  methods: {
    addTask() {
      this.$store.commit('addTask', {
        id: this.newId,
        complete: false,
        title: this.newTitle,
      });
      this.newTitle = '';
    },
    editTask(task) {
      task.complete = !task.complete;
      this.$store.commit('editTask', task);
    },
    deleteTodo(task) {
      this.$store.commit('deleteTodo', task);
    },
    findComplete() {
      this.filteredTodos.filter((todo) => todo.complete == true);
    },
  },
  computed: {
    ...mapState(['todos']),
    filteredTodos() {
      // todos의 데이터를 직접 건드리면 안되기때문에 lodash문법을 이용하여
      // clone이라는 todos의 복제데이터 생성
      let clone = _.cloneDeep(this.todos);
      return clone.map((el) => {
        el['isMouseOver'] = false;
        return el;
      });
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
  max-width: 600px;
  height: 100vh;
  padding: 20px;
  background-color: rgb(246, 241, 247);
  h1 {
    color: rgb(194, 168, 175);
    font-size: 3.5rem;
    font-weight: normal;
    text-align: center;
  }
}

p {
  margin: 0 !important;
}
.todo-text-field {
  padding: 10px 16px;
}
.list-item {
  padding: 10px 16px;

  .circle {
    width: 35px;
    height: 35px;
    margin-right: 20px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
  .green-border {
    border: 1px solid green;
  }
}
.text-complete {
  text-decoration: line-through;
  opacity: 0.5;
}
.complete {
  color: #ddd;
}
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
