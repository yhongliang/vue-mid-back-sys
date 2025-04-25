import { createRouter, createWebHistory } from 'vue-router'
import { usePermissionStore } from '@/stores/permission'
import Layout from '@/layout/index.vue'

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
    // 添加系统路由
    {
      path: '/',
      component: Layout, // 主布局包裹子路由
      redirect: '/system/User',
      children: [
        {
          path: 'system/User',
          component: () => import('@/views/system/User.vue'),
          meta: { title: '用户管理', icon: 'User' }
        },
        {
          path: 'system/Role',
          component: () => import('@/views/system/Role.vue'),
          meta: { title: '角色管理', icon: 'role' }
        },
        {
          path: 'system/Menu',
          component: () => import('@/views/system/Menu.vue'),
          meta: { title: '菜单管理', icon: 'Menu' }
        }
        // 其他动态路由会自动注入到这里
      ]
    }
  ],
})
// router.beforeEach(async (to, from, next) => {
//   const permissionStore = usePermissionStore()

//   if (hasToken()) {
//     if (to.path === '/login') {
//       next('/')
//     } else {
//       if (!permissionStore.routes.length) {
//         // 动态添加路由
//         const routes = await permissionStore.generateRoutes()
//         routes.forEach(route => router.addRoute(route))
//         next({ ...to, replace: true })
//       } else {
//         next()
//       }
//     }
//   } else {
//     next('/login')
//   }
// })

export default router
