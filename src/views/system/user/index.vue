<template>
    <div class="app-container">
        <el-row :gutter="20">
            <splitpanes>
                <el-col :span="6"></el-col>
            </splitpanes>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { Splitpanes, Pane } from "splitpanes"
import "splitpanes/dist/splitpanes.css"
import useAppStore from '@/stores/app'
import { getToken } from '@/utils/auth'
const router = useRouter()
const appStore = useAppStore()
const proxy: any = getCurrentInstance()?.proxy
const { sys_normal_disable, sys_user_sex } = proxy?.useDict("sys_normal_disable", "sys_user_sex");
</script>

<style scoped></style>