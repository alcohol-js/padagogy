import request from "./request";

//用户登录
export async function userLogin(data) {
  const a = await request({
    url: "/api/api/login.php",
    method: "post",
    data,
  });
  console.log(a);
  return a;
}
