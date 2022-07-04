import Mock from "mockjs";

Mock.mock("/api/addContrib", "post", {
  code: 0,
  msg: "",
  data: {},
});
