import { defineStore } from 'pinia';
import defaultSettings from '@/settings';
import { useDark, useToggle } from '@vueuse/core';
import { useDynamicTitle } from '@/utils/useDynamicTitle'

const { sideTheme, showSettings, topNav, tagsView, fixedHeader, sidebarLogo, dynamicTitle } = defaultSettings

const isDark = useDark()
const toggleDark = useToggle(isDark)

const storageSetting = JSON.parse(localStorage.getItem('layout-setting') || '{}')

interface SettingsState {
    title: string;
    theme: string;
    sideTheme: string;
    showSettings: boolean;
    topNav: boolean;
    tagsView: boolean;
    fixedHeader: boolean;
    sidebarLogo: boolean;
    dynamicTitle: boolean;
    isDark: boolean;
}

const useSettingsStore = defineStore('setting', {
    state: (): SettingsState => ({
        title: '',
        theme: storageSetting.theme || '#409EFF',
        sideTheme: storageSetting.sideTheme || sideTheme,
        showSettings: showSettings,
        topNav: storageSetting.topNav === undefined ? topNav : storageSetting.topNav,
        tagsView: storageSetting.tagsView === undefined ? tagsView : storageSetting.tagsView,
        fixedHeader: storageSetting.fixedHeader === undefined ? fixedHeader : storageSetting.fixedHeader,
        sidebarLogo: storageSetting.sidebarLogo === undefined ? sidebarLogo : storageSetting.sidebarLogo,
        dynamicTitle: storageSetting.dynamicTitle === undefined ? dynamicTitle : storageSetting.dynamicTitle,
        isDark: isDark.value
    }),
    actions: {
        // 修改布局设置
        changeSetting(data: { key: keyof SettingsState; value: any }) {
            const { key, value } = data;
            if (this.hasOwnProperty(key)) {
                (this[key] as typeof value) = value;
            }
        },
        // 设置网页标题
        setTitle(title: string) {
            this.title = title;
            useDynamicTitle();
        },
        // 切换暗黑模式
        toggleTheme() {
            this.isDark = !this.isDark;
            toggleDark();
        }
    }
});

export default useSettingsStore