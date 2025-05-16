<template>
    <div class="app-container">
        <el-row :gutter="20">
            <splitpanes :horizontal="appStore.device === 'mobile'" class="default-theme">
                <pane size="16">
                    <el-col>
                        <div class="head-container">
                            <el-input v-model="deptName" placeholder="请输入部门名称" clearable prefix-icon="Search"
                                style="margin-bottom: 20px" />
                        </div>
                        <div class="head-container">
                            <el-tree :data="deptOptions" :props="{ label: 'label', children: 'children' }"
                                :expand-on-click-node="false" :filter-node-method="filterNode" ref="deptTreeRef"
                                node-key="id" highlight-current default-expand-all @node-click="handleNodeClick" />
                        </div>
                    </el-col>
                </pane>
                <pane size="84">

                </pane>
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

const deptName = ref("");
const deptOptions = ref(undefined);
const filterNode = (value: any, data: any) => {
    if (!value) return true;
    return data.label.indexOf(value) !== -1;
};
// 节点单击事件
const handleNodeClick = () => {

}
</script>

<style scoped></style>