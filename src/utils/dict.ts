import useDictStore from '@/stores/dict'
import { getDicts } from '@/api/system/dict' // 假设这是你的字典 API

interface DictItem {
    label: string
    value: string | number
    elTagType?: string  // 用于 Element Plus 标签类型
    elTagClass?: string // 自定义 CSS 类
}

/**
 * 获取字典数据（支持多个字典类型）
 * @param dictTypes 字典类型数组
 * @returns 响应式字典数据
 */
export function useDict<T extends string[]>(...dictTypes: T) {
    const res = ref<{ [K in T[number]]: DictItem[] }>({} as any)
    const dictStore = useDictStore()

    dictTypes.forEach((dictType) => {
        // 1. 初始化返回值
        res.value[dictType] = []

        // 2. 检查缓存
        const cachedData = dictStore.getDict(dictType)
        if (cachedData) {
            res.value[dictType] = cachedData
            return
        }

        // 3. 无缓存则请求 API
        getDicts(dictType).then((resp: any) => {
            const formattedData = resp.data.map((item: any) => ({
                label: item.dictLabel,
                value: item.dictValue,
                elTagType: item.listClass,
                elTagClass: item.cssClass,
            }))

            // 4. 更新响应式数据和缓存
            res.value[dictType] = formattedData
            dictStore.setDict(dictType, formattedData)
        })
    })

    return toRefs(res.value)
}