<!-- 左右三栏布局 -->
<template>
  <div class="whole-page">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
  </div>
</template>

<style scoped>
.whole-page {
  height: 100vh;
  width: 100vw;
}
.left {
  width: 400px;
  background-color: pink;
  height: 100%;
  float: left;
}
.right {
  width: 300px;
  background-color: green;
  height: 100%;
  float: left;
}
.middle {
  width:calc(100% - 700px);
  background-color: yellow;
  height: 100%;
  float: left;
}
</style>