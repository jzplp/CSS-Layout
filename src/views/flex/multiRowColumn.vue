<!-- 上下左右三栏嵌套布局 -->
<template>
  <div class="whole-page container">
    <div class="top">上面</div>
    <div class="middle">
      <div class="left">左侧</div>
      <div class="middle-deep">中间</div>
      <div class="right">右侧</div>
    </div>
    <div class="bottom">下面</div>
  </div>
</template>

<style scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  display: flex;
  flex-direction: column;
  .top {
    height: 300px;
    background-color: pink;
  }
  .bottom {
    height: 200px;
    background-color: green;
  }
  .middle {
    flex-grow: 1;
    display: flex;
    .left {
      width: 400px;
      background-color: grey;
    }
    .right {
      width: 300px;
      background-color: aqua;
    }
    .middle-deep {
      flex-grow: 1;
      background-color: yellow;
    }
  }
}
</style>
