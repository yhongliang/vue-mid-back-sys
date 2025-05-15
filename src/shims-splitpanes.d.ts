declare module 'splitpanes' {
    import { DefineComponent } from 'vue'
    export const Splitpanes: DefineComponent<{
        horizontal?: boolean
        pushOtherPanes?: boolean
        dblClickSplitter?: boolean
    }>
    export const Pane: DefineComponent<{
        size?: number | string
        minSize?: number | string
        maxSize?: number | string
    }>
}