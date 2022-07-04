import request from "./request";

// 获取博app列表
export async function getAppList(page = 1, limit = 16, data = "all") {
  const a = await request.get("/api/api/fenlei_check.php", {
    params: {
      page,
      limit,
      data,
    },
  });
  console.log(a);
  return a;
}

//获取多级菜单
export async function getSelector() {
  const a = await request.get("/api/api/fenlei.php");
  // console.log(a);
  return a;
}

//获取单个app
export async function getApp(id) {
  return request({
    url: "/api/api/detail_app.php",
    method: "get",
    params: {
      id,
    },
  });
}
