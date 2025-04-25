<template>
    <div>
        <Logo :collapse="isCollapse"></Logo>
        <el-scrollbar>
            <el-menu router :default-active="$route.path" :collapse="isCollapse">
                <sidebar-item v-for="route in permissionStore.routes" :key="route.path" :item="route" />
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePermissionStore } from '@/stores/permission'
import Logo from './Logo.vue' // logo 组件
import SidebarItem from './SidebarItem.vue' // 递归组件
const permissionStore = usePermissionStore()
const isCollapse = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>