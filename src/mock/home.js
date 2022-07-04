import Mock from "mockjs";

//获得一个随机的id值
// function getId() {
//   return Math.random().toString().substr(3, 5) + new Date().getTime();
// }
// Mock.setup({
//   timeout: 20000,
// });

//模拟首页全局信息
Mock.mock("/api/home", "get", {
  code: 0,
  msg: "",
  data: {
    logoImg: Mock.Random.image("120x60", "#000000", "#ffffff", "png", "logo"),
    pdyImg: Mock.Random.image("500x500"),
    nav: [
      { name: "首页", rv: "/home" },
      { name: "文章", rv: "/article" },
      { name: "padagogy", rv: "/padagogy" },
      { name: "工具", rv: "/tool" },
      { name: "投稿", rv: "/contrib" },
      { name: "关于", rv: "/about" },
      { name: "联系", rv: "/contact" },
    ],
  },
});

//模拟热门文章数据
// Mock.mock("/api/hotarti", {
//   code: 0,
//   msg: "",
//   "data|7": [
//     {
//       id: "@guid",
//       thumb: Mock.Random.image("300x150"),
//       title: "@ctitle",
//       description: "@cparagraph",
//       createDate: "@date",
//     },
//   ],
// });

//模拟热门app数据
// Mock.mock("/api/hotapp", {
//   code: 0,
//   msg: "",
//   "data|9": [
//     {
//       id: "@guid",
//       name: "@ctitle",
//       img: Mock.Random.image("250x250"),
//       size: "@natural(10, 500)" + "KB",
//       amount: "@natural(100, 1000)",
//       evaluate: "@natural(1, 5)",
//     },
//   ],
// });
