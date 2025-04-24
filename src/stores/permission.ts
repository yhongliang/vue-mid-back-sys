import { defineStore } from "pinia";
export const usePermissionStore = defineStore("permission", {
    state: () => ({
        routes: [
            {
                path: '/system',
                meta: { title: '系统管理', icon: 'system' },
                children: [
                    {
                        path: '/system/User',
                        meta: { title: '用户管理', icon: 'user' },
                    },
                    {
                        path: '/system/Role',
                        meta: { title: '角色管理', icon: 'role' },
                    },
                    {
                        path: '/system/Menu',
                        meta: { title: '菜单管理', icon: 'menu' },
                    }
                ]
            }
        ],
    }),
    actions: {
        // 1.从后端获取路由数据
        // 2.路由数据转化为路由对象Vue Router，方便挂载
        // 3.返回路由供addRoute使用
    }
});