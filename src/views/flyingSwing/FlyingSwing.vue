<!-- 双飞翼布局 -->
<template>
  <div class="whole-page container">
    <div class="middle">
      <div class="inner">中间</div>
    </div>
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
  .left {
    background-color: pink;
    height: 100%;
    width: var(--left-value);
    float: left;
    margin-left: -100%;
  }
  .right {
    background-color: green;
    height: 100%;
    width: var(--right-value);
    float: left;
    margin-left: calc(-1 * var(--right-value));
  }
  .middle {
    background-color: yellow;
    float: left;
    height: 100%;
    width: 100%;
    .inner {
      margin-left: var(--left-value);
      margin-right: var(--right-value);
      height: 100%;
    }
  }
}
</style>
