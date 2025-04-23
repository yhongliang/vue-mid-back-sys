import { createRouter, createWebHistory } from 'vue-router'
import { usePermissionStore } from '@/stores/permission'

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
    //   path: '/register',
    //   name: 'register',
    //   component: () => import('@/views/auth/RegisterForm.vue'),
    // },
    // {
    //   path: '/dashboard',
    //   name: 'dashboard',
    //   component: () => import('@/views/dashboard/Dashboard.vue'),
    // }
  ],
})
router.beforeEach(async (to, from, next) => {
  const permissionStore = usePermissionStore()

  if (hasToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!permissionStore.routes.length) {
        // 动态添加路由
        const routes = await permissionStore.generateRoutes()
        routes.forEach(route => router.addRoute(route))
        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  } else {
    next('/login')
  }
})

export default router
