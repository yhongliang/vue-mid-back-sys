import { defineStore } from "pinia";
export const usePermissionStore = defineStore("permission", {
    state: () => ({
        routes: [],
    }),
    actions: {
        // 1.从后端获取路由数据
        // 2.路由数据转化为路由对象Vue Router，方便挂载
        // 3.返回路由供addRoute使用
    }
});