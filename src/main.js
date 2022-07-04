import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/main.less";
import "@/mock";
import "@toast-ui/editor/dist/toastui-editor.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/permission.js";

Vue.use(ElementUI);

store.dispatch("main/fetchMain");
if (localStorage.length) {
  store.commit("user/setUser", JSON.parse(localStorage.getItem("user")));
}
// store.dispatch("user/fetchUser" )

//全局注册自定义事件
import vLoading from "./directives/loading";
Vue.directive("loading", vLoading);

Vue.config.productionTip = false;
//事件总线
Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
