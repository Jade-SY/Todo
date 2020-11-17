import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [{
        id: 0,
        complete: false,
        title: 'Smile :)'
      },
      {
        id: 1,
        complete: false,
        title: 'Test task'
      },
    ]
  },
  mutations: {
    addTask(state, payload) {
      state.todos.push(payload)
    },
    editTask(state, payload) {
      let targetTask = state.todos.find(el => el.id == payload.id)

      Object.assign(targetTask, payload)
    },
    deleteTodo(state, payload) {
      let targetTask = state.todos.findIndex(el => el.id == payload.id)
      state.todos.splice(targetTask, 1)

    },
    clearAll(state) {
      state.todos = []
    },
    initializeStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
      }
    },

  },
  actions: {},
  modules: {}
});
store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state))
})
export default store