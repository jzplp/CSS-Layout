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

<style lang="less" scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
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
    .left {
      width: 400px;
      background-color: grey;
      height: 100%;
      float: left;
    }
    .right {
      width: 300px;
      background-color: aqua;
      height: 100%;
      float: left;
    }
    .middle-deep {
      width: calc(100% - var(--left-value) - var(--right-value));
      background-color: yellow;
      height: 100%;
      float: left;
    }
  }
}
</style>
