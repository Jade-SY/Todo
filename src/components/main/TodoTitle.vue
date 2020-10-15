<template>
  <div class="title">
    <marquee>{{ message }}</marquee>

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

<style lang="scss" scoped>
.title{
  width:40%;
}
marquee{
  background: rgba(255, 255, 255, 0.1);
  border:1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
}
</style>
