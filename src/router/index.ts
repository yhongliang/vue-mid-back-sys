import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 配置首先进入登录页面
    {
      path: '/:pathMatch(.*)*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginForm.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})

export default router
