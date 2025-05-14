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
</script>

<style scoped></style>