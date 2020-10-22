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
            v-for="(todo, i) in todos"
            :key="i"
          >
            <div class="circle">
              <v-btn icon color="green"><v-icon>mdi-check</v-icon></v-btn>
            </div>
            <p>{{ todo.title }}</p>
            <v-spacer></v-spacer>
            <v-btn icon @click="deleteTodo"><v-icon>mdi-close</v-icon></v-btn>
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
          <v-btn text small>Completed</v-btn>
          <v-spacer></v-spacer>
        </v-row>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
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
    },
    deleteTodo() {},
  },
  computed: {
    ...mapState(['todos']),
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
}
.circle {
  width: 35px;
  height: 35px;
  margin-right: 20px;
  border-radius: 50%;
  border: 1px solid #ddd;
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
