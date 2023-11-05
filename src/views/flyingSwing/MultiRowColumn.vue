<!-- 上下左右三栏嵌套双飞翼布局 -->
<template>
  <div class="whole-page container">
    <div class="top">上面</div>
    <div class="middle">
      <div class="middle-deep">
        <div class="inner">中间</div>
      </div>
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
    .left {
      background-color: grey;
      height: 100%;
      width: var(--left-value);
      float: left;
      margin-left: -100%;
    }
    .right {
      background-color: aqua;
      height: 100%;
      width: var(--right-value);
      float: left;
      margin-left: calc(-1 * var(--right-value));
    }
    .middle-deep {
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
}
</style>
