import request from "./request";

//请求主页全局数据
export async function getHome() {
  return await request.get("/api/home");
}

//请求热门文章数据
export async function getHotArti() {
  return await request.get("/api/api/hotarti.php");
}

//请求热门app数据
export async function getHotApp() {
  return await request.get("/api/api/hotapp.php");
}
