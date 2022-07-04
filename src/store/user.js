import { userLogin } from "@/api/user";

export default {
  namespaced: true,
  state: {
    isLogin: false,
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLogin(state, payLoad) {
      state.isLogin = payLoad;
    },
  },
  actions: {
    async fetchUser(ctx, data) {
      // console.log("1");
      // if (ctx.user) return;
      ctx.commit("setLogin", true);
      const resp = await userLogin(data);
      // console.log(resp);
      localStorage.setItem("user", JSON.stringify(resp));
      ctx.commit("setUser", resp);
      ctx.commit("setLogin", false);
    },
  },
};
