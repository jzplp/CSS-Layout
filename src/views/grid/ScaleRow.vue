<!-- 左右比例多栏布局 -->
<template>
  <div class="part-page container1">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container2">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container3">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container4">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container5">
    <div class="left">左侧</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container6">
    <div class="left">左侧 按实际内容撑开</div>
    <div class="right">右侧</div>
  </div>
  <div class="part-page container7">
    <div class="column1">第一栏 200px</div>
    <div class="column2">第二栏 30%</div>
    <div class="column3">第三栏 1fr</div>
    <div class="column4">第四栏 auto按实际内容撑开</div>
  </div>
</template>

<style scoped>
.part-page {
  height: 80px;
  margin-bottom: 10px;
}
.left {
  background-color: pink;
}
.right {
  background-color: green;
}
.container1 {
  display: grid;
  grid-template-columns: 30% 70%;
}
.container2 {
  display: grid;
  grid-template-columns: auto 60%;
}
.container3 {
  display: grid;
  grid-template-columns: auto auto;
}
.container4 {
  display: grid;
  grid-template-columns: 200px auto;
}
.container5 {
  display: grid;
  grid-template-columns: 300px 1fr;
}
.container6 {
  display: grid;
  grid-template-columns: auto 1fr;
}
.container7 {
  display: grid;
  grid-template-columns: 200px 30% 1fr auto;
  .column1 {
    background-color: pink;
  }
  .column2 {
    background-color: green;
  }
  .column3 {
    background-color: yellow;
  }
  .column4 {
    background-color: aqua;
  }
}
</style>
