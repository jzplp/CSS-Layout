<!-- 左右三栏布局 -->
<template>
  <div class="whole-page container">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
  </div>
</template>

<style lang="less" scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  display: grid;
  grid-template-columns: 400px auto 300px;
  .left {
    background-color: pink;
  }
  .right {
    background-color: green;
  }
  .middle {
    background-color: yellow;
  }
}
</style>
 