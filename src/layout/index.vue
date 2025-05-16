<template>
    <div>
        <el-container class="layout-container">
            <!-- 侧边栏 -->
            <el-aside width="200px" class="sidebar-container">
                <sidebar />
            </el-aside>
            <!-- 主内容区 -->
            <el-container class="main-container">
                <!-- 顶部导航栏 -->
                <el-header style="text-align: right; font-size: 12px; padding: 0;">
                    <navbar />
                </el-header>
                <el-main>
                    <!-- 面包屑导航 -->
                    <tags-view />
                    <!-- 内容渲染区 -->
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100vh;

    .main-container {
        .el-main {
            padding: 0;
        }
    }
}

.fade-transform-enter-active,
.fade-transform-leave-active {
    transition: opacity 0.5s ease;
}

.fade-transform-enter-from,
.fade-transform-leave-to {
    opacity: 0;
}
</style>