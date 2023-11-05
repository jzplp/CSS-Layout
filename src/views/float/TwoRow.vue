<!-- 左右两栏布局 -->
<template>
  <div class="whole-page container">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
</template>

<style lang="less" scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.container {
  .left {
    float: left;
    width: 400px;
    height: 100%;
    background-color: pink;
  }
  .right {
    height: 100%;
    background-color: yellow;
    margin-left: 400px;
    width: 100%;
  }
}
</style>
