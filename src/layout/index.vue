<template>
    <div>
        <el-container class="layout-container">
            <!-- 侧边栏 -->
            <sidebar />
            <!-- 主内容区 -->
            <el-container>
                <!-- 顶部导航栏 -->
                <el-header>
                    <navbar />
                </el-header>
                <el-main>
                    <!-- 面包屑 -->
                    <breadcrumb />
                    <!-- 内容渲染区 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import Breadcrumb from './components/Breadcrumb/index.vue'
</script>

<style lang="scss" scoped></style>