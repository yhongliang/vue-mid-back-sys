import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
    state: () => ({
        token: "",
        userInfo: {},
    }),
    actions: {
        setToken(token: string) {
            this.token = token;
            localStorage.setItem("token", token);
        },
        setUserInfo(userInfo: object) {
            this.userInfo = userInfo;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        clearUserInfo() {
            this.token = "";
            this.userInfo = {};
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
        },
        getToken() {
            return this.token || localStorage.getItem("token");
        },
        getUserInfo() {
            return this.userInfo || JSON.parse(localStorage.getItem("userInfo") || "{}");
        }
    }
});