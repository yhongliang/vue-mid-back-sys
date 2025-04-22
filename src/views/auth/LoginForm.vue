<template>
    <div class="login-container">
        <!-- 动态背景 -->
        <div class="animated-bg"></div>

        <!-- 登录卡片 -->
        <div class="login-card">
            <h2 class="title">Welcome Back</h2>

            <form @submit.prevent="handleSubmit">
                <!-- 用户名输入 -->
                <div class="input-group">
                    <input v-model="form.username" type="text" required @focus="handleInputFocus"
                        @blur="handleInputBlur">
                    <label :class="{ active: isUsernameActive }">Username</label>
                </div>

                <!-- 密码输入 -->
                <div class="input-group">
                    <input v-model="form.password" type="password" required @focus="handleInputFocus"
                        @blur="handleInputBlur">
                    <label :class="{ active: isPasswordActive }">Password</label>
                </div>

                <!-- 提交按钮 -->
                <button type="submit" class="submit-btn" :disabled="loading">
                    <span v-if="!loading">Sign In</span>
                    <div v-else class="loading-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 响应式数据
const form = reactive({
    username: '',
    password: ''
})

const loading = ref(false)
const isUsernameActive = ref(false)
const isPasswordActive = ref(false)

// 输入框交互处理
const handleInputFocus = (e) => {
    if (e.target.type === 'text') isUsernameActive.value = true
    if (e.target.type === 'password') isPasswordActive.value = true
}

const handleInputBlur = (e) => {
    if (!e.target.value) {
        isUsernameActive.value = false
        isPasswordActive.value = false
    }
}

// 提交处理
const handleSubmit = async () => {
    loading.value = true
    try {
        // 这里添加API请求
        await new Promise(resolve => setTimeout(resolve, 1500))
        console.log('登录数据:', form)
    } finally {
        loading.value = false
    }
}
</script>

<style scoped>
/* 容器布局 */
.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

/* 动态背景 */
.animated-bg {
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg,
            #ee7752,
            #e73c7e,
            #23a6d5,
            #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    filter: blur(30px);
    opacity: 0.7;
}

/* 登录卡片 */
.login-card {
    position: relative;
    width: 400px;
    padding: 40px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.title {
    text-align: center;
    margin-bottom: 40px;
    color: #2c3e50;
}

/* 输入框样式 */
.input-group {
    position: relative;
    margin-bottom: 30px;
}

input {
    width: 100%;
    padding: 15px;
    border: 2px solid #eee;
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
}

input:focus {
    border-color: #3498db;
    outline: none;
}

label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease;
}

label.active {
    top: -10px;
    left: 5px;
    font-size: 12px;
    color: #3498db;
    background: white;
    padding: 0 5px;
}

/* 提交按钮 */
.submit-btn {
    width: 100%;
    padding: 15px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
}

/* 加载动画 */
.loading-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.dot {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: dotBounce 1.4s infinite;
}

.dot:nth-child(2) {
    animation-delay: 0.2s
}

.dot:nth-child(3) {
    animation-delay: 0.4s
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 0% 50%
    }
}

@keyframes dotBounce {

    0%,
    80%,
    100% {
        transform: translateY(0)
    }

    40% {
        transform: translateY(-10px)
    }
}
</style>