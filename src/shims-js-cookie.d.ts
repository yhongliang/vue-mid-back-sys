declare module 'js-cookie' {
    export interface CookieAttributes {
        expires?: number | Date
        path?: string
        domain?: string
        secure?: boolean
        sameSite?: 'strict' | 'lax' | 'none'
    }

    export default class Cookies {
        static set(key: string, value: string, options?: CookieAttributes): void
        static get(key: string): string | undefined
        static remove(key: string, options?: CookieAttributes): void
    }
}