import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Article from "@/views/Article";
import Padagogy from "@/views/Padagogy";
import Tool from "@/views/Tool";
import Contrib from "@/views/Contrib";
import About from "@/views/About";
import Contact from "@/views/Contact";
import Layout from "@/Layout";
import Login from "@/views/Login";
import Personal from "@/views/Personal";
import ArticleDetail from "@/views/Article/ArticleDetail";
import PadagogyDetail from "@/views/Padagogy/PadagogyDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "article",
        name: "Article",
        component: Article,
      },
      {
        path: "article/:id",
        name: "ArticleDetail",
        component: ArticleDetail,
      },
      {
        path: "padagogy",
        name: "Padagogy",
        component: Padagogy,
      },
      {
        path: "padagogy/:id",
        name: "PadagogyDetail",
        component: PadagogyDetail,
      },
      {
        path: "tool",
        name: "Tool",
        component: Tool,
      },
      {
        path: "contrib",
        name: "Contrib",
        component: Contrib,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "personal",
        name: "Personal",
        redirect: "personal/information",
        component: Personal,
        children: [
          {
            path: "information",
            name: "Information",
            component: () => import("@/views/Personal/views/Information"),
          },
          {
            path: "mycontrib",
            name: "MyContrib",
            component: () => import("@/views/Personal/views/MyContrib"),
          },

          {
            path: "collect",
            name: "Collect",
            component: () => import("@/views/Personal/views/Collect"),
          },
        ],
      },
    ],
  },
  // {
  //   path: "/article",
  //   name: "Article",
  //   component: Article,
  // },
  // {
  //   path: "/padagogy",
  //   name: "Padagogy",
  //   component: Padagogy,
  // },
  // {
  //   path: "/tool",
  //   name: "Tool",
  //   component: Tool,
  // },
  // {
  //   path: "/contrib",
  //   name: "Contrib",
  //   component: Contrib,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact,
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
