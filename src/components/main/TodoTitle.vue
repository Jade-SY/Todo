<template>
  <div class="title">
    <marquee>{{ message }}</marquee>

    <p class="title-task">
      남은 할 일 <span class="task-total">{{ taskTotal }}</span>건
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
  width:80%;
}
marquee{
  width: 280px;
  background: rgba(255, 255, 255, 0.1);
  border:1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  font-weight: normal;
  font-size:1rem;
}
.title-task{
  width:350px;
  font-size: 16px;
  text-align: right;
  margin:20px 0 10px;
}
.task-total{
  font-size: 3rem;
  font-weight: 300;
}
</style>
