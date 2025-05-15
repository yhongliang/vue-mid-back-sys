const useDictStore = defineStore('dict', {
    state: () => ({
        dict: new Map<string, any>(),
    }),
    actions: {
        // 获取字典
        getDict(_key: string) {
            if (!_key) return null;
            if (this.dict.has(_key)) {
                return this.dict.get(_key);
            }
            return null;
        },
        // 设置字典
        setDict(_key: string, _value: any) {
            if (!_key) return;
            // 有的话就更新没有就新增
            this.dict.set(_key, _value);
        },
        // 删除字典
        removeDict(_key: string) {
            if (!_key) return;
            this.dict.delete(_key);
        },
        // 清空字典
        clearDict() {
            this.dict.clear();
        },
    }
});

export default useDictStore;