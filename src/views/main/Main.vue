<template>
  <div>
    <todo-title></todo-title>
    <todo-input @addItem="addOneTask" ></todo-input>
    <todo-list :listdata="todoItems" 
    @removeItem="removeOneItem"
    @toggleItem="toggleOneItem" ></todo-list>
    <todo-controller></todo-controller>
  </div>
</template>

<script>
import getDate from "@/assets/js/getDate.js"
export default {
  name: 'Main',
  components: {
    TodoTitle: () => import('@/components/main/TodoTitle.vue'),
    TodoInput: () => import('@/components/main/TodoInput.vue'),
    TodoList: () => import('@/components/main/TodoList.vue'),
    TodoController: () => import('@/components/main/TodoController.vue'),
  },
  data() {
   return {todoItems: []}; 
  },
   methods: {
    addOneTask(todoItem) {
      let value = {
        item: todoItem,
        date: getDate().date + '/' + getDate().week,
        time: getDate().time,
        completed: false
      };
      localStorage.setItem(todoItem, JSON.stringify(value));
      this.todoItems.push(value);
    },
    toggleOneItem(todoItem){
         todoItem.completed = !todoItem.completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeOneItem(todoItem, index){
         localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    }
  },
  created() {
            if (localStorage.length > 0) {
                for (let i = 0; i < localStorage.length; i++) {
                    if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                        this.todoItems.push(
                          JSON.parse(localStorage.getItem(localStorage.key(i)))
                        );
                    }
                }
            }
        },
};
</script>