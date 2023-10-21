<script setup lang="ts">
import type { Menu } from '@/types/menus'
import { useRouter } from 'vue-router'
const router = useRouter()


const menus: Array<Menu> = [
  {
    name: '左右三栏布局',
    desc: '使用flex',
    path: 'flex/ThreeColumn'
  }
]

function clickMenu(item: Menu) {
  router.push(item.path)
}

</script>

<template>
  <div>
    <div v-for="item in menus" :key="item.path" class="menu">
        <div class="menuTitle" @click="clickMenu(item)"> {{ item.name }} </div>
        <div> {{ item.desc || '-' }} </div>
      </div>
  </div>
</template>

<style>
.menu {
  margin: 10px;
}
.menuTitle {
  color: blue;
  text-decoration: underline;
  cursor:pointer;
}
</style>