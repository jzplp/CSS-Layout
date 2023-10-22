<!-- 上下左右三栏嵌套布局 -->
<template>
  <div class="whole-page container">
    <div class="top">上面</div>
    <div class="left">左侧</div>
    <div class="middle-deep">中间</div>
    <div class="right">右侧</div>
    <div class="bottom">下面</div>
  </div>
</template>

<style scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  display: grid;
  grid-template-rows: 300px auto 200px;
  grid-template-columns: 400px auto 300px;
  .top {
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: pink;
  }
  .bottom {
    grid-column-start: 1;
    grid-column-end: 4;
    background-color: green;
  }
  .left {
    background-color: grey;
  }
  .right {
    background-color: aqua;
  }
  .middle-deep {
    background-color: yellow;
  }
}
</style>
