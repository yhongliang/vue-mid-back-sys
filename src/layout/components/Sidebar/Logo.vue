<template>
    <div class="sidebar-logo-container" :class="{ 'collapse': collapse }">
        <!-- 加入过渡动画 -->
        <transition name="sidebarLogoFade">
            <!-- 折叠与扩展分别展示不同的内容 -->
            <router-link v-if="collapse" key="collapse" to="/" class="sidebar-logo-link">
                <img v-if="logo" :src="logo" class="sidebar-logo" />
                <h1 v-else class="sidebar-title">{{ title }}</h1>
            </router-link>
            <router-link v-else key="expand" to="/" class="sidebar-logo-link">
                <img v-if="logo" :src="logo" class="sidebar-logo" />
                <h1 class="sidebar-title">{{ title }}</h1>
            </router-link>
        </transition>
    </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
const title = import.meta.env.VITE_APP_TITLE
defineProps({
    collapse: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
    opacity: 0;
}

.sidebar-logo-container {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;

    .sidebar-logo-link {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .sidebar-logo {
            width: 30px;
            height: 30px;
            margin-right: 10px;
        }

        .sidebar-title {
            font-weight: 600;
            font-size: 14px;
            line-height: 50px;
            font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        }
    }
}

.collapse {
    .sidebar-logo {
        margin-right: 0;
    }
}
</style>