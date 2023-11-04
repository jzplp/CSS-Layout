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
  --left-value: 400px;
  --right-value: 300px;
  padding: 0 var(--right-value) 0 var(--left-value);
  .left {
    float: left;
    position: relative;
    left: calc(-1 * var(--left-value));
    width: var(--left-value);
    background-color: pink;
    height: 100%;
    margin-left: -100%;
  }
  .right {
    float: left;
    width: var(--right-value);
    background-color: green;
    height: 100%;
    margin-right: calc(-1 * var(--right-value));
  }
  .middle {
    float: left;
    background-color: yellow;
    height: 100%;
    width: 100%;
  }
}
</style>