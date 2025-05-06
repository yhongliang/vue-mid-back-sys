<template>
    <div class="sidebar-container">
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

<style lang="scss" scoped>
.sidebar-container {
    // background: #334154;

    :deep(.el-menu) {
        background-color: #334154;
        height: calc(100vh - 50px);
        border: none;
        width: 100%;
        overflow: hidden;

        .el-menu-item,
        .el-sub-menu__title {
            color: #BFCBD9;
            font-size: 14px;

            &:hover {
                background-color: #041527;
            }
        }

        .el-menu-item {
            background-color: #1F2D3D;

            &.is-active {
                color: #409eff;
                background-color: #041527;
            }
        }

        .el-sub-menu__title {
            background-color: #304151;
        }

    }
}
</style>