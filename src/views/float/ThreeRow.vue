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
  .left {
    float: left;
    width: 400px;
    height: 100%;
    background-color: pink;
  }
  .right {
    float: left;
    width: 300px;
    height: 100%;
    background-color: green;
  }
  .middle {
    float: left;
    height: 100%;
    background-color: yellow;
    width: 100%;
    margin-left: 400px;
    margin-right: 300px;
  }
}

</style>