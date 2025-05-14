<template>
    <div id="tags-view-container" class="tags-view-container">
        <scroll-pane ref="scrollPaneRef" class="tags-view-wrapper" @scroll="handleScroll">
            <router-link v-for="tag in visitedViews" :key="tag.path" :data-path="tag.path"
                :class="isActive(tag) ? 'active' : ''"
                :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" class="tags-view-item"
                :style="activeStyle(tag)" @click.middle="!isAffix(tag) ? closeSelectedTag(tag) : ''"
                @contextmenu.prevent="openMenu(tag, $event)">
                {{ tag.title }}
                <span v-if="!isAffix(tag)" @click.prevent.stop="closeSelectedTag(tag)">
                    <close class="el-icon-close" style="width: 1em; height: 1em;vertical-align: middle;" />
                </span>
            </router-link>
        </scroll-pane>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import ScrollPane from './ScrollPane.vue';

const route = useRoute();
// const router = useRouter();
const visible = ref<boolean>(false);
const visitedViews = ref<any>([])
const isActive = (tag: any) => {
    return route.path === tag.path;
}
const openMenu = (tag: any, event: MouseEvent) => {

}
const closeMenu = () => {
    visible.value = false;
}
const handleScroll = () => {
    closeMenu();   // Handle scroll event
}
</script>

<style lang="scss" scoped>
.tags-view-container {
    height: 34px;
    width: 100%;
    border-bottom: 1px solid #e4e7ed;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
}
</style>