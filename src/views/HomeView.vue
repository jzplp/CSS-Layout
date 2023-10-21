<script setup lang="ts">
import type { Menu } from '@/types/menus'
import { useRouter } from 'vue-router'
const router = useRouter()


const menus: Array<Menu> = [
  {
    name: '左右三栏布局',
    desc: 'float和计算calc',
    path: 'calc/ThreeRow'
  },
  {
    name: '上下三栏布局',
    desc: '计算calc',
    path: 'calc/ThreeColumn'
  },
  {
    name: '左右三栏布局',
    desc: '使用flex',
    path: 'flex/ThreeRow'
  },
  {
    name: '上下三栏布局',
    desc: '使用flex',
    path: 'flex/ThreeColumn'
  },
  {
    name: '上下左右三栏混合布局',
    desc: '使用flex',
    path: 'flex/MultiRowColumn'
  },
  {
    name: '左右比例布局',
    desc: '使用flex, 上下比例布局也是同理',
    path: 'flex/ScaleRow'
  },
  {
    name: '圣杯布局',
    desc: '左右三栏布局，使用浮动和相对定位',
    path: 'holyGrail/holyGrail'
  }
]

function clickMenu(item: Menu) {
  router.push(item.path)
}

</script>

<template>
  <div class="menu-container">
    <div v-for="item in menus" :key="item.path" class="menu">
        <div class="menuTitle" @click="clickMenu(item)"> {{ item.name }} </div>
        <div> {{ item.desc || '-' }} </div>
      </div>
  </div>
</template>

<style>
.menu-container {
  display: flex;
}
.menu {
  margin: 10px;
}
.menuTitle {
  color: blue;
  text-decoration: underline;
  cursor:pointer;
}
</style>