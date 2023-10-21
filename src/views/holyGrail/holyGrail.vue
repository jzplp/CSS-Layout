<!-- 圣杯布局 -->
<template>
  <div class="whole-page container">
    <div class="middle">中间</div>
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
</template>

<style lang="less" scoped>
.whole-page {
  height: 100vh;
}
.container {
  padding: 0 300px 0 400px;
  .left {
    float: left;
    position: relative;
    left: -400px;
    width: 400px;
    background-color: pink;
    height: 100%;
    margin-left: -100%;
  }
  .right {
    float: left;
    width: 300px;
    background-color: green;
    height: 100%;
    margin-right: -300px;
  }
  .middle {
    float: left;
    background-color: yellow;
    height: 100%;
    width: 100%;
  }
}
</style>