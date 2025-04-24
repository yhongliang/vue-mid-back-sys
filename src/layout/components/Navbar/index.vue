<template>
    <div>
        <div class="navbar">
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
const router = useRouter()

const userStore = useUserStore()
const logout = () => {
    // 调用退出登录接口
    router.push('/login')
}
</script>

<style scoped></style>