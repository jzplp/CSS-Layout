<!-- 上下三栏布局 -->
<template>
  <div class="whole-page">
    <div class="top">上面</div>
    <div class="middle">中间</div>
    <div class="bottom">下面</div>
  </div>
</template>

<style scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.top {
  height: 300px;
  background-color: pink;
}
.bottom {
  height: 200px;
  background-color: green;
}
.middle {
  height: calc(100% - 500px);
  background-color: yellow;
}
</style>
