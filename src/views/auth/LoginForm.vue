<template>
    <div class="login-container">
      <!-- 动态背景 -->
      <div class="animated-bg"></div>
  
      <!-- 登录卡片 -->
      <el-card class="login-card">
        <h2 class="title">欢迎回来</h2>
  
        <el-form 
          ref="loginForm"
          :model="form" 
          :rules="rules"
          
        >
          <!-- 用户名输入 -->
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder=" "
              @focus="isUsernameActive = true"
              @blur="isUsernameActive = !!form.username"
            />
            <label :class="{ active: isUsernameActive }">用户名</label>
          </el-form-item>
  
          <!-- 密码输入 -->
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder=" "
              show-password
              @focus="isPasswordActive = true"
              @blur="isPasswordActive = !!form.password"
            />
            <label :class="{ active: isPasswordActive }">密码</label>
          </el-form-item>
  
          <!-- 按钮组 -->
          <el-form-item class="button-group">
            <el-button
              type="primary"
              native-type="submit"
              class="submit-btn"
              :loading="loading"
              @click.prevent="handleSubmit"
            >
              登录
            </el-button>
            <el-button
              class="register-btn"
              @click="handleRegister"
            >
              注册
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  
  // 表单引用
  const loginForm = ref<FormInstance>()
  
  // 响应式数据
  const form = reactive({
    username: '',
    password: ''
  })
  
  // 表单验证规则
  const rules = reactive<FormRules>({
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 4, max: 16, message: '长度在4到16之间', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '长度在6到20之间', trigger: 'blur' }
    ]
  })
  
  const loading = ref(false)
  const isUsernameActive = ref(false)
  const isPasswordActive = ref(false)
  
  // 提交处理
  const handleSubmit = async () => {
    // 表单验证
    try {
      await loginForm.value?.validate()
    } catch (error) {
      return error;
    }
  
    loading.value = true
    try {
      // 这里添加API请求
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('登录数据:', form)
      // 模拟登录成功
      ElMessage.success('Login successful!')
    } catch (error) {
      ElMessage.error('Login failed!', error)
    } finally {
      loading.value = false
    }
  }
  
  // 注册处理
  const handleRegister = () => {
    ElMessage.info('Redirect to register page')
    // 这里可以添加跳转注册页面的逻辑
    // router.push('/register')
  }
  </script>
  
  <style lang="scss" scoped>
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
    background: linear-gradient(
      45deg,
      #ee7752,
      #e73c7e,
      #23a6d5,
      #23d5ab
    );
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
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    z-index: 1;
  
    :deep(.el-card__body) {
      padding: 0;
    }
  }
  
  .title {
    text-align: center;
    margin-bottom: 40px;
    color: #2c3e50;
  }
  
  /* 输入框样式 */
  .el-form-item {
    position: relative;
    margin-bottom: 30px;
  }
  
  :deep(.el-input__wrapper) {
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &.is-focus {
      box-shadow: 0 0 0 1px #3498db inset;
    }
  }
  
  label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 2;
    background: transparent;
    padding: 0 5px;
    margin-left: 8px;
    
    &.active {
      top: 0;
      left: 5px;
      font-size: 12px;
      color: #3498db;
      background: white;
    }
  }
  
  /* 按钮组样式 */
  .button-group {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    
    .el-form-item__content {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  
  /* 登录按钮 */
  .submit-btn {
    flex: 1;
    padding: 20px;
    font-size: 16px;
    transition: all 0.3s ease;
    margin-right: 10px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
    }
  }
  
  /* 注册按钮 */
  .register-btn {
    flex: 1;
    padding: 20px;
    font-size: 16px;
    transition: all 0.3s ease;
    margin-left: 10px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
    }
  }
  
  /* 动画 */
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  </style>