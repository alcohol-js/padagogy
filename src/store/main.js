import { getHome } from "@/api/home.js";

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: "",
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async fetchMain(ctx) {
      // console.log("a")
      if (ctx.state.data) return;
      ctx.commit("setLoading", true);
      const resp = await getHome();
      ctx.commit("setData", resp);
      ctx.commit("setLoading", false);
    },
  },
};
