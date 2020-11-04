<template>
  <div>
    <todo-title></todo-title>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-controller></todo-controller>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    TodoTitle: () => import('@/components/main/TodoTitle.vue'),
    TodoInput: () => import('@/components/main/TodoInput.vue'),
    TodoList: () => import('@/components/main/TodoList.vue'),
    TodoController: () => import('@/components/main/TodoController.vue'),
  },
  data() {
 
  },
   methods: {
   
    }, 
};
</script>