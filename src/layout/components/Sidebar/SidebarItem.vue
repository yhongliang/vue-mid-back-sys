<template>
    <div>
        <!-- 处理有子菜单的项 -->
        <el-sub-menu v-if="item.children" :index="item.path">
            <template #title>
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
            </template>
            <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
        </el-sub-menu>

        <!-- 处理无子菜单的项 -->
        <el-menu-item v-else :index="item.path">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>
