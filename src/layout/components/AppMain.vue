<template>
    <div>
        <section class="app-main">
            <router-view v-slot="{ Component, route }">
                <transition name="fade-transform" mode="out-in">
                    <component v-if="!route.meta.link" :is="Component" :key="route.path" />
                </transition>
            </router-view>
        </section>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.app-main {
    min-height: calc(100vh - 50px);
    width: 100%;
    overflow: hidden;
    position: relative;
    padding-top: 10px;
    background-color: #ffffff;
}
</style>