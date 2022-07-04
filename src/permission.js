import router from "./router";
import store from "./store";
import { Message } from "element-ui";

router.beforeEach((to, from, next) => {
  //   console.log(store.state.user.user);
  //   if(to.name == 'In')
  if (to.path === "/contrib" || to.path.match(/^\/personal/)) {
    if (store.state.user.user) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else if (to.path === "/login") {
    if (store.state.user.user) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else {
    next();
  }
});
