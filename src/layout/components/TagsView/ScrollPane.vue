<template>
    <div>
        <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container" @wheel.prevent="handleScroll">
            <slot />
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
const handleScroll = () => {

}
</script>

<style lang="scss" scoped>
.scroll-container {
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
}
</style>