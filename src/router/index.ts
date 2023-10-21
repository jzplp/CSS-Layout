import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import HomeView from '@/views/HomeView.vue'

routes.push({
  path: '/',
  name: 'home',
  component: HomeView
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
