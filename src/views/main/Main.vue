<template>
  <div>
    <todo-title></todo-title>
    <todo-list></todo-list>
    <todo-input></todo-input>
    <todo-controller></todo-controller>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
    TodoTitle: () => import('@/components/main/TodoTitle.vue'),
    TodoList: () => import('@/components/main/TodoList.vue'),
    TodoInput: () => import('@/components/main/TodoInput.vue'),
    TodoController: () => import('@/components/main/TodoController.vue'),
  },
};
</script>

<style lang="scss" scoped></style>
