<!-- 上下左右三栏嵌套圣杯布局 -->
<template>
  <div class="whole-page container">
    <div class="top">上面</div>
    <div class="middle">
      <div class="middle-deep">中间</div>
      <div class="left">左侧</div>
      <div class="right">右侧</div>
    </div>
    <div class="bottom">下面</div>
  </div>
</template>

<style lang="less" scoped>
.whole-page {
  height: 100vh;
}
.container {
  --top-value: 300px;
  --bottom-value: 200px;
  --left-value: 400px;
  --right-value: 300px;
  .top {
    height: var(--top-value);
    background-color: pink;
  }
  .bottom {
    height: var(--bottom-value);
    background-color: green;
  }
  .middle {
    height: calc(100% - var(--top-value) - var(--bottom-value));
    padding: 0 var(--right-value) 0 var(--left-value);
    .left {
      float: left;
      position: relative;
      left: calc(-1 * var(--left-value));
      width: var(--left-value);
      background-color: grey;
      height: 100%;
      margin-left: -100%;
    }
    .right {
      float: left;
      width: var(--right-value);
      background-color: aqua;
      height: 100%;
      margin-right: calc(-1 * var(--right-value));
    }
    .middle-deep {
      float: left;
      background-color: yellow;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
