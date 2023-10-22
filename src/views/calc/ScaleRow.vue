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
    <div class="column1">第一栏 width: 30%</div>
    <div class="column2">第二栏 撑开剩余空间 </div>
    <div class="column3">第三栏 width: 200px</div>
    <div class="column4">第四栏 width: 100px</div>
  </div>
</template>

<style scoped>
.part-page {
  height: 80px;
  margin-bottom: 10px;
}
.container {
  .left1 {
    width: 30%;
    height: 100%;
    background-color: pink;
    float: left;
  }
  .right1 {
    width: 70%;
    height: 100%;
    background-color: green;
    float: left;
  }
  .left2 {
    width: calc(100% - 60%);
    height: 100%;
    float: left;
    background-color: pink;
  }
  .right2 {
    width: 60%;
    height: 100%;
    float: left;
    background-color: green;
  }
  .left3 {
    width: 300px;
    height: 100%;
    float: left;
    background-color: pink;
  }
  .right3 {
    width: calc(100% - 300px);
    height: 100%;
    float: left;
    background-color: green;
  }
  .column1 {
    width: 30%;
    height: 100%;
    float: left;
    background-color: pink;
  }
  .column2 {
    width: calc(100% - 30% - 200px - 100px);
    height: 100%;
    float: left;
    background-color: green;
  }
  .column3 {
    height: 100%;
    float: left;
    width: 200px;
    background-color: yellow;
  }
  .column4 {
    height: 100%;
    float: left;
    width: 100px;
    background-color: grey;
  }
}
</style>