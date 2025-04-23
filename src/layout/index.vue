<template>
    <div>
        <el-container class="layout-container">
            <!-- 侧边栏 -->
            <el-asider width="200px">

            </el-asider>
            <!-- 主内容区 -->
            <el-container>
                <!-- 顶部导航栏 -->
                <el-header>

                </el-header>
                <el-main>
                    <!-- 面包屑 -->
                    <!-- 内容渲染区 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>