import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/login-page/index.vue'
import IndexPage from '@/pages/index-page/index.vue'
import KataPage from '@/pages/kata-page/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginPage
  },
  {
    path:'/index',
    name: 'Index',
    component: IndexPage
  },
  {
    path:'/katas/:id',
    name: 'Kata',
    component: KataPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
