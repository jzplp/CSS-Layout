<script setup lang="ts">
import type { Menu, MenuGroup } from '@/types/menus'
import { useRouter } from 'vue-router'
const router = useRouter()

const sourcesPathPrefix = 'https://github.com/jzplp/CSS-Layout/tree/main/src/views/'

const menuGroups: Array<MenuGroup> = [
  {
    name: '计算calc布局',
    menus: [
      {
        name: '左右三栏布局',
        desc: '使用float',
        path: 'calc/ThreeRow'
      },
      {
        name: '上下三栏布局',
        desc: '',
        path: 'calc/ThreeColumn'
      },
      {
        name: '上下左右三栏嵌套布局',
        desc: '使用float',
        path: 'calc/MultiRowColumn'
      },
      {
        name: '左右比例多栏布局',
        desc: '使用float。上下布局类似，但不需要float',
        path: 'calc/ScaleRow'
      }
    ]
  },
  {
    name: 'flex布局',
    menus: [
      {
        name: '左右三栏布局',
        desc: '',
        path: 'flex/ThreeRow'
      },
      {
        name: '上下三栏布局',
        desc: '',
        path: 'flex/ThreeColumn'
      },
      {
        name: '上下左右三栏嵌套布局',
        desc: '',
        path: 'flex/MultiRowColumn'
      },
      {
        name: '左右比例多栏布局',
        desc: '上下比例布局也是同理',
        path: 'flex/ScaleRow'
      }
    ]
  },
  {
    name: 'grid布局',
    menus: [
      {
        name: '左右三栏布局',
        desc: '',
        path: 'grid/ThreeRow'
      },
      {
        name: '上下三栏布局',
        desc: '',
        path: 'grid/ThreeColumn'
      },
      {
        name: '上下左右三栏嵌套布局',
        desc: 'grid嵌套',
        path: 'grid/MultiRowColumnNest'
      },
      {
        name: '上下左右三栏网格布局',
        desc: 'grid网格',
        path: 'grid/MultiRowColumnGrid'
      },
      {
        name: '左右比例多栏布局',
        desc: '上下比例布局也是同理',
        path: 'grid/ScaleRow'
      }
    ]
  },
  {
    name: '浮动布局',
    menus: [
      {
        name: '左右两栏布局',
        desc: '',
        path: 'float/TwoRow'
      }
    ]
  },
  {
    name: '圣杯布局',
    menus: [
      {
        name: '左右三栏布局',
        desc: '使用浮动，相对定位和负margin',
        path: 'holyGrail/HolyGrail'
      },
      {
        name: '上下左右三栏嵌套布局',
        desc: '上下三栏使用计算calc',
        path: 'holyGrail/MultiRowColumn'
      }
    ]
  },
  {
    name: '双飞翼布局',
    menus: [
      {
        name: '左右三栏布局',
        desc: '使用浮动和负margin',
        path: 'flyingSwing/FlyingSwing'
      },
      {
        name: '上下左右三栏嵌套布局',
        desc: '上下三栏使用计算calc',
        path: 'flyingSwing/MultiRowColumn'
      }
    ]
  },
]

function clickMenu(item: Menu) {
  router.push(item.path)
}

function clickSource(item: Menu) {
  window.open(sourcesPathPrefix + item.path + '.vue')
}
</script>

<template>
  <div class="page-container">
    <div class="page-title">CSS-Layout 各种CSS页面内布局实例</div>
    <div v-for="group in menuGroups" :key="group.name">
      <div class="group-title">{{ group.name }}</div>
      <div class="menu-container">
        <div v-for="item in group.menus" :key="item.path" class="menu">
          <div class="menu-title link" @click="clickMenu(item)">{{ item.name }}</div>
          <div class="menu-desc">{{ item.desc || '-' }}</div>
          <div>
            <span class="link" style="margin-right: 4px" @click="clickMenu(item)">查看效果</span>
            <span class="link" @click="clickSource(item)">查看源码</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-container {
  margin: 10px;
}
.page-title {
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}
.group-title {
  font-weight: 600;
  margin-bottom: 4px;
}
.link {
  color: blue;
  cursor: pointer;
}
.menu-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  margin-bottom: 12px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  border-left: 1px solid grey;
}
.menu {
  border-right: 1px solid grey;
  .menu-title {
    font-weight: 600;
  }
  .menu-desc {
    color: grey;
  }
}
</style>
