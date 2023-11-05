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
    flex:1;
    background-color: yellow;
  }
}
</style>
