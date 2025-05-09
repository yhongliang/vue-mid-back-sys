<template>
    <div>
        <div class="navbar">
            <hamburger class="hamburger-container" />
            <div class="right-menu">
                <!-- 用户信息 -->
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <el-avatar :size="30" />
                        <span>{{ userStore.userInfo }}</span>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import Hamburger from '@/layout/components/Hamburger/index.vue'
const router = useRouter()

const userStore = useUserStore()
const logout = () => {
    // 调用退出登录接口
    router.push('/login')
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;

        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
}
</style>