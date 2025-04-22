import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/homeView/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 配置首先进入登录页面
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/LoginForm.vue'),
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: HomeView,
    // },
  ],
})

export default router
