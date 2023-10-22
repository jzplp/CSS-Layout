<!-- 左右比例多栏布局 -->
<template>
  <div class="part-page container">
    <div class="left1">左侧</div>
    <div class="right1">右侧</div>
  </div>
  <div class="part-page container">
    <div class="left2">左侧</div>
    <div class="right2">右侧</div>
  </div>
  <div class="part-page container">
    <div class="left3">左侧</div>
    <div class="right3">右侧</div>
  </div>
  <div class="part-page container">
    <div class="left4">左侧</div>
    <div class="right4">右侧</div>
  </div>
  <div class="part-page container">
    <div class="left5">左侧 按实际内容撑开</div>
    <div class="right5">右侧</div>
  </div>
  <div class="part-page container">
    <div class="left6">左侧</div>
    <div class="right6">右侧 按实际内容撑开</div>
  </div>
  <div class="part-page container">
    <div class="column1">第一栏 按实际内容撑开</div>
    <div class="column2">第二栏 width: 30% </div>
    <div class="column3">第三栏 flex-grow: 1</div>
    <div class="column4">第四栏 width: 200px</div>
  </div>
</template>

<style scoped>
.part-page {
  height: 80px;
  margin-bottom: 10px;
}
.container {
  display: flex;
  .left1 {
    width: 30%;
    background-color: pink;
  }
  .right1 {
    width: 70%;
    background-color: green;
  }
  .left2 {
    flex: 1;
    background-color: pink;
  }
  .right2 {
    width: 60%;
    background-color: green;
  }
  .left3 {
    flex: 1;
    background-color: pink;
  }
  .right3 {
    flex: 1;
    background-color: green;
  }
  .left4 {
    flex: 1;
    background-color: pink;
  }
  .right4 {
    flex-basis: 40%;
    background-color: green;
  }
  .left5 {
    background-color: pink;
  }
  .right5 {
    flex-grow: 1;
    background-color: green;
  }
  .left6 {
    flex-grow: 1;
    background-color: pink;
  }
  .right6 {
    background-color: green;
  }
  .column1 {
    background-color: pink;
  }
  .column2 {
    width: 30%;
    background-color: green;
  }
  .column3 {
    flex-grow: 1;
    background-color: yellow;
  }
  .column4 {
    width: 200px;
    background-color: aqua;
  }
}
</style>