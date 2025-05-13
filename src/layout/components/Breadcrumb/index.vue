<template>
    <div>
        <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index" :to="item.path">
                    <span v-if="item.redirect === 'noRedirect' || index == breadcrumbs.length - 1"
                        class="no-redirect">{{
                            item.meta.title }}</span>
                    <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const breadcrumbs = computed(() => {
    return route.matched.filter(item => item.meta?.title)
})
const handleLink = (item: any) => {
    const { redirect, path } = item
    if (redirect) {
        router.push(redirect)
        return
    }
    router.push(path)
}
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    // line-height: 50px;
    // margin-left: 8px;

    .no-redirect {
        color: #97a8be;
        cursor: text;
    }
}
</style>