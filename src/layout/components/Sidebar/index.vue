<template>
    <div>
        <el-menu router :default-active="$route.path" :collapse="isCollapse">
            <span>权限管理系统</span>
            <sidebar-item v-for="route in permissionStore.routes" :key="route.path" :item="route" />
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePermissionStore } from '@/stores/permission'
import SidebarItem from './SidebarItem.vue' // 递归组件
const permissionStore = usePermissionStore()
const isCollapse = ref<boolean>(false)
</script>

<style scoped></style>