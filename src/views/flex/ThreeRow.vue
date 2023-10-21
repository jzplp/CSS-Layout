<!-- 左右三栏布局 -->
<template>
  <div class="whole-page container">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
  </div>
</template>

<style scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  display: flex;
  .left {
    width: 400px;
    background-color: pink;
  }
  .right {
    width: 300px;
    background-color: green;
  }
  .middle {
    flex:1;
    background-color: yellow;
  }
}
</style>