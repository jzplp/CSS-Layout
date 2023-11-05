<!-- 上下三栏布局 -->
<template>
  <div class="whole-page container">
    <div class="top">上面</div>
    <div class="middle">中间</div>
    <div class="bottom">下面</div>
  </div>
</template>

<style lang="less" scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  display: grid;
  grid-template-rows: 300px auto 200px;
  .top {
    background-color: pink;
  }
  .bottom {
    background-color: green;
  }
  .middle {
    background-color: yellow;
  }
}
</style>
