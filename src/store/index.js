import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  filteredTodos: [],
  state: {
    todos: [{
        id: 0,
        complete: false,
        title: 'sample'
      },

    ]
  },
  mutations: {
    addTask(state, payload) {
      state.todos.push(payload)
    },
    editTask(state, payload) {
      let targetTask = state.todos.find(el => el.id == payload.id)
      // targetTask.complete = payload.complete
      // targetTask.title = payload.title
      Object.assign(targetTask, payload)
      // 첫번째 param을 두번째 param으로 덮어 씌우는 함수
      // 위의 targetTask.complete~~ 두 줄을 깔끔하게 정리할 수 있다
    },
    deleteTodo(state, payload) {
      let targetTask = state.todos.findIndex(el => el.id == payload.id)
      state.todos.splice(targetTask, 1)

      // 또는
      // let targetTask = state.todos.find(el => el.id == payload.id)
      // let deleteIndex = state.todos.indexOf(targetTask)
      // state.todos.splice(deleteIndex, 1)
    },
    filteredTodos(state, payload) {
      switch (payload) {
        case payload === 'active':
          return state.todos.filter((todo) => !todo.complete);
        case payload === 'completed':
          return state.todos.filter((todo) => todo.complete);
        default:
          return state.todos;
      }
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