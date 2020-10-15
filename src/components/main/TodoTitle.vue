<template>
  <div class="title">
    <p class="greeting-msg">{{ message }}</p>
    <p class="title-task">
      오늘 할 일 <span class="task-total">{{ taskTotal }}건</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello!',
      taskTotal: 3,
    };
  },
};
</script>

<style lang="scss" scoped></style>
